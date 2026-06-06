const Stats = (() => {
  function record(user, idpregunta, correcta, elegida) {
    const acierto = elegida === correcta;

    // global
    const g = State.getGlobal(user);
    g.total_respondidas += 1;
    if (acierto) g.total_aciertos += 1; else g.total_fallos += 1;
    State.setGlobal(user, g);

    // per question
    const pp = State.getPorPregunta(user);
    const rec = pp[idpregunta] || { aciertos: 0, fallos: 0, ultimo_resultado: null };
    if (acierto) rec.aciertos += 1; else rec.fallos += 1;
    rec.ultimo_resultado = acierto ? 'acierto' : 'fallo';
    pp[idpregunta] = rec;
    State.setPorPregunta(user, pp);

    return acierto;
  }

  function getGlobal(user) { return State.getGlobal(user); }

  function getRankingFallos(user, questions) {
    const pp = State.getPorPregunta(user);
    const arr = questions.map(q => {
      const r = pp[q.idpregunta] || { fallos: 0, aciertos: 0 };
      return { idpregunta: q.idpregunta, fallos: r.fallos, aciertos: r.aciertos, ratio: r.fallos - r.aciertos };
    });
    arr.sort((a, b) => b.ratio - a.ratio || b.fallos - a.fallos);
    return arr;
  }

  return { record, getGlobal, getRankingFallos };
})();
