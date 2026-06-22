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

  function exportData() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && (k.startsWith('quiz_') || k === 'quiz_last_user')) {
        data[k] = localStorage.getItem(k);
      }
    }
    return data;
  }

  function importData(data) {
    // Merge users
    const existingUsers = list();
    const importedUsers = JSON.parse(data['quiz_users'] || '[]');
    const mergedUsers = [...new Set([...existingUsers, ...importedUsers])];
    save(mergedUsers);

    for (const [key, value] of Object.entries(data)) {
      if (key === 'quiz_users' || key === 'quiz_last_user') continue;
      const existing = localStorage.getItem(key);
      if (!existing) {
        localStorage.setItem(key, value);
        continue;
      }
      try {
        const existingObj = JSON.parse(existing);
        const importedObj = JSON.parse(value);
        const merged = mergeKey(existingObj, importedObj, key);
        localStorage.setItem(key, JSON.stringify(merged));
      } catch {
        localStorage.setItem(key, value);
      }
    }
  }

  function mergeKey(existing, imported, key) {
    if (key.endsWith('_global')) {
      for (const [quiz, stats] of Object.entries(imported)) {
        if (!existing[quiz]) existing[quiz] = stats;
        else {
          existing[quiz].total_respondidas += stats.total_respondidas;
          existing[quiz].total_aciertos += stats.total_aciertos;
          existing[quiz].total_fallos += stats.total_fallos;
        }
      }
      return existing;
    }
    if (key.endsWith('_por_pregunta')) {
      for (const [quiz, questions] of Object.entries(imported)) {
        if (!existing[quiz]) existing[quiz] = questions;
        else {
          for (const [qid, stats] of Object.entries(questions)) {
            if (!existing[quiz][qid]) existing[quiz][qid] = stats;
            else {
              existing[quiz][qid].aciertos += stats.aciertos;
              existing[quiz][qid].fallos += stats.fallos;
              existing[quiz][qid].ultimo_resultado = stats.ultimo_resultado;
            }
          }
        }
      }
      return existing;
    }
    if (key.endsWith('_highlights')) {
      for (const [quiz, questions] of Object.entries(imported)) {
        if (!existing[quiz]) existing[quiz] = questions;
        else {
          for (const [qid, letters] of Object.entries(questions)) {
            if (!existing[quiz][qid]) existing[quiz][qid] = letters;
            else {
              for (const [letter, texts] of Object.entries(letters)) {
                if (!existing[quiz][qid][letter]) existing[quiz][qid][letter] = texts;
                else {
                  existing[quiz][qid][letter] = [...new Set([...existing[quiz][qid][letter], ...texts])];
                }
              }
            }
          }
        }
      }
      return existing;
    }
    // For other keys (collapsed, last_ranges, session): overwrite
    return imported;
  }

  return { list, create, remove, getLast, setLast, ensureDefault, exportData, importData };
})();
