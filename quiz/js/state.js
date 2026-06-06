const State = (() => {
  function ns(user) { return `quiz_user_${user}_`; }

  function get(user, key, def) {
    try {
      const raw = localStorage.getItem(ns(user) + key);
      return raw !== null ? JSON.parse(raw) : def;
    } catch { return def; }
  }

  function set(user, key, value) {
    localStorage.setItem(ns(user) + key, JSON.stringify(value));
  }

  function getGlobal(user) {
    return get(user, 'global', { total_respondidas: 0, total_aciertos: 0, total_fallos: 0 });
  }
  function setGlobal(user, data) { set(user, 'global', data); }

  function getPorPregunta(user) {
    return get(user, 'por_pregunta', {});
  }
  function setPorPregunta(user, data) { set(user, 'por_pregunta', data); }

  return { get, set, getGlobal, setGlobal, getPorPregunta, setPorPregunta };
})();
