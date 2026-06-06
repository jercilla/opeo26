const App = (() => {
  let currentUser = null;
  let selectedQuizSlug = null;

  const screens = {
    users: document.getElementById('screen-users'),
    menu: document.getElementById('screen-menu'),
    session: document.getElementById('screen-session'),
    quiz: document.getElementById('screen-quiz'),
    results: document.getElementById('screen-results'),
  };

  function show(name) {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    screens[name].classList.remove('hidden');
  }

  function renderUsers() {
    const list = document.getElementById('users-list');
    const users = Users.list();
    list.innerHTML = '';
    if (users.length === 0) {
      list.innerHTML = '<p style="color:#64748b;text-align:center;">No hay perfiles. Crea uno abajo.</p>';
      return;
    }
    users.forEach(u => {
      const div = document.createElement('div');
      div.className = 'user-item' + (u === currentUser ? ' active' : '');
      div.innerHTML = `<span class="user-item-name">${escapeHtml(u)}</span><span class="user-item-action">${u === currentUser ? 'activo' : 'usar'}</span>`;
      div.addEventListener('click', () => {
        currentUser = u;
        Users.setLast(u);
        goMenu();
      });
      list.appendChild(div);
    });
  }

  function getCollapsed() {
    try {
      return JSON.parse(localStorage.getItem(`quiz_user_${currentUser}_collapsed`)) || [];
    } catch { return []; }
  }
  function setCollapsed(slugs) {
    localStorage.setItem(`quiz_user_${currentUser}_collapsed`, JSON.stringify(slugs));
  }
  function toggleCollapsed(slug) {
    const arr = getCollapsed();
    const idx = arr.indexOf(slug);
    if (idx >= 0) arr.splice(idx, 1); else arr.push(slug);
    setCollapsed(arr);
  }

  function renderQuizzes() {
    const container = document.getElementById('quizzes-list');
    container.innerHTML = '';
    const collapsed = getCollapsed();
    Object.entries(QUIZZES).forEach(([slug, quiz]) => {
      const g = Stats.getGlobal(currentUser, slug);
      const isCollapsed = collapsed.includes(slug);
      const card = document.createElement('div');
      card.className = 'quiz-card' + (isCollapsed ? ' collapsed' : '');
      card.dataset.slug = slug;
      card.innerHTML = `
        <div class="quiz-card-header">
          <div>
            <h2>${escapeHtml(quiz.label)}</h2>
            <p class="quiz-meta">${escapeHtml(quiz.meta)}</p>
          </div>
          <span class="quiz-card-toggle">&#9662;</span>
        </div>
        <div class="quiz-card-body">
          <div class="stats-preview">
            <div class="stat"><span class="stat-value">${g.total_respondidas}</span><span class="stat-label">Respondidas</span></div>
            <div class="stat"><span class="stat-value">${g.total_aciertos}</span><span class="stat-label">Aciertos</span></div>
            <div class="stat"><span class="stat-value">${g.total_fallos}</span><span class="stat-label">Fallos</span></div>
          </div>
          <button class="btn btn-primary btn-block btn-open-session" data-slug="${escapeHtml(slug)}">Empezar</button>
        </div>
      `;
      container.appendChild(card);
    });

    container.querySelectorAll('.quiz-card-header').forEach(header => {
      header.addEventListener('click', () => {
        const card = header.closest('.quiz-card');
        const slug = card.dataset.slug;
        card.classList.toggle('collapsed');
        toggleCollapsed(slug);
      });
    });

    container.querySelectorAll('.btn-open-session').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        selectedQuizSlug = btn.dataset.slug;
        goSession(selectedQuizSlug);
      });
    });
  }

  function goSession(slug) {
    const quiz = QUIZZES[slug];
    document.getElementById('session-quiz-title').textContent = quiz.label;

    // Check saved session
    const saved = State.getSession(currentUser, slug);
    const resumeBox = document.getElementById('session-resume-box');
    if (saved && saved.order && saved.idx < saved.order.length) {
      document.getElementById('session-resume-text').textContent =
        `pregunta ${saved.idx + 1} de ${saved.order.length}`;
      resumeBox.classList.remove('hidden');
    } else {
      resumeBox.classList.add('hidden');
    }

    // Reset start num
    document.getElementById('start-num').value = 1;
    document.getElementById('start-num').max = quiz.questions.length;

    show('session');
  }

  function startSession(resume) {
    const mode = document.querySelector('input[name="session-mode"]:checked').value;
    const startNum = parseInt(document.getElementById('start-num').value, 10) || 1;
    Quiz.start({ user: currentUser, slug: selectedQuizSlug, mode, startNum, resume });
    show('quiz');
  }

  function goUsers() {
    renderUsers();
    show('users');
  }

  function goMenu() {
    currentUser = Users.ensureDefault();
    document.getElementById('current-user-name').textContent = currentUser;
    renderQuizzes();
    show('menu');
  }

  function init() {
    currentUser = Users.ensureDefault();
    goMenu();

    document.getElementById('btn-switch-user').addEventListener('click', goUsers);
    document.getElementById('btn-back-from-users').addEventListener('click', goMenu);

    document.getElementById('new-user-form').addEventListener('submit', e => {
      e.preventDefault();
      const input = document.getElementById('new-user-name');
      const res = Users.create(input.value);
      if (res.ok) {
        input.value = '';
        currentUser = res.user;
        Users.setLast(res.user);
        goMenu();
      } else {
        alert(res.error);
      }
    });

    document.getElementById('btn-clear-data').addEventListener('click', () => {
      if (!confirm('¿Seguro? Se borraran TODOS los perfiles, estadisticas y sesiones guardadas.')) return;
      // Remove all quiz-related keys
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (k && (k.startsWith('quiz_') || k === 'quiz_last_user')) {
          localStorage.removeItem(k);
        }
      }
      currentUser = null;
      Users.ensureDefault();
      renderUsers();
    });

    document.getElementById('btn-back-from-session').addEventListener('click', goMenu);
    document.getElementById('btn-start-session').addEventListener('click', () => startSession(false));
    document.getElementById('btn-continue-session').addEventListener('click', () => startSession(true));

    document.getElementById('btn-validate').addEventListener('click', () => Quiz.validate());
    document.getElementById('btn-next').addEventListener('click', () => Quiz.next());
    document.getElementById('btn-quit-quiz').addEventListener('click', () => {
      goMenu();
    });
    document.getElementById('btn-back-menu').addEventListener('click', () => {
      goMenu();
    });

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  return { init };
})();

window.addEventListener('DOMContentLoaded', App.init);
