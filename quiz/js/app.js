const App = (() => {
  let currentUser = null;

  const screens = {
    users: document.getElementById('screen-users'),
    menu: document.getElementById('screen-menu'),
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

  function renderQuizzes() {
    const container = document.getElementById('quizzes-list');
    container.innerHTML = '';
    Object.entries(QUIZZES).forEach(([slug, quiz]) => {
      const g = Stats.getGlobal(currentUser, slug);
      const card = document.createElement('div');
      card.className = 'quiz-card';
      card.innerHTML = `
        <h2>${escapeHtml(quiz.label)}</h2>
        <p class="quiz-meta">${escapeHtml(quiz.meta)}</p>
        <div class="stats-preview">
          <div class="stat"><span class="stat-value">${g.total_respondidas}</span><span class="stat-label">Respondidas</span></div>
          <div class="stat"><span class="stat-value">${g.total_aciertos}</span><span class="stat-label">Aciertos</span></div>
          <div class="stat"><span class="stat-value">${g.total_fallos}</span><span class="stat-label">Fallos</span></div>
        </div>
        <button class="btn btn-primary btn-block btn-start-quiz" data-slug="${escapeHtml(slug)}">Empezar</button>
      `;
      container.appendChild(card);
    });

    container.querySelectorAll('.btn-start-quiz').forEach(btn => {
      btn.addEventListener('click', () => {
        const slug = btn.dataset.slug;
        const mode = document.querySelector('input[name="mode"]:checked').value;
        Quiz.start(currentUser, slug, mode);
        show('quiz');
      });
    });
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

    document.getElementById('btn-validate').addEventListener('click', () => Quiz.validate());
    document.getElementById('btn-next').addEventListener('click', () => Quiz.next());
    document.getElementById('btn-quit-quiz').addEventListener('click', () => {
      if (confirm('Salir del quiz? El progreso de esta sesion no se guardara.')) {
        goMenu();
      }
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
