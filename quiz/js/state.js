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

  // Lista de repaso ("Solo dificiles"): { [quizSlug]: { [idpregunta]: true } }.
  // Se rellena al fallar o marcar "me cuesta"; editable a mano.
  function getRepaso(user, quizSlug) {
    const all = get(user, 'repaso', {});
    return all[quizSlug] || {};
  }
  function setRepaso(user, quizSlug, data) {
    const all = get(user, 'repaso', {});
    all[quizSlug] = data;
    set(user, 'repaso', all);
  }
  function addRepaso(user, quizSlug, idpregunta) {
    const all = get(user, 'repaso', {});
    if (!all[quizSlug]) all[quizSlug] = {};
    all[quizSlug][idpregunta] = true;
    set(user, 'repaso', all);
  }
  function removeRepaso(user, quizSlug, idpregunta) {
    const all = get(user, 'repaso', {});
    if (all[quizSlug]) {
      delete all[quizSlug][idpregunta];
      set(user, 'repaso', all);
    }
  }
  function hasRepaso(user, quizSlug, idpregunta) {
    const all = get(user, 'repaso', {});
    return !!(all[quizSlug] && all[quizSlug][idpregunta]);
  }
  // true si la lista del slug ya se inicializo alguna vez (aunque este vacia):
  // distingue "nunca sembrada" de "vaciada a mano" para la migracion de la 1a vez.
  function repasoInitialized(user, quizSlug) {
    return Object.prototype.hasOwnProperty.call(get(user, 'repaso', {}), quizSlug);
  }

  function getSession(user, quizSlug) {
    const all = get(user, 'session', {});
    return all[quizSlug] || null;
  }
  function setSession(user, quizSlug, data) {
    const all = get(user, 'session', {});
    all[quizSlug] = data;
    set(user, 'session', all);
  }
  function clearSession(user, quizSlug) {
    const all = get(user, 'session', {});
    delete all[quizSlug];
    set(user, 'session', all);
  }

  function getHighlights(user, quizSlug) {
    const all = get(user, 'highlights', {});
    return all[quizSlug] || {};
  }
  function setHighlights(user, quizSlug, data) {
    const all = get(user, 'highlights', {});
    all[quizSlug] = data;
    set(user, 'highlights', all);
  }
  function addHighlight(user, quizSlug, idpregunta, letter, text) {
    const all = get(user, 'highlights', {});
    if (!all[quizSlug]) all[quizSlug] = {};
    if (!all[quizSlug][idpregunta]) all[quizSlug][idpregunta] = {};
    if (!all[quizSlug][idpregunta][letter]) all[quizSlug][idpregunta][letter] = [];
    if (!all[quizSlug][idpregunta][letter].includes(text)) {
      all[quizSlug][idpregunta][letter].push(text);
      set(user, 'highlights', all);
    }
  }
  function removeHighlight(user, quizSlug, idpregunta, letter, text) {
    const all = get(user, 'highlights', {});
    if (!all[quizSlug] || !all[quizSlug][idpregunta] || !all[quizSlug][idpregunta][letter]) return;
    const arr = all[quizSlug][idpregunta][letter];
    const idx = arr.indexOf(text);
    if (idx >= 0) {
      arr.splice(idx, 1);
      if (arr.length === 0) delete all[quizSlug][idpregunta][letter];
      set(user, 'highlights', all);
      logDelete(user, quizSlug, idpregunta, letter, text);
    }
  }

  function logDelete(user, quizSlug, idpregunta, letter, text) {
    const all = get(user, 'deleted_highlights', {});
    if (!all[quizSlug]) all[quizSlug] = {};
    if (!all[quizSlug][idpregunta]) all[quizSlug][idpregunta] = {};
    if (!all[quizSlug][idpregunta][letter]) all[quizSlug][idpregunta][letter] = [];
    if (!all[quizSlug][idpregunta][letter].includes(text)) {
      all[quizSlug][idpregunta][letter].push(text);
      set(user, 'deleted_highlights', all);
    }
  }

  function getDeletedHighlights(user, quizSlug) {
    const all = get(user, 'deleted_highlights', {});
    return all[quizSlug] || {};
  }

  return { get, set, getGlobal, setGlobal, getPorPregunta, setPorPregunta, getRepaso, setRepaso, addRepaso, removeRepaso, hasRepaso, repasoInitialized, getSession, setSession, clearSession, getHighlights, setHighlights, addHighlight, removeHighlight, logDelete, getDeletedHighlights };
})();
