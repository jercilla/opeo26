const Users = (() => {
  const KEY_USERS = 'quiz_users';
  const KEY_LAST = 'quiz_last_user';

  function list() {
    try { return JSON.parse(localStorage.getItem(KEY_USERS)) || []; } catch { return []; }
  }
  function save(users) { localStorage.setItem(KEY_USERS, JSON.stringify(users)); }

  function create(name) {
    const n = name.trim();
    if (!n) return { ok: false, error: 'El nombre no puede estar vacio' };
    const users = list();
    if (users.includes(n)) return { ok: false, error: 'Ya existe un perfil con ese nombre' };
    users.push(n);
    save(users);
    return { ok: true, user: n };
  }

  function remove(name) {
    const users = list().filter(u => u !== name);
    save(users);
    // also wipe their stats keys
    const prefix = `quiz_user_${name}_`;
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k && k.startsWith(prefix)) localStorage.removeItem(k);
    }
    const last = getLast();
    if (last === name) {
      localStorage.removeItem(KEY_LAST);
    }
  }

  function getLast() { return localStorage.getItem(KEY_LAST) || null; }
  function setLast(name) { localStorage.setItem(KEY_LAST, name); }

  function ensureDefault() {
    let users = list();
    if (users.length === 0) {
      create('User 1');
      users = list();
    }
    let last = getLast();
    if (!last || !users.includes(last)) {
      last = users[0];
      setLast(last);
    }
    return last;
  }

  return { list, create, remove, getLast, setLast, ensureDefault };
})();
