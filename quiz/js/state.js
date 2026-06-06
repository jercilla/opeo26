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

  function getGlobal(user, quizSlug) {
    const all = get(user, 'global', {});
    return all[quizSlug] || { total_respondidas: 0, total_aciertos: 0, total_fallos: 0 };
  }
  function setGlobal(user, quizSlug, data) {
    const all = get(user, 'global', {});
    all[quizSlug] = data;
    set(user, 'global', all);
  }

  function getPorPregunta(user, quizSlug) {
    const all = get(user, 'por_pregunta', {});
    return all[quizSlug] || {};
  }
  function setPorPregunta(user, quizSlug, data) {
    const all = get(user, 'por_pregunta', {});
    all[quizSlug] = data;
    set(user, 'por_pregunta', all);
  }

  return { get, set, getGlobal, setGlobal, getPorPregunta, setPorPregunta };
})();
