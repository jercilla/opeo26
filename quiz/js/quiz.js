const Quiz = (() => {
  let user = null;
  let quizSlug = null;
  let questions = [];
  let order = [];
  let idx = 0;
  let session = { aciertos: 0, fallos: 0 };
  let current = null;
  let validated = false;

  const els = {
    progress: document.getElementById('quiz-progress'),
    score: document.getElementById('quiz-score'),
    label: document.getElementById('quiz-label'),
    text: document.getElementById('question-text'),
    options: document.getElementById('options-list'),
    validate: document.getElementById('btn-validate'),
    next: document.getElementById('btn-next'),
    feedback: document.getElementById('feedback'),
    feedbackText: document.getElementById('feedback-text'),
  };

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function start(config) {
    user = config.user;
    quizSlug = config.slug;
    questions = QUIZZES[quizSlug].questions;
    els.label.textContent = QUIZZES[quizSlug].label;

    if (config.resume) {
      const saved = State.getSession(user, quizSlug);
      if (saved) {
        order = saved.order;
        idx = saved.idx;
        session = saved.session || { aciertos: 0, fallos: 0 };
        renderQuestion();
        return;
      }
    }

    State.clearSession(user, quizSlug);
    session = { aciertos: 0, fallos: 0 };

    if (config.mode === 'random') {
      const rStart = Math.max(0, (config.randStart || 1) - 1);
      const rEnd = Math.min(questions.length, config.randEnd || questions.length);
      let pool = questions.map((_, i) => i).slice(rStart, rEnd);
      // Descartar preguntas ya respondidas en este quiz por este usuario
      const pp = State.getPorPregunta(user, quizSlug);
      const answeredIds = new Set(Object.keys(pp).map(Number));
      pool = pool.filter(i => !answeredIds.has(questions[i].idpregunta));
      if (pool.length === 0) {
        pool = questions.map((_, i) => i).slice(rStart, rEnd);
      }
      order = shuffle(pool);
    } else {
      const sStart = Math.max(0, (config.seqStart || 1) - 1);
      const sEnd = Math.min(questions.length, config.seqEnd || questions.length);
      order = [];
      for (let i = sStart; i < sEnd; i++) order.push(i);
    }

    idx = 0;
    saveProgress();
    renderQuestion();
  }

  function saveProgress() {
    State.setSession(user, quizSlug, { order, idx, session });
  }

  function renderQuestion() {
    validated = false;
    current = questions[order[idx]];
    els.progress.textContent = `${idx + 1} / ${order.length}`;
    els.score.innerHTML = `&#9989; ${session.aciertos} - &#10060; ${session.fallos}`;
    els.text.textContent = current.pregunta;
    els.options.innerHTML = '';
    ['A','B','C','D'].forEach(letter => {
      const txt = current.opciones[letter];
      if (txt === undefined) return;
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.type = 'button';
      btn.dataset.letter = letter;
      const html = current.diffs && current.diffs[letter] ? current.diffs[letter] : escapeHtml(txt);
      btn.innerHTML = `<span class="option-letter">${letter}</span><span class="option-text">${html}</span>`;
      btn.addEventListener('click', () => selectOption(letter));
      els.options.appendChild(btn);
    });
    els.validate.classList.remove('hidden');
    els.validate.disabled = true;
    els.next.classList.add('hidden');
    els.feedback.classList.add('hidden');
    els.feedback.className = 'feedback hidden';
  }

  let selectedLetter = null;
  function selectOption(letter) {
    if (validated) return;
    selectedLetter = letter;
    Array.from(els.options.children).forEach(btn => {
      btn.classList.toggle('selected', btn.dataset.letter === letter);
    });
    els.validate.disabled = false;
  }

  function validate() {
    if (validated || !selectedLetter) return;
    validated = true;
    const correct = current.correcta;
    const acierto = selectedLetter === correct;
    if (acierto) session.aciertos++; else session.fallos++;

    Stats.record(user, quizSlug, current.idpregunta, correct, selectedLetter);
    saveProgress();

    Array.from(els.options.children).forEach(btn => {
      const l = btn.dataset.letter;
      btn.disabled = true;
      if (l === correct) btn.classList.add('correct');
      else if (l === selectedLetter && l !== correct) btn.classList.add('wrong');
    });

    els.validate.classList.add('hidden');
    els.next.classList.remove('hidden');
    els.feedback.classList.remove('hidden');
    els.feedback.className = 'feedback ' + (acierto ? 'correct' : 'wrong');
    els.feedbackText.textContent = acierto ? 'Correcto!' : `La correcta era la ${correct}`;
    els.score.innerHTML = `&#9989; ${session.aciertos} - &#10060; ${session.fallos}`;
  }

  function next() {
    idx++;
    selectedLetter = null;
    saveProgress();
    if (idx >= order.length) {
      State.clearSession(user, quizSlug);
      showResults();
      return;
    }
    renderQuestion();
  }

  function showResults() {
    document.getElementById('screen-quiz').classList.add('hidden');
    document.getElementById('screen-results').classList.remove('hidden');
    document.getElementById('result-aciertos').textContent = session.aciertos;
    document.getElementById('result-fallos').textContent = session.fallos;
    document.getElementById('result-detail').textContent = `${session.aciertos + session.fallos} de ${order.length} preguntas`;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  return { start, validate, next };
})();
