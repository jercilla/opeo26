const QUIZZES = {
  "general_A_B_C1": {
    "label": "General A, B y C1",
    "meta": "200 preguntas - Temario comun",
    "questions": [
      {
        "num": 1,
        "idpregunta": 1,
        "pregunta": "1.- De acuerdo con las normas generales de ordenación de las profesiones sanitarias, para poder ejercer una profesión sanitaria será requisito imprescindible:",
        "opciones": {
          "A": "La colegiación, cuando una ley estatal establezca esta obligación para el ejercicio de una profesión titulada o algunas actividades propias de ésta.",
          "B": "La inexistencia de inhabilitación o suspensión para el ejercicio profesional por sentencia judicial, aunque no sea firme, durante el periodo de tiempo que fije ésta; por resolución sancionadora impuesta por un colegio profesional sanitario, cuando una ley estatal establezca para este ejercicio la obligación de pertenecer al colegio profesional respectivo durante el periodo de tiempo que fije ésta; o por resolución administrativa sancionadora firme, durante el periodo de tiempo que fije ésta, cuando se ejerza la profesión en el ámbito de la asistencia sanitaria pública.",
          "C": "Tener suscrito y vigente un seguro de responsabilidad, un aval u otra garantía financiera, ya sean de protección personal o colectiva, que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas, causado con ocasión de la prestación de tal asistencia o servicios, cuando se ejerza la profesión en el ámbito de la asistencia sanitaria pública.",
          "D": "Todo lo anterior."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 2,
        "idpregunta": 2,
        "pregunta": "2.- Según lo establecido en la normativa vigente sobre ordenación de las profesiones sanitarias, para poder ejercer una profesión sanitaria:",
        "opciones": {
          "A": "Se ha de tener suscrito y vigente un seguro de responsabilidad que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas causado con ocasión de la prestación de tal asistencia o servicios cuando se ejerza la profesión en el ámbito de la asistencia sanitaria privada, no siendo suficiente un aval u otra garantía financiera de protección colectiva.",
          "B": "Se ha de tener suscrito y vigente un seguro de responsabilidad, un aval u otra garantía financiera, sean de protección personal o colectiva, que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas causado con ocasión de la prestación de tal asistencia o servicios cuando se ejerza la profesión en el ámbito de la asistencia sanitaria privada.",
          "C": "Se ha de tener suscrito y vigente un seguro de responsabilidad, un aval u otra garantía financiera, sean de protección personal o colectiva, que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas causado con ocasión de la prestación de tal asistencia o servicios cuando se ejerza la profesión en el ámbito de la asistencia sanitaria pública.",
          "D": "Todas las opciones son falsas."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Se ha de tener suscrito y vigente un seguro de responsabilidad que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas causado con ocasión de la prestación de tal asistencia o servicios cuando se ejerza la profesión en el ámbito de la asistencia sanitaria privada<span class=\"diff-highlight\">, no</span> <span class=\"diff-highlight\">siendo</span> <span class=\"diff-highlight\">suficiente</span> <span class=\"diff-highlight\">un</span> <span class=\"diff-highlight\">aval</span> <span class=\"diff-highlight\">u</span> <span class=\"diff-highlight\">otra</span> <span class=\"diff-highlight\">garantía</span> <span class=\"diff-highlight\">financiera</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">protección</span> <span class=\"diff-highlight\">colectiva</span>.",
          "B": "Se ha de tener suscrito y vigente un seguro de responsabilidad, un aval u otra garantía financiera, sean de protección personal o colectiva, que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas causado con ocasión de la prestación de tal asistencia o servicios cuando se ejerza la profesión en el ámbito de la asistencia sanitaria <span class=\"diff-highlight\">privada</span>.",
          "C": "Se ha de tener suscrito y vigente un seguro de responsabilidad, un aval u otra garantía financiera, sean de protección personal o colectiva, que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas causado con ocasión de la prestación de tal asistencia o servicios cuando se ejerza la profesión en el ámbito de la asistencia sanitaria <span class=\"diff-highlight\">pública</span>.",
          "D": "Todas las opciones son falsas."
        }
      },
      {
        "num": 3,
        "idpregunta": 3,
        "pregunta": "3.- Según la normativa vigente, el órgano encargado del Registro Estatal de Profesionales Sanitarios podrá (indíquese la que sea correcta):",
        "opciones": {
          "A": "Consultar los datos de carácter personal de la población profesional sanitaria contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) competencia del Ministerio del Interior, para contrastar la veracidad de la información que consta en el registro.",
          "B": "Consultar los datos de carácter personal de la población profesional sanitaria contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) competencia del Ministerio del Interior, para contrastar la veracidad de la información que consta en el registro, pero solo si la persona titular no se ha opuesto explícitamente.",
          "C": "Consultar los datos de carácter personal de los profesionales sanitarios contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) competencia del Ministerio del Interior, para contrastar la veracidad de la información que consta en el registro, pero solo si el titular de los datos da su consentimiento expreso.",
          "D": "Solo podrá consultar los datos de carácter personal de la población profesional sanitaria contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) en el curso de una investigación sobre una infracción administrativa."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Consultar los datos de carácter personal de la población profesional sanitaria contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) competencia del Ministerio del Interior, para contrastar la veracidad de la información que consta en el registro.",
          "B": "Consultar los datos de carácter personal de la población profesional sanitaria contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) competencia del Ministerio del Interior, para contrastar la veracidad de la información que consta en el registro<span class=\"diff-highlight\">, pero</span> <span class=\"diff-highlight\">solo</span> <span class=\"diff-highlight\">si</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">persona</span> <span class=\"diff-highlight\">titular</span> <span class=\"diff-highlight\">no</span> <span class=\"diff-highlight\">se</span> <span class=\"diff-highlight\">ha</span> <span class=\"diff-highlight\">opuesto</span> <span class=\"diff-highlight\">explícitamente</span>.",
          "C": "Consultar los datos de carácter personal de <span class=\"diff-highlight\">los</span> <span class=\"diff-highlight\">profesionales</span> <span class=\"diff-highlight\">sanitarios</span> contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) competencia del Ministerio del Interior, para contrastar la veracidad de la información que consta en el registro, pero solo si <span class=\"diff-highlight\">el</span> titular <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">los</span> <span class=\"diff-highlight\">datos</span> <span class=\"diff-highlight\">da</span> <span class=\"diff-highlight\">su</span> <span class=\"diff-highlight\">consentimiento</span> <span class=\"diff-highlight\">expreso</span>.",
          "D": "<span class=\"diff-highlight\">Solo</span> <span class=\"diff-highlight\">podrá</span> consultar los datos de carácter personal de la población profesional sanitaria contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) en el <span class=\"diff-highlight\">curso</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">investigación</span> <span class=\"diff-highlight\">sobre</span> <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">infracción</span> <span class=\"diff-highlight\">administrativa</span>."
        }
      },
      {
        "num": 4,
        "idpregunta": 4,
        "pregunta": "4.- En el marco de la ordenación de las profesiones sanitarias, las personas pacientes:",
        "opciones": {
          "A": "Tienen derecho a la libre elección del personal facultativo que debe atenderles, tanto si su ejercicio profesional se desarrolla en el sistema público como en el ámbito privado.",
          "B": "Tienen derecho a la libre elección del personal facultativo que debe atenderles, pero solo si su ejercicio profesional se desarrolla en el sistema público.",
          "C": "Tienen derecho a la libre elección del personal facultativo que debe atenderles, pero solo si su ejercicio profesional se desarrolla en el ámbito privado.",
          "D": "Ninguna de las anteriores es correcta."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Tienen derecho a la libre elección del personal facultativo que debe atenderles, <span class=\"diff-highlight\">tanto</span> si su ejercicio profesional se desarrolla en el sistema público <span class=\"diff-highlight\">como</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">ámbito</span> <span class=\"diff-highlight\">privado</span>.",
          "B": "Tienen derecho a la libre elección del personal facultativo que debe atenderles, <span class=\"diff-highlight\">pero</span> <span class=\"diff-highlight\">solo</span> si su ejercicio profesional se desarrolla en el sistema público.",
          "C": "Tienen derecho a la libre elección del personal facultativo que debe atenderles, <span class=\"diff-highlight\">pero</span> <span class=\"diff-highlight\">solo</span> si su ejercicio profesional se desarrolla en el ámbito privado.",
          "D": "Ninguna de las anteriores es correcta."
        }
      },
      {
        "num": 5,
        "idpregunta": 5,
        "pregunta": "5.- Según la normativa de ordenación de las profesiones sanitarias, el personal profesional y las personas responsables de los centros sanitarios facilitarán a sus pacientes el ejercicio del derecho a conocer:",
        "opciones": {
          "A": "El nombre, la titulación, la especialidad y la hoja de servicios del personal sanitario que les atiende, así como la categoría y función de dicho personal, si así estuvieran definidas en su centro o institución.",
          "B": "El nombre, la titulación y la especialidad del personal sanitario que les atiende y su categoría, pero no su función en su centro o institución.",
          "C": "El nombre, la titulación y la especialidad del personal sanitario que les atiende, así como la categoría y función de dicho personal, si así estuvieran definidas en su centro o institución.",
          "D": "El nombre, la titulación y la especialidad del personal sanitario que les atiende, pero no su categoría y función en su centro o institución."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "El nombre, la titulación<span class=\"diff-highlight\">, la</span> <span class=\"diff-highlight\">especialidad</span> y la <span class=\"diff-highlight\">hoja</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">servicios</span> del personal sanitario que les atiende, así como la categoría y función de dicho personal, si así estuvieran definidas en su centro o institución.",
          "B": "El nombre, la titulación y la especialidad del personal sanitario que les atiende <span class=\"diff-highlight\">y</span> su categoría<span class=\"diff-highlight\">, pero</span> <span class=\"diff-highlight\">no</span> <span class=\"diff-highlight\">su</span> función en su centro o institución.",
          "C": "El nombre, la titulación y la <span class=\"diff-highlight\">especialidad</span> del personal sanitario que les atiende, así como la categoría y función de dicho personal, si así estuvieran definidas en su centro o institución.",
          "D": "El nombre, la titulación y la especialidad del personal sanitario que les atiende, pero no su <span class=\"diff-highlight\">categoría</span> <span class=\"diff-highlight\">y</span> función en su centro o institución."
        }
      },
      {
        "num": 6,
        "idpregunta": 6,
        "pregunta": "6.- De acuerdo con las normas generales de ordenación de las profesiones sanitarias, el ejercicio del derecho del personal profesional sanitario a la renuncia a la atención a una persona paciente queda condicionado a que (señálese la respuesta incorrecta):",
        "opciones": {
          "A": "Su renuncia no conlleve desatención de la persona paciente.",
          "B": "La renuncia se ejerza de acuerdo con procedimientos regulares.",
          "C": "Quede constancia, aunque no sea formal, de la renuncia.",
          "D": "La renuncia se ejerza de acuerdo con procedimientos establecidos y explícitos."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 7,
        "idpregunta": 7,
        "pregunta": "7.- Los centros sanitarios revisarán que el personal sanitario de su plantilla cumple los requisitos necesarios para ejercer la profesión conforme a lo previsto en la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias y en las demás normas aplicables:",
        "opciones": {
          "A": "Cada cinco años como mínimo.",
          "B": "Cada tres años como mínimo.",
          "C": "Cada dos años como mínimo.",
          "D": "Cada cuatro años como mínimo."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 8,
        "idpregunta": 8,
        "pregunta": "8.- Según dispone la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, cuando una actuación sanitaria se realice por un equipo de profesionales (señálese la respuesta incorrecta):",
        "opciones": {
          "A": "Se articulará, preferentemente, de forma jerarquizada, atendiendo a los criterios de conocimientos y competencia y, en su caso, al de titulación del personal profesional que integra el equipo, en función de la actividad concreta a desarrollar, de la confianza y conocimiento recíproco de las capacidades de quienes forman el equipo, y de los principios de accesibilidad y continuidad asistencial de las personas atendidas.",
          "B": "Se articulará de forma jerarquizada o colegiada, atendiendo a los criterios de conocimientos y competencia y, en su caso, al de titulación del personal profesional que integra el equipo, en función de la actividad concreta a desarrollar, de la confianza y conocimiento recíproco de las capacidades de quienes forman el equipo, y de los principios de accesibilidad y continuidad asistencial de las personas atendidas.",
          "C": "Se articulará de forma preferentemente colegiada, atendiendo a los criterios de conocimientos y competencia y, en su caso, al de titulación del personal profesional que integra el equipo, en función de la actividad concreta a desarrollar, de la confianza y conocimiento recíproco de las capacidades de quienes forman el equipo, y de los principios de accesibilidad y continuidad asistencial de las personas atendidas.",
          "D": "Ninguna de las anteriores es correcta."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Se articulará<span class=\"diff-highlight\">, preferentemente, </span>de forma jerarquizada, atendiendo a los criterios de conocimientos y competencia y, en su caso, al de titulación del personal profesional que integra el equipo, en función de la actividad concreta a desarrollar, de la confianza y conocimiento recíproco de las capacidades de quienes forman el equipo, y de los principios de accesibilidad y continuidad asistencial de las personas atendidas.",
          "B": "Se articulará de forma jerarquizada <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">colegiada</span>, atendiendo a los criterios de conocimientos y competencia y, en su caso, al de titulación del personal profesional que integra el equipo, en función de la actividad concreta a desarrollar, de la confianza y conocimiento recíproco de las capacidades de quienes forman el equipo, y de los principios de accesibilidad y continuidad asistencial de las personas atendidas.",
          "C": "Se articulará de forma <span class=\"diff-highlight\">preferentemente</span> <span class=\"diff-highlight\">colegiada</span>, atendiendo a los criterios de conocimientos y competencia y, en su caso, al de titulación del personal profesional que integra el equipo, en función de la actividad concreta a desarrollar, de la confianza y conocimiento recíproco de las capacidades de quienes forman el equipo, y de los principios de accesibilidad y continuidad asistencial de las personas atendidas.",
          "D": "Ninguna de las anteriores es correcta."
        }
      },
      {
        "num": 9,
        "idpregunta": 9,
        "pregunta": "9.- De acuerdo con la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, diga cuál de los siguientes principios generales de la relación entre las personas que ejercen profesiones sanitarias y las personas atendidas no es tal:",
        "opciones": {
          "A": "El personal profesional tiene el deber de hacer un uso racional de los recursos diagnósticos y terapéuticos a su cargo, tomando en consideración, entre otros, los costes de sus decisiones y evitando la sobreutilización, la infrautilización y la inadecuada utilización de los mismos.",
          "B": "El personal profesional tiene el deber de prestar una atención sanitaria técnica y profesional adecuada a las necesidades de salud de las personas que atiende, de acuerdo con el estado de desarrollo de los conocimientos científicos de cada momento y con los niveles de calidad y seguridad que se establecen en esta ley y el resto de normas legales y deontológicas aplicables.",
          "C": "El personal profesional tiene el deber de proporcionar a las personas pacientes información precisa sobre su formación profesional, la forma en que han actualizado sus conocimientos y las demandas de responsabilidad que hayan podido derivar en responsabilidades administrativas.",
          "D": "El personal profesional tiene el deber de respetar la personalidad, dignidad e intimidad de las personas a su cuidado y debe respetar su participación en las tomas de decisiones que les afecten. En todo caso, deben ofrecer una información suficiente y adecuada para que puedan ejercer su derecho al consentimiento sobre dichas decisiones."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 10,
        "idpregunta": 10,
        "pregunta": "10.- De acuerdo con la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, los centros sanitarios acreditados para desarrollar",
        "opciones": {
          "A": "Deberán contar con jefaturas de estudios, con la coordinación docente y con el personal tutor de la formación que resulten adecuados en función de las actividades a desarrollar, así como con una figura de defensoría del alumnado.",
          "B": "Deberán contar una comisión de docencia, así como con jefaturas de estudios, coordinación docente y personal tutor de la formación que resulten adecuados en función de las actividades a desarrollar.",
          "C": "Deberán contar una comisión de docencia y con una figura de defensoría del alumnado, así como con jefaturas de estudios, coordinación docente y personal tutor de la formación que resulten adecuados en función de las actividades a desarrollar.",
          "D": "Todas las anteriores son incorrectas."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Deberán contar con <span class=\"diff-highlight\">jefaturas</span> de <span class=\"diff-highlight\">estudios</span>, con <span class=\"diff-highlight\">la</span> coordinación docente y <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">el</span> personal tutor de la formación que resulten adecuados en función de las actividades a desarrollar<span class=\"diff-highlight\">, así</span> <span class=\"diff-highlight\">como</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">figura</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">defensoría</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">alumnado</span>.",
          "B": "Deberán contar una comisión de docencia, así como con jefaturas de estudios, coordinación docente y personal tutor de la formación que resulten adecuados en función de las actividades a desarrollar.",
          "C": "Deberán contar <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">comisión</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">docencia</span> <span class=\"diff-highlight\">y</span> con <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">figura</span> de <span class=\"diff-highlight\">defensoría</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">alumnado</span>, <span class=\"diff-highlight\">así</span> <span class=\"diff-highlight\">como</span> con <span class=\"diff-highlight\">jefaturas</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">estudios, </span>coordinación docente y personal tutor de la formación que resulten adecuados en función de las actividades a desarrollar.",
          "D": "Todas las anteriores son incorrectas."
        }
      },
      {
        "num": 11,
        "idpregunta": 11,
        "pregunta": "11.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, sus disposiciones se aplicarán a:",
        "opciones": {
          "A": "A los servicios sanitarios de financiación pública y a los privados, en los mismos términos.",
          "B": "A los servicios sanitarios de financiación pública. También a los privados en lo que se refiere al control de las actividades de salud pública y en materia de garantías de información, seguridad y calidad.",
          "C": "A los servicios sanitarios de financiación pública y a los privados concertados.",
          "D": "Únicamente a los servicios sanitarios de financiación pública."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 12,
        "idpregunta": 12,
        "pregunta": "12.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la ciudadanía tendrá los siguientes derechos en el conjunto del Sistema Nacional de Salud:",
        "opciones": {
          "A": "A recibir asistencia sanitaria en su comunidad autónoma de residencia.",
          "B": "A recibir el reembolso de los gastos derivados de la asistencia en la sanidad privada cuando se trate de servicios recogidos en el catálogo de prestaciones del Sistema Nacional de Salud. programas de formación continuada:",
          "C": "A recibir el reembolso de los gastos derivados de la asistencia sanitaria del catálogo de prestaciones del Sistema Nacional de Salud que pudiera requerir del servicio de salud de la comunidad autónoma en la que se encuentre desplazado/a.",
          "D": "Ninguna de las respuestas anteriores es correcta."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 13,
        "idpregunta": 13,
        "pregunta": "13.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la cartera común de servicios del Sistema Nacional de Salud se articula en torno a las siguientes modalidades:",
        "opciones": {
          "A": "Cartera común básica de servicios asistenciales, cartera común suplementaria y cartera común de servicios accesorios.",
          "B": "Cartera común básica nacional de servicios asistenciales y cartera común autonómica de servicios asistenciales.",
          "C": "Cartera común nacional básica de servicios asistenciales, cartera común suplementaria autonómica y cartera común de servicios accesorios autonómicos.",
          "D": "Cartera común nacional y autonómica básica de servicios asistenciales, cartera común nacional y autonómica suplementaria y cartera común nacional y autonómica de servicios accesorios."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 14,
        "idpregunta": 14,
        "pregunta": "14.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la cartera común básica de servicios asistenciales del Sistema Nacional de Salud comprende:",
        "opciones": {
          "A": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente, la prestación farmacéutica y la prestación ortoprotésica, cubiertos de forma completa por financiación pública.",
          "B": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente y la prestación farmacéutica, cubiertos de forma completa por financiación pública.",
          "C": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente, y la prestación ortoprotésica, cubiertos de forma completa por financiación pública.",
          "D": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente, cubiertos de forma completa por financiación pública."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente<span class=\"diff-highlight\">, la</span> <span class=\"diff-highlight\">prestación</span> <span class=\"diff-highlight\">farmacéutica</span> y la prestación <span class=\"diff-highlight\">ortoprotésica</span>, cubiertos de forma completa por financiación pública.",
          "B": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente y la prestación <span class=\"diff-highlight\">farmacéutica</span>, cubiertos de forma completa por financiación pública.",
          "C": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente, y la prestación ortoprotésica, cubiertos de forma completa por financiación pública.",
          "D": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente, cubiertos de forma completa por financiación pública."
        }
      },
      {
        "num": 15,
        "idpregunta": 15,
        "pregunta": "15.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la cartera común suplementaria del Sistema Nacional de Salud incluirá las siguientes prestaciones:",
        "opciones": {
          "A": "Únicamente la prestación farmacéutica.",
          "B": "Únicamente la prestación ortoprotésica.",
          "C": "Únicamente la prestación farmacéutica y la prestación ortoprotésica.",
          "D": "La prestación farmacéutica, la prestación ortoprotésica y la prestación con productos dietéticos."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 16,
        "idpregunta": 16,
        "pregunta": "16.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la prestación de atención primaria no comprenderá:",
        "opciones": {
          "A": "La atención a la salud bucodental.",
          "B": "La atención paliativa a personas enfermas terminales.",
          "C": "La rehabilitación básica.",
          "D": "Ninguna de las respuestas anteriores es correcta."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 17,
        "idpregunta": 17,
        "pregunta": "17.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, para la elaboración del contenido de la cartera común de servicios del Sistema Nacional de Salud:",
        "opciones": {
          "A": "Es preceptivo el informe favorable de la Red Española de Agencias de Evaluación de Tecnologías Sanitarias y Prestaciones del Sistema Nacional de Salud, en relación con la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo.",
          "B": "Se contará con la participación de la Red Española de Agencias de Evaluación de Tecnologías Sanitarias y Prestaciones del Sistema Nacional de Salud, en la evaluación de la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo.",
          "C": "Es preceptivo el informe favorable de las sociedades científicas implicadas, en relación con la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo.",
          "D": "Se contará con la participación de las sociedades científicas implicadas, en la evaluación de la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "<span class=\"diff-highlight\">Es</span> <span class=\"diff-highlight\">preceptivo</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">informe</span> <span class=\"diff-highlight\">favorable</span> de la Red Española de Agencias de Evaluación de Tecnologías Sanitarias y Prestaciones del Sistema Nacional de Salud, en <span class=\"diff-highlight\">relación</span> <span class=\"diff-highlight\">con</span> la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo.",
          "B": "<span class=\"diff-highlight\">Se</span> <span class=\"diff-highlight\">contará</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">participación</span> de la Red Española de Agencias de Evaluación de Tecnologías Sanitarias y Prestaciones del Sistema Nacional de Salud, en <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">evaluación</span> <span class=\"diff-highlight\">de</span> la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo.",
          "C": "Es preceptivo el informe favorable de <span class=\"diff-highlight\">las</span> <span class=\"diff-highlight\">sociedades</span> <span class=\"diff-highlight\">científicas</span> <span class=\"diff-highlight\">implicadas</span>, en relación con la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo.",
          "D": "Se contará con la participación de <span class=\"diff-highlight\">las</span> <span class=\"diff-highlight\">sociedades</span> <span class=\"diff-highlight\">científicas</span> <span class=\"diff-highlight\">implicadas</span>, en la evaluación de la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo."
        }
      },
      {
        "num": 18,
        "idpregunta": 18,
        "pregunta": "18.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la exclusión de una técnica, tecnología o procedimiento actualmente incluido en la cartera de servicios se llevará a cabo cuando:",
        "opciones": {
          "A": "Se evidencie su falta de eficacia, efectividad o eficiencia, o que el balance entre beneficio y riesgo sea significativamente desfavorable.",
          "B": "Requiera una formación para la que no exista la especialidad médica correspondiente.",
          "C": "Hayan cambiado las condiciones económicas de su implantación.",
          "D": "Todas las respuestas anteriores son correctas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 19,
        "idpregunta": 19,
        "pregunta": "19.- A los efectos de la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la competencia profesional es:",
        "opciones": {
          "A": "La acreditación de formación continuada a lo largo del desempeño de su carrera profesional.",
          "B": "La competencia acreditada por el título correspondiente acreditativo de la adquisición de conocimientos requeridos para el desempeño del puesto designado.",
          "C": "La aptitud del personal profesional sanitario para integrar y aplicar los conocimientos, habilidades y actitudes asociados a las buenas prácticas de su profesión para resolver los problemas que se le plantean.",
          "D": "La superación del proceso selectivo oficial convocado por la autoridad competente para la adquisición del vínculo estatutario con los servicios sanitarios."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 20,
        "idpregunta": 20,
        "pregunta": "20.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la declaración de actuaciones coordinadas en salud pública y en seguridad alimentaria deberán encuadrarse en alguno de los supuestos siguientes:",
        "opciones": {
          "A": "Responder a situaciones de especial riesgo o alarma para la salud pública.",
          "B": "Establecer planes preventivos para hacer frente a situaciones de especial riesgo o alarma para la salud pública.",
          "C": "Realizar análisis epidemiológicos que permitan establecer estructuras y recursos según las previsiones en materia de salud pública y seguridad alimentaria.",
          "D": "Las respuestas a) y b) son verdaderas y la c) es falsa."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 21,
        "idpregunta": 21,
        "pregunta": "21.- Según dispone la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, la ordenación del régimen personal estatutario de los servicios de salud se rige por una serie de principios y criterios. Señale cuales no están entre los mencionados por esta ley.",
        "opciones": {
          "A": "Sometimiento pleno a la ley y el derecho.",
          "B": "Igualdad, mérito, capacidad y promoción en el acceso a la condición de personal estatutario.",
          "C": "Integración en el régimen organizativo y funcional del servicio de salud y de sus centros e instituciones.",
          "D": "Coordinación, cooperación y mutua información entre las Administraciones sanitarias públicas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 22,
        "idpregunta": 22,
        "pregunta": "22.- La condición de personal estatutario fijo se adquiere, tal y como prevé la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, por el cumplimiento de los siguientes requisitos:",
        "opciones": {
          "A": "Incorporación a una plaza de servicio, institución o centro que corresponda en el plazo fijado en la convocatoria tras la superación de las pruebas de selección.",
          "B": "Superación de las pruebas de selección; nombramiento conferido por el órgano competente; e incorporación a una plaza del servicio, institución o centro que corresponda en el plazo de un mes.",
          "C": "Superación de las pruebas de selección; nombramiento conferido por el órgano competente; e incorporación, previo cumplimiento de los requisitos formales en cada caso establecidos, a una plaza del servicio, institución o centro que corresponda en el plazo determinado en la convocatoria.",
          "D": "Superación de las pruebas de selección; nombramiento conferido por el órgano competente; e incorporación a una plaza del servicio, institución o centro que corresponda en todo caso en el plazo determinado en la convocatoria."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Incorporación a una plaza <span class=\"diff-highlight\">de</span> servicio, institución o centro que corresponda en el plazo <span class=\"diff-highlight\">fijado</span> en la convocatoria <span class=\"diff-highlight\">tras</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">superación</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">las</span> <span class=\"diff-highlight\">pruebas</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">selección</span>.",
          "B": "Superación de las pruebas de selección; nombramiento conferido por el órgano competente; e incorporación a una plaza del servicio, institución o centro que corresponda en el plazo <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">un</span> <span class=\"diff-highlight\">mes</span>.",
          "C": "Superación de las pruebas de selección; nombramiento conferido por el órgano competente; e incorporación<span class=\"diff-highlight\">, previo</span> <span class=\"diff-highlight\">cumplimiento</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">los</span> <span class=\"diff-highlight\">requisitos</span> <span class=\"diff-highlight\">formales</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">cada</span> <span class=\"diff-highlight\">caso</span> <span class=\"diff-highlight\">establecidos, </span>a una plaza del servicio, institución o centro que corresponda en el plazo determinado en la convocatoria.",
          "D": "Superación de las pruebas de selección; nombramiento conferido por el órgano competente; e incorporación a una plaza del servicio, institución o centro que corresponda <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">todo</span> <span class=\"diff-highlight\">caso</span> en el plazo determinado en la convocatoria."
        }
      },
      {
        "num": 23,
        "idpregunta": 23,
        "pregunta": "23.- Según dice la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, en el proceso de la adquisición de la condición de personal estatutario fijo, no podrán recibir nombramiento y quedarán sin efecto las actuaciones de quienes:",
        "opciones": {
          "A": "No acrediten que reúnen los requisitos y condiciones exigidos en la convocatoria, una vez superado el proceso selectivo.",
          "B": "No acrediten que reúnen los requisitos y condiciones exigidos en la convocatoria, con carácter previo a la superación del proceso selectivo.",
          "C": "No acrediten que reúnen los requisitos y condiciones exigidos en la convocatoria, una vez firmada la convocatoria.",
          "D": "Una vez superado el proceso selectivo, automáticamente se procede al nombramiento por el órgano competente."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 24,
        "idpregunta": 24,
        "pregunta": "24.- La pérdida de la condición de personal estatutario regulada en la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, se produce:",
        "opciones": {
          "A": "Siempre en caso de pena de inhabilitación especial para empleo o cargo público, afecte o no al correspondiente nombramiento.",
          "B": "En caso de que se adopte la pena de inhabilitación absoluta sea firme o no.",
          "C": "En caso de que se adopte la pena de inhabilitación especial para la correspondiente profesión, siempre que esta exceda de seis años.",
          "D": "En caso de que se adopte la pena de inhabilitación especial para la correspondiente profesión, siempre que esta exceda de tres años."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 25,
        "idpregunta": 25,
        "pregunta": "25.- Conforme a la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, señale cuál de las siguientes afirmaciones no es correcta:",
        "opciones": {
          "A": "La jubilación puede ser forzosa o voluntaria.",
          "B": "Para que la persona interesada pueda prolongar su permanencia en servicio activo hasta cumplir los 70 años, bastará con que lo solicite voluntariamente.",
          "C": "La jubilación forzosa se declarará al cumplir la persona interesada 65 años.",
          "D": "Podrá optar a la jubilación voluntaria, total o parcial, el personal estatutario que reúna los requisitos establecidos en la legislación de Seguridad Social."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 26,
        "idpregunta": 26,
        "pregunta": "26.- Procede la extinción de la condición de personal estatutario fijo de los servicios de salud:",
        "opciones": {
          "A": "Cuando se produzca la pérdida de la nacionalidad.",
          "B": "En caso de recaer sanción firme disciplinaria de separación del servicio.",
          "C": "Siempre que se imponga una pena principal o accesoria de inhabilitación especial para empleo o cargo público o para el ejercicio de la correspondiente profesión.",
          "D": "Todas las anteriores respuestas son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 27,
        "idpregunta": 27,
        "pregunta": "27.- En materia de retribuciones, la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, prevé que:",
        "opciones": {
          "A": "El sistema retributivo del personal estatutario se estructura en retribuciones básicas y retribuciones complementarias.",
          "B": "La evaluación del personal estatutario a efectos de determinación de una parte de la retribuciones complementarias se establecerá a través de procedimientos fundados en los principios igualdad, objetividad y transparencia.",
          "C": "El sistema retributivo del personal estatutario responde a los principios de cualificación técnica y profesional.",
          "D": "Todas las respuestas son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 28,
        "idpregunta": 28,
        "pregunta": "28.- De acuerdo con la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, señale la respuesta correcta respecto a las retribuciones del personal estatutario de los servicios de salud:",
        "opciones": {
          "A": "Las retribuciones básicas son: el sueldo asignado a cada categoría en función del título exigido para su desempeño; los trienios; y las pagas extraordinarias.",
          "B": "Las retribuciones básicas serán iguales en todos los servicios de salud independientemente de la anualidad en la que se perciban.",
          "C": "El personal estatutario temporal percibirá la totalidad de las retribuciones que, en el correspondiente servicio de salud, correspondan a su nombramiento, con excepción del complemento de carrera.",
          "D": "El complemento de atención continuada está destinado a retribuir la iniciativa continuada y permanente de la persona titular del puesto."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 29,
        "idpregunta": 29,
        "pregunta": "29.- La pérdida de la condición de personal estatutario de los servicios de salud se produce cuando la incapacidad permanente sea declarada:",
        "opciones": {
          "A": "En grado de incapacidad permanente total para la profesión habitual.",
          "B": "En grado de incapacidad absoluta para todo trabajo.",
          "C": "En grado de gran invalidez.",
          "D": "Todas las respuestas son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 30,
        "idpregunta": 30,
        "pregunta": "30.- En el supuesto del personal estatutario de los servicios de salud:",
        "opciones": {
          "A": "El período de localización es aquel período de tiempo en el que el personal se encuentra únicamente en situación de disponibilidad.",
          "B": "Se considera período de descanso todo período de tiempo que no sea tiempo de trabajo.",
          "C": "El trabajo por turnos es una forma de organización del trabajo en equipo con arreglo al ritmo rotatorio y siempre de tipo continuo.",
          "D": "El período de localización es aquel período de tiempo en el que el personal se encuentra en situación de disponibilidad a los solos efectos de asegurar su posible localización."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 31,
        "idpregunta": 31,
        "pregunta": "31.- Para el personal estatutario de los servicios de salud, el período nocturno tendrá la siguiente duración:",
        "opciones": {
          "A": "Mínima de siete horas e incluirá necesariamente el período comprendido entre las cero y las cinco horas de cada día natural.",
          "B": "Mínima de ocho horas e incluirá necesariamente el período comprendido entre las cero y las cinco horas de cada día natural.",
          "C": "Mínima de ocho horas e incluirá necesariamente el período comprendido entre las doce y las cinco horas de cada día natural.",
          "D": "Mínima de siete horas e incluirá necesariamente el período comprendido entre las doce y las cinco horas de cada día natural."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 32,
        "idpregunta": 32,
        "pregunta": "32.- Según establece la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud:",
        "opciones": {
          "A": "Resulta incompatible para el personal estatutario de los servicios de salud el ejercicio de las funciones sanitarias con cualquier otro tipo de funciones.",
          "B": "Al personal estatutario de los servicios de salud le resulta aplicable el mismo régimen de incompatibilidades establecido para el personal funcionario.",
          "C": "Atendiendo a lo que establezca la legislación vigente, el personal estatutario de los servicios de salud podrá compatibilizar las funciones sanitarias y docente.",
          "D": "Para el personal licenciado sanitario el complemento específico resulta irrenunciable."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 33,
        "idpregunta": 33,
        "pregunta": "33.- La Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud regula el descanso semanal. Señale la respuesta que no es correcta:",
        "opciones": {
          "A": "El personal tendrá derecho a un período mínimo que siempre será fijo de descanso ininterrumpido con una duración media de 24 horas semanales.",
          "B": "El período de referencia para el cálculo del período de descanso semanal será de tres meses.",
          "C": "En el caso de que no se hubiera disfrutado del tiempo mínimo de descanso semanal en el período de tres meses se producirá una compensación a través del régimen de descansos alternativos.",
          "D": "El período de referencia para el cálculo del período de descanso semanal será de dos meses."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 34,
        "idpregunta": 34,
        "pregunta": "34.- Conforme a la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud:",
        "opciones": {
          "A": "El personal tendrá derecho a una vacación retribuida cuya duración no será inferior en ningún caso a 30 días naturales.",
          "B": "El personal estatutario de los servicios de salud podrá elegir sustituir el período de vacación por una compensación económica.",
          "C": "Solo podrá ser sustituido por una compensación económica el período vacacional anual mediante la programación funcional de los centros, cuando así lo aconsejen razones organizativas.",
          "D": "Anualmente, el personal tendrá derecho a una vacación retribuida cuya duración no será inferior a 30 días naturales, o al tiempo que proporcionalmente corresponda en función del tiempo de servicios."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 35,
        "idpregunta": 35,
        "pregunta": "35.- La excedencia voluntaria solicitada por el personal estatutario de los servicios de salud por interés particular exige haber prestado servicios efectivos en cualquiera de las Administraciones públicas durante:",
        "opciones": {
          "A": "Los cinco años inmediatamente anteriores.",
          "B": "Los cuatro años inmediatamente anteriores.",
          "C": "Los dos años inmediatamente anteriores.",
          "D": "Los tres años inmediatamente anteriores."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 36,
        "idpregunta": 36,
        "pregunta": "36.- La Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi, establece que la Administración sanitaria vasca debe garantizar la tutela general de la salud pública a través de:",
        "opciones": {
          "A": "Medidas preventivas.",
          "B": "Promoción de la salud.",
          "C": "Prestaciones sanitarias individuales.",
          "D": "Son correctas todas las respuestas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 37,
        "idpregunta": 37,
        "pregunta": "37.- La Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi, reconoce la universalidad del derecho a la protección de la salud para:",
        "opciones": {
          "A": "Todas las personas residentes en el territorio de Euskadi, así como para las personas transeúntes.",
          "B": "Todas las personas residentes en Euskadi o fuera de Euskadi, así como para las personas transeúntes.",
          "C": "Solo para las personas que tengan vecindad administrativa en Euskadi.",
          "D": "Solo para las personas de quienes pueda predicarse la condición política de vascos."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 38,
        "idpregunta": 38,
        "pregunta": "38.- Señale cuál de los siguientes principios no se enuncian entre los principios informadores del sistema sanitario de Euskadi en la Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi:",
        "opciones": {
          "A": "Universalidad.",
          "B": "Solidaridad ciudadana.",
          "C": "Equidad.",
          "D": "Calidad de los servicios."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 39,
        "idpregunta": 39,
        "pregunta": "39.- La Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi, establece respecto a las áreas de salud que:",
        "opciones": {
          "A": "La Comunidad Autónoma del País Vasco se divide territorialmente en áreas de salud de acuerdo con la situación socio-económica de cada demarcación geográfica.",
          "B": "En cada área de salud pueden ponerse en práctica las actuaciones esenciales que requiere la tutela general de la salud pública y exclusivamente la asistencia sanitaria primaria .",
          "C": "En cada área de salud se garantizará una adecuada ordenación de la atención primaria y su coordinación con la atención especializada.",
          "D": "Son correctas la a) y la c)."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 40,
        "idpregunta": 40,
        "pregunta": "40.- La Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi prevé la creación de sistemas de información necesarios para facilitar el ejercicio adecuado de los distintos niveles de responsabilidad en el sistema. A tal fin, los datos de carácter personal relativos a la salud podrán ser recabados y tratados siempre que se cumplan los siguientes requisitos:",
        "opciones": {
          "A": "Siempre debe constar el previo consentimiento de la persona afectada.",
          "B": "Si no consta el previo consentimiento de la persona afectada se requiere que la actuación se encuentre debidamente autorizada y se efectúe previo procedimiento de disociación que garantice el anonimato de la información.",
          "C": "Que conste el previo consentimiento de la persona afectada por escrito y que se garantice el anonimato de la información.",
          "D": "Basta con que la actuación se encuentre debidamente autorizada."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 41,
        "idpregunta": 41,
        "pregunta": "41.- La Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi al contemplar los derechos y deberes ciudadanos, alude a:",
        "opciones": {
          "A": "La obligación de dejar constancia escrita de todo proceso diagnóstico o terapéutico.",
          "B": "La obligación de dejar constancia por cualquier medio de todo proceso diagnóstico.",
          "C": "La obligación de dejar constancia por cualquier medio de todo proceso diagnóstico o terapéutico.",
          "D": "No existe en la Ley ninguna previsión a este respecto, de modo que será el personal facultativo el que decida si el proceso diagnóstico o terapéutico debe quedar registrado."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 42,
        "idpregunta": 42,
        "pregunta": "42.- El contrato-programa, tal y como establece la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi:",
        "opciones": {
          "A": "Es el instrumento jurídico mediante el que se articulan las relaciones entre el Gobierno Vasco y las organizaciones del ente público Osakidetza-Servicio Vasco de Salud para la provisión de servicios sanitarios.",
          "B": "Es el instrumento jurídico mediante el que se articulan de manera directa las relaciones entre el Departamento competente en materia de sanidad y las organizaciones del ente público Osakidetza-Servicio Vasco de Salud que tiene naturaleza jurídica de concierto.",
          "C": "Es el instrumento jurídico mediante el que se articulan de manera directa las relaciones entre el Departamento competente en materia de sanidad y las organizaciones del ente público Osakidetza-Servicio Vasco de Salud que tiene naturaleza jurídica de un convenio de carácter especial.",
          "D": "Ninguna respuesta es correcta."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Es el instrumento jurídico mediante el que se articulan las relaciones entre el <span class=\"diff-highlight\">Gobierno</span> <span class=\"diff-highlight\">Vasco</span> y las organizaciones del ente público Osakidetza-Servicio Vasco de Salud <span class=\"diff-highlight\">para</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">provisión</span> de <span class=\"diff-highlight\">servicios</span> <span class=\"diff-highlight\">sanitarios</span>.",
          "B": "Es el instrumento jurídico mediante el que se articulan de manera directa las relaciones entre el Departamento competente en materia de sanidad y las organizaciones del ente público Osakidetza-Servicio Vasco de Salud que tiene naturaleza jurídica de <span class=\"diff-highlight\">concierto</span>.",
          "C": "Es el instrumento jurídico mediante el que se articulan de manera directa las relaciones entre el Departamento competente en materia de sanidad y las organizaciones del ente público Osakidetza-Servicio Vasco de Salud que tiene naturaleza jurídica de <span class=\"diff-highlight\">un</span> <span class=\"diff-highlight\">convenio</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">carácter</span> <span class=\"diff-highlight\">especial</span>.",
          "D": "Ninguna respuesta es correcta."
        }
      },
      {
        "num": 43,
        "idpregunta": 43,
        "pregunta": "43.- El consejo de administración de Osakidetza-Servicio Vasco de Salud está integrado por:",
        "opciones": {
          "A": "La persona titular de la presidencia y por un número no superior a cinco miembros en representación de la Administración de la Comunidad Autónoma de Euskadi.",
          "B": "La persona titular de la presidencia y por un número no superior a tres miembros en representación de la Administración de la Comunidad Autónoma de Euskadi.",
          "C": "La persona titular de la presidencia y por cinco miembros en representación del Departamento competente en materia de sanidad.",
          "D": "La persona titular de la presidencia, la Consejería del Departamento competente en materia de sanidad y tres miembros en representación de la Administración de la Comunidad Autónoma de Euskadi."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 44,
        "idpregunta": 44,
        "pregunta": "44.- Según establece la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi:",
        "opciones": {
          "A": "El Plan de Salud de Euskadi debe ser aprobado por el Parlamento Vasco.",
          "B": "El Departamento competente en materia de sanidad debe elaborar semestralmente y remitir al Parlamento un informe con la evaluación de los objetivos y determinaciones del Plan de Salud de Euskadi.",
          "C": "El Departamento competente en materia de sanidad debe elaborar anualmente y remitir al Parlamento un informe con la evaluación de los objetivos y determinaciones del Plan de Salud de Euskadi.",
          "D": "Son correctas las respuestas a) y c)."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "El <span class=\"diff-highlight\">Plan</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">Salud</span> de <span class=\"diff-highlight\">Euskadi</span> debe <span class=\"diff-highlight\">ser</span> <span class=\"diff-highlight\">aprobado</span> <span class=\"diff-highlight\">por</span> <span class=\"diff-highlight\">el</span> Parlamento <span class=\"diff-highlight\">Vasco</span>.",
          "B": "El Departamento competente en materia de sanidad debe elaborar <span class=\"diff-highlight\">semestralmente</span> y remitir al Parlamento un informe con la evaluación de los objetivos y determinaciones del Plan de Salud de Euskadi.",
          "C": "El Departamento competente en materia de sanidad debe elaborar <span class=\"diff-highlight\">anualmente</span> y remitir al Parlamento un informe con la evaluación de los objetivos y determinaciones del Plan de Salud de Euskadi.",
          "D": "Son correctas las respuestas a) y c)."
        }
      },
      {
        "num": 45,
        "idpregunta": 45,
        "pregunta": "45.- A los efectos de la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi, las plantillas de personal del ente público Osakidetza-Servicio Vasco de Salud:",
        "opciones": {
          "A": "Serán aprobadas por la Presidencia a propuesta del consejo de administración.",
          "B": "Se denomina así al número de efectivos de carácter estructural con que cuentan tanto su organización central de administración como las organizaciones de servicios dependientes de Osakidetza-Servicio Vasco de Salud.",
          "C": "Deberán ajustarse al número máximo de efectivos, según grupos profesionales, que anualmente aprobará su consejo de administración a propuesta del Departamento de Sanidad.",
          "D": "Deberán ajustarse al número máximo de efectivos, según grupos de titulación, que anualmente aprobará el Departamento de Sanidad."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 46,
        "idpregunta": 46,
        "pregunta": "46.- En el ámbito territorial de la Comunidad Autónoma de Euskadi, las inspecciones necesarias para asegurar el cumplimiento de lo previsto en la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi y en el resto de la legislación sanitaria corresponde:",
        "opciones": {
          "A": "A la inspección de trabajo del País Vasco adscrita al Departamento de trabajo y empleo del Gobierno Vasco.",
          "B": "En todos los casos a las corporaciones locales de la Comunidad Autónoma.",
          "C": "Al Departamento competente en materia de sanidad.",
          "D": "La inspección en materia sanitaria no es competencia de la Comunidad Autónoma de Euskadi."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 47,
        "idpregunta": 47,
        "pregunta": "47.- Señale cuál de los siguientes criterios no está contemplado en la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi para la clasificación de las infracciones en leves, graves o muy graves:",
        "opciones": {
          "A": "La cuantía de la indemnización solicitada.",
          "B": "Los riesgos para la salud.",
          "C": "El grado de intencionalidad.",
          "D": "La gravedad de la alteración sanitaria y social producida."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 48,
        "idpregunta": 48,
        "pregunta": "48.- Según establece la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi, en materia de sanciones señale la respuesta correcta:",
        "opciones": {
          "A": "Las infracciones serán sancionadas exclusivamente con sanción pecuniaria o económica.",
          "B": "En los casos de infracciones muy graves, el Gobierno Vasco podrá acordar el cierre temporal del establecimiento, instalación o servicio por un plazo máximo de cinco años.",
          "C": "Sin perjuicio de la multa que proceda imponer, en ciertos casos, la sanción económica que se imponga podrá ser incrementada hasta el triple de la cuantía del beneficio ilícito obtenido.",
          "D": "En los casos de infracciones muy graves, el Gobierno Vasco podrá acordar el cierre temporal del establecimiento, instalación o servicio por un plazo máximo de tres años."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Las infracciones serán sancionadas exclusivamente con sanción pecuniaria o económica.",
          "B": "En los casos de infracciones muy graves, el Gobierno Vasco podrá acordar el cierre temporal del establecimiento, instalación o servicio por un plazo máximo de <span class=\"diff-highlight\">cinco</span> años.",
          "C": "<span class=\"diff-highlight\">Sin</span> <span class=\"diff-highlight\">perjuicio</span> de <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">multa</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">proceda</span> <span class=\"diff-highlight\">imponer, en</span> <span class=\"diff-highlight\">ciertos</span> <span class=\"diff-highlight\">casos, la</span> <span class=\"diff-highlight\">sanción</span> <span class=\"diff-highlight\">económica</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">se</span> <span class=\"diff-highlight\">imponga</span> <span class=\"diff-highlight\">podrá</span> <span class=\"diff-highlight\">ser</span> <span class=\"diff-highlight\">incrementada</span> <span class=\"diff-highlight\">hasta</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">triple</span> de <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">cuantía</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">beneficio</span> <span class=\"diff-highlight\">ilícito</span> <span class=\"diff-highlight\">obtenido</span>.",
          "D": "En los casos de infracciones muy graves, el Gobierno Vasco podrá acordar el cierre temporal del establecimiento, instalación o servicio por un plazo máximo de <span class=\"diff-highlight\">tres</span> años."
        }
      },
      {
        "num": 49,
        "idpregunta": 49,
        "pregunta": "49.- Según la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi, las organizaciones a través de las que se procede a la provisión de servicios sanitarios con medios adscritos al ente público Osakidetza-Servicio Vasco de Salud:",
        "opciones": {
          "A": "Realizarán su actividad bajo el principio de autonomía económico-financiera y de gestión.",
          "B": "Se configurarán como instituciones de titularidad privada y con personalidad jurídica propia.",
          "C": "Se crearán por ley como entidades de titularidad pública y con personalidad jurídica propia.",
          "D": "Para realizar su actividad dependen presupuestariamente del ente público Osakidetza- Servicio Vasco de Salud."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 50,
        "idpregunta": 50,
        "pregunta": "50.- Respecto al personal sujeto al régimen estatutario que establece la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi, señale la respuesta correcta:",
        "opciones": {
          "A": "Este vínculo estatutario se adquiere mediante el cumplimiento de los dos siguientes requisitos: superación del proceso selectivo correspondiente y nombramiento conferido por autoridad competente.",
          "B": "Los principios que rigen el procedimiento selectivo para la adquisición del vínculo estatutario son exclusivamente el de igualdad, mérito y capacidad.",
          "C": "Los instrumentos de clasificación del personal sujeto a este régimen estatutario son el grupo de titulación, el grupo profesional, la categoría y el puesto funcional que se desempeñe.",
          "D": "El grupo de titulación constituye el instrumento de clasificación del personal en base al agrupamiento unitario de las aptitudes profesionales y contenido específico da las tareas propias de la prestación."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 51,
        "idpregunta": 51,
        "pregunta": "51.- Corresponderá la presidencia del ente público Osakidetza-Servicio Vasco de Salud a:",
        "opciones": {
          "A": "Quien ostente la presidencia del Gobierno (Lehendakari) de la Comunidad Autónoma del País Vasco.",
          "B": "La Diputación General del Territorio Histórico en que esté situado el Ente.",
          "C": "La presidencia a quien ostente la titularidad del Departamento de Sanidad y la presidencia de honor a quien ostente la presidencia del Gobierno (Lehendakari) de la Comunidad Autónoma del País Vasco.",
          "D": "Quien ostente la titularidad de del Departamento de Sanidad."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 52,
        "idpregunta": 52,
        "pregunta": "52.- La función de nombrar y separar a quienes ocupen las Direcciones de División de la organización central del ente público corresponde a:",
        "opciones": {
          "A": "El Consejo de Administración del Ente.",
          "B": "La Dirección General del Ente.",
          "C": "La Presidencia del Ente.",
          "D": "Ninguno de los anteriores."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 53,
        "idpregunta": 53,
        "pregunta": "53.- La composición del Consejo del ente público Osakidetza-Servicio Vasco de Salud contará, además de la persona que ejerza la Presidencia:",
        "opciones": {
          "A": "Con cinco integrantes en representación de la Administración de la Comunidad Autónoma, que nombrará el Gobierno: una persona a propuesta de la titularidad del Departamento de Hacienda y Administración Pública, otra a propuesta de quien ostente la titularidad de Bienestar Social y las tres restantes a propuesta de la persona titular de Sanidad.",
          "B": "Con cinco integrantes en representación de la Administración de la Comunidad Autónoma, que nombrará el Gobierno: una persona a propuesta de la titularidad del Departamento de Hacienda y Administración Pública, otra a propuesta de la persona titular de la Consejería de Presidencia y las tres restantes a propuesta de la persona titular de Sanidad.",
          "C": "Con cinco integrantes en representación de la Administración de la Comunidad Autónoma, que nombrará el Gobierno: dos a propuesta de la persona titular del Departamento de Hacienda y Administración Pública y las tres restantes a propuesta de la persona titular de Sanidad.",
          "D": "Ninguna de los anteriores."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Con cinco integrantes en representación de la Administración de la Comunidad Autónoma, que nombrará el Gobierno: una persona a propuesta de la titularidad del Departamento de Hacienda y Administración Pública, otra a propuesta de <span class=\"diff-highlight\">quien</span> <span class=\"diff-highlight\">ostente</span> la <span class=\"diff-highlight\">titularidad</span> de <span class=\"diff-highlight\">Bienestar</span> <span class=\"diff-highlight\">Social</span> y las tres restantes a propuesta de la persona titular de Sanidad.",
          "B": "Con cinco integrantes en representación de la Administración de la Comunidad Autónoma, que nombrará el Gobierno: una persona a propuesta de la titularidad del Departamento de Hacienda y Administración Pública, otra a propuesta de <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">persona</span> <span class=\"diff-highlight\">titular</span> <span class=\"diff-highlight\">de</span> la <span class=\"diff-highlight\">Consejería</span> de <span class=\"diff-highlight\">Presidencia</span> y las tres restantes a propuesta de la persona titular de Sanidad.",
          "C": "Con cinco integrantes en representación de la Administración de la Comunidad Autónoma, que nombrará el Gobierno: <span class=\"diff-highlight\">dos</span> a propuesta de la <span class=\"diff-highlight\">persona</span> <span class=\"diff-highlight\">titular</span> del Departamento de Hacienda y Administración Pública y las tres restantes a propuesta de la persona titular de Sanidad.",
          "D": "Ninguna de los anteriores."
        }
      },
      {
        "num": 54,
        "idpregunta": 54,
        "pregunta": "54.- La propuesta de Plan Estratégico del ente público Osakidetza-Servicio Vasco de Salud:",
        "opciones": {
          "A": "Será formulada por la Dirección General del Ente.",
          "B": "Será aprobada por la Presidencia del Ente.",
          "C": "Será sometida a informe del Consejo de Administración del Ente.",
          "D": "Todas las anteriores son ciertas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 55,
        "idpregunta": 55,
        "pregunta": "55.- La función de convocar, presidir, suspender y levantar las sesiones, arbitrar las deliberaciones del Consejo de Administración del ente público Osakidetza- Servicio vasco de salud y decidir los empates con su voto de calidad corresponderá a:",
        "opciones": {
          "A": "La Dirección General.",
          "B": "La Presidencia.",
          "C": "La persona de mayor antigüedad del Consejo de Administración.",
          "D": "Ninguna de las anteriores."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 56,
        "idpregunta": 56,
        "pregunta": "56.- La persona titular de la Dirección General del ente público Osakidetza- Servicio Vasco de Salud:",
        "opciones": {
          "A": "No podrá asistir a las reuniones del Consejo de Administración del Ente.",
          "B": "Presidirá las reuniones del Consejo de Administración del Ente.",
          "C": "Asistirá a las reuniones del Consejo de Administración del Ente con voz y voto.",
          "D": "Asistirá a las reuniones del Consejo de Administración del Ente con voz y sin voto."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 57,
        "idpregunta": 57,
        "pregunta": "57.- Corresponde a la organización central de administración y gestión corporativa del ente público Osakidetza-Servicio Vasco de Salud, en materia de gestión asistencial (señálese la respuesta incorrecta):",
        "opciones": {
          "A": "Supervisar el cumplimiento de las políticas generales de calidad y realizar auditorías.",
          "B": "Definir criterios generales y proponer la política de precios correspondiente a la prestación de servicios sanitarios incluida en la cobertura pública.",
          "C": "Coordinar los recursos y, en su caso, proponer medidas de intervención sobre las listas de espera.",
          "D": "Promover protocolos de interés general."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 58,
        "idpregunta": 58,
        "pregunta": "58.- Corresponde a la organización central de administración y gestión corporativa del ente público Osakidetza-Servicio Vasco de Salud, en materia de gestión de recursos humanos (señálese la respuesta incorrecta):",
        "opciones": {
          "A": "Supervisar, controlar y evaluar las políticas de personal del Ente.",
          "B": "Promover acuerdos de cooperación con centros correspondientes a la sanidad privada.",
          "C": "Dirigir el funcionamiento del registro de personal.",
          "D": "Gestionar los procesos de selección y de provisión que el Consejo de Administración determine, por su carácter general, previsible número de aspirantes u otras circunstancias análogas, y, a tal fin, convocarlos, establecer sus bases, programas y contenidos, y designar a los tribunales calificadores de los mismos."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 59,
        "idpregunta": 59,
        "pregunta": "59.- Corresponde a cada organización de servicios sanitarios del ente público Osakidetza-Servicio Vasco de Salud el ejercicio de todas las facultades de gestión y administración que se requieran para el ejercicio de la actividad de provisión de servicios sanitarios que tengan encomendada, quedando excluidas únicamente:",
        "opciones": {
          "A": "Aquellas facultades de gestión centralizada que los estatutos sociales del ente público Osakidetza-Servicio Vasco de Salud atribuyen expresamente a la organización central del Ente Público y las competencias propias de otras instancias de acuerdo con las Leyes y Reglamentos vigentes.",
          "B": "Aquellas facultades de gestión centralizada que los estatutos sociales del ente público Osakidetza-Servicio Vasco de Salud atribuyen expresamente a la Presidencia del Ente Público y las competencias propias de otras instancias de acuerdo con las Leyes y Reglamentos vigentes.",
          "C": "Aquellas facultades de gestión centralizada que los estatutos sociales del ente público Osakidetza-Servicio Vasco de Salud atribuyen expresamente al Consejo de Administración del Ente Público y las competencias propias de otras instancias de acuerdo con las Leyes y Reglamentos vigentes.",
          "D": "Ninguna de las anteriores."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Aquellas facultades de gestión centralizada que los estatutos sociales del ente público Osakidetza-Servicio Vasco de Salud atribuyen expresamente a la <span class=\"diff-highlight\">organización</span> <span class=\"diff-highlight\">central</span> del Ente Público y las competencias propias de otras instancias de acuerdo con las Leyes y Reglamentos vigentes.",
          "B": "Aquellas facultades de gestión centralizada que los estatutos sociales del ente público Osakidetza-Servicio Vasco de Salud atribuyen expresamente a la <span class=\"diff-highlight\">Presidencia</span> del Ente Público y las competencias propias de otras instancias de acuerdo con las Leyes y Reglamentos vigentes.",
          "C": "Aquellas facultades de gestión centralizada que los estatutos sociales del ente público Osakidetza-Servicio Vasco de Salud atribuyen expresamente <span class=\"diff-highlight\">al</span> <span class=\"diff-highlight\">Consejo</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">Administración</span> del Ente Público y las competencias propias de otras instancias de acuerdo con las Leyes y Reglamentos vigentes.",
          "D": "Ninguna de las anteriores."
        }
      },
      {
        "num": 60,
        "idpregunta": 60,
        "pregunta": "60.- El número de integrantes del equipo directivo de las organizaciones de servicios sanitarios del ente público Osakidetza-Servicio Vasco de Salud:",
        "opciones": {
          "A": "Oscilará entre dos y tres.",
          "B": "Oscilará entre tres y cuatro.",
          "C": "Oscilará entre cuatro y cinco.",
          "D": "La normativa que rige su estatuto jurídico no establece un número determinado sino un máximo de cinco."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 61,
        "idpregunta": 61,
        "pregunta": "61.- La función de Representar al ente público Osakidetza-Servicio Vasco de Salud en la negociación colectiva del Acuerdo Marco de Condiciones de Trabajo del Personal corresponde a:",
        "opciones": {
          "A": "La organización central de administración y gestión corporativa del ente público Osakidetza-Servicio Vasco de Salud.",
          "B": "La Presidencia del ente público Osakidetza-Servicio Vasco de Salud.",
          "C": "El Consejo de Administración del ente público Osakidetza-Servicio Vasco de Salud.",
          "D": "Ninguna de las anteriores."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 62,
        "idpregunta": 62,
        "pregunta": "62.- Para el desarrollo de funciones de propuesta y asesoramiento, así como de participación en las organizaciones de servicios sanitarios, existirá un Consejo de Dirección en cada una de ellas, integrado por:",
        "opciones": {
          "A": "El equipo directivo, las jefaturas de unidad que se determinen y una representación de personas vocales electas que formen parte de los Consejos Técnicos de participación profesional respectivos.",
          "B": "El equipo directivo, las jefaturas de unidad que se determinen, representantes sindicales y una representación de personas vocales electas que formen parte de los Consejos Técnicos de participación profesional respectivos.",
          "C": "El equipo directivo y las jefaturas de unidad que se determinen.",
          "D": "Todas las anteriores son falsas."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "El equipo directivo, las jefaturas de unidad que se determinen y una representación de personas vocales electas que formen parte de los Consejos Técnicos de participación profesional respectivos.",
          "B": "El equipo directivo, las jefaturas de unidad que se determinen<span class=\"diff-highlight\">, representantes</span> <span class=\"diff-highlight\">sindicales</span> y una representación de personas vocales electas que formen parte de los Consejos Técnicos de participación profesional respectivos.",
          "C": "El equipo directivo <span class=\"diff-highlight\">y</span> las jefaturas de unidad que se determinen.",
          "D": "Todas las anteriores son falsas."
        }
      },
      {
        "num": 63,
        "idpregunta": 63,
        "pregunta": "63.- Las organizaciones de servicios sanitarios del ente público Osakidetza-Servicio Vasco de Salud podrán:",
        "opciones": {
          "A": "Descentralizar la organización y su funcionamiento operativo, delegando en quienes ostenten la responsabilidad clínica facultades de gestión, aunque solo en materia de personal y siempre de acuerdo con el marco estratégico, los planes de gestión y el compromiso del contrato-programa suscrito por la organización.",
          "B": "Descentralizar la organización y su funcionamiento operativo, delegando en quienes ostenten la responsabilidad clínica facultades de gestión, pero solo en materia económica y siempre de acuerdo con el marco estratégico, los planes de gestión y el compromiso del contrato-programa suscrito por la organización.",
          "C": "Descentralizar la organización y su funcionamiento operativo, delegando en quienes ostenten la responsabilidad clínica facultades de gestión tanto en materia económica como de personal, de acuerdo con el marco estratégico, los planes de gestión y el compromiso del contrato-programa suscrito por la organización.",
          "D": "Todas las anteriores son falsas."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Descentralizar la organización y su funcionamiento operativo, delegando en quienes ostenten la responsabilidad clínica facultades de gestión, <span class=\"diff-highlight\">aunque</span> solo en materia <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">personal</span> y siempre de acuerdo con el marco estratégico, los planes de gestión y el compromiso del contrato-programa suscrito por la organización.",
          "B": "Descentralizar la organización y su funcionamiento operativo, delegando en quienes ostenten la responsabilidad clínica facultades de gestión, <span class=\"diff-highlight\">pero</span> solo en materia <span class=\"diff-highlight\">económica</span> y siempre de acuerdo con el marco estratégico, los planes de gestión y el compromiso del contrato-programa suscrito por la organización.",
          "C": "Descentralizar la organización y su funcionamiento operativo, delegando en quienes ostenten la responsabilidad clínica facultades de gestión <span class=\"diff-highlight\">tanto</span> en materia <span class=\"diff-highlight\">económica</span> <span class=\"diff-highlight\">como</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">personal, </span>de acuerdo con el marco estratégico, los planes de gestión y el compromiso del contrato-programa suscrito por la organización.",
          "D": "Todas las anteriores son falsas."
        }
      },
      {
        "num": 64,
        "idpregunta": 64,
        "pregunta": "64.- En materia específica de inversiones, la competencia para ejecutar las compras de suministros que se consideren centralizadas, así como definir y/o ejecutar, en su caso, las consideradas integradas corresponde a:",
        "opciones": {
          "A": "El Consejo de Administración del ente público Osakidetza-Servicio Vasco de Salud.",
          "B": "La organización central de administración y gestión corporativa del ente público Osakidetza-Servicio Vasco de Salud.",
          "C": "La organización de servicios del ente público Osakidetza-Servicio Vasco de Salud.",
          "D": "A quien ostente la titularidad de la Dirección-Gerencia de cada organización de servicios sanitarios del Osakidetza-Servicio Vasco de Salud."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 65,
        "idpregunta": 65,
        "pregunta": "65.- En el ámbito de una organización de servicios sanitarios del ente público Osakidetza-Servicio Vasco de Salud, presidir los Consejos Técnicos de participación profesional y promover su eficaz funcionamiento es una tarea que corresponde a:",
        "opciones": {
          "A": "La Dirección General del Ente.",
          "B": "Quien ostente la titularidad de la Dirección-Gerencia del Ente.",
          "C": "La Dirección Médica del Ente.",
          "D": "Ninguna de las anteriores."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 66,
        "idpregunta": 66,
        "pregunta": "66.- Según el Artículo 1 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿qué dos niveles asistenciales se integran en las Organizaciones Sanitarias Integradas (OSI) de Osakidetza?",
        "opciones": {
          "A": "Atención especializada y Atención de Urgencias.",
          "B": "Salud Pública y Servicios Sociosanitarios.",
          "C": "Atención hospitalaria y Atención de Emergencias.",
          "D": "Atención primaria y Atención hospitalaria."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 67,
        "idpregunta": 67,
        "pregunta": "67.- Según el Artículo 2.1 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿qué objetivo último persigue la configuración de las OSI?",
        "opciones": {
          "A": "Reducir el gasto farmacéutico mediante la unificación de compras.",
          "B": "Favorecer la integración clínica de manera que la atención se articule en torno a la persona.",
          "C": "Centralizar los servicios de atención primaria en las sedes hospitalarias.",
          "D": "Eliminar las categorías profesionales de atención primaria para unificarlas con las hospitalarias."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 68,
        "idpregunta": 68,
        "pregunta": "68.- Según el Artículo 1 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿bajo qué principio fundamental actuarán las Organizaciones Sanitarias Integradas (OSI) del ente público Osakidetza-Servicio Vasco de Salud ?",
        "opciones": {
          "A": "Principio de coordinación territorial y sectorial.",
          "B": "Principio de jerarquía funcional única.",
          "C": "Principio de autonomía económico-financiera y de gestión.",
          "D": "Principio de centralización de todos los recursos."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 69,
        "idpregunta": 69,
        "pregunta": "69.- De acuerdo con el Artículo 3 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿cómo se define una OSI de clase 'monográfica'?",
        "opciones": {
          "A": "Es aquella donde solo se integran servicios de atención hospitalaria especializada.",
          "B": "Es aquella cuya actividad asistencial gira en torno a un ámbito específico, integrando sus servicios y dispositivos.",
          "C": "Es una organización que solo atiende a una patología crónica específica.",
          "D": "Es la organización que carece de servicios de atención primaria."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 70,
        "idpregunta": 70,
        "pregunta": "70.- Según el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, las OSI de Tipo I se caracterizan, entre otros aspectos, por tener hospitales de carácter universitario y, además, por disponer de:",
        "opciones": {
          "A": "Una base poblacional adscrita inferior a 300.000 habitantes.",
          "B": "Una Dirección de Gestión que asume todas las funciones asistenciales.",
          "C": "Unidades o servicios calificados de referencia para el conjunto del sistema sanitario vasco.",
          "D": "Ser organizaciones de servicios de carácter monográfico y de pequeño tamaño."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 71,
        "idpregunta": 71,
        "pregunta": "71.- Según el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, para que una OSI sea clasificada como de Tipo III debe integrar, junto con servicios de atención primaria, un hospital de carácter general y tener una base poblacional atendida inferior a:",
        "opciones": {
          "A": "500.000 habitantes.",
          "B": "200.000 habitantes.",
          "C": "300.000 habitantes.",
          "D": "100.000 habitantes."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 72,
        "idpregunta": 72,
        "pregunta": "72.- Según el Artículo 5 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿cuáles son los tres órganos de participación que conforman la estructura organizativa de las OSI?",
        "opciones": {
          "A": "El Consejo de Dirección, el Comité Ejecutivo y el Comité de Ética Asistencial.",
          "B": "El Consejo Clínico Asistencial, el Consejo Social y la Comisión Sociosanitaria.",
          "C": "La Comisión de Seguridad, la Comisión de Docencia y la Comisión de Investigación.",
          "D": "El Consejo de Dirección, el Consejo Social y el Comité de Evaluación."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 73,
        "idpregunta": 73,
        "pregunta": "73.- De acuerdo con el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿qué órganos componen el equipo directivo de una OSI, según la estructura general del artículo 5.2?",
        "opciones": {
          "A": "Solo la Dirección Gerencia y la Dirección Médica.",
          "B": "Las Direcciones Médica, de Atención Integrada, de Enfermería, de Personas, Económico-Financiera y de Gestión.",
          "C": "El Consejo de Dirección y el Consejo Social exclusivamente.",
          "D": "La Dirección Gerencia y las Jefaturas de Servicio de cada centro de salud."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 74,
        "idpregunta": 74,
        "pregunta": "74.- De acuerdo con el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, en las OSI de Tipo IV, la Dirección Gerencia asume, con el apoyo de puestos funcionales asistenciales, las funciones que corresponden a:",
        "opciones": {
          "A": "La Dirección de Personas y la Dirección Económico-Financiera.",
          "B": "La Dirección de Personas y la Dirección de Atención Integrada.",
          "C": "La Dirección Médica y la Dirección de Enfermería.",
          "D": "La Dirección de Gestión y el Consejo de Dirección."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 75,
        "idpregunta": 75,
        "pregunta": "75.- De acuerdo con el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿cuál de los siguientes NO es un órgano de dirección encargado del gobierno y gestión de las OSI de Tipo I y II?",
        "opciones": {
          "A": "La Dirección de Personas.",
          "B": "El Consejo Clínico Asistencial.",
          "C": "La Dirección de Atención Integrada.",
          "D": "La Dirección Económico-Financiera."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 76,
        "idpregunta": 76,
        "pregunta": "76.- Según el Artículo 7.3 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿quién tiene la competencia para el nombramiento y cese de la persona titular de la Dirección Gerencia?",
        "opciones": {
          "A": "El Consejero o la Consejera de Salud.",
          "B": "La Dirección General del Ente Público Osakidetza.",
          "C": "El Consejo de Administración a propuesta de Lehendakaritza.",
          "D": "La Dirección de Personas de la propia OSI."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 77,
        "idpregunta": 77,
        "pregunta": "77.- Según los Artículos 7 y 9 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿cuál es un requisito obligatorio para el nombramiento de los cargos de dirección de una OSI?",
        "opciones": {
          "A": "Haber pertenecido al Consejo Clínico Asistencial durante al menos dos años.",
          "B": "Superar un examen de oposición específico para gerencia sanitaria.",
          "C": "Previa convocatoria pública donde se acredite titulación, capacidad y experiencia profesional.",
          "D": "Tener la condición de personal estatutario fijo en la categoría de técnico/a superior."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 78,
        "idpregunta": 78,
        "pregunta": "78.- Según el Artículo 8.m del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿a qué dirección corresponde 'orientar la gestión desde una visión integradora empoderando la atención primaria'?",
        "opciones": {
          "A": "Dirección de Atención Integrada.",
          "B": "Dirección Gerencia.",
          "C": "Dirección de Enfermería.",
          "D": "Dirección Económico-Financiera."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 79,
        "idpregunta": 79,
        "pregunta": "79.- De acuerdo con el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿con qué ámbito(s) adicional(es) debe coordinar su actividad la Dirección de Atención Integrada, además de con la atención primaria y hospitalaria?",
        "opciones": {
          "A": "Con el ámbito de Recursos Humanos y con la Universidad.",
          "B": "Con el ámbito comunitario y socio-sanitario.",
          "C": "Únicamente con el sociosanitario.",
          "D": "Con las entidades locales y las empresas privadas de gestión."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 80,
        "idpregunta": 80,
        "pregunta": "80.- Según el Artículo 19.1 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿quién ejerce la presidencia del Consejo Clínico Asistencial?",
        "opciones": {
          "A": "La persona titular de la Dirección Gerencia.",
          "B": "La persona titular de la Dirección Médica.",
          "C": "La persona titular de la Dirección de Enfermería.",
          "D": "La persona de mayor antigüedad en la vocalía de Atención Primaria."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 81,
        "idpregunta": 81,
        "pregunta": "81.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, son titulares de los derechos y deberes recogidos en esta Declaración:",
        "opciones": {
          "A": "Todas las personas que accedan o utilicen las prestaciones y servicios sanitarios que se proporcionan por el sistema sanitario de Euskadi.",
          "B": "Todas las personas nacidas en Euskadi.",
          "C": "Todas las personas empadronadas en Euskadi.",
          "D": "Todas las respuestas anteriores son correctas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 82,
        "idpregunta": 82,
        "pregunta": "82.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, todos los derechos y obligaciones establecidos son exigibles:",
        "opciones": {
          "A": "En relación a todas las acciones de carácter sanitario, incluyendo docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o privada o concertados de Euskadi. Las acciones relativas a la investigación biomédica quedan fuera de esta Declaración y se rigen por su normativa específica.",
          "B": "En relación a todas las acciones de carácter sanitario, incluyendo docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o concertados que integran el sistema sanitario de Euskadi. Las acciones relativas a la investigación biomédica quedan fuera de esta Declaración y se rigen por su normativa específica.",
          "C": "En relación a todas las acciones de carácter sanitario, incluyendo investigación y docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o privada o concertados de Euskadi.",
          "D": "En relación a todas las acciones de carácter sanitario, incluyendo investigación y docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o concertados que integran el sistema sanitario de Euskadi."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "En relación a todas las acciones de carácter sanitario, incluyendo docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o <span class=\"diff-highlight\">privada</span> <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">concertados</span> de Euskadi. Las acciones relativas a la investigación biomédica quedan fuera de esta Declaración y se rigen por su normativa específica.",
          "B": "En relación a todas las acciones de carácter sanitario, incluyendo docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o <span class=\"diff-highlight\">concertados</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">integran</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">sistema</span> <span class=\"diff-highlight\">sanitario</span> de Euskadi. Las acciones relativas a la investigación biomédica quedan fuera de esta Declaración y se rigen por su normativa específica.",
          "C": "En relación a todas las acciones de carácter sanitario, incluyendo <span class=\"diff-highlight\">investigación</span> <span class=\"diff-highlight\">y</span> docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o privada o concertados de Euskadi.",
          "D": "En relación a todas las acciones de carácter sanitario, incluyendo <span class=\"diff-highlight\">investigación</span> <span class=\"diff-highlight\">y</span> docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o concertados que integran el sistema sanitario de Euskadi."
        }
      },
      {
        "num": 83,
        "idpregunta": 83,
        "pregunta": "83.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, los principios que informan e inspiran el conjunto de acciones de carácter sanitario que se desarrollen en el sistema sanitario de Euskadi son:",
        "opciones": {
          "A": "El respeto a la libertad de la persona, a su dignidad y a la autonomía en las decisiones que afecten a su salud.",
          "B": "El respeto a todo el personal profesional que integra el sistema sanitario de Euskadi.",
          "C": "La promoción de la investigación científica en el marco del sistema sanitario de Euskadi.",
          "D": "Todas las respuestas anteriores son correctas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 84,
        "idpregunta": 84,
        "pregunta": "84.- A los efectos de la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi recogida en el Decreto 147/2015, de 21 de julio, se configuran las siguientes fases de la vida en las que se concretan necesidades específicas:",
        "opciones": {
          "A": "1. Neonatología, infancia y adolescencia. 2. Salud sexual y reproductiva, embarazo y parto. 3. Salud laboral. 4. Personas mayores y final de la vida.",
          "B": "1. Infancia y adolescencia. 2. Salud sexual y reproductiva. 3. Salud laboral. 4. Personas mayores.",
          "C": "1. Infancia. 2. Adolescencia, salud sexual y reproductiva. 3. Personas mayores. 4. Final de la vida.",
          "D": "1. Infancia y adolescencia. 2. Salud sexual y reproductiva. 3. Personas mayores. 4. Final de la vida."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 85,
        "idpregunta": 85,
        "pregunta": "85.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, las personas pacientes y usuarias del Sistema Sanitario de Euskadi, en relación con la asistencia sanitaria específica referida al final de la vida, tienen derecho a:",
        "opciones": {
          "A": "Al acompañamiento de familiares y personas allegadas en los procesos con hospitalización.",
          "B": "Al uso, con carácter general, de habitación individual.",
          "C": "Al acompañamiento espiritual.",
          "D": "Todas las respuestas anteriores son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 86,
        "idpregunta": 86,
        "pregunta": "86.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, la persona paciente o usuaria:",
        "opciones": {
          "A": "Debe dejar por escrito las decisiones cuando sea legalmente exigible o recomendable.",
          "B": "Debe dejar por escrito las decisiones cuando se lo solicite el personal profesional que le atienda.",
          "C": "Debe dejar por escrito las decisiones cuando la política del centro sanitario así lo establezca.",
          "D": "Debe dejar por escrito las decisiones cuando puedan tener relevancia a efectos de responsabilidad legal."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 87,
        "idpregunta": 87,
        "pregunta": "87.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, los Servicios de Atención a Pacientes y personas Usuarias:",
        "opciones": {
          "A": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud, los centros sanitarios concertados, los centros privados y el departamento competente en materia de sanidad.",
          "B": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud, los centros sanitarios concertados y el departamento competente en materia de sanidad, pero no existe previsión en relación con los centros privados.",
          "C": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud, pero no existe previsión en relación con los centros concertados, ni con los privados ni con el departamento competente en materia de sanidad.",
          "D": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud y en los centros sanitarios concertados y privados, pero no existe previsión en relación con el departamento competente en materia de sanidad."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud, los centros sanitarios concertados<span class=\"diff-highlight\">, los</span> <span class=\"diff-highlight\">centros</span> <span class=\"diff-highlight\">privados</span> y el departamento competente en materia de sanidad.",
          "B": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud, los centros <span class=\"diff-highlight\">sanitarios</span> <span class=\"diff-highlight\">concertados</span> <span class=\"diff-highlight\">y</span> el departamento competente en materia de sanidad<span class=\"diff-highlight\">, pero</span> <span class=\"diff-highlight\">no</span> <span class=\"diff-highlight\">existe</span> <span class=\"diff-highlight\">previsión</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">relación</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">los</span> <span class=\"diff-highlight\">centros</span> <span class=\"diff-highlight\">privados</span>.",
          "C": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud, <span class=\"diff-highlight\">pero</span> <span class=\"diff-highlight\">no</span> <span class=\"diff-highlight\">existe</span> <span class=\"diff-highlight\">previsión</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">relación</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">los</span> <span class=\"diff-highlight\">centros</span> <span class=\"diff-highlight\">concertados, ni</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">los</span> <span class=\"diff-highlight\">privados</span> <span class=\"diff-highlight\">ni</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">departamento</span> <span class=\"diff-highlight\">competente</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">materia</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">sanidad</span>.",
          "D": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">en</span> los centros sanitarios concertados y <span class=\"diff-highlight\">privados</span>, pero no existe previsión en relación con <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">departamento</span> <span class=\"diff-highlight\">competente</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">materia</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">sanidad</span>."
        }
      },
      {
        "num": 88,
        "idpregunta": 88,
        "pregunta": "88.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, las reclamaciones contra actuaciones del personal:",
        "opciones": {
          "A": "Se resolverán atendiendo a las normas disciplinarias específicas previa apertura, en su caso, del expediente informativo correspondiente, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse.",
          "B": "Se resolverán atendiendo a las normas disciplinarias generales previa apertura, en su caso, del expediente informativo correspondiente, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse.",
          "C": "Se resolverán atendiendo a las normas disciplinarias específicas previa apertura, en su caso, del expediente informativo y de expediente de mediación, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse.",
          "D": "Se resolverán atendiendo a las normas disciplinarias generales previa apertura, en su caso, del expediente informativo y de expediente de mediación, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Se resolverán atendiendo a las normas disciplinarias <span class=\"diff-highlight\">específicas</span> previa apertura, en su caso, del expediente informativo correspondiente, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse.",
          "B": "Se resolverán atendiendo a las normas disciplinarias <span class=\"diff-highlight\">generales</span> previa apertura, en su caso, del expediente informativo correspondiente, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse.",
          "C": "Se resolverán atendiendo a las normas disciplinarias específicas previa apertura, en su caso, del expediente informativo <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">expediente</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">mediación</span>, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse.",
          "D": "Se resolverán atendiendo a las normas disciplinarias generales previa apertura, en su caso, del expediente informativo <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">expediente</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">mediación</span>, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse."
        }
      },
      {
        "num": 89,
        "idpregunta": 89,
        "pregunta": "89.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la documentación clínica es:",
        "opciones": {
          "A": "La información contenida en la historia clínica.",
          "B": "El soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciones de carácter asistencial y la documentación relativa a las voluntades anticipadas.",
          "C": "El soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciones de carácter asistencial y de investigación biomédica.",
          "D": "El soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciones de carácter asistencial."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 90,
        "idpregunta": 90,
        "pregunta": "90.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la información asistencial:",
        "opciones": {
          "A": "Como regla general se proporcionará verbalmente.",
          "B": "Como regla general se proporcionará por escrito.",
          "C": "Como regla general se proporcionará verbalmente y por escrito.",
          "D": "Como regla general se proporcionará por escrito cuando se trate de pacientes menores de edad."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 91,
        "idpregunta": 91,
        "pregunta": "91.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la información asistencial contiene, como mínimo:",
        "opciones": {
          "A": "La finalidad y la naturaleza de cada intervención.",
          "B": "La finalidad y la naturaleza de cada intervención y sus riesgos.",
          "C": "La finalidad y la naturaleza de cada intervención, sus riesgos y sus consecuencias.",
          "D": "La finalidad y la naturaleza de cada intervención, sus riesgos, sus consecuencias y los derechos de las personas pacientes."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 92,
        "idpregunta": 92,
        "pregunta": "92.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, garantiza el cumplimiento del derecho a la información asistencial:",
        "opciones": {
          "A": "La persona facultativa responsable de la persona paciente",
          "B": "La persona facultativa responsable de la persona paciente y el personal profesional que le atienda durante el proceso asistencial o le aplique una técnica o un procedimiento concreto.",
          "C": "La persona facultativa responsable de la persona paciente y el personal de enfermería.",
          "D": "El centro sanitario."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 93,
        "idpregunta": 93,
        "pregunta": "93.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la persona titular del derecho a la información asistencial es:",
        "opciones": {
          "A": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho, en la medida que la persona paciente lo permita de manera expresa o tácita.",
          "B": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho, en la medida que la persona paciente lo permita de manera expresa.",
          "C": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho, en la medida que la persona paciente lo permita por escrito.",
          "D": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho, en la medida que la persona paciente lo permita de manera expresa <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">tácita</span>.",
          "B": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho, en la medida que la persona paciente lo permita de manera expresa.",
          "C": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho, en la medida que la persona paciente lo permita <span class=\"diff-highlight\">por</span> <span class=\"diff-highlight\">escrito</span>.",
          "D": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho."
        }
      },
      {
        "num": 94,
        "idpregunta": 94,
        "pregunta": "94.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, cuando existe riesgo inmediato grave para la integridad física o psíquica de la persona enferma y no es posible conseguir su autorización:",
        "opciones": {
          "A": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, con el consentimiento de sus familiares.",
          "B": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, con el consentimiento de quien ostente la representación legal.",
          "C": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, con autorización judicial.",
          "D": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, sin necesidad de contar con su consentimiento."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, con el consentimiento de <span class=\"diff-highlight\">sus</span> <span class=\"diff-highlight\">familiares</span>.",
          "B": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, con el consentimiento de <span class=\"diff-highlight\">quien</span> <span class=\"diff-highlight\">ostente</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">representación</span> <span class=\"diff-highlight\">legal</span>.",
          "C": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, con <span class=\"diff-highlight\">autorización</span> <span class=\"diff-highlight\">judicial</span>.",
          "D": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, <span class=\"diff-highlight\">sin</span> <span class=\"diff-highlight\">necesidad</span> de <span class=\"diff-highlight\">contar</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">su</span> <span class=\"diff-highlight\">consentimiento</span>."
        }
      },
      {
        "num": 95,
        "idpregunta": 95,
        "pregunta": "95.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, el personal facultativo proporcionará a la persona paciente, antes de recabar su consentimiento escrito, la información básica siguiente:",
        "opciones": {
          "A": "Todos los riesgos en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.",
          "B": "Todos los riesgos, siempre que sean graves, en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.",
          "C": "Todos los riesgos probables en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.",
          "D": "Todos los riesgos, siempre que sean probables y graves, en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Todos los riesgos en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.",
          "B": "Todos los riesgos, siempre que sean graves, en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.",
          "C": "Todos los riesgos probables en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.",
          "D": "Todos los riesgos, siempre que sean <span class=\"diff-highlight\">probables</span> <span class=\"diff-highlight\">y</span> graves, en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención."
        }
      },
      {
        "num": 96,
        "idpregunta": 96,
        "pregunta": "96.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, en caso de que la persona paciente no acepte el alta:",
        "opciones": {
          "A": "El personal facultativo, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la dirección del centro para que confirme o revoque la decisión.",
          "B": "El personal facultativo, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la autoridad judicial para que confirme o revoque la decisión.",
          "C": "La dirección del centro, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la autoridad judicial para que confirme o revoque la decisión.",
          "D": "La dirección del centro, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la autoridad administrativa competente para que confirme o revoque la decisión."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "El personal facultativo, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la <span class=\"diff-highlight\">dirección</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">centro</span> para que confirme o revoque la decisión.",
          "B": "El personal facultativo, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la <span class=\"diff-highlight\">autoridad</span> <span class=\"diff-highlight\">judicial</span> para que confirme o revoque la decisión.",
          "C": "La dirección del centro, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la autoridad <span class=\"diff-highlight\">judicial</span> para que confirme o revoque la decisión.",
          "D": "La dirección del centro, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la autoridad <span class=\"diff-highlight\">administrativa</span> <span class=\"diff-highlight\">competente</span> para que confirme o revoque la decisión."
        }
      },
      {
        "num": 97,
        "idpregunta": 97,
        "pregunta": "97.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, la expresión de los objetivos vitales y valores personales tiene como fin:",
        "opciones": {
          "A": "Conocer la voluntad de la persona paciente en relación con la administración de sedación.",
          "B": "Conocer la voluntad de la persona paciente en relación con la finalización de tratamientos de soporte vital.",
          "C": "Ayudar a interpretar las instrucciones y servir de orientación para la toma de decisiones clínicas.",
          "D": "Documentar la actuación del personal profesional sanitario a efectos de responsabilidad legal en situaciones donde la persona paciente no puede expresar su voluntad por sí misma."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 98,
        "idpregunta": 98,
        "pregunta": "98.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, en el documento de voluntades anticipadas:",
        "opciones": {
          "A": "Se podrá designar una o varias personas representantes para que sean las interlocutoras válidas del personal facultativo o del equipo sanitario.",
          "B": "Se podrá designar exclusivamente una persona representante para que sea la interlocutora válida del personal facultativo o del equipo sanitario.",
          "C": "Se podrá designar una o varias personas representantes para que sean las interlocutoras válidas del personal facultativo o del equipo sanitario, si la persona paciente es menor de edad.",
          "D": "Se podrá designar una o varias personas representantes para que sean las interlocutoras válidas del personal facultativo o del equipo sanitario y facultarles para interpretar sus valores e instrucciones, si la persona paciente está incapacitada judicialmente."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Se podrá designar una o varias personas representantes para que sean las interlocutoras válidas del personal facultativo o del equipo sanitario.",
          "B": "Se podrá designar <span class=\"diff-highlight\">exclusivamente</span> <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">persona</span> <span class=\"diff-highlight\">representante</span> para que <span class=\"diff-highlight\">sea</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">interlocutora</span> <span class=\"diff-highlight\">válida</span> del personal facultativo o del equipo sanitario.",
          "C": "Se podrá designar una o varias personas representantes para que sean las interlocutoras válidas del personal facultativo o del equipo sanitario, si la persona paciente <span class=\"diff-highlight\">es</span> <span class=\"diff-highlight\">menor</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">edad</span>.",
          "D": "Se podrá designar una o varias personas representantes para que sean las interlocutoras válidas del personal facultativo o del equipo sanitario <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">facultarles</span> <span class=\"diff-highlight\">para</span> <span class=\"diff-highlight\">interpretar</span> <span class=\"diff-highlight\">sus</span> <span class=\"diff-highlight\">valores</span> <span class=\"diff-highlight\">e</span> <span class=\"diff-highlight\">instrucciones</span>, si la persona paciente <span class=\"diff-highlight\">está</span> <span class=\"diff-highlight\">incapacitada</span> <span class=\"diff-highlight\">judicialmente</span>."
        }
      },
      {
        "num": 99,
        "idpregunta": 99,
        "pregunta": "99.- Según la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, si el nombramiento de representante en el documento de instrucciones previas ha recaído en favor de la persona cónyuge o pareja de hecho de la persona otorgante:",
        "opciones": {
          "A": "Se extingue a partir, bien de la interposición de la demanda de nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en la resolución judicial dictada al efecto.",
          "B": "Se extingue a partir bien de la nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en la resolución judicial dictada al efecto.",
          "C": "Se extingue a partir, bien de la interposición de la demanda de nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en el documento de instrucciones previas.",
          "D": "Se extingue bien a partir de la nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en el documento de instrucciones previas."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Se extingue a partir<span class=\"diff-highlight\">, </span>bien <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">interposición</span> de la <span class=\"diff-highlight\">demanda</span> <span class=\"diff-highlight\">de</span> nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en la resolución judicial dictada al efecto.",
          "B": "Se extingue a partir <span class=\"diff-highlight\">bien</span> de la nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en la resolución judicial dictada al efecto.",
          "C": "Se extingue a partir<span class=\"diff-highlight\">, bien</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">interposición</span> de la <span class=\"diff-highlight\">demanda</span> <span class=\"diff-highlight\">de</span> nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en el documento de instrucciones previas.",
          "D": "Se extingue bien <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">partir</span> de la nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en el documento de instrucciones previas."
        }
      },
      {
        "num": 100,
        "idpregunta": 100,
        "pregunta": "100.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, las instrucciones sobre el tratamiento pueden referirse:",
        "opciones": {
          "A": "A una enfermedad o lesión que la persona otorgante ya padece o a las que eventualmente podría padecer en un futuro.",
          "B": "Exclusivamente a una enfermedad o lesión que la persona otorgante ya padece.",
          "C": "Exclusivamente a una enfermedad o lesión que la persona otorgante eventualmente podría padecer en un futuro",
          "D": "Exclusivamente a una enfermedad o lesión que la persona otorgante eventualmente podría padecer en un futuro, siempre que sea de carácter grave."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 101,
        "idpregunta": 101,
        "pregunta": "101.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, el documento de voluntades anticipadas:",
        "opciones": {
          "A": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas; o ante dos testigos.",
          "B": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas; o ante tres testigos.",
          "C": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o del servicio de documentación de un centro sanitario de la Comunidad Autónoma del País Vasco; o ante dos testigos.",
          "D": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o del servicio de documentación de un centro sanitario de la Comunidad Autónoma del País Vasco; o ante tres testigos."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas; o ante dos testigos.",
          "B": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas; o ante tres testigos.",
          "C": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o del servicio de documentación de un centro sanitario de la Comunidad Autónoma del País Vasco; o ante <span class=\"diff-highlight\">dos</span> testigos.",
          "D": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o del servicio de documentación de un centro sanitario de la Comunidad Autónoma del País Vasco; o ante <span class=\"diff-highlight\">tres</span> testigos."
        }
      },
      {
        "num": 102,
        "idpregunta": 102,
        "pregunta": "102.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, el documento de voluntades anticipadas puede ser modificado, sustituido por otro o revocado en cualquier momento por la persona otorgante:",
        "opciones": {
          "A": "Siempre que conserve la capacidad o actúe con la asistencia de su representante legal y actúe libremente.",
          "B": "Siempre que conserve la capacidad o exista autorización judicial.",
          "C": "Siempre que actúe libremente.",
          "D": "Siempre que conserve la capacidad y actúe libremente."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 103,
        "idpregunta": 103,
        "pregunta": "103.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, la voluntad de la persona prevalece sobre las instrucciones contenidas en el documento de voluntades anticipadas ante cualquier intervención clínica siempre que:",
        "opciones": {
          "A": "La persona otorgante conserve su capacidad y su libertad de actuación.",
          "B": "La persona otorgante conserve su capacidad, su libertad de actuación y la posibilidad de expresarse.",
          "C": "La persona otorgante conserve su capacidad, su libertad de actuación y la posibilidad de expresarse de manera inequívoca.",
          "D": "La persona otorgante conserve su capacidad, su libertad de actuación y la posibilidad de expresarse de manera inequívoca o a través de la persona interlocutora designada al efecto."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 104,
        "idpregunta": 104,
        "pregunta": "104.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, en el documento de voluntades anticipadas se tendrán por no puestas:",
        "opciones": {
          "A": "Las instrucciones que en el momento de ser aplicadas resulten contrarias al ordenamiento jurídico.",
          "B": "Las instrucciones que en el momento de ser otorgadas resulten contrarias al ordenamiento jurídico.",
          "C": "Las respuestas a) y b) son correctas.",
          "D": "Las instrucciones que en el momento de ser aplicadas no se aprueben por el comité de ética del centro."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 105,
        "idpregunta": 105,
        "pregunta": "105.- Según dispone la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, podrán tener acceso a los datos personales de las personas fallecidas:",
        "opciones": {
          "A": "Las personas vinculadas a la persona fallecida por razones familiares o de hecho así como quienes ostenten la condición de herederas, en todo caso.",
          "B": "Solo las personas vinculadas a la persona fallecida por razones familiares siempre que lo hubiera autorizado expresamente la persona fallecida.",
          "C": "Las personas vinculadas a la persona fallecida por razones familiares o de hecho así como quienes ostenten la condición de herederas, salvo que la persona fallecida lo hubiese prohibido expresamente.",
          "D": "En caso de que la persona fallecida fuera menor de edad, el acceso podrá ejercerse también por sus representantes legales o por el Ministerio Fiscal que siempre actuará de oficio."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Las personas vinculadas a la persona fallecida por razones familiares o de hecho así como quienes ostenten la condición de herederas, <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">todo</span> <span class=\"diff-highlight\">caso</span>.",
          "B": "<span class=\"diff-highlight\">Solo</span> las personas vinculadas a la persona fallecida por razones familiares <span class=\"diff-highlight\">siempre</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">lo</span> <span class=\"diff-highlight\">hubiera</span> <span class=\"diff-highlight\">autorizado</span> <span class=\"diff-highlight\">expresamente</span> la persona fallecida.",
          "C": "Las personas vinculadas a la persona fallecida por razones familiares o de hecho así como quienes ostenten la condición de herederas, <span class=\"diff-highlight\">salvo</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">persona</span> <span class=\"diff-highlight\">fallecida</span> <span class=\"diff-highlight\">lo</span> <span class=\"diff-highlight\">hubiese</span> <span class=\"diff-highlight\">prohibido</span> <span class=\"diff-highlight\">expresamente</span>.",
          "D": "<span class=\"diff-highlight\">En</span> <span class=\"diff-highlight\">caso</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">que</span> la persona fallecida <span class=\"diff-highlight\">fuera</span> <span class=\"diff-highlight\">menor</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">edad, el</span> <span class=\"diff-highlight\">acceso</span> <span class=\"diff-highlight\">podrá</span> <span class=\"diff-highlight\">ejercerse</span> <span class=\"diff-highlight\">también</span> por <span class=\"diff-highlight\">sus</span> <span class=\"diff-highlight\">representantes</span> <span class=\"diff-highlight\">legales</span> <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">por</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">Ministerio</span> <span class=\"diff-highlight\">Fiscal</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">siempre</span> <span class=\"diff-highlight\">actuará</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">oficio</span>."
        }
      },
      {
        "num": 106,
        "idpregunta": 106,
        "pregunta": "106.- Señale la respuesta que no es correcta. Según la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales a efectos del tratamiento de los datos, el consentimiento de la persona afectada tiene que ser una manifestación de voluntad que cumpla las siguientes características:",
        "opciones": {
          "A": "Libre.",
          "B": "Verbal.",
          "C": "Específica.",
          "D": "Informada."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 107,
        "idpregunta": 107,
        "pregunta": "107.- Con relación al tratamiento de los datos personales de una persona menor de edad, señale la respuesta correcta:",
        "opciones": {
          "A": "Únicamente podrá fundarse en su consentimiento cuando sea mayor de dieciséis años.",
          "B": "La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales no prevé que las personas menores de edad puedan dar su consentimiento válidamente a estos efectos.",
          "C": "Únicamente podrá fundarse en su consentimiento cuando sea mayor de catorce años.",
          "D": "El tratamiento de los datos de las personas menores de dieciséis años, fundado en el consentimiento, solo será lícito si consta el consentimiento de quienes ejercen la patria potestad o tutela, con el alcance que dichas personas determinen."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 108,
        "idpregunta": 108,
        "pregunta": "108.- La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, en su artículo 9 considera categorías especiales de datos aquellos que permitan, respecto a la persona afectada, identificar:",
        "opciones": {
          "A": "Su ideología y afiliación sindical.",
          "B": "Su religión y orientación sexual .",
          "C": "Sus creencias u origen racial o étnico.",
          "D": "Todas las respuestas son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 109,
        "idpregunta": 109,
        "pregunta": "109.- La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales establece que el tratamiento de datos de naturaleza penal podrá llevarse a cabo:",
        "opciones": {
          "A": "Solo por profesionales de la abogacía y cuando tengan por objeto recoger la información facilitada por quienes les contraten para el ejercicio de sus funciones.",
          "B": "Por profesionales de la abogacía y de la procura, cuando tengan por objeto recoger la información facilitada por quienes les contraten para el ejercicio de sus funciones.",
          "C": "En los casos previstos por la propia Ley Orgánica 3/2018 y en otras normas de rango reglamentario.",
          "D": "Exclusivamente en los supuestos amparados en una norma de Derecho de la Unión y en la propia Ley Orgánica 2/2018."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "<span class=\"diff-highlight\">Solo</span> por profesionales de la abogacía y cuando tengan por objeto recoger la información facilitada por quienes les contraten para el ejercicio de sus funciones.",
          "B": "Por profesionales de la abogacía y <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">procura, </span>cuando tengan por objeto recoger la información facilitada por quienes les contraten para el ejercicio de sus funciones.",
          "C": "En los <span class=\"diff-highlight\">casos</span> <span class=\"diff-highlight\">previstos</span> <span class=\"diff-highlight\">por</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">propia</span> <span class=\"diff-highlight\">Ley</span> <span class=\"diff-highlight\">Orgánica</span> <span class=\"diff-highlight\">3/2018</span> y en <span class=\"diff-highlight\">otras</span> <span class=\"diff-highlight\">normas</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">rango</span> <span class=\"diff-highlight\">reglamentario</span>.",
          "D": "<span class=\"diff-highlight\">Exclusivamente</span> en los <span class=\"diff-highlight\">supuestos</span> <span class=\"diff-highlight\">amparados</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">norma</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">Derecho</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">Unión</span> y en <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">propia</span> <span class=\"diff-highlight\">Ley</span> <span class=\"diff-highlight\">Orgánica</span> <span class=\"diff-highlight\">2/2018</span>."
        }
      },
      {
        "num": 110,
        "idpregunta": 110,
        "pregunta": "110.- Respecto al derecho de rectificación que regula la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, señale la respuesta correcta:",
        "opciones": {
          "A": "La persona afectada deberá indicar en su solicitud a qué datos se refiere y deberá acompañar, en todo caso, la documentación justificativa de la inexactitud de los datos.",
          "B": "La persona afectada deberá indicar en su solicitud a qué datos se refiere y la corrección que haya de realizarse, y cuando sea preciso, deberá acompañar la documentación justificativa de la inexactitud o carácter incompleto de los datos objeto de tratamiento.",
          "C": "La persona afectada deberá indicar en su solicitud solo la corrección que haya de realizarse y debe siempre acompañar la documentación justificativa de la inexactitud de los datos.",
          "D": "No es necesario que la persona afectada indique expresamente en su solicitud qué datos deben rectificarse."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "La persona afectada deberá indicar en su solicitud a qué datos se refiere y <span class=\"diff-highlight\">deberá</span> <span class=\"diff-highlight\">acompañar</span>, <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">todo</span> <span class=\"diff-highlight\">caso</span>, la documentación justificativa de la inexactitud de los datos.",
          "B": "La persona afectada deberá indicar en su solicitud <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">qué</span> <span class=\"diff-highlight\">datos</span> <span class=\"diff-highlight\">se</span> <span class=\"diff-highlight\">refiere</span> <span class=\"diff-highlight\">y</span> la corrección que haya de realizarse<span class=\"diff-highlight\">, </span>y <span class=\"diff-highlight\">cuando</span> <span class=\"diff-highlight\">sea</span> <span class=\"diff-highlight\">preciso, deberá</span> acompañar la documentación justificativa de la inexactitud <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">carácter</span> <span class=\"diff-highlight\">incompleto</span> de los datos <span class=\"diff-highlight\">objeto</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">tratamiento</span>.",
          "C": "La persona afectada deberá indicar en su solicitud <span class=\"diff-highlight\">solo</span> la corrección que haya de realizarse <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">debe</span> <span class=\"diff-highlight\">siempre</span> acompañar la documentación justificativa de la inexactitud de los datos.",
          "D": "<span class=\"diff-highlight\">No</span> <span class=\"diff-highlight\">es</span> <span class=\"diff-highlight\">necesario</span> <span class=\"diff-highlight\">que</span> la persona afectada <span class=\"diff-highlight\">indique</span> <span class=\"diff-highlight\">expresamente</span> en su solicitud qué datos <span class=\"diff-highlight\">deben</span> <span class=\"diff-highlight\">rectificarse</span>."
        }
      },
      {
        "num": 111,
        "idpregunta": 111,
        "pregunta": "111.- Con relación al tratamiento de datos con fines de videovigilancia, señale la respuesta correcta:",
        "opciones": {
          "A": "Solo las personas físicas podrán llevar a cabo el tratamiento de imágenes a través de sistemas de cámaras o videocámaras con la finalidad de preservar la seguridad de las personas y bienes, así como sus instalaciones.",
          "B": "Los datos serán suprimidos, en todo caso, en el plazo máximo de un mes desde su captación.",
          "C": "Los datos serán suprimidos en el plazo máximo de un mes desde su captación, salvo cuando hubieran de ser conservados para acreditar la comisión de actos que atenten contra la integridad de personas, bienes o instalaciones.",
          "D": "En el caso de que los datos hubieran de ser conservados más allá del plazo de un mes desde su captación para acreditar la comisión de actos que atenten contra la integridad de personas, bienes o instalaciones, deberán ser puestas a disposición de la autoridad competente en un plazo máximo de cuarenta y ocho horas desde que se tuviera conocimiento de la existencia de la grabación."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "<span class=\"diff-highlight\">Solo</span> <span class=\"diff-highlight\">las</span> <span class=\"diff-highlight\">personas</span> <span class=\"diff-highlight\">físicas</span> <span class=\"diff-highlight\">podrán</span> <span class=\"diff-highlight\">llevar</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">cabo</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">tratamiento</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">imágenes</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">través</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">sistemas</span> de <span class=\"diff-highlight\">cámaras</span> <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">videocámaras</span> <span class=\"diff-highlight\">con</span> la <span class=\"diff-highlight\">finalidad</span> de <span class=\"diff-highlight\">preservar</span> la <span class=\"diff-highlight\">seguridad</span> de <span class=\"diff-highlight\">las</span> personas <span class=\"diff-highlight\">y</span> bienes<span class=\"diff-highlight\">, así</span> <span class=\"diff-highlight\">como</span> <span class=\"diff-highlight\">sus</span> instalaciones.",
          "B": "Los datos serán suprimidos<span class=\"diff-highlight\">, en</span> <span class=\"diff-highlight\">todo</span> <span class=\"diff-highlight\">caso, </span>en el plazo máximo de un mes desde su captación.",
          "C": "Los datos <span class=\"diff-highlight\">serán</span> <span class=\"diff-highlight\">suprimidos</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">el</span> plazo <span class=\"diff-highlight\">máximo</span> de un mes desde su captación<span class=\"diff-highlight\">, salvo</span> <span class=\"diff-highlight\">cuando</span> <span class=\"diff-highlight\">hubieran</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">ser</span> <span class=\"diff-highlight\">conservados</span> para acreditar la comisión de actos que atenten contra la integridad de personas, bienes o instalaciones.",
          "D": "<span class=\"diff-highlight\">En</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">caso</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">que</span> los datos <span class=\"diff-highlight\">hubieran</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">ser</span> <span class=\"diff-highlight\">conservados</span> <span class=\"diff-highlight\">más</span> <span class=\"diff-highlight\">allá</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">plazo</span> de un mes desde su captación para acreditar la comisión de actos que atenten contra la integridad de personas, bienes o instalaciones<span class=\"diff-highlight\">, deberán</span> <span class=\"diff-highlight\">ser</span> <span class=\"diff-highlight\">puestas</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">disposición</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">autoridad</span> <span class=\"diff-highlight\">competente</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">un</span> <span class=\"diff-highlight\">plazo</span> <span class=\"diff-highlight\">máximo</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">cuarenta</span> <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">ocho</span> <span class=\"diff-highlight\">horas</span> <span class=\"diff-highlight\">desde</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">se</span> <span class=\"diff-highlight\">tuviera</span> <span class=\"diff-highlight\">conocimiento</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">existencia</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">grabación</span>."
        }
      },
      {
        "num": 112,
        "idpregunta": 112,
        "pregunta": "112.- Respecto a los sistemas de información de denuncias internas que contempla la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, es correcta la siguiente afirmación:",
        "opciones": {
          "A": "En todo caso, transcurridos tres meses desde la introducción de los datos, deberá procederse a su supresión del sistema de denuncias, salvo que la finalidad de la conservación sea dejar evidencia del funcionamiento del modelo de prevención de la comisión de delitos.",
          "B": "En todo caso, transcurridos seis meses desde la introducción de los datos, deberá procederse a su supresión del sistema de denuncias, salvo que la finalidad de la conservación sea dejar evidencia del funcionamiento del modelo de prevención de la comisión de delitos.",
          "C": "En todo caso, y sin excepción, transcurridos seis meses desde la introducción de los datos, deberá procederse a su supresión del sistema de denuncias.",
          "D": "La Ley no prevé plazo temporal alguno para la supresión de los datos del sistema de denuncias."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "En todo caso, transcurridos <span class=\"diff-highlight\">tres</span> meses desde la introducción de los datos, deberá procederse a su supresión del sistema de denuncias, salvo que la finalidad de la conservación sea dejar evidencia del funcionamiento del modelo de prevención de la comisión de delitos.",
          "B": "En todo caso, transcurridos <span class=\"diff-highlight\">seis</span> meses desde la introducción de los datos, deberá procederse a su supresión del sistema de denuncias, salvo que la finalidad de la conservación sea dejar evidencia del funcionamiento del modelo de prevención de la comisión de delitos.",
          "C": "En todo caso<span class=\"diff-highlight\">, y</span> <span class=\"diff-highlight\">sin</span> <span class=\"diff-highlight\">excepción</span>, transcurridos seis meses desde la introducción de los datos, deberá procederse a su supresión del sistema de denuncias.",
          "D": "<span class=\"diff-highlight\">La</span> <span class=\"diff-highlight\">Ley</span> <span class=\"diff-highlight\">no</span> <span class=\"diff-highlight\">prevé</span> <span class=\"diff-highlight\">plazo</span> <span class=\"diff-highlight\">temporal</span> <span class=\"diff-highlight\">alguno</span> <span class=\"diff-highlight\">para</span> la <span class=\"diff-highlight\">supresión</span> de los datos del sistema de denuncias."
        }
      },
      {
        "num": 113,
        "idpregunta": 113,
        "pregunta": "113.- El artículo 1 del Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, añade un concepto específico al objeto de la ley que refuerza el fin último de la norma, ¿cuál es?",
        "opciones": {
          "A": "La igualdad de oportunidades.",
          "B": "El empoderamiento de las mujeres.",
          "C": "Lograr una sociedad libre de violencia machista.",
          "D": "La eliminación de roles tradicionales."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 114,
        "idpregunta": 114,
        "pregunta": "114.- Según el artículo 2 del Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, ¿a qué entidades privadas les es exigible el cumplimiento de los principios generales de esta ley durante su relación con la administración?",
        "opciones": {
          "A": "Solo a las que tengan una plantilla superior a 250 personas.",
          "B": "A todas las empresas con sede en Euskadi.",
          "C": "A las que suscriban contratos o convenios, estén participadas por poderes públicos o sean beneficiarias de ayudas.",
          "D": "Ninguna entidad privada está sujeta a los principios de la ley."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 115,
        "idpregunta": 115,
        "pregunta": "115.- Según el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, ¿cuál de estos es un principio general de actuación de los poderes públicos vascos incorporado en la nueva redacción del artículo 3?",
        "opciones": {
          "A": "El principio de jerarquía administrativa.",
          "B": "La integración de la perspectiva interseccional.",
          "C": "El principio de celeridad procesal.",
          "D": "La centralización de recursos de acogida."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 116,
        "idpregunta": 116,
        "pregunta": "116.- Según el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, respecto al principio de representación equilibrada, ¿en qué caso se permite excepcionalmente una presencia de mujeres superior al 60%?",
        "opciones": {
          "A": "En ningún caso.",
          "B": "Solo si no hay hombres capacitados en el sector.",
          "C": "Cuando sea acorde al objetivo de corregir la histórica situación de infrarrepresentación de las mujeres.",
          "D": "Si el órgano tiene menos de cuatro integrantes."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 117,
        "idpregunta": 117,
        "pregunta": "117.- Según el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, ¿qué planes específicos deben someterse ahora, obligatoriamente, a una evaluación previa de impacto en función del género?",
        "opciones": {
          "A": "Solo los planes de formación interna.",
          "B": "Los planes territoriales y urbanísticos.",
          "C": "Los planes de marketing de empresas públicas.",
          "D": "Ningún plan, solo los proyectos de ley."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 118,
        "idpregunta": 118,
        "pregunta": "118.- Según el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, ¿qué requisito nuevo deben cumplir las empresas de más de 50 personas trabajadoras para poder recibir subvenciones públicas?",
        "opciones": {
          "A": "Tener paridad total en su directiva.",
          "B": "Acreditar haber establecido medidas para prevenir y combatir el acoso sexual y las violencias sexuales.",
          "C": "Tener un departamento exclusivo de igualdad.",
          "D": "Estar inscritas en un registro internacional de igualdad."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 119,
        "idpregunta": 119,
        "pregunta": "119.- De acuerdo con lo establecido en el artículo 54 del texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, aprobado por el Decreto Legislativo 1/2023, de 16 de marzo, ¿cómo se define la 'violencia machista contra las mujeres'?",
        "opciones": {
          "A": "Solo la violencia física en el hogar.",
          "B": "Una violación de los derechos humanos y un problema de salud pública de primer orden.",
          "C": "Únicamente los delitos contra la libertad sexual.",
          "D": "Un conflicto de convivencia familiar."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 120,
        "idpregunta": 120,
        "pregunta": "120.- De acuerdo con lo establecido en el artículo 54.3 del texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, aprobado por el Decreto Legislativo 1/2023, de 16 de marzo, ¿qué formas de violencia se incorporan como casos constitutivos de violencia machista por estar específicamente recogidos en dicho apartado?",
        "opciones": {
          "A": "Solo la violencia física y psicológica.",
          "B": "La violencia obstétrica, la política de género y la violencia digital.",
          "C": "Únicamente el acoso laboral.",
          "D": "No se detallan formas, se remite al Código Penal."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 121,
        "idpregunta": 121,
        "pregunta": "121.- ¿Cuántos Objetivos Generales, clasificados como finalistas e instrumentales, se definen en la estructura del Plan de Salud Euskadi 2030?",
        "opciones": {
          "A": "Cinco Objetivos Generales.",
          "B": "Seis Objetivos Generales.",
          "C": "Siete Objetivos Generales.",
          "D": "Ocho Objetivos Generales."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 122,
        "idpregunta": 122,
        "pregunta": "122.- Según el Plan de Salud Euskadi 2030, la VISIÓN que se aspira a lograr como país es:",
        "opciones": {
          "A": "Convertirnos en el sistema de salud pública más sólido y resiliente de Europa.",
          "B": "Liderar una Euskadi más saludable.",
          "C": "Reducir la morbimortalidad evitable y disminuir las desigualdades en salud antes de 2030.",
          "D": "Lograr la sostenibilidad y excelencia en los sistemas asistenciales sanitarios y sociosanitarios."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 123,
        "idpregunta": 123,
        "pregunta": "123.- ¿Cuál de los siguientes NO es un principio rector en los que se apoya el Plan de Salud Euskadi 2030?",
        "opciones": {
          "A": "La necesaria coordinación y colaboración interinstitucional, entre agentes y en todos los niveles.",
          "B": "Enfoque de Salud en Todas las Políticas y 'Una Sola Salud' ('One Health').",
          "C": "La autosuficiencia presupuestaria del Sistema Sanitario Público.",
          "D": "Contribución al Desarrollo Sostenible."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 124,
        "idpregunta": 124,
        "pregunta": "124.- El Objetivo General 1 (OG1) del Plan de Salud Euskadi 2030 se enfoca en:",
        "opciones": {
          "A": "Promover la salud de las mujeres y la salud reproductiva en la edad adulta.",
          "B": "Lograr que niñas, niños y adolescentes nazcan, crezcan y se desarrollen con todo su potencial de salud.",
          "C": "Mejorar la salud mental y reducir la morbimortalidad asociada a trastornos mentales.",
          "D": "La prevención y el control de las enfermedades no transmisibles (ENT)."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 125,
        "idpregunta": 125,
        "pregunta": "125.- El Objetivo General 4 (OG4) del Plan de Salud Euskadi 2030 se define como “lograr la sostenibilidad y excelencia en los sistemas asistenciales sanitarios y sociosanitarios de Euskadi”, ¿en términos de qué tres conceptos clave?",
        "opciones": {
          "A": "Eficiencia, accesibilidad e innovación.",
          "B": "Calidad, humanización y seguridad.",
          "C": "Equidad, intersectorialidad y coordinación.",
          "D": "Investigación, formación y evaluación."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 126,
        "idpregunta": 126,
        "pregunta": "126.- ¿A qué hace referencia el acrónimo AVAD en el Plan de Salud Euskadi 2030?",
        "opciones": {
          "A": "Áreas de Valoración de la Atención al Dependiente.",
          "B": "Años de Vida Activa Desaprovechados.",
          "C": "Atención Vasca a la Adicción a Drogas.",
          "D": "Años de Vida sana perdidos Ajustados por Discapacidad."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 127,
        "idpregunta": 127,
        "pregunta": "127.- ¿Cuál es uno de los objetivos clave del Plan de Salud Euskadi 2030, reiterado en varias secciones, respecto a la equidad y la gestión de la enfermedad?",
        "opciones": {
          "A": "Garantizar la participación de la empresa privada en la gestión de servicios hospitalarios.",
          "B": "Aumentar la esperanza de vida en 5 años en todos los colectivos sociales.",
          "C": "Reducir la morbimortalidad evitable y disminuir las desigualdades en salud.",
          "D": "Implementar un programa de cribado universal para todos los tipos de cáncer."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 128,
        "idpregunta": 128,
        "pregunta": "128.- ¿Qué enfoque de investigación prioriza el Plan de Salud Euskadi 2030 para asegurar que los avances científicos lleguen de forma efectiva a la práctica clínica y la salud de la población?",
        "opciones": {
          "A": "Enfoque de investigación básica y fundamental.",
          "B": "Enfoque de investigación traslacional.",
          "C": "Enfoque de investigación puramente epidemiológica.",
          "D": "Enfoque de investigación competitiva internacional."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 129,
        "idpregunta": 129,
        "pregunta": "129.- Según el modelo de evaluación del Plan de Salud Euskadi 2030, ¿cuáles son los cuatro criterios fundamentales para determinar el éxito de las intervenciones?",
        "opciones": {
          "A": "Impacto, cobertura, equidad y transparencia.",
          "B": "Relevancia, efectividad, eficiencia y sostenibilidad.",
          "C": "Rentabilidad, participación, innovación y prestigio.",
          "D": "Calidad, calidez, rapidez y ahorro presupuestario."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 130,
        "idpregunta": 130,
        "pregunta": "130.- En la lucha contra las desigualdades, ¿qué tipo de soluciones habitacionales promueve el Plan de Salud Euskadi 2030 para las diferentes etapas de la vida?",
        "opciones": {
          "A": "Construcción de viviendas de protección oficial exclusivamente rurales.",
          "B": "Soluciones habitacionales asequibles, accesibles y adaptadas al ciclo vital.",
          "C": "Ayudas directas al alquiler únicamente para personas menores de 30 años",
          "D": "Fomento de grandes centros residenciales para todas las personas con enfermedades crónicas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 131,
        "idpregunta": 131,
        "pregunta": "131.- Según la comparativa de la Memoria Económica del Plan de Salud Euskadi 2030, ¿cuál es el programa presupuestario (fuera del gasto general de Osakidetza) con mayor dotación?",
        "opciones": {
          "A": "Programa de Salud Pública.",
          "B": "Programa de Farmacia.",
          "C": "Programa de Adicciones.",
          "D": "Programa de Investigación y Planificación."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 132,
        "idpregunta": 132,
        "pregunta": "132.- El Plan de Salud Euskadi 2030 busca lograr 'comunidades amigables' para las personas mayores. ¿Cuál es la finalidad última de esta estrategia?",
        "opciones": {
          "A": "Segregar los espacios públicos por franjas de edad.",
          "B": "Adaptar el entorno físico y social para fomentar un envejecimiento activo y con sentido.",
          "C": "Aumentar el número de plazas en residencias geriátricas de alta especialización.",
          "D": "Limitar el acceso de vehículos a las zonas cercanas a los centros de salud."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 133,
        "idpregunta": 133,
        "pregunta": "133.- En el ámbito de la salud digital, ¿qué concepto destaca el Plan de Salud Euskadi 2030 para transformar la atención personalizada?",
        "opciones": {
          "A": "La teleasistencia robótica obligatoria en todos los domicilios.",
          "B": "La medicina de precisión y la integración de datos genómicos.",
          "C": "La eliminación definitiva de la historia clínica en papel en favor del PDF.",
          "D": "La creación de una red social exclusiva para pacientes crónicos/as."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 134,
        "idpregunta": 134,
        "pregunta": "134.- ¿Cómo define el Plan de Salud Euskadi 2030 el concepto de 'Intersectorialidad' en la gestión de la salud?",
        "opciones": {
          "A": "La competencia entre diferentes sectores para obtener fondos públicos.",
          "B": "La colaboración entre departamentos del Gobierno para que la salud esté en todas las políticas.",
          "C": "La privatización de sectores sanitarios no críticos.",
          "D": "La creación de un único departamento que gestione salud, educación y vivienda."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 135,
        "idpregunta": 135,
        "pregunta": "135.- ¿Cuál es la visión del Plan de Salud Euskadi 2030 sobre el uso de la evidencia científica en la toma de decisiones políticas?",
        "opciones": {
          "A": "Es un elemento opcional supeditado a la oportunidad política.",
          "B": "Es la base fundamental para el diseño, implementación y evaluación de las políticas de salud.",
          "C": "Solo se debe aplicar en casos de alertas sanitarias internacionales.",
          "D": "Se reserva exclusivamente para el ámbito académico, no para el legislativo."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 136,
        "idpregunta": 136,
        "pregunta": "136.- Según el análisis del contexto social del documento de Diagnóstico del Pacto Vasco de Salud de Euskadi, ¿qué factor se identifica como un motor clave para que la ciudadanía del siglo XXI demande un papel más activo en su salud?",
        "opciones": {
          "A": "El incremento exclusivo de la esperanza de vida al nacer.",
          "B": "El acceso generalizado a la información y un mayor nivel educativo en la CAPV.",
          "C": "La reducción drástica de las listas de espera en consultas externas.",
          "D": "La implementación de la receta electrónica en todas las farmacias."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 137,
        "idpregunta": 137,
        "pregunta": "137.- El documento de Diagnóstico del Pacto Vasco de Salud de Euskadi señala que los flujos migratorios actuales en Euskadi:",
        "opciones": {
          "A": "No tienen impacto relevante en el perfil epidemiológico de la comunidad.",
          "B": "Revelan patologías anteriormente poco conocidas en nuestro entorno, pero prevalentes en otras latitudes.",
          "C": "Se limitan exclusivamente a personas en edad laboral con excelente estado de salud inicial.",
          "D": "Han provocado la saturación irreversible de los servicios de urgencias hospitalarias."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 138,
        "idpregunta": 138,
        "pregunta": "138.- ¿Cuál es uno de los principales desafíos identificados en el documento de Diagnóstico del Pacto Vasco de Salud de Euskadi respecto a la formación y relevo del personal sanitario?",
        "opciones": {
          "A": "La excesiva oferta de plazas MIR en todas las especialidades médicas.",
          "B": "La falta de interés de las nuevas generaciones por las profesiones biosanitarias.",
          "C": "La necesidad de planificar el relevo ante la jubilación de cohortes numerosas de profesionales.",
          "D": "La prohibición de la formación continua dentro del horario laboral."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 139,
        "idpregunta": 139,
        "pregunta": "139.- Sobre el impacto del cambio global y climático, el documento de Diagnóstico del Pacto Vasco de Salud de Euskadi advierte de la aparición de:",
        "opciones": {
          "A": "Patologías ligadas exclusivamente al consumo de alimentos ultraprocesados.",
          "B": "Nuevos vectores y virus anteriormente inexistentes en nuestro entorno, como el virus del Nilo.",
          "C": "Una disminución natural de las enfermedades respiratorias debido al aumento de temperaturas.",
          "D": "La erradicación total de las enfermedades infecciosas estacionales."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 140,
        "idpregunta": 140,
        "pregunta": "140.- El documento de Diagnóstico del Pacto Vasco de Salud de Euskadi propone que los indicadores sanitarios para evaluar el sistema deben:",
        "opciones": {
          "A": "Basarse exclusivamente en mediciones de actividad (número de consultas y cirugías).",
          "B": "Ser confidenciales y accesibles únicamente para la alta dirección del Departamento de Salud.",
          "C": "Ignorar la perspectiva de género para simplificar la toma de datos estadísticos.",
          "D": "Reflejar resultados en salud y sostenibilidad, y no solo volumen de actividad."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 141,
        "idpregunta": 141,
        "pregunta": "141.- ¿Cuál es la finalidad principal de los Valores Fundamentales del Pacto Vasco de Salud, según el Libro de Valores y principios?",
        "opciones": {
          "A": "Ser la base para la elaboración del futuro Plan Estratégico de Osakidetza.",
          "B": "Establecer la estructura financiera y la autonomía de gestión del sistema de salud.",
          "C": "Ser el fundamento ético y social que soporta la actividad del Sistema Público de Salud de Euskadi.",
          "D": "Garantizar la cobertura universal únicamente a la ciudadanía vasca empadronada."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 142,
        "idpregunta": 142,
        "pregunta": "142.- ¿Cuál de los siguientes es un Valor Fundamental explícito del Pacto Vasco de Salud, además de la Universalidad y la Equidad?",
        "opciones": {
          "A": "La Sostenibilidad del sistema.",
          "B": "La Eficiencia en el gasto.",
          "C": "La Corresponsabilidad.",
          "D": "El Plurilingüismo como eje central de la atención."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 143,
        "idpregunta": 143,
        "pregunta": "143.- El principio de Innovación en el Pacto Vasco de Salud se aplica a:",
        "opciones": {
          "A": "Exclusivamente a la aplicación de nuevas tecnologías de imagen médica.",
          "B": "La I+D+i en todas las fases y dimensiones de la salud, incluyendo la organizativa y la asistencial.",
          "C": "La importación de modelos de éxito de otros sistemas sanitarios europeos.",
          "D": "La digitalización de la historia clínica en Osakidetza."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 144,
        "idpregunta": 144,
        "pregunta": "144.- En el marco del Pacto Vasco de Salud, dentro de los principios rectores, la 'Orientación al Valor' significa que el sistema debe priorizar:",
        "opciones": {
          "A": "Las intervenciones que generen los mejores resultados relevantes para la persona al menor coste posible.",
          "B": "El valor de mercado de las acciones de las empresas proveedoras de tecnología.",
          "C": "El incremento constante de las infraestructuras físicas sobre la inversión en personal.",
          "D": "La compra masiva de medicamentos de marca sobre los genéricos."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 145,
        "idpregunta": 145,
        "pregunta": "145.- ¿En qué grandes ámbitos se estructuran las Líneas Estratégicas del Pacto Vasco de Salud?",
        "opciones": {
          "A": "Cinco Líneas Estratégicas. prevención y promoción de la salud; atención a la enfermedad; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y Gobernanza.",
          "B": "Seis Líneas Estratégicas: prevención y promoción de la salud; atención a la enfermedad; áreas prioritarias de salud; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y transparencia y participación ciudadana.",
          "C": "Seis Líneas Estratégicas: prevención y promoción de la salud; atención a la enfermedad; áreas prioritarias de salud; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y gobernanza.",
          "D": "Seis Líneas Estratégicas: prevención y promoción de la salud; atención sociosanitaria; áreas prioritarias de salud; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y gobernanza."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "<span class=\"diff-highlight\">Cinco</span> Líneas Estratégicas<span class=\"diff-highlight\">. </span>prevención y promoción de la salud; atención a la enfermedad; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y Gobernanza.",
          "B": "Seis Líneas Estratégicas: prevención y promoción de la salud; atención a la enfermedad; áreas prioritarias de salud; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y <span class=\"diff-highlight\">transparencia</span> <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">participación</span> <span class=\"diff-highlight\">ciudadana</span>.",
          "C": "Seis Líneas Estratégicas: prevención y promoción de la salud; atención a la enfermedad; áreas prioritarias de salud; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y <span class=\"diff-highlight\">gobernanza</span>.",
          "D": "Seis Líneas Estratégicas: prevención y promoción de la salud; atención <span class=\"diff-highlight\">sociosanitaria</span>; áreas prioritarias de salud; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y gobernanza."
        }
      },
      {
        "num": 146,
        "idpregunta": 146,
        "pregunta": "146.- ¿Cuál es el papel de la Atención Primaria y Comunitaria dentro de las Líneas Estratégicas del Pacto Vasco de Salud?",
        "opciones": {
          "A": "Actuar como un servicio de triaje rápido para derivar todos los casos al hospital.",
          "B": "Ser un servicio opcional para quienes no dispongan de seguro privado.",
          "C": "Limitarse a la atención administrativa y la gestión de bajas laborales.",
          "D": "Ser la base estratégica que cohesione y sustente todo el sistema de salud vasco."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 147,
        "idpregunta": 147,
        "pregunta": "147.- En relación con la Línea Estratégica 06 sobre 'Cronicidad' del Pacto Vasco de Salud, ¿qué objetivo se persigue primordialmente?",
        "opciones": {
          "A": "Institucionalizar a todas las personas con enfermedades crónicas en centros especializados.",
          "B": "Reforzar la autonomía y corresponsabilidad de las personas con enfermedades crónicas.",
          "C": "Sustituir las consultas médicas presenciales por seguimiento telefónico automático.",
          "D": "Reducir la cobertura de medicamentos para patologías de larga duración."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 148,
        "idpregunta": 148,
        "pregunta": "148.- La Línea Estratégica 07 sobre 'Atención Sociosanitaria' del Pacto Vasco de Salud subraya la necesidad de:",
        "opciones": {
          "A": "Separar definitivamente las competencias de Salud de las de Servicios Sociales.",
          "B": "Mejorar la coordinación y el tránsito de las personas entre el sistema sanitario y el social.",
          "C": "Eliminar las ayudas a la dependencia para fomentar el ahorro público.",
          "D": "Obligar a las personas pacientes a elegir entre atención médica o apoyo social."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 149,
        "idpregunta": 149,
        "pregunta": "149.- Respecto a la 'Salud Mental' (Línea 11), el Pacto Vasco de Salud pone el foco en:",
        "opciones": {
          "A": "La promoción del bienestar emocional y la detección precoz, especialmente en jóvenes.",
          "B": "El aislamiento preventivo de las personas con trastornos mentales graves.",
          "C": "La medicalización sistemática de cualquier malestar emocional de la ciudadanía.",
          "D": "La reducción de la plantilla de psicología en los centros de salud primaria."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 150,
        "idpregunta": 150,
        "pregunta": "150.- La Línea Estratégica 18 sobre 'Digitalización en Salud' del Pacto Vasco de Salud busca la transformación digital para:",
        "opciones": {
          "A": "Reemplazar al personal sanitario por sistemas de inteligencia artificial autónomos.",
          "B": "Eliminar el papel de todos los archivos históricos sin digitalizar previamente.",
          "C": "Facilitar la accesibilidad, la personalización de la atención y la eficiencia organizativa.",
          "D": "Crear una base de datos pública con el historial clínico de toda la ciudadanía."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 151,
        "idpregunta": 151,
        "pregunta": "151.- ¿Cuál es el Objetivo General establecido para la “Estrategia de Seguridad del Paciente 20-30”?",
        "opciones": {
          "A": "Reducir a cero los eventos adversos mediante la incorporación de tecnología robótica.",
          "B": "Mejorar la calidad asistencial del sistema sanitario vasco.",
          "C": "Promover el máximo nivel de seguridad posible, minimizando la probabilidad de ocurrencia de incidentes de seguridad en el transcurso de la asistencia sanitaria.",
          "D": "Centralizar la gestión de riesgos en un único organismo fuera de Osakidetza."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 152,
        "idpregunta": 152,
        "pregunta": "152.- El principio hipocrático al que se hace referencia en la “Estrategia de Seguridad del Paciente 20-30”, y que la ciudadanía asume que se verifica en el transcurso de la actividad asistencial, es:",
        "opciones": {
          "A": "Salus populi suprema lex esto (la salud del pueblo es la ley suprema).",
          "B": "Corpus sanum in mente sana (mente sana en cuerpo sano).",
          "C": "Lex artis ad hoc (ley del arte para el caso).",
          "D": "Primum non nocere (primero no hacer daño)."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 153,
        "idpregunta": 153,
        "pregunta": "153.- ¿Cuáles son las dos nuevas Líneas de Acción incorporadas en la “Estrategia de Seguridad del Paciente 20-30” que responden a una necesidad percibida por las personas expertas?",
        "opciones": {
          "A": "Seguridad en Pediatría y Buenas Prácticas en el Uso de Biológicos.",
          "B": "Atención en Cuidados Paliativos y Seguridad Domiciliaria.",
          "C": "La Seguridad de Paciente en Emergencias y la Prevención del Suicidio.",
          "D": "Seguridad en Salud Mental y Prevención de las Úlceras por Presión."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 154,
        "idpregunta": 154,
        "pregunta": "154.- De acuerdo con la “Estrategia de Seguridad del Paciente 20-30”, ¿cómo se denomina al incidente de seguridad que, a diferencia del incidente sin daño, sí ocasiona algún tipo de daño a las personas atendidas?",
        "opciones": {
          "A": "Error no evitable.",
          "B": "Circunstancia notificable.",
          "C": "Fallo latente.",
          "D": "Evento Adverso."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 155,
        "idpregunta": 155,
        "pregunta": "155.- ¿Cuál es el enfoque principal de la Línea de Acción Corporativa L2 de la “Estrategia de Seguridad del Paciente 20-30”?",
        "opciones": {
          "A": "Implicación de pacientes en su seguridad.",
          "B": "Conciliación de la medicación.",
          "C": "Atención a las segundas y terceras víctimas.",
          "D": "Gestión de los incidentes de seguridad."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 156,
        "idpregunta": 156,
        "pregunta": "156.- ¿Cuál de los siguientes es el Objetivo Específico número 1 de la “Estrategia de Seguridad del Paciente 20-30”, enfocado en el cambio interno?",
        "opciones": {
          "A": "Garantizar la continuidad de las líneas de acción y proyectos previamente implantados.",
          "B": "Impulsar la cultura de seguridad de paciente en las organizaciones de servicios de Osakidetza, promoviendo la formación y sensibilización como aspectos clave.",
          "C": "Optimizar la prescripción de pruebas diagnósticas que utilizan radiación ionizante.",
          "D": "Implantar un sistema de identificación inequívoca de pacientes en todas las fases del proceso asistencial."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 157,
        "idpregunta": 157,
        "pregunta": "157.- La Línea de Acción Corporativa L8 de la “Estrategia de Seguridad del Paciente 20-30” está dedicada a:",
        "opciones": {
          "A": "Conciliación de la medicación.",
          "B": "Prevención y control de las infecciones relacionadas con la asistencia sanitaria.",
          "C": "Seguridad en el proceso asistencial gestación-parto-puerperio.",
          "D": "Seguridad transfusional."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 158,
        "idpregunta": 158,
        "pregunta": "158.- ¿Qué documento se menciona en la “Estrategia de Seguridad del Paciente 20- 30” como el que determinó que las personas atendidas por un sistema medicalizado (tipo 061/112) presentan un mayor porcentaje de incidentes de seguridad en el entorno de Emergencias?",
        "opciones": {
          "A": "Estudio Nacional de Efectos Adversos en centros hospitalarios (ENEAS).",
          "B": "Estudio APEAS.",
          "C": "Estudio EVADUR.",
          "D": "Informe del Instituto de Medicina de los Estados Unidos (IOM)."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 159,
        "idpregunta": 159,
        "pregunta": "159.- El capítulo de Formación de la “Estrategia de Seguridad del Paciente 20-30” señala que, además de impulsar el desarrollo de prácticas seguras, las organizaciones comprometidas orientan sus esfuerzos a aumentar la formación en los llamados:",
        "opciones": {
          "A": "Factores humanos o factores no técnicos.",
          "B": "Factores biomédicos y patofisiológicos.",
          "C": "Factores económicos y de sostenibilidad.",
          "D": "Factores organizativos de Osakidetza."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 160,
        "idpregunta": 160,
        "pregunta": "160.- ¿Cuál de las siguientes Líneas de Acción de la “Estrategia de Seguridad del Paciente 20-30” NO está relacionada con el sistema de utilización del medicamento?",
        "opciones": {
          "A": "L5. Conciliación de la medicación.",
          "B": "L14. Buenas prácticas asociadas a la utilización de medicación.",
          "C": "L6. Optimización en la prescripción de pruebas diagnósticas que utilizan radiación ionizante.",
          "D": "L7. Seguridad transfusional (Nota: la seguridad transfusional se considera una línea separada, aunque implica la administración de productos sanguíneos)."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 161,
        "idpregunta": 161,
        "pregunta": "161.- Según el diagnóstico del II Plan para la Igualdad de Mujeres y Hombres en Osakidetza, ¿qué porcentaje de mujeres y hombres, respectivamente, componía la plantilla total de Osakidetza en enero de 2025?",
        "opciones": {
          "A": "60% mujeres y 40% hombres",
          "B": "75% mujeres y 25% hombres",
          "C": "80% mujeres y 20% hombres",
          "D": "90% mujeres y 10% hombres"
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 162,
        "idpregunta": 162,
        "pregunta": "162.- Una de las metas del II Plan para la Igualdad de Mujeres y Hombres en Osakidetza es la “CAPACITACIÓN EN IGUALDAD”. ¿Cuál es su objetivo principal?",
        "opciones": {
          "A": "Reducir la brecha de género en investigación en un 4%.",
          "B": "Conseguir que todas las personas trabajadoras de Osakidetza conozcan el Plan y el Protocolo de Acoso.",
          "C": "Reducir a la mitad las categorías con brecha retributiva superior al 5%.",
          "D": "Garantizar la formación básica, progresiva, permanente y obligatoria de todo el personal de Osakidetza."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 163,
        "idpregunta": 163,
        "pregunta": "163.- ¿Qué institución aprueba el II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028)?",
        "opciones": {
          "A": "Mesa Sectorial de Sanidad.",
          "B": "Emakunde.",
          "C": "Consejo de Administración de Osakidetza.",
          "D": "Dirección General de Osakidetza."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 164,
        "idpregunta": 164,
        "pregunta": "164.- De acuerdo con el II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028), ¿qué concepto define, dentro del diagnóstico de la organización, la dificultad invisible que encuentran las mujeres para acceder a puestos de mayor responsabilidad y toma de decisiones?",
        "opciones": {
          "A": "Segregación horizontal.",
          "B": "Suelo pegajoso.",
          "C": "Brecha salarial técnica",
          "D": "Techo de cristal."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 165,
        "idpregunta": 165,
        "pregunta": "165.- Una de las Metas del II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028) es “CORRESPONSABILIDAD”. ¿Cuál es el objetivo específico asociado a esta meta?",
        "opciones": {
          "A": "Reducir el porcentaje de hombres en puestos de dirección.",
          "B": "Reducir a la mitad la brecha de género en investigación.",
          "C": "Reducir, al menos, en un 2% la brecha de género existente en las medidas de conciliación para cuidados.",
          "D": "Aumentar el número de investigaciones con perspectiva de género interseccional en un 4%."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 166,
        "idpregunta": 166,
        "pregunta": "166.- ¿Cuál fue el objetivo del I Plan de Igualdad, teniendo en cuenta su condición de primer plan estratégico de Osakidetza en esta materia?",
        "opciones": {
          "A": "Consolidar los avances logrados y profundizar el proceso transformador.",
          "B": "Establecer unos cimientos sólidos para garantizar el cumplimiento de la legislación y la alineación a los marcos estratégicos.",
          "C": "Reducir la brecha salarial a la mitad en todas las categorías profesionales.",
          "D": "Lograr la aprobación por parte del Consejo de Dirección de Osakidetza en julio de 2025."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 167,
        "idpregunta": 167,
        "pregunta": "167.- ¿Cuál es la Meta 5 establecida en el II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028)?",
        "opciones": {
          "A": "Reducir la brecha de género existente en las medidas de conciliación para cuidados.",
          "B": "Capacitación en Igualdad, garantizando la formación progresiva del personal.",
          "C": "Igualdad Salarial, con el objetivo de reducir a la mitad las categorías que tienen una brecha retributiva > 5%.",
          "D": "Investigación, aumentando el número de investigaciones con perspectiva de género."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 168,
        "idpregunta": 168,
        "pregunta": "168.- En relación con la violencia machista contra las mujeres, el Plan II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028) establece como línea de actuación prioritaria:",
        "opciones": {
          "A": "El refuerzo de la prevención, la detección precoz y la mejora de la respuesta asistencial integrada desde el sistema de salud.",
          "B": "La derivación inmediata de cualquier caso detectado a servicios jurídicos externos, sin intervención del personal sanitario.",
          "C": "La creación de un registro anónimo donde las personas profesionales puedan denunciar conductas sin seguimiento posterior.",
          "D": "La limitación de la atención asistencial únicamente a las consecuencias físicas derivadas de la violencia."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 169,
        "idpregunta": 169,
        "pregunta": "169.- El III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028 establece respecto a los mensajes audiovisuales que:",
        "opciones": {
          "A": "Deben emitirse en la lengua que decidan las personas responsable de las unidades que utilizan estos sistemas audiovisuales.",
          "B": "Deben emitirse en las dos lenguas oficiales, primero en castellano y luego en euskera.",
          "C": "Deben emitirse en las dos lenguas oficiales, primero en euskera y luego en castellano.",
          "D": "Deben emitirse en una de las dos lenguas oficiales."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 170,
        "idpregunta": 170,
        "pregunta": "170.- De acuerdo con el III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, señale la respuesta correcta:",
        "opciones": {
          "A": "Por aplicación de la Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales no puede constar en los datos personales de cada paciente de Osakidetza su idioma de preferencia para las comunicaciones con Osakidetza.",
          "B": "El signo azul con la letra e indica que la persona paciente no tiene competencia para comunicarse en un idioma que no sea el euskera para las comunicaciones orales con Osakidetza.",
          "C": "En los datos personales de cada paciente, se registrará su idioma de preferencia para las comunicaciones orales con Osakidetza .",
          "D": "A las personas que elijan el euskera como lengua prioritaria en sus comunicaciones con Osakidetza solo se les deberá ofrecer servicios en euskera."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 171,
        "idpregunta": 171,
        "pregunta": "171.- En atención al III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, señale la respuesta correcta:",
        "opciones": {
          "A": "“Aukeratu zeure hizkuntza/Elige tu lengua” es el lema de la campaña de activación del registro de la lengua preferente de cada paciente llevada a cabo en 2017.",
          "B": "Se atribuye a todas las direcciones y gerencias de Osakidetza la responsabilidad de realizar la campaña con el lema “Aukeratu zeure hizkuntza/Elige tu lengua”.",
          "C": "“Aukeratu zeure hizkuntza/Elige tu lengua” es el lema de la campaña de activación del registro de la lengua preferente de cada paciente que realizará Osakidetza durante el primer año de planificación.",
          "D": "“Aukeratu zeure hizkuntza/Elige tu lengua” es el lema de la campaña de activación del registro de la lengua preferente de cada paciente que realizará Osakidetza durante el tercer año de planificación."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "“Aukeratu zeure hizkuntza/Elige tu lengua” es el lema de la campaña de activación del registro de la lengua preferente de cada paciente <span class=\"diff-highlight\">llevada</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">cabo</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">2017</span>.",
          "B": "<span class=\"diff-highlight\">Se</span> <span class=\"diff-highlight\">atribuye</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">todas</span> <span class=\"diff-highlight\">las</span> <span class=\"diff-highlight\">direcciones</span> <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">gerencias</span> de <span class=\"diff-highlight\">Osakidetza</span> la <span class=\"diff-highlight\">responsabilidad</span> de <span class=\"diff-highlight\">realizar</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">campaña</span> <span class=\"diff-highlight\">con</span> el <span class=\"diff-highlight\">lema “Aukeratu</span> <span class=\"diff-highlight\">zeure</span> <span class=\"diff-highlight\">hizkuntza/Elige</span> <span class=\"diff-highlight\">tu</span> <span class=\"diff-highlight\">lengua”.</span>",
          "C": "“Aukeratu zeure hizkuntza/Elige tu lengua” es el lema de la campaña de activación del registro de la lengua preferente de cada paciente que realizará Osakidetza durante el <span class=\"diff-highlight\">primer</span> año de planificación.",
          "D": "“Aukeratu zeure hizkuntza/Elige tu lengua” es el lema de la campaña de activación del registro de la lengua preferente de cada paciente que realizará Osakidetza durante el <span class=\"diff-highlight\">tercer</span> año de planificación."
        }
      },
      {
        "num": 172,
        "idpregunta": 172,
        "pregunta": "172.- El III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028 contempla que tanto en los servicios de recepción y admisión, como en las unidades asistenciales y administrativas a toda la ciudadanía vascohablante debe garantizarse:",
        "opciones": {
          "A": "La recepción en euskera.",
          "B": "La recepción en euskera solo cuando la comunicación oral con pacientes y personas usuarias sea de modo presencial.",
          "C": "La recepción en euskera solo cuando la comunicación con pacientes y personas usuarias sea telefónicamente.",
          "D": "La recepción en euskera solo por las y los empleados que sepan en euskera."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 173,
        "idpregunta": 173,
        "pregunta": "173.- El III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028 establece que, en los escritos individualizados de respuesta a solicitudes y reclamaciones de pacientes o personas usuarias de Osakidetza se utilizará:",
        "opciones": {
          "A": "La lengua utilizada por cada ciudadano o ciudadana.",
          "B": "Siempre el euskera como lengua preferente.",
          "C": "Siempre las dos lenguas oficiales independientemente de la lengua utilizada por cada ciudadano o ciudadana.",
          "D": "Ambas lenguas oficiales, siendo los escritos contestados primero en euskera y luego en castellano."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 174,
        "idpregunta": 174,
        "pregunta": "174.- Siguiendo lo previsto en el III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, señale la respuesta que no es correcta:",
        "opciones": {
          "A": "Se pondrá a disposición del personal bilingüe que lo desee diferentes elementos identificativos portadores del circulo azul con la letra e, signo que invita a relacionarse en euskera.",
          "B": "El signo azul y la letra e solo se utilizará para la identificación individual del personal bilingüe.",
          "C": "En los centros de salud, consultorios y unidades hospitalarias, deberá estar colocado, de modo visible, el cartel que explica a las personas usuarias el significado del signo identificativo con la letra e.",
          "D": "Se estudiará introducir una variante del círculo azul con la letra e para el personal dispuesto a que le hablen en euskera pero que muestra dificultades para expresarse en ciertas situaciones."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 175,
        "idpregunta": 175,
        "pregunta": "175.- En atención a lo previsto en el III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, en todos los centros de atención primaria ha de ponerse en marcha un procedimiento para que, en la medida de las posibilidades, se propongan servicios en euskera a las personas pacientes que hayan registrado esta lengua como preferente y que aún reciban los citados servicios en castellano. Señale a qué servicios se refiere el citado Plan:",
        "opciones": {
          "A": "Medicina familiar, pediatría, enfermería y salud mental.",
          "B": "Pediatría, medicina familiar y salud mental.",
          "C": "Medicina familiar, pediatría, enfermería y matrona.",
          "D": "Todas las anteriores respuestas son correctas."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 176,
        "idpregunta": 176,
        "pregunta": "176.- Conforme al III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028:",
        "opciones": {
          "A": "En los casos de los mensajes SMS que se envían a los teléfonos móviles de personas trabajadoras o candidatas, estarán escritos en las dos lenguas oficiales, primero en castellano y luego en euskera.",
          "B": "Los escritos individualizados de respuesta a solicitudes y reclamaciones de las personas trabajadoras deberán redactarse en las dos lenguas oficiales.",
          "C": "Osakidetza ha de garantizar que la información y los servicios ofrecidos tanto al personal empleado como a personas candidatas a través de las tecnologías de la comunicación estén en las dos lenguas oficiales, con el fin de que cada persona haga uso de la lengua de su preferencia.",
          "D": "Las informaciones y comunicaciones no personalizadas dirigidas al personal deberán redactarse en las dos lenguas oficiales y se dará prioridad al castellano."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 177,
        "idpregunta": 177,
        "pregunta": "177.- Según el Resumen Ejecutivo del Plan Oncológico Integral de Euskadi (POIE) 2025-2030, ¿de qué porcentaje de los fallecimientos en Euskadi fue responsable el cáncer en el año 2023?",
        "opciones": {
          "A": "22,3%",
          "B": "Menos del 15%",
          "C": "33,8%",
          "D": "28%"
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 178,
        "idpregunta": 178,
        "pregunta": "178.- Según el Resumen Ejecutivo del Plan Oncológico Integral de Euskadi (POIE) 2025-2030, ¿cuáles fueron las dos localizaciones de cáncer más frecuentes en Euskadi en el periodo 2015-2019, consideradas separadamente por sexo?",
        "opciones": {
          "A": "Cáncer colorrectal y cáncer de pulmón.",
          "B": "Cáncer de mama en mujeres y cáncer de próstata en hombres.",
          "C": "Cáncer de páncreas y cáncer de pulmón.",
          "D": "Leucemia y Linfoma de Hodgkin."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 179,
        "idpregunta": 179,
        "pregunta": "179.- ¿Cuál de las siguientes es una de las aspiraciones definidas en la VISIÓN del Plan Oncológico Integral de Euskadi (POIE) 2025-2030?",
        "opciones": {
          "A": "Mejorar la calidad de vida de las personas: de pacientes, supervivientes y de sus familiares y personas cuidadoras.",
          "B": "Aumentar la cuota de mercado de Osakidetza en el sector oncológico privado.",
          "C": "Garantizar la presencia equilibrada de ambos sexos en los órganos de gestión sanitaria.",
          "D": "Establecer la telemedicina como la única forma de seguimiento oncológico."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 180,
        "idpregunta": 180,
        "pregunta": "180.- La Misión del Plan Oncológico Integral de Euskadi (POIE) 2025-2030 busca generar valor a la ciudadanía vasca en términos de:",
        "opciones": {
          "A": "Mayor financiación externa para I+D.",
          "B": "Menores listas de espera y más personal asistencial.",
          "C": "Mejores resultados en salud.",
          "D": "Una mayor supervivencia a los 10 años en todos los tumores."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 181,
        "idpregunta": 181,
        "pregunta": "181.- En el Plan Oncológico Integral de Euskadi (POIE) 2025-2030, la “Centralidad de la persona y humanización” como Principio Rector incluye la incorporación de la perspectiva de género y la atención a:",
        "opciones": {
          "A": "La telemonitorización avanzada.",
          "B": "La diversidad.",
          "C": "El personal profesional no implicado directamente.",
          "D": "Las redes sociales."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 182,
        "idpregunta": 182,
        "pregunta": "182.- Teniendo en cuenta la introducción y el contexto del Plan Oncológico Integral de Euskadi 2025-2030. ¿Cuál fue una de las principales áreas de mejora identificadas en la evaluación del Plan Oncológico de Euskadi (POE) 2018- 2023?",
        "opciones": {
          "A": "La excesiva visibilidad del plan entre profesionales sin implicación.",
          "B": "La necesidad de aumentar el número de Comités de Tumores.",
          "C": "La necesidad de reforzar la atención a colectivos específicos (infancia, mayores, personas largas supervivientes).",
          "D": "La ausencia total de un modelo asistencial común."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 183,
        "idpregunta": 183,
        "pregunta": "183.- Según el listado de acrónimos del Plan Oncológico Integral de Euskadi (POIE) 2025-2030, ¿a qué hacen referencia las siglas PROMs?",
        "opciones": {
          "A": "Plan de Resultados Oncológicos y Metodología de Seguimiento.",
          "B": "Plan de Riesgos Ocupacionales en Medicina Sanitaria.",
          "C": "Programa de Rehabilitación Oncológica y Mejora de la Supervivencia.",
          "D": "Medidas de Resultados Reportadas por los y las Pacientes."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 184,
        "idpregunta": 184,
        "pregunta": "184.- El Plan Oncológico Integral de Euskadi (POIE) 2025-2030 se alinea con el Plan de Salud de Euskadi 2030. ¿Cuál de las siguientes es una de las prioridades estratégicas de dicho Plan de Salud mencionadas en el documento?",
        "opciones": {
          "A": "Creación de una red de servicios privados de salud.",
          "B": "Aumentar la esperanza de vida a 90 años.",
          "C": "Reducir la morbimortalidad evitable y disminuir las desigualdades en salud",
          "D": "Eliminación total del cáncer infantil antes de 2030."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 185,
        "idpregunta": 185,
        "pregunta": "185.- ¿Cuál es el objeto fundamental de la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, según su Artículo 1?",
        "opciones": {
          "A": "Regular los cuidados paliativos avanzados en el Sistema Nacional de Salud.",
          "B": "Modificar el Código Penal para despenalizar la asistencia al suicidio.",
          "C": "Regular el derecho de toda persona a solicitar y recibir la prestación de ayuda para morir y la obligación de las Administraciones de garantizarla.",
          "D": "Establecer el registro de las voluntades anticipadas y testamentos vitales."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 186,
        "idpregunta": 186,
        "pregunta": "186.- Conforme al Artículo 5 de la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿qué requisito de nacionalidad se exige para poder recibir la prestación de ayuda para morir?",
        "opciones": {
          "A": "Tener la ciudadanía española con residencia legal ininterrumpida de al menos 10 años.",
          "B": "Tener la nacionalidad española o tener residencia legal en España de al menos 5 años.",
          "C": "Ser mayor de edad y tener la nacionalidad española, residencia legal o certificado de empadronamiento que acredite un tiempo de permanencia superior a 12 meses en territorio español.",
          "D": "Tener la nacionalidad española y residencia en el mismo municipio durante los últimos 2 años."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 187,
        "idpregunta": 187,
        "pregunta": "187.- Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿qué concepto define la ley como la 'administración directa a la persona paciente de una sustancia por parte del personal sanitario competente'?",
        "opciones": {
          "A": "Suicidio médicamente asistido.",
          "B": "Sedación paliativa profunda.",
          "C": "Eutanasia.",
          "D": "Asistencia para morir."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 188,
        "idpregunta": 188,
        "pregunta": "188.- Según el Artículo 5 de la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿cuál es la condición que debe padecer la persona paciente para solicitar la prestación de ayuda para morir?",
        "opciones": {
          "A": "Padecer una enfermedad incurable en fase terminal o un deterioro funcional grave.",
          "B": "Sufrir una enfermedad que limite gravemente su autonomía.",
          "C": "Padecer una enfermedad grave e incurable o un padecimiento grave, crónico e imposibilitante, causantes de un sufrimiento intolerable.",
          "D": "Sufrir un dolor físico o psíquico que no puede ser tratado con paliativos."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 189,
        "idpregunta": 189,
        "pregunta": "189.- Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿cuál debe ser la periodicidad mínima con la que el personal facultativo responsable debe consultar a la persona paciente, una vez presentada la solicitud, para confirmar si mantiene su deseo?",
        "opciones": {
          "A": "Al menos cada 7 días.",
          "B": "Al menos cada 15 días, debiendo dejarse constancia en la historia clínica.",
          "C": "Al menos cada 30 días, si el procedimiento se extiende.",
          "D": "Una única vez antes de la prestación."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 190,
        "idpregunta": 190,
        "pregunta": "190.- Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿cuál es el derecho que asiste al personal sanitario directamente implicado en la prestación de ayuda para morir?",
        "opciones": {
          "A": "Derecho a la reubicación en un puesto de trabajo diferente.",
          "B": "Derecho a un incremento salarial por la complejidad de la prestación.",
          "C": "Derecho a la objeción de conciencia.",
          "D": "Derecho a recibir asistencia jurídica de oficio."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 191,
        "idpregunta": 191,
        "pregunta": "191.- Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿qué define como 'padecimiento grave, crónico e imposibilitante'?",
        "opciones": {
          "A": "Aquel que implica la existencia de sufrimiento físico o psíquico constante.",
          "B": "Aquel que genera una limitación que incide directamente sobre la autonomía física y capacidad de expresar su voluntad de la persona paciente.",
          "C": "La dependencia de otra persona para la realización de al menos dos actividades básicas de la vida diaria.",
          "D": "Una dolencia que ha sido declarada irreversible y con un pronóstico de vida inferior a seis meses."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 192,
        "idpregunta": 192,
        "pregunta": "192.- Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿cuál es el plazo que tiene la persona facultativa responsable para comunicar la resolución favorable a la Comisión de Garantía y Evaluación para su posterior verificación?",
        "opciones": {
          "A": "Dentro de las 24 horas siguientes a la resolución.",
          "B": "Dentro del día siguiente natural a la resolución.",
          "C": "7 días desde la resolución favorable.",
          "D": "No existe un plazo establecido para esta comunicación."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 193,
        "idpregunta": 193,
        "pregunta": "193.- ¿Cuál es el principio general que establece la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas?",
        "opciones": {
          "A": "La libre acumulación de empleos públicos.",
          "B": "La incompatibilidad para desempeñar más de un puesto en el sector público, salvo excepciones.",
          "C": "La compatibilidad automática entre empleo público y privado.",
          "D": "La compatibilidad solo en el ámbito sanitario."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 194,
        "idpregunta": 194,
        "pregunta": "194.- Con carácter general, el personal comprendido en la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, podrá desempeñar:",
        "opciones": {
          "A": "Dos puestos públicos si uno es a tiempo parcial.",
          "B": "Un segundo puesto público únicamente con autorización previa y en los supuestos previstos por la Ley.",
          "C": "Cualquier actividad privada sin limitación.",
          "D": "Dos puestos públicos si pertenecen a distinta Administración."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 195,
        "idpregunta": 195,
        "pregunta": "195.- Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, ¿qué requisito es imprescindible para autorizar la compatibilidad con una actividad privada?",
        "opciones": {
          "A": "Que la actividad sea sanitaria.",
          "B": "Que no se supere la jornada ordinaria establecida.",
          "C": "Que no se comprometa la imparcialidad o independencia del personal público.",
          "D": "Que lo autorice la jefatura inmediata sin más trámites."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 196,
        "idpregunta": 196,
        "pregunta": "196.- Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, ¿puede percibirse más de una remuneración con cargo a los presupuestos públicos?",
        "opciones": {
          "A": "Sí, siempre que no superen el salario mínimo.",
          "B": "No, salvo en los casos expresamente previstos en la Ley.",
          "C": "Sí, sin limitación alguna.",
          "D": "Solo si se trata de diferentes Administraciones autonómicas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 197,
        "idpregunta": 197,
        "pregunta": "197.- Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, ¿qué ocurre si se desempeña una actividad incompatible sin autorización?",
        "opciones": {
          "A": "No ocurre nada si es fuera del horario laboral.",
          "B": "Se considera falta leve.",
          "C": "Puede dar lugar a responsabilidad disciplinaria.",
          "D": "Solo se devuelve la remuneración percibida."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 198,
        "idpregunta": 198,
        "pregunta": "198.- Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, ¿qué actividades están exceptuadas del régimen general de incompatibilidades?",
        "opciones": {
          "A": "Las actividades docentes o de investigación en determinados supuestos.",
          "B": "Cualquier actividad privada.",
          "C": "Solo actividades artísticas.",
          "D": "Actividades comerciales propias sin límite."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 199,
        "idpregunta": 199,
        "pregunta": "199.- Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, para que se autorice la compatibilidad para un segundo puesto público es necesario que:",
        "opciones": {
          "A": "Sea en el mismo centro de trabajo.",
          "B": "Sea la jornada completa.",
          "C": "Sea en los supuestos tasados y no se modifique la jornada y horario del puesto principal.",
          "D": "Lo apruebe el personal trabajador del servicio."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 200,
        "idpregunta": 200,
        "pregunta": "200.- La finalidad principal de la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, es:",
        "opciones": {
          "A": "Incrementar los ingresos del personal público.",
          "B": "Garantizar la dedicación y la imparcialidad en el servicio público.",
          "C": "Permitir la pluriactividad generalizada.",
          "D": "Reducir el número de personal público."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      }
    ]
  },
  "general_C2_C3_D_E": {
    "label": "General C2, C3, D y E",
    "meta": "300 preguntas - Temario comun",
    "questions": [
      {
        "num": 1,
        "idpregunta": 1,
        "pregunta": "1.- De acuerdo con las normas generales de ordenación de las profesiones sanitarias, para poder ejercer una profesión sanitaria será requisito imprescindible:",
        "opciones": {
          "A": "La colegiación, cuando una ley estatal establezca esta obligación para el ejercicio de una profesión titulada o algunas actividades propias de ésta.",
          "B": "La inexistencia de inhabilitación o suspensión para el ejercicio profesional por sentencia judicial, aunque no sea firme, durante el periodo de tiempo que fije ésta; por resolución sancionadora impuesta por un colegio profesional sanitario, cuando una ley estatal establezca para este ejercicio la obligación de pertenecer al colegio profesional respectivo durante el periodo de tiempo que fije ésta; o por resolución administrativa sancionadora firme, durante el periodo de tiempo que fije ésta, cuando se ejerza la profesión en el ámbito de la asistencia sanitaria pública.",
          "C": "Tener suscrito y vigente un seguro de responsabilidad, un aval u otra garantía financiera, ya sean de protección personal o colectiva, que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas, causado con ocasión de la prestación de tal asistencia o servicios, cuando se ejerza la profesión en el ámbito de la asistencia sanitaria pública.",
          "D": "Todo lo anterior."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 2,
        "idpregunta": 2,
        "pregunta": "2.- Según lo establecido en la normativa vigente sobre ordenación de las profesiones sanitarias, para poder ejercer una profesión sanitaria:",
        "opciones": {
          "A": "Se ha de tener suscrito y vigente un seguro de responsabilidad que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas causado con ocasión de la prestación de tal asistencia o servicios cuando se ejerza la profesión en el ámbito de la asistencia sanitaria privada, no siendo suficiente un aval u otra garantía financiera de protección colectiva.",
          "B": "Se ha de tener suscrito y vigente un seguro de responsabilidad, un aval u otra garantía financiera, sean de protección personal o colectiva, que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas causado con ocasión de la prestación de tal asistencia o servicios cuando se ejerza la profesión en el ámbito de la asistencia sanitaria privada.",
          "C": "Se ha de tener suscrito y vigente un seguro de responsabilidad, un aval u otra garantía financiera, sean de protección personal o colectiva, que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas causado con ocasión de la prestación de tal asistencia o servicios cuando se ejerza la profesión en el ámbito de la asistencia sanitaria pública.",
          "D": "Todas las opciones son falsas."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Se ha de tener suscrito y vigente un seguro de responsabilidad que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas causado con ocasión de la prestación de tal asistencia o servicios cuando se ejerza la profesión en el ámbito de la asistencia sanitaria privada<span class=\"diff-highlight\">, no</span> <span class=\"diff-highlight\">siendo</span> <span class=\"diff-highlight\">suficiente</span> <span class=\"diff-highlight\">un</span> <span class=\"diff-highlight\">aval</span> <span class=\"diff-highlight\">u</span> <span class=\"diff-highlight\">otra</span> <span class=\"diff-highlight\">garantía</span> <span class=\"diff-highlight\">financiera</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">protección</span> <span class=\"diff-highlight\">colectiva</span>.",
          "B": "Se ha de tener suscrito y vigente un seguro de responsabilidad, un aval u otra garantía financiera, sean de protección personal o colectiva, que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas causado con ocasión de la prestación de tal asistencia o servicios cuando se ejerza la profesión en el ámbito de la asistencia sanitaria <span class=\"diff-highlight\">privada</span>.",
          "C": "Se ha de tener suscrito y vigente un seguro de responsabilidad, un aval u otra garantía financiera, sean de protección personal o colectiva, que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas causado con ocasión de la prestación de tal asistencia o servicios cuando se ejerza la profesión en el ámbito de la asistencia sanitaria <span class=\"diff-highlight\">pública</span>.",
          "D": "Todas las opciones son falsas."
        }
      },
      {
        "num": 3,
        "idpregunta": 3,
        "pregunta": "3.- Con la finalidad de facilitar la observancia de los requisitos previstos en la normativa vigente para ejercer las profesiones sanitarias (señálese la afirmación que sea falsa):",
        "opciones": {
          "A": "Los juzgados y tribunales deberán remitir aquellos datos necesarios referentes a las sentencias firmes de inhabilitación o suspensión para el ejercicio profesional al Ministerio de Sanidad, Servicios Sociales e Igualdad en la forma que reglamentariamente se establezca.",
          "B": "Las administraciones públicas con competencias sancionadoras sobre el personal sanitario a su servicio deberán remitir las resoluciones sancionadoras que afecten a la situación de suspensión o habilitación de dicho personal.",
          "C": "Las corporaciones colegiales deberán remitir al Ministerio de Sanidad, Servicios Sociales e Igualdad copia de las resoluciones sancionadoras que suspendan o inhabiliten para el ejercicio profesional impuestas por ellos, cuando una ley estatal establezca para este ejercicio la obligación de colegiación siempre que la persona colegiada no se oponga explícitamente.",
          "D": "El Ministerio de Sanidad, Servicios Sociales e Igualdad comunicará a las entidades mencionadas en las opciones b) y c) anteriores, las resoluciones sancionadoras que reciba."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 4,
        "idpregunta": 4,
        "pregunta": "4.- Según la normativa vigente, el órgano encargado del Registro Estatal de Profesionales Sanitarios podrá (indíquese la que sea correcta):",
        "opciones": {
          "A": "Consultar los datos de carácter personal de la población profesional sanitaria contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) competencia del Ministerio del Interior, para contrastar la veracidad de la información que consta en el registro.",
          "B": "Consultar los datos de carácter personal de la población profesional sanitaria contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) competencia del Ministerio del Interior, para contrastar la veracidad de la información que consta en el registro, pero solo si la persona titular no se ha opuesto explícitamente.",
          "C": "Consultar los datos de carácter personal de los profesionales sanitarios contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) competencia del Ministerio del Interior, para contrastar la veracidad de la información que consta en el registro, pero solo si la persona titular de los datos da su consentimiento expreso.",
          "D": "Solo podrá consultar los datos de carácter personal de la población profesional sanitaria contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) en el curso de una investigación sobre una infracción administrativa."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Consultar los datos de carácter personal de la población profesional sanitaria contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) competencia del Ministerio del Interior, para contrastar la veracidad de la información que consta en el registro.",
          "B": "Consultar los datos de carácter personal de <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">población</span> <span class=\"diff-highlight\">profesional</span> <span class=\"diff-highlight\">sanitaria</span> contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) competencia del Ministerio del Interior, para contrastar la veracidad de la información que consta en el registro, pero solo si la persona titular <span class=\"diff-highlight\">no</span> <span class=\"diff-highlight\">se</span> <span class=\"diff-highlight\">ha</span> <span class=\"diff-highlight\">opuesto</span> <span class=\"diff-highlight\">explícitamente</span>.",
          "C": "Consultar los datos de carácter personal de <span class=\"diff-highlight\">los</span> <span class=\"diff-highlight\">profesionales</span> <span class=\"diff-highlight\">sanitarios</span> contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) competencia del Ministerio del Interior, para contrastar la veracidad de la información que consta en el registro, pero solo si la persona titular <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">los</span> <span class=\"diff-highlight\">datos</span> <span class=\"diff-highlight\">da</span> <span class=\"diff-highlight\">su</span> <span class=\"diff-highlight\">consentimiento</span> <span class=\"diff-highlight\">expreso</span>.",
          "D": "<span class=\"diff-highlight\">Solo</span> <span class=\"diff-highlight\">podrá</span> consultar los datos de carácter personal de la población profesional sanitaria contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) en el <span class=\"diff-highlight\">curso</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">investigación</span> <span class=\"diff-highlight\">sobre</span> <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">infracción</span> <span class=\"diff-highlight\">administrativa</span>."
        }
      },
      {
        "num": 5,
        "idpregunta": 5,
        "pregunta": "5.- En el marco de la ordenación de las profesiones sanitarias, las personas pacientes:",
        "opciones": {
          "A": "Tienen derecho a la libre elección del personal facultativo que debe atenderles, tanto si su ejercicio profesional se desarrolla en el sistema público como en el ámbito privado.",
          "B": "Tienen derecho a la libre elección del personal facultativo que debe atenderles, pero solo si su ejercicio profesional se desarrolla en el sistema público.",
          "C": "Tienen derecho a la libre elección del personal facultativo que debe atenderles, pero solo si su ejercicio profesional se desarrolla en el ámbito privado.",
          "D": "Ninguna de las anteriores es correcta."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Tienen derecho a la libre elección del personal facultativo que debe atenderles, <span class=\"diff-highlight\">tanto</span> si su ejercicio profesional se desarrolla en el sistema público <span class=\"diff-highlight\">como</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">ámbito</span> <span class=\"diff-highlight\">privado</span>.",
          "B": "Tienen derecho a la libre elección del personal facultativo que debe atenderles, <span class=\"diff-highlight\">pero</span> <span class=\"diff-highlight\">solo</span> si su ejercicio profesional se desarrolla en el sistema público.",
          "C": "Tienen derecho a la libre elección del personal facultativo que debe atenderles, <span class=\"diff-highlight\">pero</span> <span class=\"diff-highlight\">solo</span> si su ejercicio profesional se desarrolla en el ámbito privado.",
          "D": "Ninguna de las anteriores es correcta."
        }
      },
      {
        "num": 6,
        "idpregunta": 6,
        "pregunta": "6.- Según la normativa de ordenación de las profesiones sanitarias, el personal profesional y las personas responsables de los centros sanitarios facilitarán a sus pacientes el ejercicio del derecho a conocer:",
        "opciones": {
          "A": "El nombre, la titulación, la especialidad y la hoja de servicios del personal sanitario que les atiende, así como la categoría y función de dicho personal, si así estuvieran definidas en su centro o institución.",
          "B": "El nombre, la titulación y la especialidad del personal sanitario que les atiende y su categoría, pero no su función en su centro o institución.",
          "C": "El nombre, la titulación y la especialidad del personal sanitario que les atiende, así como la categoría y función de dicho personal, si así estuvieran definidas en su centro o institución.",
          "D": "El nombre, la titulación y la especialidad del personal sanitario que les atiende, pero no su categoría y función en su centro o institución."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "El nombre, la titulación<span class=\"diff-highlight\">, la</span> <span class=\"diff-highlight\">especialidad</span> y la <span class=\"diff-highlight\">hoja</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">servicios</span> del personal sanitario que les atiende, así como la categoría y función de dicho personal, si así estuvieran definidas en su centro o institución.",
          "B": "El nombre, la titulación y la especialidad del personal sanitario que les atiende <span class=\"diff-highlight\">y</span> su categoría<span class=\"diff-highlight\">, pero</span> <span class=\"diff-highlight\">no</span> <span class=\"diff-highlight\">su</span> función en su centro o institución.",
          "C": "El nombre, la titulación y la <span class=\"diff-highlight\">especialidad</span> del personal sanitario que les atiende, así como la categoría y función de dicho personal, si así estuvieran definidas en su centro o institución.",
          "D": "El nombre, la titulación y la especialidad del personal sanitario que les atiende, pero no su <span class=\"diff-highlight\">categoría</span> <span class=\"diff-highlight\">y</span> función en su centro o institución."
        }
      },
      {
        "num": 7,
        "idpregunta": 7,
        "pregunta": "7.- De acuerdo con las normas generales de ordenación de las profesiones sanitarias, el ejercicio del derecho del personal profesional sanitario a la renuncia a la atención a una persona paciente queda condicionado a que (señálese la respuesta incorrecta):",
        "opciones": {
          "A": "Su renuncia no conlleve desatención de la persona paciente.",
          "B": "La renuncia se ejerza de acuerdo con procedimientos regulares.",
          "C": "Quede constancia, aunque no sea formal, de la renuncia.",
          "D": "La renuncia se ejerza de acuerdo con procedimientos establecidos y explícitos."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 8,
        "idpregunta": 8,
        "pregunta": "8.- De acuerdo con las normas generales de ordenación de las profesiones sanitarias, las personas pacientes tienen derecho a recibir información de acuerdo con lo establecido en:",
        "opciones": {
          "A": "La Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de los derechos y obligaciones en materia de información y documentación clínica.",
          "B": "La Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas.",
          "C": "El Código Civil vigente.",
          "D": "Ninguna de las anteriores."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 9,
        "idpregunta": 9,
        "pregunta": "9.- De acuerdo con la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, corresponde al personal con la titulación de Licenciatura o Grado en Medicina la indicación y realización de las actividades dirigidas a (señálese la respuesta incorrecta):",
        "opciones": {
          "A": "La promoción y mantenimiento de la salud de las personas pacientes.",
          "B": "La dispensación de los medicamentos a las personas pacientes.",
          "C": "La prevención de las enfermedades y al diagnóstico, tratamiento, terapéutica y rehabilitación de las personas pacientes.",
          "D": "El enjuiciamiento y pronóstico de los procesos objeto de atención."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 10,
        "idpregunta": 10,
        "pregunta": "10.- Los centros sanitarios revisarán que el personal sanitario de su plantilla cumple los requisitos necesarios para ejercer la profesión conforme a lo previsto en la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias y en las demás normas aplicables:",
        "opciones": {
          "A": "Cada cinco años como mínimo.",
          "B": "Cada tres años como mínimo.",
          "C": "Cada dos años como mínimo.",
          "D": "Cada cuatro años como mínimo."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 11,
        "idpregunta": 11,
        "pregunta": "11.- Según dispone la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, cuando una actuación sanitaria se realice por un equipo de profesionales (señálese la respuesta incorrecta):",
        "opciones": {
          "A": "Se articulará, preferentemente, de forma jerarquizada atendiendo a los criterios de conocimientos y competencia y, en su caso, al de titulación del personal profesional que integra el equipo, en función de la actividad concreta a desarrollar, de la confianza y conocimiento recíproco de las capacidades de quienes forman el equipo, y de los principios de accesibilidad y continuidad asistencial de las personas atendidas.",
          "B": "Se articulará de forma jerarquizada o colegiada, atendiendo a los criterios de conocimientos y competencia y, en su caso, al de titulación del personal profesional que integra el equipo, en función de la actividad concreta a desarrollar, de la confianza y conocimiento recíproco de las capacidades de quienes forman el equipo, y de los principios de accesibilidad y continuidad asistencial de las personas atendidas.",
          "C": "Se articulará de forma preferentemente colegiada, atendiendo a los criterios de conocimientos y competencia y, en su caso, al de titulación del personal profesional que integra el equipo, en función de la actividad concreta a desarrollar, de la confianza y conocimiento recíproco de las capacidades de quienes forman el equipo, y de los principios de accesibilidad y continuidad asistencial de las personas atendidas.",
          "D": "Ninguna de las anteriores es correcta."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Se articulará<span class=\"diff-highlight\">, preferentemente, </span>de forma jerarquizada atendiendo a los criterios de conocimientos y competencia y, en su caso, al de titulación del personal profesional que integra el equipo, en función de la actividad concreta a desarrollar, de la confianza y conocimiento recíproco de las capacidades de quienes forman el equipo, y de los principios de accesibilidad y continuidad asistencial de las personas atendidas.",
          "B": "Se articulará de forma jerarquizada <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">colegiada, </span>atendiendo a los criterios de conocimientos y competencia y, en su caso, al de titulación del personal profesional que integra el equipo, en función de la actividad concreta a desarrollar, de la confianza y conocimiento recíproco de las capacidades de quienes forman el equipo, y de los principios de accesibilidad y continuidad asistencial de las personas atendidas.",
          "C": "Se articulará de forma <span class=\"diff-highlight\">preferentemente</span> <span class=\"diff-highlight\">colegiada, </span>atendiendo a los criterios de conocimientos y competencia y, en su caso, al de titulación del personal profesional que integra el equipo, en función de la actividad concreta a desarrollar, de la confianza y conocimiento recíproco de las capacidades de quienes forman el equipo, y de los principios de accesibilidad y continuidad asistencial de las personas atendidas.",
          "D": "Ninguna de las anteriores es correcta."
        }
      },
      {
        "num": 12,
        "idpregunta": 12,
        "pregunta": "12.- A los efectos de la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias tienen la consideración de funciones de gestión clínica (señálese la respuesta incorrecta):",
        "opciones": {
          "A": "Las relativas a la jefatura o coordinación de unidades y equipos sanitarios y asistenciales.",
          "B": "Las de tutorías y organización de formación especializada, continuada y de investigación.",
          "C": "Las de creación y difusión de contenidos a través de las redes sociales gestionadas por la unidad correspondiente.",
          "D": "Las de participación en comités internos o proyectos institucionales de los centros sanitarios dirigidos, entre otros, a asegurar la calidad, seguridad, eficacia, eficiencia y ética asistencial, la continuidad y coordinación entre niveles o el acogimiento, cuidados y bienestar de las personas pacientes."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 13,
        "idpregunta": 13,
        "pregunta": "13.- De acuerdo con la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, el ejercicio de funciones de gestión clínica estará sometido a una evaluación del desempeño y de los resultados que tendrá lugar:",
        "opciones": {
          "A": "Anualmente.",
          "B": "Cada dos años.",
          "C": "Cada cuatro años.",
          "D": "La Ley no lo determina explícitamente."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 14,
        "idpregunta": 14,
        "pregunta": "14.- De acuerdo con la normativa vigente de ordenación de las profesiones sanitarias, el reconocimiento del desempeño de funciones de gestión clínica:",
        "opciones": {
          "A": "Se evaluará cuidadosamente cada dos años, de acuerdo con lo dispuesto en la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias.",
          "B": "Será objeto del oportuno reconocimiento por parte del centro, del servicio de salud y del conjunto del sistema sanitario, en la forma en que en cada comunidad autónoma se determine.",
          "C": "Se realizará siempre por parte del Ministerio de Sanidad.",
          "D": "Todas las anteriores son incorrectas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 15,
        "idpregunta": 15,
        "pregunta": "15.- Según la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, señale cuál de estas afirmaciones es incorrecta:",
        "opciones": {
          "A": "Los equipos de profesionales, una vez constituidos y aprobados en el seno de organizaciones o instituciones sanitarias, serán reconocidos y apoyados, y sus actuaciones facilitadas, por los órganos directivos y gestores de las mismas.",
          "B": "La responsabilidad de la capacidad del personal profesional para realizar una correcta actuación, en las tareas y funciones que les sean encomendadas en el proceso de distribución del trabajo en equipo, recaerá sobre los centros e instituciones en los que desempeñen su actividad.",
          "C": "Dentro de un equipo de profesionales, será posible la delegación de actuaciones si las condiciones bajo las que se producirá tal delegación están previamente establecidas dentro del equipo.",
          "D": "La responsabilidad de un equipo de profesionales recaerá en aquellas personas integrantes que hayan adquirido las tareas y funciones que hayan causado la responsabilidad, siempre que las condiciones de la delegación se adecúen a lo establecido."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 16,
        "idpregunta": 16,
        "pregunta": "16.- Quien ostente la titularidad de los centros sanitarios y los servicios de salud podrá formalizar convenios y conciertos con el Instituto de Salud Carlos III, con otros centros de investigación, públicos o privados, y con otras instituciones que tengan interés en la investigación sanitaria, para (señálese la respuesta incorrecta):",
        "opciones": {
          "A": "El desarrollo de programas de investigación.",
          "B": "La designación de la tutoría de la investigación.",
          "C": "La dotación de plazas vinculadas o específicas de investigación, en los establecimientos sanitarios.",
          "D": "El establecimiento de sistemas específicos de formación de personal investigador durante el período inmediatamente anterior a la obtención del título de especialista."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 17,
        "idpregunta": 17,
        "pregunta": "17.- De acuerdo con la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, diga cuál de los siguientes principios generales de la relación entre las personas que ejercen profesiones sanitarias y las personas atendidas no es tal:",
        "opciones": {
          "A": "El personal profesional tiene el deber de hacer un uso racional de los recursos diagnósticos y terapéuticos a su cargo, tomando en consideración, entre otros, los costes de sus decisiones y evitando la sobreutilización, la infrautilización y la inadecuada utilización de los mismos.",
          "B": "El personal profesional tiene el deber de prestar una atención sanitaria técnica y profesional adecuada a las necesidades de salud de las personas que atiende, de acuerdo con el estado de desarrollo de los conocimientos científicos de cada momento y con los niveles de calidad y seguridad que se establecen en esta ley y el resto de normas legales y deontológicas aplicables.",
          "C": "El personal profesional tiene el deber de proporcionar a las personas pacientes información precisa sobre su formación profesional, la forma en que han actualizado sus conocimientos y las demandas de responsabilidad que hayan podido derivar en responsabilidades administrativas.",
          "D": "El personal profesional tiene el deber de respetar la personalidad, dignidad e intimidad de las personas a su cuidado y debe respetar su participación en las tomas de decisiones que les afecten. En todo caso, deben ofrecer una información suficiente y adecuada para que puedan ejercer su derecho al consentimiento sobre dichas decisiones."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 18,
        "idpregunta": 18,
        "pregunta": "18.- De acuerdo con la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, la eficacia organizativa de los servicios, secciones y equipos, o unidades asistenciales equivalentes sea cual sea su denominación, requerirá (señálese la que sea incorrecta):",
        "opciones": {
          "A": "La existencia escrita de normas de funcionamiento interno.",
          "B": "La definición de objetivos y funciones tanto generales como específicas para cada persona perteneciente al mismo.",
          "C": "La cumplimentación por parte del personal profesional de la documentación asistencial, informativa o estadística que determine el centro.",
          "D": "La realización de controles periódicos sobre la eficiencia del personal profesional sanitario."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 19,
        "idpregunta": 19,
        "pregunta": "19.- De acuerdo con la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, señálese la afirmación incorrecta:",
        "opciones": {
          "A": "Los centros sanitarios acreditados para la formación especializada deberán contar con una comisión de docencia.",
          "B": "Los centros sanitarios acreditados para la formación especializada deberán contar con jefaturas de estudios y con la coordinación docente que resulten adecuados en función de su capacidad docente.",
          "C": "Los centros sanitarios acreditados para la formación especializada deberán contar con el personal tutor de la formación que resulte adecuado en función de su capacidad docente.",
          "D": "Los centros sanitarios acreditados para la formación especializada deberán contar con jefaturas de estudios, coordinación docente y personal tutor de la formación que resulten adecuados en función de su capacidad docente, pero no con una comisión de docencia."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Los centros sanitarios acreditados para la formación especializada deberán contar con una comisión de docencia.",
          "B": "Los centros sanitarios acreditados para la formación especializada deberán contar con jefaturas de estudios y <span class=\"diff-highlight\">con</span> la <span class=\"diff-highlight\">coordinación</span> <span class=\"diff-highlight\">docente</span> que resulten adecuados en función de su capacidad docente.",
          "C": "Los centros sanitarios acreditados para la formación especializada deberán contar con <span class=\"diff-highlight\">el</span> personal tutor de la formación que <span class=\"diff-highlight\">resulte</span> <span class=\"diff-highlight\">adecuado</span> en función de su capacidad docente.",
          "D": "Los centros sanitarios acreditados para la formación especializada deberán contar con jefaturas de estudios<span class=\"diff-highlight\">, coordinación</span> <span class=\"diff-highlight\">docente</span> y <span class=\"diff-highlight\">personal</span> <span class=\"diff-highlight\">tutor</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">formación</span> que resulten adecuados en función de su capacidad docente<span class=\"diff-highlight\">, pero</span> <span class=\"diff-highlight\">no</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">comisión</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">docencia</span>."
        }
      },
      {
        "num": 20,
        "idpregunta": 20,
        "pregunta": "20.- De acuerdo con la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, los centros sanitarios acreditados para desarrollar programas de formación continuada:",
        "opciones": {
          "A": "Deberán contar con jefaturas de estudios, con la coordinación docente y con el personal tutor de la formación que resulten adecuados en función de las actividades a desarrollar, así como con una figura de defensoría del alumnado.",
          "B": "Deberán contar una comisión de docencia, así como con jefaturas de estudios, coordinación docente y personal tutor de la formación que resulten adecuados en función de las actividades a desarrollar.",
          "C": "Deberán contar una comisión de docencia y con una figura de defensoría del alumnado, así como con jefaturas de estudios, coordinación docente y personal tutor de la formación que resulten adecuados en función de las actividades a desarrollar.",
          "D": "Todas las anteriores son incorrectas."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Deberán contar con <span class=\"diff-highlight\">jefaturas</span> de <span class=\"diff-highlight\">estudios</span>, con <span class=\"diff-highlight\">la</span> coordinación docente y <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">el</span> personal tutor de la formación que resulten adecuados en función de las actividades a desarrollar<span class=\"diff-highlight\">, así</span> <span class=\"diff-highlight\">como</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">figura</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">defensoría</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">alumnado</span>.",
          "B": "Deberán contar una comisión de docencia, así como con jefaturas de estudios, coordinación docente y personal tutor de la formación que resulten adecuados en función de las actividades a desarrollar.",
          "C": "Deberán contar <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">comisión</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">docencia</span> <span class=\"diff-highlight\">y</span> con <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">figura</span> de <span class=\"diff-highlight\">defensoría</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">alumnado</span>, <span class=\"diff-highlight\">así</span> <span class=\"diff-highlight\">como</span> con <span class=\"diff-highlight\">jefaturas</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">estudios, </span>coordinación docente y personal tutor de la formación que resulten adecuados en función de las actividades a desarrollar.",
          "D": "Todas las anteriores son incorrectas."
        }
      },
      {
        "num": 21,
        "idpregunta": 21,
        "pregunta": "21.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, sus disposiciones se aplicarán a:",
        "opciones": {
          "A": "A los servicios sanitarios de financiación pública y a los privados, en los mismos términos.",
          "B": "A los servicios sanitarios de financiación pública. También a los privados en lo que se refiere al control de las actividades de salud pública y en materia de garantías de información, seguridad y calidad.",
          "C": "A los servicios sanitarios de financiación pública y a los privados concertados.",
          "D": "Únicamente a los servicios sanitarios de financiación pública."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 22,
        "idpregunta": 22,
        "pregunta": "22.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, para hacer efectivo el derecho a la protección de la salud y a la atención sanitaria, las personas titulares de los mismos deberán:",
        "opciones": {
          "A": "Tener nacionalidad española y residencia habitual en el territorio español.",
          "B": "Tener reconocido su derecho a la asistencia sanitaria en España por cualquier otro título jurídico, aun no teniendo su residencia habitual en territorio español, siempre que no exista un tercero obligado al pago de dicha asistencia.",
          "C": "Ser persona extranjera y con residencia legal y habitual en el territorio español y no tener la obligación de acreditar la cobertura obligatoria de la prestación sanitaria por otra vía.",
          "D": "Todas las respuestas anteriores son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 23,
        "idpregunta": 23,
        "pregunta": "23.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la ciudadanía tendrá los siguientes derechos en el conjunto del Sistema Nacional de Salud:",
        "opciones": {
          "A": "A recibir asistencia sanitaria en su comunidad autónoma de residencia.",
          "B": "A recibir el reembolso de los gastos derivados de la asistencia en la sanidad privada cuando se trate de servicios recogidos en el catálogo de prestaciones del Sistema Nacional de Salud.",
          "C": "A recibir el reembolso de los gastos derivados de la asistencia sanitaria del catálogo de prestaciones del Sistema Nacional de Salud que pudiera requerir del servicio de salud de la comunidad autónoma en la que se encuentre desplazado/a.",
          "D": "Ninguna de las respuestas anteriores es correcta."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 24,
        "idpregunta": 24,
        "pregunta": "24.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la cartera común de servicios del Sistema Nacional de Salud se articula en torno a las siguientes modalidades:",
        "opciones": {
          "A": "Cartera común básica de servicios asistenciales, cartera común suplementaria y cartera común de servicios accesorios.",
          "B": "Cartera común básica nacional de servicios asistenciales y cartera común autonómica de servicios asistenciales.",
          "C": "Cartera común nacional básica de servicios asistenciales, cartera común suplementaria autonómica y cartera común de servicios accesorios autonómicos.",
          "D": "Cartera común nacional y autonómica básica de servicios asistenciales, cartera común nacional y autonómica suplementaria y cartera común nacional y autonómica de servicios accesorios."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 25,
        "idpregunta": 25,
        "pregunta": "25.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la cartera común básica de servicios asistenciales del Sistema Nacional de Salud:",
        "opciones": {
          "A": "Se acordará en el seno del Consejo Interterritorial del Sistema Nacional de Salud y se aprobará en la Ley General de Presupuestos del Estado.",
          "B": "Se acordará en el seno del Consejo Interterritorial del Sistema Nacional de Salud y se aprobará mediante Real Decreto.",
          "C": "Se acordará en el seno del Consejo Interterritorial del Sistema Nacional de Salud y se aprobará en las normas autonómicas correspondientes.",
          "D": "Se acordará en el seno de la Conferencia de Presidentes de las Comunidades Autónomas y se aprobará en las normas autonómicas correspondientes"
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 26,
        "idpregunta": 26,
        "pregunta": "26.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la cartera común básica de servicios asistenciales del Sistema Nacional de Salud comprende:",
        "opciones": {
          "A": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente, la prestación farmacéutica y la prestación ortoprotésica, cubiertos de forma completa por financiación pública.",
          "B": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente y la prestación farmacéutica, cubiertos de forma completa por financiación pública.",
          "C": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente, y la prestación ortoprotésica, cubiertos de forma completa por financiación pública.",
          "D": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente, cubiertos de forma completa por financiación pública."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente<span class=\"diff-highlight\">, la</span> <span class=\"diff-highlight\">prestación</span> <span class=\"diff-highlight\">farmacéutica</span> y la prestación <span class=\"diff-highlight\">ortoprotésica</span>, cubiertos de forma completa por financiación pública.",
          "B": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente y la prestación <span class=\"diff-highlight\">farmacéutica</span>, cubiertos de forma completa por financiación pública.",
          "C": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente, y la prestación ortoprotésica, cubiertos de forma completa por financiación pública.",
          "D": "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente, cubiertos de forma completa por financiación pública."
        }
      },
      {
        "num": 27,
        "idpregunta": 27,
        "pregunta": "27.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la cartera común suplementaria del Sistema Nacional de Salud incluirá las siguientes prestaciones:",
        "opciones": {
          "A": "Únicamente la prestación farmacéutica.",
          "B": "Únicamente la prestación ortoprotésica.",
          "C": "Únicamente la prestación farmacéutica y la prestación ortoprotésica.",
          "D": "La prestación farmacéutica, la prestación ortoprotésica y la prestación con productos dietéticos."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 28,
        "idpregunta": 28,
        "pregunta": "28.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la cartera común de servicios accesorios del Sistema Nacional de Salud incluye:",
        "opciones": {
          "A": "Todas aquellas actividades, servicios o técnicas, sin carácter de prestación, que no se consideran esenciales y/o que son coadyuvantes o de apoyo para la mejora de una patología de carácter crónico, estando sujetas a aportación y/o reembolso por parte de la persona usuaria.",
          "B": "Todas aquellas actividades, servicios o técnicas, sin carácter de prestación, que no se consideran esenciales y/o que son coadyuvantes o de apoyo para la mejora de una patología de carácter crónico, estando sujetas siempre a aportación de la persona usuaria.",
          "C": "Todas aquellas actividades, servicios o técnicas, sin carácter de prestación, que no se consideran esenciales y/o que son coadyuvantes o de apoyo para la mejora de una patología de carácter crónico, estando sujetas a siempre a reembolso por parte de la persona usuaria.",
          "D": "Todas aquellas actividades, servicios o técnicas, sin carácter de prestación, que no se consideran esenciales y/o que son coadyuvantes o de apoyo para la mejora de una patología de carácter crónico, pero también cubiertos de forma completa por financiación pública."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Todas aquellas actividades, servicios o técnicas, sin carácter de prestación, que no se consideran esenciales y/o que son coadyuvantes o de apoyo para la mejora de una patología de carácter crónico, estando sujetas a <span class=\"diff-highlight\">aportación</span> <span class=\"diff-highlight\">y/o</span> reembolso por parte de la persona usuaria.",
          "B": "Todas aquellas actividades, servicios o técnicas, sin carácter de prestación, que no se consideran esenciales y/o que son coadyuvantes o de apoyo para la mejora de una patología de carácter crónico, estando sujetas <span class=\"diff-highlight\">siempre</span> a aportación de la persona usuaria.",
          "C": "Todas aquellas actividades, servicios o técnicas, sin carácter de prestación, que no se consideran esenciales y/o que son coadyuvantes o de apoyo para la mejora de una patología de carácter crónico, estando sujetas a <span class=\"diff-highlight\">siempre</span> <span class=\"diff-highlight\">a</span> reembolso por parte de la persona usuaria.",
          "D": "Todas aquellas actividades, servicios o técnicas, sin carácter de prestación, que no se consideran esenciales y/o que son coadyuvantes o de apoyo para la mejora de una patología de carácter crónico, <span class=\"diff-highlight\">pero</span> <span class=\"diff-highlight\">también</span> <span class=\"diff-highlight\">cubiertos</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">forma</span> <span class=\"diff-highlight\">completa</span> por <span class=\"diff-highlight\">financiación</span> <span class=\"diff-highlight\">pública</span>."
        }
      },
      {
        "num": 29,
        "idpregunta": 29,
        "pregunta": "29.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, las comunidades autónomas, en el ámbito de sus competencias, podrán aprobar sus respectivas carteras de servicios que incluirán, cuando menos:",
        "opciones": {
          "A": "La cartera común de servicios del Sistema Nacional de Salud en su modalidad básica de servicios asistenciales.",
          "B": "La cartera común de servicios del Sistema Nacional de Salud en sus modalidades básica de servicios asistenciales y suplementaria.",
          "C": "La cartera común de servicios del Sistema Nacional de Salud en sus modalidades básica de servicios asistenciales, suplementaria y de servicios accesorios.",
          "D": "Ninguna de las respuestas anteriores es correcta."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 30,
        "idpregunta": 30,
        "pregunta": "30.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, las comunidades autónomas, podrán incorporar en sus carteras de servicios una técnica, tecnología o procedimiento no contemplado en la cartera común de servicios del Sistema Nacional de Salud. Con anterioridad a su incorporación, la comunidad autónoma concernida deberá informar, de forma motivada, al Consejo Interterritorial del Sistema Nacional de Salud:",
        "opciones": {
          "A": "Esta afirmación es correcta.",
          "B": "Esta afirmación es correcta, salvo en lo que se refiere a la obligación de informar.",
          "C": "Esta afirmación es correcta, salvo en lo que se refiere a que la información deberá ser motivada.",
          "D": "Esta afirmación es falsa."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 31,
        "idpregunta": 31,
        "pregunta": "31.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la prestación de atención primaria no comprenderá:",
        "opciones": {
          "A": "La atención a la salud bucodental.",
          "B": "La atención paliativa a personas enfermas terminales.",
          "C": "La rehabilitación básica.",
          "D": "Ninguna de las respuestas anteriores es correcta."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 32,
        "idpregunta": 32,
        "pregunta": "32.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, para la elaboración del contenido de la cartera común de servicios del Sistema Nacional de Salud:",
        "opciones": {
          "A": "Es preceptivo el informe favorable de la Red Española de Agencias de Evaluación de Tecnologías Sanitarias y Prestaciones del Sistema Nacional de Salud, en relación con la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo.",
          "B": "Se contará con la participación de la Red Española de Agencias de Evaluación de Tecnologías Sanitarias y Prestaciones del Sistema Nacional de Salud, en la evaluación de la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo.",
          "C": "Es preceptivo el informe favorable de las sociedades científicas implicadas, en relación con la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo.",
          "D": "Se contará con la participación de las sociedades científicas implicadas, en la evaluación de la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "<span class=\"diff-highlight\">Es</span> <span class=\"diff-highlight\">preceptivo</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">informe</span> <span class=\"diff-highlight\">favorable</span> de la Red Española de Agencias de Evaluación de Tecnologías Sanitarias y Prestaciones del Sistema Nacional de Salud, en <span class=\"diff-highlight\">relación</span> <span class=\"diff-highlight\">con</span> la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo.",
          "B": "<span class=\"diff-highlight\">Se</span> <span class=\"diff-highlight\">contará</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">participación</span> de la Red Española de Agencias de Evaluación de Tecnologías Sanitarias y Prestaciones del Sistema Nacional de Salud, en <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">evaluación</span> <span class=\"diff-highlight\">de</span> la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo.",
          "C": "Es preceptivo el informe favorable de <span class=\"diff-highlight\">las</span> <span class=\"diff-highlight\">sociedades</span> <span class=\"diff-highlight\">científicas</span> <span class=\"diff-highlight\">implicadas</span>, en relación con la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo.",
          "D": "Se contará con la participación de <span class=\"diff-highlight\">las</span> <span class=\"diff-highlight\">sociedades</span> <span class=\"diff-highlight\">científicas</span> <span class=\"diff-highlight\">implicadas</span>, en la evaluación de la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo."
        }
      },
      {
        "num": 33,
        "idpregunta": 33,
        "pregunta": "33.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la exclusión de una técnica, tecnología o procedimiento actualmente incluido en la cartera de servicios se llevará a cabo cuando:",
        "opciones": {
          "A": "Se evidencie su falta de eficacia, efectividad o eficiencia, o que el balance entre beneficio y riesgo sea significativamente desfavorable.",
          "B": "Requiera una formación para la que no exista la especialidad médica correspondiente.",
          "C": "Hayan cambiado las condiciones económicas de su implantación.",
          "D": "Todas las respuestas anteriores son correctas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 34,
        "idpregunta": 34,
        "pregunta": "34.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, los servicios de referencia:",
        "opciones": {
          "A": "Serán designados en el seno del Consejo Interterritorial del Sistema Nacional de Salud y acreditados por el Ministerio de Sanidad y Consumo.",
          "B": "Serán designados en el seno del Consejo Interterritorial del Sistema Nacional de Salud y acreditados por la autoridad correspondiente de la Comunidad Autónoma donde se ubiquen.",
          "C": "Serán designados y acreditados en el seno del Consejo Interterritorial del Sistema Nacional de Salud.",
          "D": "Serán designados en el seno del Consejo Interterritorial del Sistema Nacional de Salud, acreditados por el Ministerio de Sanidad y Consumo y financiados por la Comunidad Autónoma donde se ubiquen."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Serán designados en el seno del Consejo Interterritorial del Sistema Nacional de Salud <span class=\"diff-highlight\">y</span> acreditados por el Ministerio de Sanidad y Consumo.",
          "B": "Serán designados en el seno del Consejo Interterritorial del Sistema Nacional de Salud <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">acreditados</span> <span class=\"diff-highlight\">por</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">autoridad</span> <span class=\"diff-highlight\">correspondiente</span> <span class=\"diff-highlight\">de</span> la Comunidad Autónoma donde se ubiquen.",
          "C": "Serán designados <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">acreditados</span> en el seno del Consejo Interterritorial del Sistema Nacional de Salud.",
          "D": "Serán designados en el seno del Consejo Interterritorial del Sistema Nacional de Salud<span class=\"diff-highlight\">, </span>acreditados por <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">Ministerio</span> de <span class=\"diff-highlight\">Sanidad</span> <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">Consumo</span> <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">financiados</span> <span class=\"diff-highlight\">por</span> la Comunidad Autónoma donde se ubiquen."
        }
      },
      {
        "num": 35,
        "idpregunta": 35,
        "pregunta": "35.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la decisión sobre la financiación de los medicamentos de uso humano y veterinario corresponde:",
        "opciones": {
          "A": "Al Consejo Interterritorial del Sistema Nacional de Salud.",
          "B": "Al Ministerio de Sanidad y Consumo.",
          "C": "A cada Comunidad Autónoma.",
          "D": "Al Ministerio de Economía y Hacienda."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 36,
        "idpregunta": 36,
        "pregunta": "36.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, el diseño de programas de formación y modernización de los recursos humanos del Sistema Nacional de Salud corresponde:",
        "opciones": {
          "A": "A la Comisión de Recursos Humanos del Sistema Nacional de Salud, sin perjuicio de las competencias de las comunidades autónomas.",
          "B": "Al Ministerio de Educación, sin prejuicio de las competencias de las comunidades autónomas.",
          "C": "A las comunidades autónomas, sin perjuicio de las competencias del Ministerio de Educación.",
          "D": "A las comunidades autónomas, sin perjuicio de las competencias de la Comisión de Recursos Humanos del Sistema Nacional de Salud."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 37,
        "idpregunta": 37,
        "pregunta": "37.- A los efectos de la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la competencia profesional es:",
        "opciones": {
          "A": "La acreditación de formación continuada a lo largo del desempeño de su carrera profesional.",
          "B": "La competencia acreditada por el título correspondiente acreditativo de la adquisición de conocimientos requeridos para el desempeño del puesto designado.",
          "C": "La aptitud del personal profesional sanitario para integrar y aplicar los conocimientos, habilidades y actitudes asociados a las buenas prácticas de su profesión para resolver los problemas que se le plantean.",
          "D": "La superación del proceso selectivo oficial convocado por la autoridad competente para la adquisición del vínculo estatutario con los servicios sanitarios."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 38,
        "idpregunta": 38,
        "pregunta": "38.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la tarjeta sanitaria individual incluirá los siguientes datos:",
        "opciones": {
          "A": "Exclusivamente los datos básicos de identificación de la persona titular de la tarjeta.",
          "B": "Exclusivamente los datos básicos de identificación de la persona titular de la tarjeta y del derecho que le asiste en relación con la prestación farmacéutica.",
          "C": "Los datos básicos de identificación de la persona titular de la tarjeta, del derecho que le asiste en relación con la prestación farmacéutica y del servicio de salud o entidad responsable de la asistencia sanitaria.",
          "D": "Los datos básicos de identificación de la persona titular de la tarjeta, del derecho que le asiste en relación con la prestación farmacéutica, del servicio de salud o entidad responsable de la asistencia sanitaria y del personal profesional al que está adscrito en atención primaria."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Exclusivamente los datos básicos de identificación de la persona titular de la tarjeta.",
          "B": "<span class=\"diff-highlight\">Exclusivamente</span> los datos básicos de identificación de la persona titular de la tarjeta <span class=\"diff-highlight\">y</span> del derecho que le asiste en relación con la prestación farmacéutica.",
          "C": "Los datos básicos de identificación de la persona titular de la tarjeta, del derecho que le asiste en relación con la prestación farmacéutica <span class=\"diff-highlight\">y</span> del servicio de salud o entidad responsable de la asistencia sanitaria.",
          "D": "Los datos básicos de identificación de la persona titular de la tarjeta, del derecho que le asiste en relación con la prestación farmacéutica<span class=\"diff-highlight\">, </span>del servicio de salud o entidad responsable de la asistencia sanitaria <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">personal</span> <span class=\"diff-highlight\">profesional</span> <span class=\"diff-highlight\">al</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">está</span> <span class=\"diff-highlight\">adscrito</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">atención</span> <span class=\"diff-highlight\">primaria</span>."
        }
      },
      {
        "num": 39,
        "idpregunta": 39,
        "pregunta": "39.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la infraestructura para la mejora de la calidad del Sistema Nacional de Salud estará constituida por los elementos siguientes:",
        "opciones": {
          "A": "El registro de agresiones a profesionales de la sanidad, con el fin de adopción de medidas preventivas.",
          "B": "El registro de acontecimientos adversos, que recogerá información sobre aquellas prácticas que hayan resultado un problema potencial de seguridad para la persona paciente.",
          "C": "Las respuestas a) y b) son correctas.",
          "D": "Las respuestas a) y b) son falsas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 40,
        "idpregunta": 40,
        "pregunta": "40.- Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la declaración de actuaciones coordinadas en salud pública y en seguridad alimentaria deberán encuadrarse en alguno de los supuestos siguientes:",
        "opciones": {
          "A": "Responder a situaciones de especial riesgo o alarma para la salud pública.",
          "B": "Establecer planes preventivos para hacer frente a situaciones de especial riesgo o alarma para la salud pública.",
          "C": "Realizar análisis epidemiológicos que permitan establecer estructuras y recursos según las previsiones en materia de salud pública y seguridad alimentaria.",
          "D": "Las respuestas a) y b) son verdaderas y la c) es falsa."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 41,
        "idpregunta": 41,
        "pregunta": "41.- El objeto de la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud es:",
        "opciones": {
          "A": "Establecer las bases reguladoras de la relación funcionarial especial del personal estatutario de los servicios de salud que conforman el Sistema Nacional de Salud.",
          "B": "Establecer el Estatuto Marco del personal estatutario vinculado por una relación laboral especial a los servicios de salud que integran el Sistema Nacional de Salud.",
          "C": "Establecer las bases reguladoras de la relación funcionarial del personal estatutario de los servicios de salud que conforman el Sistema Nacional de Salud.",
          "D": "Ninguna de las anteriores respuestas es correcta."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Establecer las bases reguladoras de la relación funcionarial <span class=\"diff-highlight\">especial</span> del personal estatutario de los servicios de salud que conforman el Sistema Nacional de Salud.",
          "B": "Establecer <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">Estatuto</span> <span class=\"diff-highlight\">Marco</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">personal</span> <span class=\"diff-highlight\">estatutario</span> <span class=\"diff-highlight\">vinculado</span> <span class=\"diff-highlight\">por</span> <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">relación</span> <span class=\"diff-highlight\">laboral</span> <span class=\"diff-highlight\">especial</span> <span class=\"diff-highlight\">a</span> los servicios de salud que <span class=\"diff-highlight\">integran</span> el Sistema Nacional de Salud.",
          "C": "Establecer las bases reguladoras de la relación funcionarial del personal estatutario de los servicios de salud que conforman el Sistema Nacional de Salud.",
          "D": "Ninguna de las anteriores respuestas es correcta."
        }
      },
      {
        "num": 42,
        "idpregunta": 42,
        "pregunta": "42.- Según dispone la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, la ordenación del régimen personal estatutario de los servicios de salud se rige por una serie de principios y criterios. Señale cuales no están entre los mencionados por esta ley:",
        "opciones": {
          "A": "Sometimiento pleno a la ley y el derecho.",
          "B": "Igualdad, mérito, capacidad y promoción en el acceso a la condición de personal estatutario.",
          "C": "Integración en el régimen organizativo y funcional del servicio de salud y de sus centros e instituciones.",
          "D": "Coordinación, cooperación y mutua información entre las Administraciones sanitarias públicas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 43,
        "idpregunta": 43,
        "pregunta": "43.- El personal estatutario de los servicios de salud que conforman el Sistema Nacional de Salud:",
        "opciones": {
          "A": "No ostenta el derecho individual a la libre sindicación.",
          "B": "Ostenta el derecho a la actividad sindical.",
          "C": "Ostenta el derecho de reunión, que podrá ejercerlo siempre que cuente con la necesaria autorización previa.",
          "D": "Todas las respuestas son correctas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 44,
        "idpregunta": 44,
        "pregunta": "44.- La condición de personal estatutario fijo se adquiere, tal y como prevé la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, por el cumplimiento de los siguientes requisitos:",
        "opciones": {
          "A": "Incorporación a una plaza de servicio, institución o centro que corresponda en el plazo fijado en la convocatoria tras la superación de las pruebas de selección.",
          "B": "Superación de las pruebas de selección; nombramiento conferido por el órgano competente; e incorporación a una plaza del servicio, institución o centro que corresponda en el plazo de un mes.",
          "C": "Superación de las pruebas de selección; nombramiento conferido por el órgano competente; e incorporación, previo cumplimiento de los requisitos formales en cada caso establecidos, a una plaza del servicio, institución o centro que corresponda en el plazo determinado en la convocatoria.",
          "D": "Superación de las pruebas de selección; nombramiento conferido por el órgano competente; e incorporación a una plaza del servicio, institución o centro que corresponda en todo caso en el plazo determinado en la convocatoria."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Incorporación a una plaza <span class=\"diff-highlight\">de</span> servicio, institución o centro que corresponda en el plazo <span class=\"diff-highlight\">fijado</span> en la convocatoria <span class=\"diff-highlight\">tras</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">superación</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">las</span> <span class=\"diff-highlight\">pruebas</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">selección</span>.",
          "B": "Superación de las pruebas de selección; nombramiento conferido por el órgano competente; e incorporación a una plaza del servicio, institución o centro que corresponda en el plazo <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">un</span> <span class=\"diff-highlight\">mes</span>.",
          "C": "Superación de las pruebas de selección; nombramiento conferido por el órgano competente; e incorporación<span class=\"diff-highlight\">, previo</span> <span class=\"diff-highlight\">cumplimiento</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">los</span> <span class=\"diff-highlight\">requisitos</span> <span class=\"diff-highlight\">formales</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">cada</span> <span class=\"diff-highlight\">caso</span> <span class=\"diff-highlight\">establecidos, </span>a una plaza del servicio, institución o centro que corresponda en el plazo determinado en la convocatoria.",
          "D": "Superación de las pruebas de selección; nombramiento conferido por el órgano competente; e incorporación a una plaza del servicio, institución o centro que corresponda <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">todo</span> <span class=\"diff-highlight\">caso</span> en el plazo determinado en la convocatoria."
        }
      },
      {
        "num": 45,
        "idpregunta": 45,
        "pregunta": "45.- Según dice la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, en el proceso de la adquisición de la condición de personal estatutario fijo, no podrán recibir nombramiento y quedarán sin efecto las actuaciones de quienes:",
        "opciones": {
          "A": "No acrediten que reúnen los requisitos y condiciones exigidos en la convocatoria, una vez superado el proceso selectivo.",
          "B": "No acrediten que reúnen los requisitos y condiciones exigidos en la convocatoria, con carácter previo a la superación del proceso selectivo.",
          "C": "No acrediten que reúnen los requisitos y condiciones exigidos en la convocatoria, una vez firmada la convocatoria.",
          "D": "Una vez superado el proceso selectivo, automáticamente se procede al nombramiento por el órgano competente."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 46,
        "idpregunta": 46,
        "pregunta": "46.- La pérdida de la condición de personal estatutario regulada en la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, se produce:",
        "opciones": {
          "A": "Siempre en caso de pena de inhabilitación especial para empleo o cargo público, afecte o no al correspondiente nombramiento.",
          "B": "En caso de que se adopte la pena de inhabilitación absoluta sea firme o no.",
          "C": "En caso de que se adopte la pena de inhabilitación especial para la correspondiente profesión, siempre que esta exceda de seis años.",
          "D": "En caso de que se adopte la pena de inhabilitación especial para la correspondiente profesión, siempre que esta exceda de tres años."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 47,
        "idpregunta": 47,
        "pregunta": "47.- Conforme a la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, señale cuál de las siguientes afirmaciones no es correcta:",
        "opciones": {
          "A": "La jubilación puede ser forzosa o voluntaria.",
          "B": "Para que la persona interesada pueda prolongar su permanencia en servicio activo hasta cumplir los 70 años, bastará con que lo solicite voluntariamente.",
          "C": "La jubilación forzosa se declarará al cumplir la persona interesada 65 años.",
          "D": "Podrá optar a la jubilación voluntaria, total o parcial, el personal estatutario que reúna los requisitos establecidos en la legislación de Seguridad Social."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 48,
        "idpregunta": 48,
        "pregunta": "48.- Procede la extinción de la condición de personal estatutario fijo de los servicios de salud:",
        "opciones": {
          "A": "Cuando se produzca la pérdida de la nacionalidad.",
          "B": "En caso de recaer sanción firme disciplinaria de separación del servicio.",
          "C": "Siempre que se imponga una pena principal o accesoria de inhabilitación especial para empleo o cargo público o para el ejercicio de la correspondiente profesión.",
          "D": "Todas las anteriores respuestas son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 49,
        "idpregunta": 49,
        "pregunta": "49.- En materia de retribuciones, la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, prevé que:",
        "opciones": {
          "A": "El sistema retributivo del personal estatutario se estructura en retribuciones básicas y retribuciones complementarias.",
          "B": "La evaluación del personal estatutario a efectos de determinación de una parte de la retribuciones complementarias se establecerá a través de procedimientos fundados en los principios igualdad, objetividad y transparencia.",
          "C": "El sistema retributivo del personal estatutario responde a los principios de cualificación técnica y profesional.",
          "D": "Todas las respuestas son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 50,
        "idpregunta": 50,
        "pregunta": "50.- De acuerdo con la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, señale la respuesta correcta respecto a las retribuciones del personal estatutario de los servicios de salud:",
        "opciones": {
          "A": "Las retribuciones básicas son: el sueldo asignado a cada categoría en función del título exigido para su desempeño; los trienios; y las pagas extraordinarias.",
          "B": "Las retribuciones básicas serán iguales en todos los servicios de salud independientemente de la anualidad en la que se perciban.",
          "C": "El personal estatutario temporal percibirá la totalidad de las retribuciones que, en el correspondiente servicio de salud, correspondan a su nombramiento, con excepción del complemento de carrera.",
          "D": "El complemento de atención continuada está destinado a retribuir la iniciativa continuada y permanente de la persona titular del puesto."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 51,
        "idpregunta": 51,
        "pregunta": "51.- La pérdida de la condición de personal estatutario de los servicios de salud se produce cuando la incapacidad permanente sea declarada:",
        "opciones": {
          "A": "En grado de incapacidad permanente total para la profesión habitual.",
          "B": "En grado de incapacidad absoluta para todo trabajo.",
          "C": "En grado de gran invalidez.",
          "D": "Todas las respuestas son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 52,
        "idpregunta": 52,
        "pregunta": "52.- La Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, establece que:",
        "opciones": {
          "A": "El tiempo de trabajo es el período en el que el personal permanece en el centro sanitario.",
          "B": "Solo se considera tiempo de trabajo aquel en el que el personal se encuentre dentro del centro sanitario en su puesto de trabajo y en el ejercicio de su actividad y funciones.",
          "C": "Para el cómputo del tiempo de trabajo, se puede tomar en consideración tanto el tiempo en el que se permanece en el centro sanitario como fuera de dicho centro.",
          "D": "Ninguna de las respuestas anteriores es correcta."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 53,
        "idpregunta": 53,
        "pregunta": "53.- En el supuesto del personal estatutario de los servicios de salud:",
        "opciones": {
          "A": "El período de localización es aquel período de tiempo en el que el personal se encuentra únicamente en situación de disponibilidad.",
          "B": "Se considera período de descanso todo período de tiempo que no sea tiempo de trabajo.",
          "C": "El trabajo por turnos es una forma de organización del trabajo en equipo con arreglo al ritmo rotatorio y siempre de tipo continuo.",
          "D": "El período de localización es aquel período de tiempo en el que el personal se encuentra en situación de disponibilidad a los solos efectos de asegurar su posible localización."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 54,
        "idpregunta": 54,
        "pregunta": "54.- Para el personal estatutario de los servicios de salud, el período nocturno tendrá la siguiente duración:",
        "opciones": {
          "A": "Mínima de siete horas e incluirá necesariamente el período comprendido entre las cero y las cinco horas de cada día natural.",
          "B": "Mínima de ocho horas e incluirá necesariamente el período comprendido entre las cero y las cinco horas de cada día natural.",
          "C": "Mínima de ocho horas e incluirá necesariamente el período comprendido entre las doce y las cinco horas de cada día natural.",
          "D": "Mínima de siete horas e incluirá necesariamente el período comprendido entre las doce y las cinco horas de cada día natural."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 55,
        "idpregunta": 55,
        "pregunta": "55.- Atendiendo a lo dispuesto en la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, señale la respuesta que no es correcta:",
        "opciones": {
          "A": "Para superarse la duración máxima conjunta de la jornada ordinaria y la jornada complementaria, será suficiente con justificar por parte del centro sanitario que existen razones organizativas o asistenciales que así lo justifiquen.",
          "B": "Podrá superarse la duración máxima conjunta de la jornada ordinaria y de la jornada complementaria cuando el personal lo consienta y siempre que existan razones organizativas o asistenciales que así lo justifiquen en aras a garantizar la adecuada atención continuada y permanente",
          "C": "Podrá superarse la duración máxima conjunta de la jornada ordinaria y de la jornada complementaria siempre previa oferta expresa del centro sanitario.",
          "D": "Los excesos de jornada tendrán el carácter de jornada complementaria y un límite máximo de 150 horas anuales."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 56,
        "idpregunta": 56,
        "pregunta": "56.- Respecto a la jornada y descansos diarios del personal estatutario de los servicios de salud, es correcta la siguiente afirmación:",
        "opciones": {
          "A": "El tiempo de trabajo correspondiente a la jornada ordinaria será siempre de 12 horas ininterrumpidas.",
          "B": "El personal tiene derecho a un período mínimo de descanso ininterrumpido de 8 horas entre el fin de una jornada y el comienzo de la siguiente.",
          "C": "Se podrán establecer jornadas ordinarias de hasta 24 horas con carácter excepcional y cuando así lo aconsejen razones organizativas o asistenciales.",
          "D": "El descanso ininterrumpido de 12 horas entre el fin de una jornada y el comienzo de la siguiente solo podrá reducirse en el caso de trabajo a turnos, cuando el personal cambie de equipo y no pueda disfrutar del período de descanso diario entre el final de la jornada de un equipo y el comienzo de la jornada del siguiente."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 57,
        "idpregunta": 57,
        "pregunta": "57.- Según establece la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud:",
        "opciones": {
          "A": "Resulta incompatible para el personal estatutario de los servicios de salud el ejercicio de las funciones sanitarias con cualquier otro tipo de funciones.",
          "B": "Al personal estatutario de los servicios de salud le resulta aplicable el mismo régimen de incompatibilidades establecido para el personal funcionario.",
          "C": "Atendiendo a lo que establezca la legislación vigente, el personal estatutario de los servicios de salud podrá compatibilizar las funciones sanitarias y docente.",
          "D": "Para el personal licenciado sanitario el complemento específico resulta irrenunciable."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 58,
        "idpregunta": 58,
        "pregunta": "58.- La Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud regula el descanso semanal. Señale la respuesta que no es correcta:",
        "opciones": {
          "A": "El personal tendrá derecho a un período mínimo que siempre será fijo de descanso ininterrumpido con una duración media de 24 horas semanales.",
          "B": "El período de referencia para el cálculo del período de descanso semanal será de tres meses.",
          "C": "En el caso de que no se hubiera disfrutado del tiempo mínimo de descanso semanal en el período de tres meses se producirá una compensación a través del régimen de descansos alternativos.",
          "D": "El período de referencia para el cálculo del período de descanso semanal será de dos meses."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 59,
        "idpregunta": 59,
        "pregunta": "59.- Conforme a la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud:",
        "opciones": {
          "A": "El personal tendrá derecho a una vacación retribuida cuya duración no será inferior en ningún caso a 30 días naturales.",
          "B": "El personal estatutario de los servicios de salud podrá elegir sustituir el período de vacación por una compensación económica.",
          "C": "Solo podrá ser sustituido por una compensación económica el período vacacional anual mediante la programación funcional de los centros, cuando así lo aconsejen razones organizativas.",
          "D": "Anualmente, el personal tendrá derecho a una vacación retribuida cuya duración no será inferior a 30 días naturales, o al tiempo que proporcionalmente corresponda en función del tiempo de servicios."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 60,
        "idpregunta": 60,
        "pregunta": "60.- La excedencia voluntaria solicitada por el personal estatutario de los servicios de salud por interés particular exige haber prestado servicios efectivos en cualquiera de las Administraciones públicas durante:",
        "opciones": {
          "A": "Los cinco años inmediatamente anteriores.",
          "B": "Los cuatro años inmediatamente anteriores.",
          "C": "Los dos años inmediatamente anteriores.",
          "D": "Los tres años inmediatamente anteriores."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 61,
        "idpregunta": 61,
        "pregunta": "61.- La Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi, establece que la Administración sanitaria vasca debe garantizar la tutela general de la salud pública a través de:",
        "opciones": {
          "A": "Medidas preventivas.",
          "B": "Promoción de la salud.",
          "C": "Prestaciones sanitarias individuales.",
          "D": "Son correctas todas las respuestas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 62,
        "idpregunta": 62,
        "pregunta": "62.- La Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi, reconoce la universalidad del derecho a la protección de la salud para:",
        "opciones": {
          "A": "Todas las personas residentes en el territorio de Euskadi, así como para las personas transeúntes.",
          "B": "Todas las personas residentes en Euskadi o fuera de Euskadi, así como para las personas transeúntes.",
          "C": "Solo para las personas que tengan vecindad administrativa en Euskadi.",
          "D": "Solo para las personas de quienes pueda predicarse la condición política de vascos."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 63,
        "idpregunta": 63,
        "pregunta": "63.- Señale cuál de los siguientes principios no se enuncian entre los principios informadores del sistema sanitario de Euskadi en la Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi:",
        "opciones": {
          "A": "Universalidad.",
          "B": "Solidaridad ciudadana.",
          "C": "Equidad.",
          "D": "Calidad de los servicios."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 64,
        "idpregunta": 64,
        "pregunta": "64.- La Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi, establece respecto a las áreas de salud que:",
        "opciones": {
          "A": "La Comunidad Autónoma del País Vasco se divide territorialmente en áreas de salud de acuerdo con la situación socio-económica de cada demarcación geográfica.",
          "B": "En cada área de salud pueden ponerse en práctica las actuaciones esenciales que requiere la tutela general de la salud pública y exclusivamente la asistencia sanitaria primaria .",
          "C": "En cada área de salud se garantizará una adecuada ordenación de la atención primaria y su coordinación con la atención especializada.",
          "D": "Son correctas la a) y la c)."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 65,
        "idpregunta": 65,
        "pregunta": "65.- Según la Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi, señale que respuesta no es correcta. Son principios programáticos de organización y funcionamiento del sistema sanitario de Euskadi los siguientes:",
        "opciones": {
          "A": "La optimización del marco de cualquier tipo de financiación del catálogo de prestaciones sanitarias que asegure la Comunidad Autónoma de Euskadi.",
          "B": "La orientación prioritaria de los medios y actuaciones a la promoción de la salud y a la prevención de las enfermedades.",
          "C": "El desarrollo interno de la organización mediante el principio de separación de los cometidos de regulación y financiación del sistema respecto de la provisión de servicios sanitarios.",
          "D": "La responsabilización y participación del personal profesional sanitario en las decisiones de organización y gestión de los recursos que tengan asignados."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 66,
        "idpregunta": 66,
        "pregunta": "66.- La Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi prevé la creación de sistemas de información necesarios para facilitar el ejercicio adecuado de los distintos niveles de responsabilidad en el sistema. A tal fin, los datos de carácter personal relativos a la salud podrán ser recabados y tratados siempre que se cumplan los siguientes requisitos:",
        "opciones": {
          "A": "Siempre debe constar el previo consentimiento de la persona afectada.",
          "B": "Si no consta el previo consentimiento de la persona afectada se requiere que la actuación se encuentre debidamente autorizada y se efectúe previo procedimiento de disociación que garantice el anonimato de la información.",
          "C": "Que conste el previo consentimiento de la persona afectada por escrito y que se garantice el anonimato de la información.",
          "D": "Basta con que la actuación se encuentre debidamente autorizada."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 67,
        "idpregunta": 67,
        "pregunta": "67.- La Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi contempla que:",
        "opciones": {
          "A": "El acceso de la ciudadanía a los servicios sanitarios de cobertura pública garantizará el principio de igualdad formal.",
          "B": "El acceso de la ciudadanía a cualquier servicio sanitario garantizará el principio de igualdad efectiva.",
          "C": "El acceso de la ciudadanía a los servicios sanitarios de cobertura pública garantizará el principio de igualdad efectiva.",
          "D": "El acceso de la ciudadanía a los servicios sanitarios garantizará el principio de universalidad."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 68,
        "idpregunta": 68,
        "pregunta": "68.- La Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi al contemplar los derechos y deberes ciudadanos, alude a:",
        "opciones": {
          "A": "La obligación de dejar constancia escrita de todo proceso diagnóstico o terapéutico.",
          "B": "La obligación de dejar constancia por cualquier medio de todo proceso diagnóstico.",
          "C": "La obligación de dejar constancia por cualquier medio de todo proceso diagnóstico o terapéutico.",
          "D": "No existe en la Ley ninguna previsión a este respecto, de modo que será el personal facultativo el que decida si el proceso diagnóstico o terapéutico debe quedar registrado."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 69,
        "idpregunta": 69,
        "pregunta": "69.- Atendiendo a lo dispuesto en la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi, señale cuál es la afirmación correcta con relación a los consejos de participación comunitaria :",
        "opciones": {
          "A": "Tienen facultades decisorias en la formulación de planes y objetivos generales del sistema.",
          "B": "Se les atribuyen facultades consultivas y de asesoramiento en la formulación de planes y objetivos generales del sistema.",
          "C": "Su composición responde exclusivamente a criterios de representatividad territorial.",
          "D": "Su composición responde a criterios de representatividad territorial y podrán incorporarse, cuando así lo decida su presidencia, además de representantes de las Administraciones locales y forales, representantes de los colegios profesionales sanitarios."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 70,
        "idpregunta": 70,
        "pregunta": "70.- El contrato-programa, tal y como establece la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi:",
        "opciones": {
          "A": "Es el instrumento jurídico mediante el que se articulan las relaciones entre el Gobierno Vasco y las organizaciones del ente público Osakidetza-Servicio Vasco de Salud para la provisión de servicios sanitarios.",
          "B": "Es el instrumento jurídico mediante el que se articulan de manera directa las relaciones entre el Departamento competente en materia de sanidad y las organizaciones del ente público Osakidetza-Servicio Vasco de Salud que tiene naturaleza jurídica de concierto.",
          "C": "Es el instrumento jurídico mediante el que se articulan de manera directa las relaciones entre el Departamento competente en materia de sanidad y las organizaciones del ente público Osakidetza-Servicio Vasco de Salud que tiene naturaleza jurídica de un convenio de carácter especial.",
          "D": "Ninguna respuesta es correcta."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Es el instrumento jurídico mediante el que se articulan las relaciones entre el <span class=\"diff-highlight\">Gobierno</span> <span class=\"diff-highlight\">Vasco</span> y las organizaciones del ente público Osakidetza-Servicio Vasco de Salud <span class=\"diff-highlight\">para</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">provisión</span> de <span class=\"diff-highlight\">servicios</span> <span class=\"diff-highlight\">sanitarios</span>.",
          "B": "Es el instrumento jurídico mediante el que se articulan de manera directa las relaciones entre el Departamento competente en materia de sanidad y las organizaciones del ente público Osakidetza-Servicio Vasco de Salud que tiene naturaleza jurídica de <span class=\"diff-highlight\">concierto</span>.",
          "C": "Es el instrumento jurídico mediante el que se articulan de manera directa las relaciones entre el Departamento competente en materia de sanidad y las organizaciones del ente público Osakidetza-Servicio Vasco de Salud que tiene naturaleza jurídica de <span class=\"diff-highlight\">un</span> <span class=\"diff-highlight\">convenio</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">carácter</span> <span class=\"diff-highlight\">especial</span>.",
          "D": "Ninguna respuesta es correcta."
        }
      },
      {
        "num": 71,
        "idpregunta": 71,
        "pregunta": "71.- Osakidetza-Servicio Vasco de Salud se constituye como:",
        "opciones": {
          "A": "Ente público con personalidad jurídica propia y adscrito al Departamento de la Administración General competente en materia de salud.",
          "B": "Ente público de derecho privado con personalidad jurídica propia.",
          "C": "Ente público de derecho público al que se le atribuye personalidad jurídica propia.",
          "D": "Ninguna respuesta es correcta."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 72,
        "idpregunta": 72,
        "pregunta": "72.- El consejo de administración de Osakidetza-Servicio Vasco de Salud está integrado por:",
        "opciones": {
          "A": "La persona titular de la presidencia y por un número no superior a cinco miembros en representación de la Administración de la Comunidad Autónoma de Euskadi.",
          "B": "La persona titular de la presidencia y por un número no superior a tres miembros en representación de la Administración de la Comunidad Autónoma de Euskadi.",
          "C": "La persona titular de la presidencia y por cinco miembros en representación del Departamento competente en materia de sanidad.",
          "D": "La persona titular de la presidencia, la Consejería del Departamento competente en materia de sanidad y tres miembros en representación de la Administración de la Comunidad Autónoma de Euskadi."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 73,
        "idpregunta": 73,
        "pregunta": "73.- Según establece la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi:",
        "opciones": {
          "A": "El Plan de Salud de Euskadi debe ser aprobado por el Parlamento Vasco.",
          "B": "El Departamento competente en materia de sanidad debe elaborar semestralmente y remitir al Parlamento un informe con la evaluación de los objetivos y determinaciones del Plan de Salud de Euskadi.",
          "C": "El Departamento competente en materia de sanidad debe elaborar anualmente y remitir al Parlamento un informe con la evaluación de los objetivos y determinaciones del Plan de Salud de Euskadi.",
          "D": "Son correctas las respuestas a) y c)."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "El <span class=\"diff-highlight\">Plan</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">Salud</span> de <span class=\"diff-highlight\">Euskadi</span> debe <span class=\"diff-highlight\">ser</span> <span class=\"diff-highlight\">aprobado</span> <span class=\"diff-highlight\">por</span> <span class=\"diff-highlight\">el</span> Parlamento <span class=\"diff-highlight\">Vasco</span>.",
          "B": "El Departamento competente en materia de sanidad debe elaborar <span class=\"diff-highlight\">semestralmente</span> y remitir al Parlamento un informe con la evaluación de los objetivos y determinaciones del Plan de Salud de Euskadi.",
          "C": "El Departamento competente en materia de sanidad debe elaborar <span class=\"diff-highlight\">anualmente</span> y remitir al Parlamento un informe con la evaluación de los objetivos y determinaciones del Plan de Salud de Euskadi.",
          "D": "Son correctas las respuestas a) y c)."
        }
      },
      {
        "num": 74,
        "idpregunta": 74,
        "pregunta": "74.- A los efectos de la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi, las plantillas de personal del ente público Osakidetza-Servicio Vasco de Salud:",
        "opciones": {
          "A": "Serán aprobadas por la Presidencia a propuesta del consejo de administración.",
          "B": "Se denomina así al número de efectivos de carácter estructural con que cuentan tanto su organización central de administración como las organizaciones de servicios dependientes de Osakidetza-Servicio Vasco de Salud.",
          "C": "Deberán ajustarse al número máximo de efectivos, según grupos profesionales, que anualmente aprobará su consejo de administración a propuesta del Departamento de Sanidad.",
          "D": "Deberán ajustarse al número máximo de efectivos, según grupos de titulación, que anualmente aprobará el Departamento de Sanidad."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 75,
        "idpregunta": 75,
        "pregunta": "75.- La dirección, planificación y programación del sistema sanitario de Euskadi es competencia:",
        "opciones": {
          "A": "Del Gobierno Vasco.",
          "B": "Del presidente del ente público Osakidetza-Servicio Vasco de Salud a propuesta de su consejo de administración.",
          "C": "Del Parlamento Vasco.",
          "D": "Del Departamento competente en materia de sanidad."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 76,
        "idpregunta": 76,
        "pregunta": "76.- En el ámbito territorial de la Comunidad Autónoma de Euskadi, las inspecciones necesarias para asegurar el cumplimiento de lo previsto en la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi y en el resto de la legislación sanitaria corresponde:",
        "opciones": {
          "A": "A la inspección de trabajo del País Vasco adscrita al Departamento de trabajo y empleo del Gobierno Vasco.",
          "B": "En todos los casos a las corporaciones locales de la Comunidad Autónoma.",
          "C": "Al Departamento competente en materia de sanidad.",
          "D": "La inspección en materia sanitaria no es competencia de la Comunidad Autónoma de Euskadi."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 77,
        "idpregunta": 77,
        "pregunta": "77.- Señale cuál de los siguientes criterios no está contemplado en la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi para la clasificación de las infracciones en leves, graves o muy graves:",
        "opciones": {
          "A": "La cuantía de la indemnización solicitada.",
          "B": "Los riesgos para la salud.",
          "C": "El grado de intencionalidad.",
          "D": "La gravedad de la alteración sanitaria y social producida."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 78,
        "idpregunta": 78,
        "pregunta": "78.- Según establece la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi, en materia de sanciones señale la respuesta correcta:",
        "opciones": {
          "A": "Las infracciones serán sancionadas exclusivamente con sanción pecuniaria o económica.",
          "B": "En los casos de infracciones muy graves, el Gobierno Vasco podrá acordar el cierre temporal del establecimiento, instalación o servicio por un plazo máximo de cinco años.",
          "C": "Sin perjuicio de la multa que proceda imponer, en ciertos casos, la sanción económica que se imponga podrá ser incrementada hasta el triple de la cuantía del beneficio ilícito obtenido.",
          "D": "En los casos de infracciones muy graves, el Gobierno Vasco podrá acordar el cierre temporal del establecimiento, instalación o servicio por un plazo máximo de tres años."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Las infracciones serán sancionadas exclusivamente con sanción pecuniaria o económica.",
          "B": "En los casos de infracciones muy graves, el Gobierno Vasco podrá acordar el cierre temporal del establecimiento, instalación o servicio por un plazo máximo de <span class=\"diff-highlight\">cinco</span> años.",
          "C": "<span class=\"diff-highlight\">Sin</span> <span class=\"diff-highlight\">perjuicio</span> de <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">multa</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">proceda</span> <span class=\"diff-highlight\">imponer, en</span> <span class=\"diff-highlight\">ciertos</span> <span class=\"diff-highlight\">casos, la</span> <span class=\"diff-highlight\">sanción</span> <span class=\"diff-highlight\">económica</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">se</span> <span class=\"diff-highlight\">imponga</span> <span class=\"diff-highlight\">podrá</span> <span class=\"diff-highlight\">ser</span> <span class=\"diff-highlight\">incrementada</span> <span class=\"diff-highlight\">hasta</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">triple</span> de <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">cuantía</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">beneficio</span> <span class=\"diff-highlight\">ilícito</span> <span class=\"diff-highlight\">obtenido</span>.",
          "D": "En los casos de infracciones muy graves, el Gobierno Vasco podrá acordar el cierre temporal del establecimiento, instalación o servicio por un plazo máximo de <span class=\"diff-highlight\">tres</span> años."
        }
      },
      {
        "num": 79,
        "idpregunta": 79,
        "pregunta": "79.- Según la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi, las organizaciones a través de las que se procede a la provisión de servicios sanitarios con medios adscritos al ente público Osakidetza-Servicio Vasco de Salud:",
        "opciones": {
          "A": "Realizarán su actividad bajo el principio de autonomía económico-financiera y de gestión.",
          "B": "Se configurarán como instituciones de titularidad privada y con personalidad jurídica propia.",
          "C": "Se crearán por ley como entidades de titularidad pública y con personalidad jurídica propia.",
          "D": "Para realizar su actividad dependen presupuestariamente del ente público Osakidetza- Servicio Vasco de Salud."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 80,
        "idpregunta": 80,
        "pregunta": "80.- Respecto al personal sujeto al régimen estatutario que establece la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi, señale la respuesta correcta:",
        "opciones": {
          "A": "Este vínculo estatutario se adquiere mediante el cumplimiento de los dos siguientes requisitos: superación del proceso selectivo correspondiente y nombramiento conferido por autoridad competente.",
          "B": "Los principios que rigen el procedimiento selectivo para la adquisición del vínculo estatutario son exclusivamente el de igualdad, mérito y capacidad.",
          "C": "Los instrumentos de clasificación del personal sujeto a este régimen estatutario son el grupo de titulación, el grupo profesional, la categoría y el puesto funcional que se desempeñe.",
          "D": "El grupo de titulación constituye el instrumento de clasificación del personal en base al agrupamiento unitario de las aptitudes profesionales y contenido específico da las tareas propias de la prestación."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 81,
        "idpregunta": 81,
        "pregunta": "81.- El ente público Osakidetza-Servicio Vasco de Salud es:",
        "opciones": {
          "A": "El Ente Institucional de la Comunidad Autónoma, de naturaleza pública y bajo la calificación de ente público de derecho privado o público.",
          "B": "El Ente Institucional de la Comunidad Autónoma, de naturaleza pública y bajo la calificación de ente público de derecho público",
          "C": "El Ente Institucional de la Comunidad Autónoma, de naturaleza pública y bajo la calificación de ente público de derecho privado",
          "D": "Las tres anteriores son erróneas"
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 82,
        "idpregunta": 82,
        "pregunta": "82.- En desarrollo de su objeto, el ente público Osakidetza-Servicio Vasco de Salud perseguirá a través de todas sus organizaciones los siguientes fines (señálese la respuesta incorrecta):",
        "opciones": {
          "A": "Ejecutar la provisión del servicio público sanitario en la Comunidad Autónoma de Euskadi.",
          "B": "Promocionar el desarrollo de sus recursos sanitarios a través de acciones y programas propios o en colaboración con otras instituciones, y cualquier otro fin relacionado con su objeto que decida su Dirección General.",
          "C": "Promover la formación y actualización de los conocimientos especializados que requiere su personal sanitario y no sanitario, tanto en el campo específico de la salud como en los de la gestión y administración sanitarias.",
          "D": "Proporcionar a las personas que accedan a sus servicios las condiciones necesarias para el pleno ejercicio de sus derechos y deberes de carácter instrumental o complementario."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 83,
        "idpregunta": 83,
        "pregunta": "83.- Corresponderá la presidencia del ente público Osakidetza-Servicio Vasco de Salud a:",
        "opciones": {
          "A": "Quien ostente la presidencia del Gobierno (Lehendakari) de la Comunidad Autónoma del País Vasco.",
          "B": "La Diputación General del Territorio Histórico en que esté situado el Ente.",
          "C": "La presidencia a quien ostente la titularidad del Departamento de Sanidad y la presidencia de honor a quien ostente la presidencia del Gobierno (Lehendakari) de la Comunidad Autónoma del País Vasco.",
          "D": "Quien ostente la titularidad de del Departamento de Sanidad."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 84,
        "idpregunta": 84,
        "pregunta": "84.- La función de nombrar y separar a quienes ocupen las Direcciones de División de la organización central del ente público Osakidetza-Servicio Vasco de Salud corresponde a:",
        "opciones": {
          "A": "El Consejo de Administración del Ente.",
          "B": "La Dirección General del Ente.",
          "C": "La Presidencia del Ente.",
          "D": "Ninguno de los anteriores."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 85,
        "idpregunta": 85,
        "pregunta": "85.- La composición del Consejo del ente público Osakidetza-Servicio Vasco de Salud contará, además de la persona que ejerza la Presidencia:",
        "opciones": {
          "A": "Con cinco integrantes en representación de la Administración de la Comunidad Autónoma, que nombrará el Gobierno: una persona a propuesta de la titularidad del Departamento de Hacienda y Administración Pública, otra a propuesta de quien ostente la titularidad de Bienestar Social y las tres restantes a propuesta de la persona titular de Sanidad.",
          "B": "Con cinco integrantes en representación de la Administración de la Comunidad Autónoma, que nombrará el Gobierno: una persona a propuesta de la titularidad del Departamento de Hacienda y Administración Pública, otra a propuesta de la persona titular de la Consejería de Presidencia y las tres restantes a propuesta de la persona titular de Sanidad.",
          "C": "Con cinco integrantes en representación de la Administración de la Comunidad Autónoma, que nombrará el Gobierno: dos a propuesta de la persona titular del Departamento de Hacienda y Administración Pública y las tres restantes a propuesta de la persona titular de Sanidad.",
          "D": "Ninguna de los anteriores."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Con cinco integrantes en representación de la Administración de la Comunidad Autónoma, que nombrará el Gobierno: una persona a propuesta de la titularidad del Departamento de Hacienda y Administración Pública, otra a propuesta de <span class=\"diff-highlight\">quien</span> <span class=\"diff-highlight\">ostente</span> la <span class=\"diff-highlight\">titularidad</span> de <span class=\"diff-highlight\">Bienestar</span> <span class=\"diff-highlight\">Social</span> y las tres restantes a propuesta de la persona titular de Sanidad.",
          "B": "Con cinco integrantes en representación de la Administración de la Comunidad Autónoma, que nombrará el Gobierno: una persona a propuesta de la titularidad del Departamento de Hacienda y Administración Pública, otra a propuesta de <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">persona</span> <span class=\"diff-highlight\">titular</span> <span class=\"diff-highlight\">de</span> la <span class=\"diff-highlight\">Consejería</span> de <span class=\"diff-highlight\">Presidencia</span> y las tres restantes a propuesta de la persona titular de Sanidad.",
          "C": "Con cinco integrantes en representación de la Administración de la Comunidad Autónoma, que nombrará el Gobierno: <span class=\"diff-highlight\">dos</span> a propuesta de la <span class=\"diff-highlight\">persona</span> <span class=\"diff-highlight\">titular</span> del Departamento de Hacienda y Administración Pública y las tres restantes a propuesta de la persona titular de Sanidad.",
          "D": "Ninguna de los anteriores."
        }
      },
      {
        "num": 86,
        "idpregunta": 86,
        "pregunta": "86.- La función de aprobar los criterios y líneas generales de actuación del ente público Osakidetza-Servicio Vasco de Salud corresponde a:",
        "opciones": {
          "A": "El Consejo de Administración del Ente.",
          "B": "La Dirección General del Ente.",
          "C": "La Presidencia del Ente.",
          "D": "Ninguno de los anteriores."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 87,
        "idpregunta": 87,
        "pregunta": "87.- La propuesta de Plan Estratégico del ente público Osakidetza-Servicio Vasco de Salud:",
        "opciones": {
          "A": "Será formulada por la Dirección General del Ente.",
          "B": "Será aprobada por la Presidencia del Ente.",
          "C": "Será sometida a informe del Consejo de Administración del Ente.",
          "D": "Todas las anteriores son ciertas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 88,
        "idpregunta": 88,
        "pregunta": "88.- La función de convocar, presidir, suspender y levantar las sesiones, arbitrar las deliberaciones del Consejo de Administración del ente público Osakidetza- Servicio vasco de salud y decidir los empates con su voto de calidad corresponderá a:",
        "opciones": {
          "A": "La Dirección General.",
          "B": "La Presidencia.",
          "C": "La persona de mayor antigüedad del Consejo de Administración.",
          "D": "Ninguna de las anteriores."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 89,
        "idpregunta": 89,
        "pregunta": "89.- De acuerdo con el Decreto 255/1997, de 11 de noviembre, por el que se establecen los Estatutos Sociales del ente público Osakidetza-Servicio Vasco de Salud, para el desarrollo de sus funciones, la Dirección General del ente público Osakidetza-Servicio Vasco de Salud contará con el apoyo de un equipo directivo formado por:",
        "opciones": {
          "A": "Dos Direcciones de División.",
          "B": "Tres Direcciones de División.",
          "C": "Cuatro Direcciones de División.",
          "D": "La norma no establece el número concreto de Direcciones de División."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 90,
        "idpregunta": 90,
        "pregunta": "90.- La persona titular de la Dirección General del ente público Osakidetza- Servicio Vasco de Salud:",
        "opciones": {
          "A": "No podrá asistir a las reuniones del Consejo de Administración del Ente.",
          "B": "Presidirá las reuniones del Consejo de Administración del Ente.",
          "C": "Asistirá a las reuniones del Consejo de Administración del Ente con voz y voto.",
          "D": "Asistirá a las reuniones del Consejo de Administración del Ente con voz y sin voto."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 91,
        "idpregunta": 91,
        "pregunta": "91.- Corresponde a la organización central de administración y gestión corporativa del ente público Osakidetza-Servicio Vasco de Salud, en materia de gestión asistencial (señálese la respuesta incorrecta):",
        "opciones": {
          "A": "Supervisar el cumplimiento de las políticas generales de calidad y realizar auditorías.",
          "B": "Definir criterios generales y proponer la política de precios correspondiente a la prestación de servicios sanitarios incluida en la cobertura pública.",
          "C": "Coordinar los recursos y, en su caso, proponer medidas de intervención sobre las listas de espera.",
          "D": "Promover protocolos de interés general."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 92,
        "idpregunta": 92,
        "pregunta": "92.- Corresponde a la organización central de administración y gestión corporativa del ente público Osakidetza-Servicio Vasco de Salud, en materia de gestión de recursos humanos (señálese la respuesta incorrecta):",
        "opciones": {
          "A": "Supervisar, controlar y evaluar las políticas de personal del Ente.",
          "B": "Promover acuerdos de cooperación con centros correspondientes a la sanidad privada.",
          "C": "Dirigir el funcionamiento del registro de personal.",
          "D": "Gestionar los procesos de selección y de provisión que el Consejo de Administración determine, por su carácter general, previsible número de aspirantes u otras circunstancias análogas, y, a tal fin, convocarlos, establecer sus bases, programas y contenidos, y designar a los tribunales calificadores de los mismos."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 93,
        "idpregunta": 93,
        "pregunta": "93.- De acuerdo con lo que señala el Decreto 255/1997, de 11 de noviembre, por el que se establecen los Estatutos Sociales del ente público Osakidetza-Servicio Vasco de Salud, cada organización de servicios sanitarios dependiente del ente público tendrá definido su objeto de actividad o ámbito de actuación sanitaria de conformidad con lo dispuesto específicamente en la:",
        "opciones": {
          "A": "Ley 41/2002 de Autonomía del Paciente.",
          "B": "Ley 8/1997, de 26 de junio, de Ordenación sanitaria de Euskadi.",
          "C": "Decreto 17/2022, de 1 de febrero, del Registro Vasco de Profesionales del ámbito sanitario.",
          "D": "Ninguna de las anteriores."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 94,
        "idpregunta": 94,
        "pregunta": "94.- Corresponde a cada organización de servicios sanitarios del ente público Osakidetza-Servicio Vasco de Salud el ejercicio de todas las facultades de gestión y administración que se requieran para el ejercicio de la actividad de provisión de servicios sanitarios que tengan encomendada, quedando excluidas únicamente:",
        "opciones": {
          "A": "Aquellas facultades de gestión centralizada que los estatutos sociales del ente público Osakidetza-Servicio Vasco de Salud atribuyen expresamente a la organización central del Ente Público y las competencias propias de otras instancias de acuerdo con las Leyes y Reglamentos vigentes.",
          "B": "Aquellas facultades de gestión centralizada que los estatutos sociales del ente público Osakidetza-Servicio Vasco de Salud atribuyen expresamente a la Presidencia del ente público y las competencias propias de otras instancias de acuerdo con las Leyes y Reglamentos vigentes.",
          "C": "Aquellas facultades de gestión centralizada que los estatutos sociales del ente público Osakidetza-Servicio Vasco de Salud atribuyen expresamente al Consejo de Administración del ente público y las competencias propias de otras instancias de acuerdo con las Leyes y Reglamentos vigentes.",
          "D": "Ninguna de las anteriores."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Aquellas facultades de gestión centralizada que los estatutos sociales del ente público Osakidetza-Servicio Vasco de Salud atribuyen expresamente a la <span class=\"diff-highlight\">organización</span> <span class=\"diff-highlight\">central</span> del Ente Público y las competencias propias de otras instancias de acuerdo con las Leyes y Reglamentos vigentes.",
          "B": "Aquellas facultades de gestión centralizada que los estatutos sociales del ente público Osakidetza-Servicio Vasco de Salud atribuyen expresamente a la <span class=\"diff-highlight\">Presidencia</span> del ente público y las competencias propias de otras instancias de acuerdo con las Leyes y Reglamentos vigentes.",
          "C": "Aquellas facultades de gestión centralizada que los estatutos sociales del ente público Osakidetza-Servicio Vasco de Salud atribuyen expresamente <span class=\"diff-highlight\">al</span> <span class=\"diff-highlight\">Consejo</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">Administración</span> del ente público y las competencias propias de otras instancias de acuerdo con las Leyes y Reglamentos vigentes.",
          "D": "Ninguna de las anteriores."
        }
      },
      {
        "num": 95,
        "idpregunta": 95,
        "pregunta": "95.- El número de integrantes del equipo directivo de las organizaciones de servicios sanitarios del ente público Osakidetza-Servicio Vasco de Salud:",
        "opciones": {
          "A": "Oscilará entre dos y tres.",
          "B": "Oscilará entre tres y cuatro.",
          "C": "Oscilará entre cuatro y cinco.",
          "D": "La normativa que rige su estatuto jurídico no establece un número determinado sino un máximo de cinco."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 96,
        "idpregunta": 96,
        "pregunta": "96.- La función de Representar al ente público Osakidetza-Servicio Vasco de Salud en la negociación colectiva del Acuerdo Marco de Condiciones de Trabajo del Personal corresponde a:",
        "opciones": {
          "A": "La organización central de administración y gestión corporativa del ente público Osakidetza-Servicio Vasco de Salud.",
          "B": "La Presidencia del ente público Osakidetza-Servicio Vasco de Salud.",
          "C": "El Consejo de Administración del ente público Osakidetza-Servicio Vasco de Salud.",
          "D": "Ninguna de las anteriores."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 97,
        "idpregunta": 97,
        "pregunta": "97.- Para el desarrollo de funciones de propuesta y asesoramiento, así como de participación en las organizaciones de servicios sanitarios, existirá un Consejo de Dirección en cada una de ellas, integrado por:",
        "opciones": {
          "A": "El equipo directivo, las jefaturas de unidad que se determinen y una representación de personas vocales electas que formen parte de los Consejos Técnicos de participación profesional respectivos.",
          "B": "El equipo directivo, las jefaturas de unidad que se determinen, representantes sindicales y una representación de personas vocales electas que formen parte de los Consejos Técnicos de participación profesional respectivos.",
          "C": "El equipo directivo y las jefaturas de unidad que se determinen.",
          "D": "Todas las anteriores son falsas."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "El equipo directivo, las jefaturas de unidad que se determinen y una representación de personas vocales electas que formen parte de los Consejos Técnicos de participación profesional respectivos.",
          "B": "El equipo directivo, las jefaturas de unidad que se determinen<span class=\"diff-highlight\">, representantes</span> <span class=\"diff-highlight\">sindicales</span> y una representación de personas vocales electas que formen parte de los Consejos Técnicos de participación profesional respectivos.",
          "C": "El equipo directivo <span class=\"diff-highlight\">y</span> las jefaturas de unidad que se determinen.",
          "D": "Todas las anteriores son falsas."
        }
      },
      {
        "num": 98,
        "idpregunta": 98,
        "pregunta": "98.- Las organizaciones de servicios sanitarios del ente público Osakidetza-Servicio Vasco de Salud podrán:",
        "opciones": {
          "A": "Descentralizar la organización y su funcionamiento operativo, delegando en quienes ostenten la responsabilidad clínica facultades de gestión, aunque solo en materia de personal y siempre de acuerdo con el marco estratégico, los planes de gestión y el compromiso del contrato-programa suscrito por la organización.",
          "B": "Descentralizar la organización y su funcionamiento operativo, delegando en quienes ostenten la responsabilidad clínica facultades de gestión, pero solo en materia económica y siempre de acuerdo con el marco estratégico, los planes de gestión y el compromiso del contrato-programa suscrito por la organización.",
          "C": "Descentralizar la organización y su funcionamiento operativo, delegando en quienes ostenten la responsabilidad clínica facultades de gestión tanto en materia económica como de personal, de acuerdo con el marco estratégico, los planes de gestión y el compromiso del contrato-programa suscrito por la organización.",
          "D": "Todas las anteriores son falsas."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Descentralizar la organización y su funcionamiento operativo, delegando en quienes ostenten la responsabilidad clínica facultades de gestión, <span class=\"diff-highlight\">aunque</span> solo en materia <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">personal</span> y siempre de acuerdo con el marco estratégico, los planes de gestión y el compromiso del contrato-programa suscrito por la organización.",
          "B": "Descentralizar la organización y su funcionamiento operativo, delegando en quienes ostenten la responsabilidad clínica facultades de gestión, <span class=\"diff-highlight\">pero</span> solo en materia <span class=\"diff-highlight\">económica</span> y siempre de acuerdo con el marco estratégico, los planes de gestión y el compromiso del contrato-programa suscrito por la organización.",
          "C": "Descentralizar la organización y su funcionamiento operativo, delegando en quienes ostenten la responsabilidad clínica facultades de gestión <span class=\"diff-highlight\">tanto</span> en materia <span class=\"diff-highlight\">económica</span> <span class=\"diff-highlight\">como</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">personal, </span>de acuerdo con el marco estratégico, los planes de gestión y el compromiso del contrato-programa suscrito por la organización.",
          "D": "Todas las anteriores son falsas."
        }
      },
      {
        "num": 99,
        "idpregunta": 99,
        "pregunta": "99.- En materia específica de inversiones, la competencia para ejecutar las compras de suministros que se consideren centralizadas, así como definir y/o ejecutar, en su caso, las consideradas integradas corresponde a:",
        "opciones": {
          "A": "El Consejo de Administración del ente público Osakidetza-Servicio Vasco de Salud.",
          "B": "La organización central de administración y gestión corporativa del ente público Osakidetza-Servicio Vasco de Salud.",
          "C": "La organización de servicios del ente público Osakidetza-Servicio Vasco de Salud.",
          "D": "A quien ostente la titularidad de la Dirección-Gerencia de cada organización de servicios sanitarios del Osakidetza-Servicio Vasco de Salud."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 100,
        "idpregunta": 100,
        "pregunta": "100.- En el ámbito de una organización de servicios sanitarios del ente público Osakidetza-Servicio Vasco de Salud, presidir los Consejos Técnicos de participación profesional y promover su eficaz funcionamiento es una tarea que corresponde a:",
        "opciones": {
          "A": "La Dirección General del Ente.",
          "B": "Quien ostente la titularidad de la Dirección-Gerencia del Ente.",
          "C": "La Dirección Médica del Ente.",
          "D": "Ninguna de las anteriores."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 101,
        "idpregunta": 101,
        "pregunta": "101.- ¿Cuál es la fecha de aprobación del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud?",
        "opciones": {
          "A": "26 de junio de 1997.",
          "B": "11 de julio de 2018.",
          "C": "3 de julio de 2018.",
          "D": "13 de diciembre de 2010."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 102,
        "idpregunta": 102,
        "pregunta": "102.- Según el Artículo 1 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿qué dos niveles asistenciales se integran en las Organizaciones Sanitarias Integradas (OSI) de Osakidetza?",
        "opciones": {
          "A": "Atención especializada y Atención de Urgencias.",
          "B": "Salud Pública y Servicios Sociosanitarios.",
          "C": "Atención hospitalaria y Atención de Emergencias.",
          "D": "Atención primaria y Atención hospitalaria."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 103,
        "idpregunta": 103,
        "pregunta": "103.- Según el Artículo 2.1 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿qué objetivo último persigue la configuración de las OSI?",
        "opciones": {
          "A": "Reducir el gasto farmacéutico mediante la unificación de compras.",
          "B": "Favorecer la integración clínica de manera que la atención se articule en torno a la persona.",
          "C": "Centralizar los servicios de atención primaria en las sedes hospitalarias.",
          "D": "Eliminar las categorías profesionales de atención primaria para unificarlas con las hospitalarias."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 104,
        "idpregunta": 104,
        "pregunta": "104.- Según el Artículo 1 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿bajo qué principio fundamental actuarán las Organizaciones Sanitarias Integradas (OSI) del ente público Osakidetza-Servicio Vasco de Salud ?",
        "opciones": {
          "A": "Principio de coordinación territorial y sectorial.",
          "B": "Principio de jerarquía funcional única.",
          "C": "Principio de autonomía económico-financiera y de gestión.",
          "D": "Principio de centralización de todos los recursos."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 105,
        "idpregunta": 105,
        "pregunta": "105.- De acuerdo con el Artículo 3 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿cómo se define una OSI de clase 'monográfica'?",
        "opciones": {
          "A": "Es aquella donde solo se integran servicios de atención hospitalaria especializada.",
          "B": "Es aquella cuya actividad asistencial gira en torno a un ámbito específico, integrando sus servicios y dispositivos.",
          "C": "Es una organización que solo atiende a una patología crónica específica.",
          "D": "Es la organización que carece de servicios de atención primaria."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 106,
        "idpregunta": 106,
        "pregunta": "106.- Según el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, las OSI de Tipo I se caracterizan, entre otros aspectos, por tener hospitales de carácter universitario y, además, por disponer de:",
        "opciones": {
          "A": "Una base poblacional adscrita inferior a 300.000 habitantes.",
          "B": "Una Dirección de Gestión que asume todas las funciones asistenciales.",
          "C": "Unidades o servicios calificados de referencia para el conjunto del sistema sanitario vasco.",
          "D": "Ser organizaciones de servicios de carácter monográfico y de pequeño tamaño."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 107,
        "idpregunta": 107,
        "pregunta": "107.- Según el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, para que una OSI sea clasificada como de Tipo III debe integrar, junto con servicios de atención primaria, un hospital de carácter general y tener una base poblacional atendida inferior a:",
        "opciones": {
          "A": "500.000 habitantes.",
          "B": "200.000 habitantes.",
          "C": "300.000 habitantes.",
          "D": "100.000 habitantes."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 108,
        "idpregunta": 108,
        "pregunta": "108.- Según el Artículo 5 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿cuáles son los tres órganos de participación que conforman la estructura organizativa de las OSI?",
        "opciones": {
          "A": "El Consejo de Dirección, el Comité Ejecutivo y el Comité de Ética Asistencial.",
          "B": "El Consejo Clínico Asistencial, el Consejo Social y la Comisión Sociosanitaria.",
          "C": "La Comisión de Seguridad, la Comisión de Docencia y la Comisión de Investigación.",
          "D": "El Consejo de Dirección, el Consejo Social y el Comité de Evaluación."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 109,
        "idpregunta": 109,
        "pregunta": "109.- De acuerdo con el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿qué órganos componen el equipo directivo de una OSI, según la estructura general del artículo 5.2?",
        "opciones": {
          "A": "Solo la Dirección Gerencia y la Dirección Médica.",
          "B": "Las Direcciones Médica, de Atención Integrada, de Enfermería, de Personas, Económico-Financiera y de Gestión.",
          "C": "El Consejo de Dirección y el Consejo Social exclusivamente.",
          "D": "La Dirección Gerencia y las Jefaturas de Servicio de cada centro de salud."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 110,
        "idpregunta": 110,
        "pregunta": "110.- De acuerdo con el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, en las OSI de Tipo IV, la Dirección Gerencia asume, con el apoyo de puestos funcionales asistenciales, las funciones que corresponden a:",
        "opciones": {
          "A": "La Dirección de Personas y la Dirección Económico-Financiera.",
          "B": "La Dirección de Personas y la Dirección de Atención Integrada.",
          "C": "La Dirección Médica y la Dirección de Enfermería.",
          "D": "La Dirección de Gestión y el Consejo de Dirección."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 111,
        "idpregunta": 111,
        "pregunta": "111.- De acuerdo con el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿cuál de los siguientes NO es un órgano de dirección encargado del gobierno y gestión de las OSI de Tipo I y II?",
        "opciones": {
          "A": "La Dirección de Personas.",
          "B": "El Consejo Clínico Asistencial.",
          "C": "La Dirección de Atención Integrada.",
          "D": "La Dirección Económico-Financiera."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 112,
        "idpregunta": 112,
        "pregunta": "112.- Según el Artículo 7.3 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿quién tiene la competencia para el nombramiento y cese de la persona titular de la Dirección Gerencia?",
        "opciones": {
          "A": "El Consejero o la Consejera de Salud.",
          "B": "La Dirección General del Ente Público Osakidetza.",
          "C": "El Consejo de Administración a propuesta de Lehendakaritza.",
          "D": "La Dirección de Personas de la propia OSI."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 113,
        "idpregunta": 113,
        "pregunta": "113.- Según los Artículos 7 y 9 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿cuál es un requisito obligatorio para el nombramiento de los cargos de dirección de una OSI?",
        "opciones": {
          "A": "Haber pertenecido al Consejo Clínico Asistencial durante al menos dos años.",
          "B": "Superar un examen de oposición específico para gerencia sanitaria.",
          "C": "Previa convocatoria pública donde se acredite titulación, capacidad y experiencia profesional.",
          "D": "Tener la condición de personal estatutario fijo en la categoría de técnico/a superior."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 114,
        "idpregunta": 114,
        "pregunta": "114.- Según el Artículo 8.m del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿a qué dirección corresponde 'orientar la gestión desde una visión integradora empoderando la atención primaria'?",
        "opciones": {
          "A": "Dirección de Atención Integrada.",
          "B": "Dirección Gerencia.",
          "C": "Dirección de Enfermería.",
          "D": "Dirección Económico-Financiera."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 115,
        "idpregunta": 115,
        "pregunta": "115.- Según el Artículo 11.2 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿qué dirección se encarga de impulsar el vínculo con la comunidad a través de la promoción y prevención de la salud?",
        "opciones": {
          "A": "Dirección Médica.",
          "B": "Dirección de Personas",
          "C": "Dirección de Atención Integrada.",
          "D": "Dirección Gerencia."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 116,
        "idpregunta": 116,
        "pregunta": "116.- De acuerdo con el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿con qué ámbito(s) adicional(es) debe coordinar su actividad la Dirección de Atención Integrada, además de con la atención primaria y hospitalaria?",
        "opciones": {
          "A": "Con el ámbito de Recursos Humanos y con la Universidad.",
          "B": "Con el ámbito comunitario y socio-sanitario.",
          "C": "Únicamente con el sociosanitario.",
          "D": "Con las entidades locales y las empresas privadas de gestión."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 117,
        "idpregunta": 117,
        "pregunta": "117.- Según el Artículo 16 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿con qué periodicidad mínima debe reunirse el Consejo de Dirección de la OSI?",
        "opciones": {
          "A": "Semanalmente.",
          "B": "Mensualmente.",
          "C": "Trimestralmente.",
          "D": "Al menos cada dos meses."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 118,
        "idpregunta": 118,
        "pregunta": "118.- Según el Artículo 13.2.j del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿quién preside la Comisión de Salud Laboral en la OSI?",
        "opciones": {
          "A": "La Dirección Médica.",
          "B": "La Dirección de Personas.",
          "C": "La Dirección de Gestión.",
          "D": "La representación sindical elegida por votación."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 119,
        "idpregunta": 119,
        "pregunta": "119.- Según el Artículo 17 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿cómo se define el Consejo Clínico Asistencial?",
        "opciones": {
          "A": "Es un órgano ejecutivo que toma las decisiones presupuestarias finales.",
          "B": "Es el órgano consultivo de asesoramiento técnico y participación de las y los profesionales asistenciales.",
          "C": "Es un equipo multidisciplinar que investiga incidentes de seguridad sanitarios",
          "D": "Es el órgano encargado de las relaciones con el ámbito sociosanitario."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 120,
        "idpregunta": 120,
        "pregunta": "120.- Según el Artículo 19.1 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿quién ejerce la presidencia del Consejo Clínico Asistencial?",
        "opciones": {
          "A": "La persona titular de la Dirección Gerencia.",
          "B": "La persona titular de la Dirección Médica.",
          "C": "La persona titular de la Dirección de Enfermería.",
          "D": "La persona de mayor antigüedad en la vocalía de Atención Primaria."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 121,
        "idpregunta": 121,
        "pregunta": "121.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, son titulares de los derechos y deberes recogidos en esta Declaración:",
        "opciones": {
          "A": "Todas las personas que accedan o utilicen las prestaciones y servicios sanitarios que se proporcionan por el sistema sanitario de Euskadi.",
          "B": "Todas las personas nacidas en Euskadi.",
          "C": "Todas las personas empadronadas en Euskadi.",
          "D": "Todas las respuestas anteriores son correctas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 122,
        "idpregunta": 122,
        "pregunta": "122.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, todos los derechos y obligaciones establecidos son exigibles:",
        "opciones": {
          "A": "En relación a todas las acciones de carácter sanitario, incluyendo docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o privada o concertados de Euskadi. Las acciones relativas a la investigación biomédica quedan fuera de esta Declaración y se rigen por su normativa específica.",
          "B": "En relación a todas las acciones de carácter sanitario, incluyendo docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o concertados que integran el sistema sanitario de Euskadi. Las acciones relativas a la investigación biomédica quedan fuera de esta Declaración y se rigen por su normativa específica.",
          "C": "En relación a todas las acciones de carácter sanitario, incluyendo investigación y docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o privada o concertados de Euskadi.",
          "D": "En relación a todas las acciones de carácter sanitario, incluyendo investigación y docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o concertados que integran el sistema sanitario de Euskadi."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "En relación a todas las acciones de carácter sanitario, incluyendo docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o <span class=\"diff-highlight\">privada</span> <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">concertados</span> de Euskadi. Las acciones relativas a la investigación biomédica quedan fuera de esta Declaración y se rigen por su normativa específica.",
          "B": "En relación a todas las acciones de carácter sanitario, incluyendo docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o <span class=\"diff-highlight\">concertados</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">integran</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">sistema</span> <span class=\"diff-highlight\">sanitario</span> de Euskadi. Las acciones relativas a la investigación biomédica quedan fuera de esta Declaración y se rigen por su normativa específica.",
          "C": "En relación a todas las acciones de carácter sanitario, incluyendo <span class=\"diff-highlight\">investigación</span> <span class=\"diff-highlight\">y</span> docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o privada o concertados de Euskadi.",
          "D": "En relación a todas las acciones de carácter sanitario, incluyendo <span class=\"diff-highlight\">investigación</span> <span class=\"diff-highlight\">y</span> docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o concertados que integran el sistema sanitario de Euskadi."
        }
      },
      {
        "num": 123,
        "idpregunta": 123,
        "pregunta": "123.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, los principios que informan e inspiran el conjunto de acciones de carácter sanitario que se desarrollen en el sistema sanitario de Euskadi son:",
        "opciones": {
          "A": "El respeto a la libertad de la persona, a su dignidad y a la autonomía en las decisiones que afecten a su salud.",
          "B": "El respeto a todo el personal profesional que integra el sistema sanitario de Euskadi.",
          "C": "La promoción de la investigación científica en el marco del sistema sanitario de Euskadi.",
          "D": "Todas las respuestas anteriores son correctas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 124,
        "idpregunta": 124,
        "pregunta": "124.- El Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, distingue bloques de derechos relacionados con los siguientes ámbitos:",
        "opciones": {
          "A": "Relaciones asistenciales; participación responsable en la gestión de la propia salud; organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; asistencia sanitaria específica vinculada a la infancia y adolescencia; asistencia sanitaria específica referida a la salud sexual y reproductiva; asistencia sanitaria específica referida a las personas mayores; asistencia sanitaria específica referida al final de la vida; participación en la investigación biomédica; obtención de la Tarjeta Individual Sanitaria.",
          "B": "Relaciones asistenciales; participación responsable en la gestión de la propia salud; organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; asistencia sanitaria específica vinculada a la infancia y adolescencia; asistencia sanitaria específica referida a la salud sexual y reproductiva; asistencia sanitaria específica referida a las personas mayores; asistencia sanitaria específica referida al final de la vida; derechos en relación con la docencia del personal sanitario, obtención de la Tarjeta Individual Sanitaria.",
          "C": "Relaciones asistenciales; participación responsable en la gestión de la propia salud; organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; asistencia sanitaria específica vinculada a la infancia y adolescencia; asistencia sanitaria específica referida a la salud sexual y reproductiva; asistencia sanitaria específica referida a las personas mayores; asistencia sanitaria específica referida al final de la vida; medidas de salud pública; obtención de la Tarjeta Individual Sanitaria.",
          "D": "Relaciones asistenciales; participación responsable en la gestión de la propia salud; organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; asistencia sanitaria específica vinculada a la infancia y adolescencia; asistencia sanitaria específica referida a la salud sexual y reproductiva; asistencia sanitaria específica referida a las personas mayores; asistencia sanitaria específica referida al final de la vida; obtención de la Tarjeta Individual Sanitaria."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Relaciones asistenciales; participación responsable en la gestión de la propia salud; organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; asistencia sanitaria específica vinculada a la infancia y adolescencia; asistencia sanitaria específica referida a la salud sexual y reproductiva; asistencia sanitaria específica referida a las personas mayores; asistencia sanitaria específica referida al final de la vida; <span class=\"diff-highlight\">participación</span> en la <span class=\"diff-highlight\">investigación</span> <span class=\"diff-highlight\">biomédica; </span>obtención de la Tarjeta Individual Sanitaria.",
          "B": "Relaciones asistenciales; participación responsable en la gestión de la propia salud; organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; asistencia sanitaria específica vinculada a la infancia y adolescencia; asistencia sanitaria específica referida a la salud sexual y reproductiva; asistencia sanitaria específica referida a las personas mayores; asistencia sanitaria específica referida al final de la vida; <span class=\"diff-highlight\">derechos</span> en <span class=\"diff-highlight\">relación</span> <span class=\"diff-highlight\">con</span> la <span class=\"diff-highlight\">docencia</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">personal</span> <span class=\"diff-highlight\">sanitario, </span>obtención de la Tarjeta Individual Sanitaria.",
          "C": "Relaciones asistenciales; participación responsable en la gestión de la propia salud; organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; asistencia sanitaria específica vinculada a la infancia y adolescencia; asistencia sanitaria específica referida a la salud sexual y reproductiva; asistencia sanitaria específica referida a las personas mayores; asistencia sanitaria específica referida al final de la vida; <span class=\"diff-highlight\">medidas</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">salud</span> <span class=\"diff-highlight\">pública</span>; obtención de la Tarjeta Individual Sanitaria.",
          "D": "Relaciones asistenciales; participación responsable en la gestión de la propia salud; organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; asistencia sanitaria específica vinculada a la infancia y adolescencia; asistencia sanitaria específica referida a la salud sexual y reproductiva; asistencia sanitaria específica referida a las personas mayores; asistencia sanitaria específica referida al final de la vida; obtención de la Tarjeta Individual Sanitaria."
        }
      },
      {
        "num": 125,
        "idpregunta": 125,
        "pregunta": "125.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, corresponde a la persona paciente o usuaria del sistema sanitario de Euskadi:",
        "opciones": {
          "A": "El derecho a que se empleen recursos razonables para garantizar la traducción de la información clínica a su idioma de manera que se garantice su comprensión.",
          "B": "El derecho a recibir información sobre las vías a utilizar para la formulación de quejas, reclamaciones y sugerencias.",
          "C": "El derecho a recibir información, tanto la madre como el padre, con carácter previo al parto, sobre aquellas intervenciones no necesarias desde el punto de vista clínico y cuya omisión no suponga un riesgo para la salud del niño o niña que vaya a nacer.",
          "D": "El derecho a la elección de profesional facultativo general, pediatra y de atención especializada."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 126,
        "idpregunta": 126,
        "pregunta": "126.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, la persona paciente o usuaria tiene derecho:",
        "opciones": {
          "A": "A recibir información sobre los recursos sanitarios y socio-sanitarios disponibles, actuaciones y prestaciones del sistema sanitario de Euskadi, su calidad y requisitos de acceso a los mismos.",
          "B": "A recibir información sobre los recursos sanitarios y socio-sanitarios disponibles, actuaciones y prestaciones del sistema sanitario de Euskadi, su calidad y requisitos de acceso a los mismos, de manera individualizada o a través de medios que garanticen su accesibilidad a toda la ciudadanía.",
          "C": "A recibir información sobre los recursos sanitarios y socio-sanitarios disponibles, actuaciones y prestaciones del sistema sanitario de Euskadi, su calidad y requisitos de acceso a los mismos, así como los disponibles en otros sistemas sanitarios para facilitar que pueda optar por solicitarlos también fuera del sistema sanitario de Euskadi.",
          "D": "A recibir información sobre los recursos sanitarios y socio-sanitarios disponibles, actuaciones y prestaciones del sistema sanitario de Euskadi, su calidad, coste y requisitos de acceso a los mismos."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "A recibir información sobre los recursos sanitarios y socio-sanitarios disponibles, actuaciones y prestaciones del sistema sanitario de Euskadi, su calidad y requisitos de acceso a los mismos.",
          "B": "A recibir información sobre los recursos sanitarios y socio-sanitarios disponibles, actuaciones y prestaciones del sistema sanitario de Euskadi, su calidad y requisitos de acceso a los mismos, <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">manera</span> <span class=\"diff-highlight\">individualizada</span> <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">través</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">medios</span> que <span class=\"diff-highlight\">garanticen</span> <span class=\"diff-highlight\">su</span> <span class=\"diff-highlight\">accesibilidad</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">toda</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">ciudadanía</span>.",
          "C": "A recibir información sobre los recursos sanitarios y socio-sanitarios disponibles, actuaciones y prestaciones del sistema sanitario de Euskadi, su calidad y requisitos de acceso a los mismos, <span class=\"diff-highlight\">así</span> <span class=\"diff-highlight\">como</span> <span class=\"diff-highlight\">los</span> <span class=\"diff-highlight\">disponibles</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">otros</span> <span class=\"diff-highlight\">sistemas</span> <span class=\"diff-highlight\">sanitarios</span> <span class=\"diff-highlight\">para</span> <span class=\"diff-highlight\">facilitar</span> que <span class=\"diff-highlight\">pueda</span> <span class=\"diff-highlight\">optar</span> <span class=\"diff-highlight\">por</span> <span class=\"diff-highlight\">solicitarlos</span> <span class=\"diff-highlight\">también</span> <span class=\"diff-highlight\">fuera</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">sistema</span> <span class=\"diff-highlight\">sanitario</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">Euskadi</span>.",
          "D": "A recibir información sobre los recursos sanitarios y socio-sanitarios disponibles, actuaciones y prestaciones del sistema sanitario de Euskadi, su calidad<span class=\"diff-highlight\">, coste</span> y requisitos de acceso a los mismos."
        }
      },
      {
        "num": 127,
        "idpregunta": 127,
        "pregunta": "127.- El derecho a la participación de forma activa en las actuaciones del sistema sanitario de Euskadi:",
        "opciones": {
          "A": "No está reconocido en el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi.",
          "B": "Está reconocido en el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, como derecho colectivo que se ejerce a través de organizaciones.",
          "C": "Está reconocido en el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, que lo contempla tanto en su modalidad de participación directa como a través de organizaciones.",
          "D": "Está reconocido en el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, que lo contempla tanto en su modalidad de participación directa como a través de organizaciones y sindicatos."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "<span class=\"diff-highlight\">No</span> está reconocido en el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi.",
          "B": "Está reconocido en el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, <span class=\"diff-highlight\">como</span> <span class=\"diff-highlight\">derecho</span> <span class=\"diff-highlight\">colectivo</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">se</span> <span class=\"diff-highlight\">ejerce</span> a través de organizaciones.",
          "C": "Está reconocido en el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, que lo contempla tanto en su modalidad de participación directa como a través de organizaciones.",
          "D": "Está reconocido en el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, que lo contempla tanto en su modalidad de participación directa como a través de organizaciones <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">sindicatos</span>."
        }
      },
      {
        "num": 128,
        "idpregunta": 128,
        "pregunta": "128.- A los efectos de la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi recogida en el Decreto 147/2015, de 21 de julio, se configuran las siguientes fases de la vida en las que se concretan necesidades específicas:",
        "opciones": {
          "A": "1. Neonatología, infancia y adolescencia. 2. Salud sexual y reproductiva, embarazo y parto. 3. Salud laboral. 4. Personas mayores y final de la vida.",
          "B": "1. Infancia y adolescencia. 2. Salud sexual y reproductiva. 3. Salud laboral. 4. Personas mayores.",
          "C": "1. Infancia. 2. Adolescencia, salud sexual y reproductiva. 3. Personas mayores. 4. Final de la vida.",
          "D": "1. Infancia y adolescencia. 2. Salud sexual y reproductiva. 3. Personas mayores. 4. Final de la vida."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 129,
        "idpregunta": 129,
        "pregunta": "129.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, los niños y niñas y las personas adolescentes, en su condición de pacientes y personas usuarias del Sistema Sanitario de Euskadi, tienen derecho:",
        "opciones": {
          "A": "A la seguridad de recibir los cuidados que necesita, incluso en el caso de que fuese necesaria la intervención de la justicia, salvo oposición de los padres o madres, o la persona sustituta, en ejercicio del derecho fundamental a la libertad religiosa.",
          "B": "A la seguridad de recibir los cuidados que necesita, incluso en el caso de que fuese necesaria la intervención de la Consejería de Sanidad, salvo que la actuación sea contraria al entorno religioso y cultural del niño, niña o persona adolescente y, por lo tanto, también a su voluntad presunta.",
          "C": "A la seguridad de recibir los cuidados que necesita, incluso en el caso de que fuese necesaria la intervención de la justicia, si los padres o madres, o la persona sustituta, se los negaran por razones religiosas, culturales o cualquiera otras.",
          "D": "A la seguridad de recibir los cuidados que necesita, incluso en el caso de que fuese necesaria la intervención de la Consejería de Sanidad, si los padres o madres, o la persona sustituta, se los negaran por razones religiosas, culturales o cualquiera otras."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "A la seguridad de recibir los cuidados que necesita, incluso en el caso de que fuese necesaria la intervención de la justicia, <span class=\"diff-highlight\">salvo</span> <span class=\"diff-highlight\">oposición</span> <span class=\"diff-highlight\">de</span> los padres o madres, o la persona sustituta, <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">ejercicio</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">derecho</span> <span class=\"diff-highlight\">fundamental</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">libertad</span> <span class=\"diff-highlight\">religiosa</span>.",
          "B": "A la seguridad de recibir los cuidados que necesita, incluso en el caso de que fuese necesaria la intervención de la Consejería de Sanidad, <span class=\"diff-highlight\">salvo</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">actuación</span> <span class=\"diff-highlight\">sea</span> <span class=\"diff-highlight\">contraria</span> <span class=\"diff-highlight\">al</span> <span class=\"diff-highlight\">entorno</span> <span class=\"diff-highlight\">religioso</span> <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">cultural</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">niño</span>, <span class=\"diff-highlight\">niña</span> <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">persona</span> <span class=\"diff-highlight\">adolescente</span> <span class=\"diff-highlight\">y, </span>por <span class=\"diff-highlight\">lo</span> <span class=\"diff-highlight\">tanto</span>, <span class=\"diff-highlight\">también</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">su</span> <span class=\"diff-highlight\">voluntad</span> <span class=\"diff-highlight\">presunta</span>.",
          "C": "A la seguridad de recibir los cuidados que necesita, incluso en el caso de que fuese necesaria la intervención de la <span class=\"diff-highlight\">justicia</span>, si los padres o madres, o la persona sustituta, se los negaran por razones religiosas, culturales o cualquiera otras.",
          "D": "A la seguridad de recibir los cuidados que necesita, incluso en el caso de que fuese necesaria la intervención de la <span class=\"diff-highlight\">Consejería</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">Sanidad</span>, si los padres o madres, o la persona sustituta, se los negaran por razones religiosas, culturales o cualquiera otras."
        }
      },
      {
        "num": 130,
        "idpregunta": 130,
        "pregunta": "130.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, las personas pacientes y usuarias del Sistema Sanitario de Euskadi, en relación con la asistencia sanitaria específica referida al final de la vida, tienen derecho a:",
        "opciones": {
          "A": "Obtener información veraz sobre las opciones terapéuticas y a que se respete y acate su voluntad de aceptación o rechazo de cualquiera de ellas, siempre que se exprese de forma directa o en forma de voluntades anticipadas.",
          "B": "Obtener información veraz sobre las opciones terapéuticas y a que se respete y acate su voluntad de aceptación o rechazo de cualquiera de ellas, tanto si se hace saber de forma directa como en forma de voluntades anticipadas o mediante una persona que la represente.",
          "C": "Obtener información veraz sobre las opciones terapéuticas, y a que se respete y acate su voluntad de aceptación o rechazo de cualquiera de ellas, siempre que se exprese de forma directa, en forma de voluntades anticipadas o a través de familiares o personas allegadas.",
          "D": "Obtener información veraz sobre las opciones terapéuticas, y a que se respete y acate su voluntad de aceptación o rechazo de cualquiera de ellas, siempre que se exprese de forma directa, en forma de voluntades anticipadas, mediante una persona que la represente o a través de familiares o personas allegadas."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Obtener información veraz sobre las opciones terapéuticas y a que se respete y acate su voluntad de aceptación o rechazo de cualquiera de ellas, siempre que se exprese de forma directa <span class=\"diff-highlight\">o</span> en forma de voluntades anticipadas.",
          "B": "Obtener información veraz sobre las opciones terapéuticas y a que se respete y acate su voluntad de aceptación o rechazo de cualquiera de ellas, <span class=\"diff-highlight\">tanto</span> <span class=\"diff-highlight\">si</span> se <span class=\"diff-highlight\">hace</span> <span class=\"diff-highlight\">saber</span> de forma directa <span class=\"diff-highlight\">como</span> en forma de voluntades anticipadas <span class=\"diff-highlight\">o</span> mediante una persona que la represente.",
          "C": "Obtener información veraz sobre las opciones terapéuticas, y a que se respete y acate su voluntad de aceptación o rechazo de cualquiera de ellas, siempre que se exprese de forma directa, en forma de voluntades anticipadas o a través de familiares o personas allegadas.",
          "D": "Obtener información veraz sobre las opciones terapéuticas, y a que se respete y acate su voluntad de aceptación o rechazo de cualquiera de ellas, siempre que se exprese de forma directa, en forma de voluntades anticipadas<span class=\"diff-highlight\">, mediante</span> <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">persona</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">represente</span> o a través de familiares o personas allegadas."
        }
      },
      {
        "num": 131,
        "idpregunta": 131,
        "pregunta": "131.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, las personas pacientes y usuarias del Sistema Sanitario de Euskadi, en relación con la asistencia sanitaria específica referida al final de la vida, tienen derecho a:",
        "opciones": {
          "A": "Al acompañamiento de familiares y personas allegadas en los procesos con hospitalización.",
          "B": "Al uso, con carácter general, de habitación individual.",
          "C": "Al acompañamiento espiritual.",
          "D": "Todas las respuestas anteriores son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 132,
        "idpregunta": 132,
        "pregunta": "132.- El Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi establece deberes en relación con los siguientes ámbitos:",
        "opciones": {
          "A": "Organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; participación responsable en la gestión de la propia salud; y relaciones asistenciales en el sistema sanitario de Euskadi.",
          "B": "Organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; participación responsable en la gestión de la propia salud; relaciones asistenciales en el sistema sanitario de Euskadi; y salud pública.",
          "C": "Organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; participación responsable en la gestión de la propia salud; relaciones asistenciales en el sistema sanitario de Euskadi; salud pública; y participación en la investigación científica en el sistema sanitario de Euskadi.",
          "D": "Organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; participación responsable en la gestión de la propia salud; relaciones asistenciales en el sistema sanitario de Euskadi; salud pública; participación en la investigación científica en el sistema sanitario de Euskadi; y colaboración con la Administración Sanitaria."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; participación responsable en la gestión de la propia salud; <span class=\"diff-highlight\">y</span> relaciones asistenciales en el sistema sanitario de Euskadi.",
          "B": "Organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; participación responsable en la gestión de la propia salud; relaciones asistenciales en el sistema sanitario de Euskadi; y <span class=\"diff-highlight\">salud</span> <span class=\"diff-highlight\">pública</span>.",
          "C": "Organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; participación responsable en la gestión de la propia salud; relaciones asistenciales en el sistema sanitario de Euskadi; salud pública; <span class=\"diff-highlight\">y</span> participación en la investigación científica en el sistema sanitario de Euskadi.",
          "D": "Organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; participación responsable en la gestión de la propia salud; relaciones asistenciales en el sistema sanitario de Euskadi; salud pública; participación en la investigación científica en el sistema sanitario de Euskadi<span class=\"diff-highlight\">; y</span> <span class=\"diff-highlight\">colaboración</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">Administración</span> <span class=\"diff-highlight\">Sanitaria</span>."
        }
      },
      {
        "num": 133,
        "idpregunta": 133,
        "pregunta": "133.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, la persona paciente o usuaria:",
        "opciones": {
          "A": "Debe dejar por escrito las decisiones cuando sea legalmente exigible o recomendable.",
          "B": "Debe dejar por escrito las decisiones cuando se lo solicite el personal profesional que le atienda.",
          "C": "Debe dejar por escrito las decisiones cuando la política del centro sanitario así lo establezca.",
          "D": "Debe dejar por escrito las decisiones cuando puedan tener relevancia a efectos de responsabilidad legal."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 134,
        "idpregunta": 134,
        "pregunta": "134.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, la persona paciente o usuaria deberá de cumplir los siguientes deberes:",
        "opciones": {
          "A": "Facilitar de forma veraz sus datos de identificación y los referentes a su estado físico o de salud, así como colaborar en su obtención, especialmente cuando sean necesarios para el episodio asistencial o por razones de interés público debidamente motivadas, siempre que quede avalado por una orden judicial.",
          "B": "Facilitar de forma veraz sus datos de identificación y los referentes a su estado físico o de salud, así como colaborar en su obtención, especialmente cuando sean necesarios para el episodio asistencial o por razones de interés público debidamente motivadas, siempre se solicite por escrito.",
          "C": "Facilitar de forma veraz sus datos de identificación y los referentes a su estado físico o de salud, así como colaborar en su obtención, especialmente cuando sean necesarios para el episodio asistencial o por razones de interés público debidamente motivadas, siempre que se informe por escrito de las garantías implementadas en relación con la protección de la información.",
          "D": "Facilitar de forma veraz sus datos de identificación y los referentes a su estado físico o su salud, así como colaborar en su obtención, especialmente cuando sean necesarios para el episodio asistencial o por razones de interés público debidamente motivadas."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Facilitar de forma veraz sus datos de identificación y los referentes a su estado físico o de salud, así como colaborar en su obtención, especialmente cuando sean necesarios para el episodio asistencial o por razones de interés público debidamente motivadas, siempre que <span class=\"diff-highlight\">quede</span> <span class=\"diff-highlight\">avalado</span> por <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">orden</span> <span class=\"diff-highlight\">judicial</span>.",
          "B": "Facilitar de forma veraz sus datos de identificación y los referentes a su estado físico o de salud, así como colaborar en su obtención, especialmente cuando sean necesarios para el episodio asistencial o por razones de interés público debidamente motivadas, siempre se <span class=\"diff-highlight\">solicite</span> por escrito.",
          "C": "Facilitar de forma veraz sus datos de identificación y los referentes a su estado físico o de salud, así como colaborar en su obtención, especialmente cuando sean necesarios para el episodio asistencial o por razones de interés público debidamente motivadas, siempre que <span class=\"diff-highlight\">se</span> <span class=\"diff-highlight\">informe</span> por <span class=\"diff-highlight\">escrito</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">las</span> <span class=\"diff-highlight\">garantías</span> <span class=\"diff-highlight\">implementadas</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">relación</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">protección</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">información</span>.",
          "D": "Facilitar de forma veraz sus datos de identificación y los referentes a su estado físico o <span class=\"diff-highlight\">su</span> salud, así como colaborar en su obtención, especialmente cuando sean necesarios para el episodio asistencial o por razones de interés público debidamente motivadas."
        }
      },
      {
        "num": 135,
        "idpregunta": 135,
        "pregunta": "135.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, los Servicios de Atención a Pacientes y personas Usuarias:",
        "opciones": {
          "A": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud, los centros sanitarios concertados, los centros privados y el departamento competente en materia de sanidad.",
          "B": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud, los centros sanitarios concertados y el departamento competente en materia de sanidad, pero no existe previsión en relación con los centros privados.",
          "C": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud, pero no existe previsión en relación con los centros concertados, ni con los privados ni con el departamento competente en materia de sanidad.",
          "D": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud y en los centros sanitarios concertados y privados, pero no existe previsión en relación con el departamento competente en materia de sanidad."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud, los centros sanitarios concertados<span class=\"diff-highlight\">, los</span> <span class=\"diff-highlight\">centros</span> <span class=\"diff-highlight\">privados</span> y el departamento competente en materia de sanidad.",
          "B": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud, los centros <span class=\"diff-highlight\">sanitarios</span> <span class=\"diff-highlight\">concertados</span> <span class=\"diff-highlight\">y</span> el departamento competente en materia de sanidad<span class=\"diff-highlight\">, pero</span> <span class=\"diff-highlight\">no</span> <span class=\"diff-highlight\">existe</span> <span class=\"diff-highlight\">previsión</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">relación</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">los</span> <span class=\"diff-highlight\">centros</span> <span class=\"diff-highlight\">privados</span>.",
          "C": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud, <span class=\"diff-highlight\">pero</span> <span class=\"diff-highlight\">no</span> <span class=\"diff-highlight\">existe</span> <span class=\"diff-highlight\">previsión</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">relación</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">los</span> <span class=\"diff-highlight\">centros</span> <span class=\"diff-highlight\">concertados, ni</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">los</span> <span class=\"diff-highlight\">privados</span> <span class=\"diff-highlight\">ni</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">departamento</span> <span class=\"diff-highlight\">competente</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">materia</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">sanidad</span>.",
          "D": "Estarán disponibles en las Organizaciones de Servicios Sanitarios de Osakidetza- Servicio Vasco de Salud <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">en</span> los centros sanitarios concertados y <span class=\"diff-highlight\">privados</span>, pero no existe previsión en relación con <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">departamento</span> <span class=\"diff-highlight\">competente</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">materia</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">sanidad</span>."
        }
      },
      {
        "num": 136,
        "idpregunta": 136,
        "pregunta": "136.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, son funciones de los Servicios de Atención a Pacientes y personas Usuarias:",
        "opciones": {
          "A": "Tramitar y responder a las iniciativas y sugerencias que formulen las personas usuarias y sus familiares.",
          "B": "Formular propuestas de mediación cuando la naturaleza del tema sobre el que verse la reclamación lo permita.",
          "C": "Comunicar a la dirección del centro, servicio o establecimiento sanitario la posible comisión de hechos o conductas que supongan el incumplimiento de los derechos y deberes de las personas usuarias.",
          "D": "Todas las respuestas anteriores son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 137,
        "idpregunta": 137,
        "pregunta": "137.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, los Servicios de Atención a Pacientes y personas Usuarias:",
        "opciones": {
          "A": "Registrarán todas las reclamaciones y solicitudes que se presenten ante ellos, con independencia del centro, servicio o establecimiento sanitario destinatario de las mismas.",
          "B": "Registrarán todas las reclamaciones y solicitudes que se presenten ante ellos, si es que el destinatario de las mismas es el centro, servicio o establecimiento del que dependan.",
          "C": "Registrarán todas las solicitudes que se presenten ante ellos, con independencia del centro, servicio o establecimiento sanitario destinatario de las mismas; y todas las reclamaciones, si es que el destinatario de las mismas es el centro, servicio o establecimiento del que dependan.",
          "D": "Registrarán todas las reclamaciones que se presenten ante ellos, con independencia del centro, servicio o establecimiento sanitario destinatario de las mismas; y todas las solicitudes si es que el destinatario de las mismas es el centro, servicio o establecimiento del que dependan."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Registrarán todas las <span class=\"diff-highlight\">reclamaciones</span> <span class=\"diff-highlight\">y</span> solicitudes que se presenten ante ellos, con independencia del centro, servicio o establecimiento sanitario destinatario de las mismas.",
          "B": "Registrarán todas las <span class=\"diff-highlight\">reclamaciones</span> <span class=\"diff-highlight\">y</span> solicitudes que se presenten ante ellos, si es que el destinatario de las mismas es el centro, servicio o establecimiento del que dependan.",
          "C": "Registrarán todas las <span class=\"diff-highlight\">solicitudes</span> que se presenten ante ellos, con independencia del centro, servicio o establecimiento sanitario destinatario de las mismas; y todas las <span class=\"diff-highlight\">reclamaciones, </span>si es que el destinatario de las mismas es el centro, servicio o establecimiento del que dependan.",
          "D": "Registrarán todas las <span class=\"diff-highlight\">reclamaciones</span> que se presenten ante ellos, con independencia del centro, servicio o establecimiento sanitario destinatario de las mismas; y todas las <span class=\"diff-highlight\">solicitudes</span> si es que el destinatario de las mismas es el centro, servicio o establecimiento del que dependan."
        }
      },
      {
        "num": 138,
        "idpregunta": 138,
        "pregunta": "138.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, las reclamaciones contra las personas usuarias de los centros, servicios y establecimientos sanitarios se tramitarán:",
        "opciones": {
          "A": "Por el procedimiento que elija la persona que interpone la reclamación.",
          "B": "Por el procedimiento vigente para ello.",
          "C": "Por el mismo procedimiento previsto para las reclamaciones contra actuaciones del personal.",
          "D": "El enunciado de la pregunta es incorrecto porque la norma citada no prevé reclamaciones contra las personas usuarias, aunque sí contra el personal profesional sanitario."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 139,
        "idpregunta": 139,
        "pregunta": "139.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, las reclamaciones contra actuaciones del personal:",
        "opciones": {
          "A": "Se resolverán atendiendo a las normas disciplinarias específicas previa apertura, en su caso, del expediente informativo correspondiente, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse.",
          "B": "Se resolverán atendiendo a las normas disciplinarias generales previa apertura, en su caso, del expediente informativo correspondiente, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse.",
          "C": "Se resolverán atendiendo a las normas disciplinarias específicas previa apertura, en su caso, del expediente informativo y de expediente de mediación, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse.",
          "D": "Se resolverán atendiendo a las normas disciplinarias generales previa apertura, en su caso, del expediente informativo y de expediente de mediación, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Se resolverán atendiendo a las normas disciplinarias <span class=\"diff-highlight\">específicas</span> previa apertura, en su caso, del expediente informativo correspondiente, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse.",
          "B": "Se resolverán atendiendo a las normas disciplinarias <span class=\"diff-highlight\">generales</span> previa apertura, en su caso, del expediente informativo correspondiente, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse.",
          "C": "Se resolverán atendiendo a las normas disciplinarias específicas previa apertura, en su caso, del expediente informativo <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">expediente</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">mediación</span>, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse.",
          "D": "Se resolverán atendiendo a las normas disciplinarias generales previa apertura, en su caso, del expediente informativo <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">expediente</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">mediación</span>, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse."
        }
      },
      {
        "num": 140,
        "idpregunta": 140,
        "pregunta": "140.- Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, a las personas usuarias de los centros, servicios y establecimientos sanitarios citados en los apartados anteriores:",
        "opciones": {
          "A": "No les serán exigibles los deberes previstos en los artículos 14 a 17.",
          "B": "Les serán exigibles los deberes previstos en los artículos 14 a 17.",
          "C": "Les serán exigibles los deberes previstos en los artículos 16 y 17 en relación con la participación responsable en la gestión de la propia salud, así como en las relaciones asistenciales.",
          "D": "Les serán exigibles los deberes previstos en los artículos 15, 16 y 17 en relación con las políticas sanitarias, la participación responsable en la gestión de la propia salud, así como en las relaciones asistenciales."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "<span class=\"diff-highlight\">No</span> les serán exigibles los deberes previstos en los artículos 14 a 17.",
          "B": "Les serán exigibles los deberes previstos en los artículos 14 a 17.",
          "C": "Les serán exigibles los deberes previstos en los artículos 16 y 17 en relación con la participación responsable en la gestión de la propia salud, así como en las relaciones asistenciales.",
          "D": "Les serán exigibles los deberes previstos en los artículos <span class=\"diff-highlight\">15, </span>16 y 17 en relación con <span class=\"diff-highlight\">las</span> <span class=\"diff-highlight\">políticas</span> <span class=\"diff-highlight\">sanitarias, </span>la participación responsable en la gestión de la propia salud, así como en las relaciones asistenciales."
        }
      },
      {
        "num": 141,
        "idpregunta": 141,
        "pregunta": "141.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la documentación clínica es:",
        "opciones": {
          "A": "La información contenida en la historia clínica.",
          "B": "El soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciones de carácter asistencial y la documentación relativa a las voluntades anticipadas.",
          "C": "El soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciones de carácter asistencial y de investigación biomédica.",
          "D": "El soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciones de carácter asistencial."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 142,
        "idpregunta": 142,
        "pregunta": "142.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, es persona usuaria:",
        "opciones": {
          "A": "La persona que requiere asistencia sanitaria y está sometida a cuidados profesionales para el mantenimiento o recuperación de su salud.",
          "B": "La persona que requiere asistencia sanitaria y está sometida a cuidados profesionales para el mantenimiento o recuperación de su salud en el sistema público de salud.",
          "C": "La persona que utiliza los servicios sanitarios de educación y promoción de la salud, de prevención de enfermedades y de información sanitaria.",
          "D": "La persona que utiliza los servicios sanitarios de educación y promoción de la salud, de prevención de enfermedades y de información sanitaria en el sistema público de salud."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 143,
        "idpregunta": 143,
        "pregunta": "143.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la información asistencial:",
        "opciones": {
          "A": "Como regla general se proporcionará verbalmente.",
          "B": "Como regla general se proporcionará por escrito.",
          "C": "Como regla general se proporcionará verbalmente y por escrito.",
          "D": "Como regla general se proporcionará por escrito cuando se trate de pacientes menores de edad."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 144,
        "idpregunta": 144,
        "pregunta": "144.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la información asistencial contiene, como mínimo:",
        "opciones": {
          "A": "La finalidad y la naturaleza de cada intervención.",
          "B": "La finalidad y la naturaleza de cada intervención y sus riesgos.",
          "C": "La finalidad y la naturaleza de cada intervención, sus riesgos y sus consecuencias.",
          "D": "La finalidad y la naturaleza de cada intervención, sus riesgos, sus consecuencias y los derechos de las personas pacientes."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 145,
        "idpregunta": 145,
        "pregunta": "145.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, garantiza el cumplimiento del derecho a la información asistencial:",
        "opciones": {
          "A": "La persona facultativa responsable de la persona paciente",
          "B": "La persona facultativa responsable de la persona paciente y el personal profesional que le atienda durante el proceso asistencial o le aplique una técnica o un procedimiento concreto.",
          "C": "La persona facultativa responsable de la persona paciente y el personal de enfermería.",
          "D": "El centro sanitario."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 146,
        "idpregunta": 146,
        "pregunta": "146.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la persona titular del derecho a la información asistencial es:",
        "opciones": {
          "A": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho, en la medida que la persona paciente lo permita de manera expresa o tácita.",
          "B": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho, en la medida que la persona paciente lo permita de manera expresa.",
          "C": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho, en la medida que la persona paciente lo permita por escrito.",
          "D": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho, en la medida que la persona paciente lo permita de manera expresa <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">tácita</span>.",
          "B": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho, en la medida que la persona paciente lo permita de manera expresa.",
          "C": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho, en la medida que la persona paciente lo permita <span class=\"diff-highlight\">por</span> <span class=\"diff-highlight\">escrito</span>.",
          "D": "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho."
        }
      },
      {
        "num": 147,
        "idpregunta": 147,
        "pregunta": "147.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, cuando la persona paciente, según el criterio del personal facultativo que le asiste, carezca de capacidad para entender la información a causa de su estado físico o psíquico:",
        "opciones": {
          "A": "La información se pondrá en conocimiento de las personas vinculadas a la persona paciente por razones familiares o de hecho si así lo dispone la autoridad judicial.",
          "B": "La información se pondrá en conocimiento de las personas vinculadas a la persona paciente por razones familiares o de hecho, después de haber consultado al Comité de Ética Asistencial de Centro.",
          "C": "La información se pondrá en conocimiento de las personas vinculadas a la persona paciente por razones familiares o de hecho después de haber consultado con la dirección del centro.",
          "D": "La información se pondrá en conocimiento de las personas vinculadas a la persona paciente por razones familiares o de hecho."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "La información se pondrá en conocimiento de las personas vinculadas a la persona paciente por razones familiares o de hecho <span class=\"diff-highlight\">si</span> <span class=\"diff-highlight\">así</span> <span class=\"diff-highlight\">lo</span> <span class=\"diff-highlight\">dispone</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">autoridad</span> <span class=\"diff-highlight\">judicial</span>.",
          "B": "La información se pondrá en conocimiento de las personas vinculadas a la persona paciente por razones familiares o de hecho<span class=\"diff-highlight\">, </span>después de haber consultado <span class=\"diff-highlight\">al</span> <span class=\"diff-highlight\">Comité</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">Ética</span> <span class=\"diff-highlight\">Asistencial</span> <span class=\"diff-highlight\">de</span> Centro.",
          "C": "La información se pondrá en conocimiento de las personas vinculadas a la persona paciente por razones familiares o de hecho después de haber consultado <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">dirección</span> <span class=\"diff-highlight\">del</span> centro.",
          "D": "La información se pondrá en conocimiento de las personas vinculadas a la persona paciente por razones familiares o de hecho."
        }
      },
      {
        "num": 148,
        "idpregunta": 148,
        "pregunta": "148.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, cuando existe riesgo inmediato grave para la integridad física o psíquica de la persona enferma y no es posible conseguir su autorización:",
        "opciones": {
          "A": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, con el consentimiento de sus familiares.",
          "B": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, con el consentimiento de quien ostente la representación legal.",
          "C": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, con autorización judicial.",
          "D": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, sin necesidad de contar con su consentimiento."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, con el consentimiento de <span class=\"diff-highlight\">sus</span> <span class=\"diff-highlight\">familiares</span>.",
          "B": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, con el consentimiento de <span class=\"diff-highlight\">quien</span> <span class=\"diff-highlight\">ostente</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">representación</span> <span class=\"diff-highlight\">legal</span>.",
          "C": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, con <span class=\"diff-highlight\">autorización</span> <span class=\"diff-highlight\">judicial</span>.",
          "D": "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, <span class=\"diff-highlight\">sin</span> <span class=\"diff-highlight\">necesidad</span> de <span class=\"diff-highlight\">contar</span> <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">su</span> <span class=\"diff-highlight\">consentimiento</span>."
        }
      },
      {
        "num": 149,
        "idpregunta": 149,
        "pregunta": "149.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, se otorgará el consentimiento por representación:",
        "opciones": {
          "A": "Como regla general, cuando la persona paciente sea menor de edad, salvo que no sea capaz intelectual ni emocionalmente de comprender el alcance de la intervención.",
          "B": "Como regla general, cuando la persona paciente sea menor de dieseis años, salvo que no sea capaz intelectual ni emocionalmente de comprender el alcance de la intervención.",
          "C": "Como regla general, cuando la persona paciente sea menor de edad.",
          "D": "Como regla general, cuando la persona paciente sea menor de dieciséis años."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Como regla general, cuando la persona paciente sea menor de <span class=\"diff-highlight\">edad</span>, salvo que no sea capaz intelectual ni emocionalmente de comprender el alcance de la intervención.",
          "B": "Como regla general, cuando la persona paciente sea menor de <span class=\"diff-highlight\">dieseis</span> <span class=\"diff-highlight\">años</span>, salvo que no sea capaz intelectual ni emocionalmente de comprender el alcance de la intervención.",
          "C": "Como regla general, cuando la persona paciente sea menor de edad.",
          "D": "Como regla general, cuando la persona paciente sea menor de <span class=\"diff-highlight\">dieciséis</span> años."
        }
      },
      {
        "num": 150,
        "idpregunta": 150,
        "pregunta": "150.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, el personal facultativo proporcionará a la persona paciente, antes de recabar su consentimiento escrito, la información básica siguiente:",
        "opciones": {
          "A": "Todos los riesgos en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.",
          "B": "Todos los riesgos, siempre que sean graves, en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.",
          "C": "Todos los riesgos probables en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.",
          "D": "Todos los riesgos, siempre que sean probables y graves, en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Todos los riesgos en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.",
          "B": "Todos los riesgos, siempre que sean graves, en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.",
          "C": "Todos los riesgos probables en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.",
          "D": "Todos los riesgos, siempre que sean <span class=\"diff-highlight\">probables</span> <span class=\"diff-highlight\">y</span> graves, en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención."
        }
      },
      {
        "num": 151,
        "idpregunta": 151,
        "pregunta": "151.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la historia clínica será archivada por:",
        "opciones": {
          "A": "Cada centro.",
          "B": "Cada servicio.",
          "C": "Cada sistema de salud.",
          "D": "Cada centro, servicio y sistema de salud."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 152,
        "idpregunta": 152,
        "pregunta": "152.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, el acceso a la historia clínica con fines judiciales, epidemiológicos, de salud pública, de investigación o de docencia:",
        "opciones": {
          "A": "Obliga a preservar los datos de identificación personal de la persona paciente, separados de los de carácter clinicoasistencial, de manera que, como regla general, quede asegurado el anonimato, salvo que quien sea titular de dichos datos haya dado su consentimiento para no separarlos o exista autorización judicial.",
          "B": "Obliga a solicitar el consentimiento de la persona paciente y a preservar sus datos de identificación personal separados de los de carácter clinicoasistencial, de manera que, como regla general, quede asegurado el anonimato.",
          "C": "Obliga a preservar los datos de identificación personal de la persona paciente, separados de los de carácter clinicoasistencial, de manera que, como regla general, quede asegurado el anonimato, salvo que el Comité de Ética haya otorgado su autorización para no separarlos.",
          "D": "Obliga a preservar los datos de identificación personal de la persona paciente, separados de los de carácter clinicoasistencial, de manera que, como regla general, quede asegurado el anonimato, salvo que quien sea titular de dichos datos haya dado su consentimiento para no separarlos, si bien existen excepciones a esta regla."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Obliga a preservar los datos de identificación personal de la persona paciente, separados de los de carácter clinicoasistencial, de manera que, como regla general, quede asegurado el anonimato, salvo que quien sea titular de dichos datos haya dado su consentimiento para no separarlos <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">exista</span> <span class=\"diff-highlight\">autorización</span> <span class=\"diff-highlight\">judicial</span>.",
          "B": "Obliga a <span class=\"diff-highlight\">solicitar</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">consentimiento</span> de <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">persona</span> <span class=\"diff-highlight\">paciente</span> <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">preservar</span> <span class=\"diff-highlight\">sus</span> <span class=\"diff-highlight\">datos</span> de <span class=\"diff-highlight\">identificación</span> <span class=\"diff-highlight\">personal</span> separados de los de carácter clinicoasistencial, de manera que, como regla general, quede asegurado el anonimato.",
          "C": "Obliga a preservar los datos de identificación personal de la persona paciente, separados de los de carácter clinicoasistencial, de manera que, como regla general, quede asegurado el anonimato, salvo que <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">Comité</span> de <span class=\"diff-highlight\">Ética</span> haya <span class=\"diff-highlight\">otorgado</span> su <span class=\"diff-highlight\">autorización</span> para no separarlos.",
          "D": "Obliga a preservar los datos de identificación personal de la persona paciente, separados de los de carácter clinicoasistencial, de manera que, como regla general, quede asegurado el anonimato, salvo que quien sea titular de dichos datos haya dado su consentimiento para no separarlos<span class=\"diff-highlight\">, si</span> <span class=\"diff-highlight\">bien</span> <span class=\"diff-highlight\">existen</span> <span class=\"diff-highlight\">excepciones</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">esta</span> <span class=\"diff-highlight\">regla</span>."
        }
      },
      {
        "num": 153,
        "idpregunta": 153,
        "pregunta": "153.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la documentación clínica se conservará:",
        "opciones": {
          "A": "Como mínimo, tres años contados desde la fecha del alta de cada proceso asistencial.",
          "B": "Como mínimo, cinco años contados desde la fecha del alta de cada proceso asistencial.",
          "C": "Como mínimo, diez años contados desde la fecha del alta de cada proceso asistencial..",
          "D": "Como mínimo, quince años contados desde la fecha del alta de cada proceso asistencial."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 154,
        "idpregunta": 154,
        "pregunta": "154.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, el acceso a la historia clínica de personas fallecidas:",
        "opciones": {
          "A": "No se facilitará a terceros, salvo que se trate de familiares de la persona fallecida.",
          "B": "Se facilitará a familiares salvo que la persona fallecida lo hubiese prohibido expresamente.",
          "C": "Se facilitará a familiares hasta el segundo grado, salvo que la persona fallecida lo hubiese prohibido expresamente.",
          "D": "Se facilitará a familiares hasta el tercer grado, salvo que la persona fallecida lo hubiese prohibido expresamente."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 155,
        "idpregunta": 155,
        "pregunta": "155.- Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, en caso de que la persona paciente no acepte el alta:",
        "opciones": {
          "A": "El personal facultativo, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la dirección del centro para que confirme o revoque la decisión.",
          "B": "El personal facultativo, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la autoridad judicial para que confirme o revoque la decisión.",
          "C": "La dirección del centro, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la autoridad judicial para que confirme o revoque la decisión.",
          "D": "La dirección del centro, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la autoridad administrativa competente para que confirme o revoque la decisión."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "El personal facultativo, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la <span class=\"diff-highlight\">dirección</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">centro</span> para que confirme o revoque la decisión.",
          "B": "El personal facultativo, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la <span class=\"diff-highlight\">autoridad</span> <span class=\"diff-highlight\">judicial</span> para que confirme o revoque la decisión.",
          "C": "La dirección del centro, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la autoridad <span class=\"diff-highlight\">judicial</span> para que confirme o revoque la decisión.",
          "D": "La dirección del centro, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la autoridad <span class=\"diff-highlight\">administrativa</span> <span class=\"diff-highlight\">competente</span> para que confirme o revoque la decisión."
        }
      },
      {
        "num": 156,
        "idpregunta": 156,
        "pregunta": "156.- El objeto de la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad es:",
        "opciones": {
          "A": "Hacer efectivo en la Comunidad Autónoma del País Vasco el derecho de las personas a la expresión anticipada de sus deseos con respecto a ciertas intervenciones médicas, mediante la regulación del documento de voluntades anticipadas en el ámbito de la sanidad.",
          "B": "Regular en la Comunidad Autónoma del País Vasco el derecho de las personas a la expresión anticipada de sus deseos con respecto a ciertas intervenciones médicas, mediante la regulación del documento de voluntades anticipadas en el ámbito de la sanidad.",
          "C": "Regular las particularidades en la Comunidad Autónoma del País Vasco del derecho de las personas a la expresión anticipada de sus deseos con respecto a ciertas intervenciones médicas.",
          "D": "Crear el Registro de Voluntades Anticipadas en la Comunidad Autónoma del País Vasco para hacer efectivo el derecho de las personas a la expresión anticipada de sus deseos con respecto a ciertas intervenciones médicas."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "<span class=\"diff-highlight\">Hacer</span> <span class=\"diff-highlight\">efectivo</span> en la Comunidad Autónoma del País Vasco el derecho de las personas a la expresión anticipada de sus deseos con respecto a ciertas intervenciones médicas, mediante la regulación del documento de voluntades anticipadas en el ámbito de la sanidad.",
          "B": "<span class=\"diff-highlight\">Regular</span> en la Comunidad Autónoma del País Vasco el derecho de las personas a la expresión anticipada de sus deseos con respecto a ciertas intervenciones médicas, mediante la regulación del documento de voluntades anticipadas en el ámbito de la sanidad.",
          "C": "Regular <span class=\"diff-highlight\">las</span> <span class=\"diff-highlight\">particularidades</span> en la Comunidad Autónoma del País Vasco <span class=\"diff-highlight\">del</span> derecho de las personas a la expresión anticipada de sus deseos con respecto a ciertas intervenciones médicas.",
          "D": "<span class=\"diff-highlight\">Crear</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">Registro</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">Voluntades</span> <span class=\"diff-highlight\">Anticipadas</span> en la Comunidad Autónoma del País Vasco <span class=\"diff-highlight\">para</span> <span class=\"diff-highlight\">hacer</span> <span class=\"diff-highlight\">efectivo</span> el derecho de las personas a la expresión anticipada de sus deseos con respecto a ciertas intervenciones médicas."
        }
      },
      {
        "num": 157,
        "idpregunta": 157,
        "pregunta": "157.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, tiene derecho a manifestar sus objetivos vitales y valores personales, así como las instrucciones sobre su tratamiento:",
        "opciones": {
          "A": "Cualquier persona mayor de dieciséis años que no haya sido judicialmente incapacitada para ello y actúe libremente.",
          "B": "Cualquier persona mayor de edad que no haya sido judicialmente incapacitada para ello y actúe libremente.",
          "C": "Cualquier persona mayor de edad y que actúe libremente, así como quienes ostenten la representación legal de aquellas que hayan sido judicialmente incapacitadas para ello.",
          "D": "Cualquier persona mayor de dieciséis años y que actúe libremente, así como quienes ostenten la representación legal de aquellas que hayan sido judicialmente incapacitadas para ello."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Cualquier persona mayor de <span class=\"diff-highlight\">dieciséis</span> <span class=\"diff-highlight\">años</span> que no haya sido judicialmente incapacitada para ello y actúe libremente.",
          "B": "Cualquier persona mayor de <span class=\"diff-highlight\">edad</span> que no haya sido judicialmente incapacitada para ello y actúe libremente.",
          "C": "Cualquier persona mayor de <span class=\"diff-highlight\">edad</span> y que actúe libremente, así como quienes ostenten la representación legal de aquellas que hayan sido judicialmente incapacitadas para ello.",
          "D": "Cualquier persona mayor de <span class=\"diff-highlight\">dieciséis</span> <span class=\"diff-highlight\">años</span> y que actúe libremente, así como quienes ostenten la representación legal de aquellas que hayan sido judicialmente incapacitadas para ello."
        }
      },
      {
        "num": 158,
        "idpregunta": 158,
        "pregunta": "158.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, la expresión de los objetivos vitales y valores personales tiene como fin:",
        "opciones": {
          "A": "Conocer la voluntad de la persona paciente en relación con la administración de sedación.",
          "B": "Conocer la voluntad de la persona paciente en relación con la finalización de tratamientos de soporte vital.",
          "C": "Ayudar a interpretar las instrucciones y servir de orientación para la toma de decisiones clínicas.",
          "D": "Documentar la actuación del personal profesional sanitario a efectos de responsabilidad legal en situaciones donde la persona paciente no puede expresar su voluntad por sí misma."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 159,
        "idpregunta": 159,
        "pregunta": "159.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, en el documento de voluntades anticipadas:",
        "opciones": {
          "A": "Se podrá designar una o varias personas representantes para que sean las interlocutoras válidas del personal facultativo o del equipo sanitario.",
          "B": "Se podrá designar exclusivamente una persona representante para que sea la interlocutora válida del personal facultativo o del equipo sanitario.",
          "C": "Se podrá designar una o varias personas representantes para que sean las interlocutoras válidas del personal facultativo o del equipo sanitario, si la persona paciente es menor de edad.",
          "D": "Se podrá designar una o varias personas representantes para que sean las interlocutoras válidas del personal facultativo o del equipo sanitario y facultarles para interpretar sus valores e instrucciones, si la persona paciente está incapacitada judicialmente."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Se podrá designar una o varias personas representantes para que sean las interlocutoras válidas del personal facultativo o del equipo sanitario.",
          "B": "Se podrá designar <span class=\"diff-highlight\">exclusivamente</span> <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">persona</span> <span class=\"diff-highlight\">representante</span> para que <span class=\"diff-highlight\">sea</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">interlocutora</span> <span class=\"diff-highlight\">válida</span> del personal facultativo o del equipo sanitario.",
          "C": "Se podrá designar una o varias personas representantes para que sean las interlocutoras válidas del personal facultativo o del equipo sanitario, si la persona paciente <span class=\"diff-highlight\">es</span> <span class=\"diff-highlight\">menor</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">edad</span>.",
          "D": "Se podrá designar una o varias personas representantes para que sean las interlocutoras válidas del personal facultativo o del equipo sanitario <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">facultarles</span> <span class=\"diff-highlight\">para</span> <span class=\"diff-highlight\">interpretar</span> <span class=\"diff-highlight\">sus</span> <span class=\"diff-highlight\">valores</span> <span class=\"diff-highlight\">e</span> <span class=\"diff-highlight\">instrucciones</span>, si la persona paciente <span class=\"diff-highlight\">está</span> <span class=\"diff-highlight\">incapacitada</span> <span class=\"diff-highlight\">judicialmente</span>."
        }
      },
      {
        "num": 160,
        "idpregunta": 160,
        "pregunta": "160.- Según la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, si el nombramiento de representante en el documento de instrucciones previas ha recaído en favor de la persona cónyuge o pareja de hecho de la persona otorgante:",
        "opciones": {
          "A": "Se extingue a partir, bien de la interposición de la demanda de nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en la resolución judicial dictada al efecto.",
          "B": "Se extingue a partir bien de la nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en la resolución judicial dictada al efecto.",
          "C": "Se extingue a partir, bien de la interposición de la demanda de nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en el documento de instrucciones previas.",
          "D": "Se extingue bien a partir de la nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en el documento de instrucciones previas."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Se extingue a partir<span class=\"diff-highlight\">, </span>bien <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">interposición</span> de la <span class=\"diff-highlight\">demanda</span> <span class=\"diff-highlight\">de</span> nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en la resolución judicial dictada al efecto.",
          "B": "Se extingue a partir <span class=\"diff-highlight\">bien</span> de la nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en la resolución judicial dictada al efecto.",
          "C": "Se extingue a partir<span class=\"diff-highlight\">, bien</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">interposición</span> de la <span class=\"diff-highlight\">demanda</span> <span class=\"diff-highlight\">de</span> nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en el documento de instrucciones previas.",
          "D": "Se extingue bien <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">partir</span> de la nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en el documento de instrucciones previas."
        }
      },
      {
        "num": 161,
        "idpregunta": 161,
        "pregunta": "161.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, las instrucciones sobre el tratamiento pueden referirse:",
        "opciones": {
          "A": "A una enfermedad o lesión que la persona otorgante ya padece o a las que eventualmente podría padecer en un futuro.",
          "B": "Exclusivamente a una enfermedad o lesión que la persona otorgante ya padece.",
          "C": "Exclusivamente a una enfermedad o lesión que la persona otorgante eventualmente podría padecer en un futuro",
          "D": "Exclusivamente a una enfermedad o lesión que la persona otorgante eventualmente podría padecer en un futuro, siempre que sea de carácter grave."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 162,
        "idpregunta": 162,
        "pregunta": "162.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, el documento de voluntades anticipadas:",
        "opciones": {
          "A": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas; o ante dos testigos.",
          "B": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas; o ante tres testigos.",
          "C": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o del servicio de documentación de un centro sanitario de la Comunidad Autónoma del País Vasco; o ante dos testigos.",
          "D": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o del servicio de documentación de un centro sanitario de la Comunidad Autónoma del País Vasco; o ante tres testigos."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas; o ante dos testigos.",
          "B": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas; o ante tres testigos.",
          "C": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o del servicio de documentación de un centro sanitario de la Comunidad Autónoma del País Vasco; o ante <span class=\"diff-highlight\">dos</span> testigos.",
          "D": "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o del servicio de documentación de un centro sanitario de la Comunidad Autónoma del País Vasco; o ante <span class=\"diff-highlight\">tres</span> testigos."
        }
      },
      {
        "num": 163,
        "idpregunta": 163,
        "pregunta": "163.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, las personas que actúen como testigos:",
        "opciones": {
          "A": "Serán personas mayores de dieciséis años, con plena capacidad de obrar y no vinculadas con la persona otorgante por matrimonio, unión libre o pareja de hecho, parentesco hasta el segundo grado de consanguinidad o afinidad o relación patrimonial alguna.",
          "B": "Serán personas mayores de dieciséis años, con plena capacidad de obrar y no vinculadas con la persona otorgante por matrimonio, unión libre o pareja de hecho, parentesco hasta el tercer grado de consanguinidad o afinidad o relación patrimonial alguna.",
          "C": "Serán personas mayores de edad, con plena capacidad de obrar y no vinculadas con la persona otorgante por matrimonio, unión libre o pareja de hecho, parentesco hasta el segundo grado de consanguinidad o afinidad o relación patrimonial alguna",
          "D": "Serán personas mayores de edad, con plena capacidad de obrar y no vinculadas con la persona otorgante por matrimonio o pareja de hecho, parentesco hasta el tercer grado de consanguinidad o relación patrimonial alguna."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Serán personas mayores de dieciséis años, con plena capacidad de obrar y no vinculadas con la persona otorgante por matrimonio, unión libre o pareja de hecho, parentesco hasta el <span class=\"diff-highlight\">segundo</span> grado de consanguinidad o afinidad o relación patrimonial alguna.",
          "B": "Serán personas mayores de dieciséis años, con plena capacidad de obrar y no vinculadas con la persona otorgante por matrimonio, unión libre o pareja de hecho, parentesco hasta el <span class=\"diff-highlight\">tercer</span> grado de consanguinidad o afinidad o relación patrimonial alguna.",
          "C": "Serán personas mayores de <span class=\"diff-highlight\">edad</span>, con plena capacidad de obrar y no vinculadas con la persona otorgante por matrimonio, unión libre o pareja de hecho, parentesco hasta el segundo grado de consanguinidad o afinidad o relación patrimonial alguna",
          "D": "Serán personas mayores de <span class=\"diff-highlight\">edad</span>, con plena capacidad de obrar y no vinculadas con la persona otorgante por matrimonio o pareja de hecho, parentesco hasta el tercer grado de consanguinidad o relación patrimonial alguna."
        }
      },
      {
        "num": 164,
        "idpregunta": 164,
        "pregunta": "164.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, el documento de voluntades anticipadas puede ser modificado, sustituido por otro o revocado en cualquier momento por la persona otorgante:",
        "opciones": {
          "A": "Siempre que conserve la capacidad o actúe con la asistencia de su representante legal y actúe libremente.",
          "B": "Siempre que conserve la capacidad o exista autorización judicial.",
          "C": "Siempre que actúe libremente.",
          "D": "Siempre que conserve la capacidad y actúe libremente."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 165,
        "idpregunta": 165,
        "pregunta": "165.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, la modificación, sustitución o revocación del documento de voluntades anticipadas se formaliza:",
        "opciones": {
          "A": "Por escrito o verbalmente, y ante una notaría o ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o ante tres testigos.",
          "B": "Por escrito y ante una notaría o ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o ante tres testigos.",
          "C": "Por escrito o verbalmente, y ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades donde se encuentra registrado el documento inicial.",
          "D": "Por escrito y ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades donde se encuentra registrado el documento inicial."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Por escrito <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">verbalmente, </span>y ante una notaría o ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o ante tres testigos.",
          "B": "Por escrito y ante una notaría o ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o ante tres testigos.",
          "C": "Por escrito <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">verbalmente, </span>y ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades donde se encuentra registrado el documento inicial.",
          "D": "Por escrito y ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades donde se encuentra registrado el documento inicial."
        }
      },
      {
        "num": 166,
        "idpregunta": 166,
        "pregunta": "166.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, la voluntad de la persona prevalece sobre las instrucciones contenidas en el documento de voluntades anticipadas ante cualquier intervención clínica siempre que:",
        "opciones": {
          "A": "La persona otorgante conserve su capacidad y su libertad de actuación.",
          "B": "La persona otorgante conserve su capacidad, su libertad de actuación y la posibilidad de expresarse.",
          "C": "La persona otorgante conserve su capacidad, su libertad de actuación y la posibilidad de expresarse de manera inequívoca.",
          "D": "La persona otorgante conserve su capacidad, su libertad de actuación y la posibilidad de expresarse de manera inequívoca o a través de la persona interlocutora designada al efecto."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 167,
        "idpregunta": 167,
        "pregunta": "167.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, en el documento de voluntades anticipadas se tendrán por no puestas:",
        "opciones": {
          "A": "Las instrucciones que en el momento de ser aplicadas resulten contrarias al ordenamiento jurídico.",
          "B": "Las instrucciones que en el momento de ser otorgadas resulten contrarias al ordenamiento jurídico.",
          "C": "Las respuestas a) y b) son correctas.",
          "D": "Las instrucciones que en el momento de ser aplicadas no se aprueben por el comité de ética del centro."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 168,
        "idpregunta": 168,
        "pregunta": "168.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, en el documento de voluntades anticipadas se tendrán por no puestas:",
        "opciones": {
          "A": "Las instrucciones que resulten contraindicadas para su patología.",
          "B": "Las instrucciones que en el momento de ser aplicadas resulten contrarias al ordenamiento jurídico.",
          "C": "Las instrucciones que no se correspondan con los tipos de supuestos previstos por la persona otorgante al formalizar el documento de voluntades anticipadas.",
          "D": "Todas las respuestas anteriores son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 169,
        "idpregunta": 169,
        "pregunta": "169.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, la interconexión prevista para el Registro Vasco de Voluntades Anticipadas:",
        "opciones": {
          "A": "Precisará el consentimiento de la persona otorgante en el momento del registro del documento, y de la persona interlocutora designada para la comunicación efectiva de los datos.",
          "B": "Precisará el consentimiento de la persona otorgante para la comunicación de los datos.",
          "C": "No precisará el consentimiento de la persona otorgante para la comunicación de los datos.",
          "D": "No precisará el consentimiento de la persona otorgante para la comunicación de los datos pero sí autorización de la Agencia Vasca de Protección de Datos."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 170,
        "idpregunta": 170,
        "pregunta": "170.- Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, el documento de voluntades anticipadas que no haya sido inscrito en el Registro Vasco de Voluntades Anticipadas:",
        "opciones": {
          "A": "Debe entregarse en el centro sanitario donde la persona otorgante sea atendida.",
          "B": "Debe entregarse en el centro sanitario donde la persona otorgante sea atendida y contar con la validación de la autoridad judicial.",
          "C": "Carece de eficacia.",
          "D": "Carece de eficacia si la persona otorgante no puede validarlo por sí misma en ese momento."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 171,
        "idpregunta": 171,
        "pregunta": "171.- Según dispone la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, podrán tener acceso a los datos personales de las personas fallecidas:",
        "opciones": {
          "A": "Las personas vinculadas a la persona fallecida por razones familiares o de hecho así como quienes ostenten la condición de herederas, en todo caso.",
          "B": "Solo las personas vinculadas a la persona fallecida por razones familiares siempre que lo hubiera autorizado expresamente la persona fallecida.",
          "C": "Las personas vinculadas a la persona fallecida por razones familiares o de hecho así como quienes ostenten la condición de herederas, salvo que la persona fallecida lo hubiese prohibido expresamente.",
          "D": "En caso de que la persona fallecida fuera menor de edad, el acceso podrá ejercerse también por sus representantes legales o por el Ministerio Fiscal que siempre actuará de oficio."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Las personas vinculadas a la persona fallecida por razones familiares o de hecho así como quienes ostenten la condición de herederas, <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">todo</span> <span class=\"diff-highlight\">caso</span>.",
          "B": "<span class=\"diff-highlight\">Solo</span> las personas vinculadas a la persona fallecida por razones familiares <span class=\"diff-highlight\">siempre</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">lo</span> <span class=\"diff-highlight\">hubiera</span> <span class=\"diff-highlight\">autorizado</span> <span class=\"diff-highlight\">expresamente</span> la persona fallecida.",
          "C": "Las personas vinculadas a la persona fallecida por razones familiares o de hecho así como quienes ostenten la condición de herederas, <span class=\"diff-highlight\">salvo</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">persona</span> <span class=\"diff-highlight\">fallecida</span> <span class=\"diff-highlight\">lo</span> <span class=\"diff-highlight\">hubiese</span> <span class=\"diff-highlight\">prohibido</span> <span class=\"diff-highlight\">expresamente</span>.",
          "D": "<span class=\"diff-highlight\">En</span> <span class=\"diff-highlight\">caso</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">que</span> la persona fallecida <span class=\"diff-highlight\">fuera</span> <span class=\"diff-highlight\">menor</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">edad, el</span> <span class=\"diff-highlight\">acceso</span> <span class=\"diff-highlight\">podrá</span> <span class=\"diff-highlight\">ejercerse</span> <span class=\"diff-highlight\">también</span> por <span class=\"diff-highlight\">sus</span> <span class=\"diff-highlight\">representantes</span> <span class=\"diff-highlight\">legales</span> <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">por</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">Ministerio</span> <span class=\"diff-highlight\">Fiscal</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">siempre</span> <span class=\"diff-highlight\">actuará</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">oficio</span>."
        }
      },
      {
        "num": 172,
        "idpregunta": 172,
        "pregunta": "172.- Señale la respuesta que no es correcta. Según la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales a efectos del tratamiento de los datos, el consentimiento de la persona afectada tiene que ser una manifestación de voluntad que cumpla las siguientes características:",
        "opciones": {
          "A": "Libre.",
          "B": "Verbal.",
          "C": "Específica.",
          "D": "Informada."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 173,
        "idpregunta": 173,
        "pregunta": "173.- Con relación al tratamiento de los datos personales de una persona menor de edad, señale la respuesta correcta:",
        "opciones": {
          "A": "Únicamente podrá fundarse en su consentimiento cuando sea mayor de dieciséis años.",
          "B": "La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales no prevé que las personas menores de edad puedan dar su consentimiento válidamente a estos efectos.",
          "C": "Únicamente podrá fundarse en su consentimiento cuando sea mayor de catorce años.",
          "D": "El tratamiento de los datos de las personas menores de dieciséis años, fundado en el consentimiento, solo será lícito si consta el consentimiento de quienes ejercen la patria potestad o tutela, con el alcance que dichas personas determinen."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 174,
        "idpregunta": 174,
        "pregunta": "174.- La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, en su artículo 9 considera categorías especiales de datos aquellos que permitan, respecto a la persona afectada, identificar:",
        "opciones": {
          "A": "Su ideología y afiliación sindical.",
          "B": "Su religión y orientación sexual .",
          "C": "Sus creencias u origen racial o étnico.",
          "D": "Todas las respuestas son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 175,
        "idpregunta": 175,
        "pregunta": "175.- La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales establece que el tratamiento de datos de naturaleza penal podrá llevarse a cabo:",
        "opciones": {
          "A": "Solo por profesionales de la abogacía y cuando tengan por objeto recoger la información facilitada por quienes les contraten para el ejercicio de sus funciones.",
          "B": "Por profesionales de la abogacía y de la procura, cuando tengan por objeto recoger la información facilitada por quienes les contraten para el ejercicio de sus funciones.",
          "C": "En los casos previstos por la propia Ley Orgánica 3/2018 y en otras normas de rango reglamentario.",
          "D": "Exclusivamente en los supuestos amparados en una norma de Derecho de la Unión y en la propia Ley Orgánica 2/2018."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "<span class=\"diff-highlight\">Solo</span> por profesionales de la abogacía y cuando tengan por objeto recoger la información facilitada por quienes les contraten para el ejercicio de sus funciones.",
          "B": "Por profesionales de la abogacía y <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">procura, </span>cuando tengan por objeto recoger la información facilitada por quienes les contraten para el ejercicio de sus funciones.",
          "C": "En los <span class=\"diff-highlight\">casos</span> <span class=\"diff-highlight\">previstos</span> <span class=\"diff-highlight\">por</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">propia</span> <span class=\"diff-highlight\">Ley</span> <span class=\"diff-highlight\">Orgánica</span> <span class=\"diff-highlight\">3/2018</span> y en <span class=\"diff-highlight\">otras</span> <span class=\"diff-highlight\">normas</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">rango</span> <span class=\"diff-highlight\">reglamentario</span>.",
          "D": "<span class=\"diff-highlight\">Exclusivamente</span> en los <span class=\"diff-highlight\">supuestos</span> <span class=\"diff-highlight\">amparados</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">una</span> <span class=\"diff-highlight\">norma</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">Derecho</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">Unión</span> y en <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">propia</span> <span class=\"diff-highlight\">Ley</span> <span class=\"diff-highlight\">Orgánica</span> <span class=\"diff-highlight\">2/2018</span>."
        }
      },
      {
        "num": 176,
        "idpregunta": 176,
        "pregunta": "176.- Respecto al derecho de rectificación que regula la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, señale la respuesta correcta:",
        "opciones": {
          "A": "La persona afectada deberá indicar en su solicitud a qué datos se refiere y deberá acompañar, en todo caso, la documentación justificativa de la inexactitud de los datos.",
          "B": "La persona afectada deberá indicar en su solicitud a qué datos se refiere y la corrección que haya de realizarse, y cuando sea preciso, deberá acompañar la documentación justificativa de la inexactitud o carácter incompleto de los datos objeto de tratamiento.",
          "C": "La persona afectada deberá indicar en su solicitud solo la corrección que haya de realizarse y debe siempre acompañar la documentación justificativa de la inexactitud de los datos.",
          "D": "No es necesario que la persona afectada indique expresamente en su solicitud qué datos deben rectificarse."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "La persona afectada deberá indicar en su solicitud a qué datos se refiere y <span class=\"diff-highlight\">deberá</span> <span class=\"diff-highlight\">acompañar</span>, <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">todo</span> <span class=\"diff-highlight\">caso</span>, la documentación justificativa de la inexactitud de los datos.",
          "B": "La persona afectada deberá indicar en su solicitud <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">qué</span> <span class=\"diff-highlight\">datos</span> <span class=\"diff-highlight\">se</span> <span class=\"diff-highlight\">refiere</span> <span class=\"diff-highlight\">y</span> la corrección que haya de realizarse<span class=\"diff-highlight\">, </span>y <span class=\"diff-highlight\">cuando</span> <span class=\"diff-highlight\">sea</span> <span class=\"diff-highlight\">preciso, deberá</span> acompañar la documentación justificativa de la inexactitud <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">carácter</span> <span class=\"diff-highlight\">incompleto</span> de los datos <span class=\"diff-highlight\">objeto</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">tratamiento</span>.",
          "C": "La persona afectada deberá indicar en su solicitud <span class=\"diff-highlight\">solo</span> la corrección que haya de realizarse <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">debe</span> <span class=\"diff-highlight\">siempre</span> acompañar la documentación justificativa de la inexactitud de los datos.",
          "D": "<span class=\"diff-highlight\">No</span> <span class=\"diff-highlight\">es</span> <span class=\"diff-highlight\">necesario</span> <span class=\"diff-highlight\">que</span> la persona afectada <span class=\"diff-highlight\">indique</span> <span class=\"diff-highlight\">expresamente</span> en su solicitud qué datos <span class=\"diff-highlight\">deben</span> <span class=\"diff-highlight\">rectificarse</span>."
        }
      },
      {
        "num": 177,
        "idpregunta": 177,
        "pregunta": "177.- Con relación al tratamiento de datos con fines de videovigilancia, señale la respuesta correcta:",
        "opciones": {
          "A": "Solo las personas físicas podrán llevar a cabo el tratamiento de imágenes a través de sistemas de cámaras o videocámaras con la finalidad de preservar la seguridad de las personas y bienes, así como sus instalaciones.",
          "B": "Los datos serán suprimidos, en todo caso, en el plazo máximo de un mes desde su captación.",
          "C": "Los datos serán suprimidos en el plazo máximo de un mes desde su captación, salvo cuando hubieran de ser conservados para acreditar la comisión de actos que atenten contra la integridad de personas, bienes o instalaciones.",
          "D": "En el caso de que los datos hubieran de ser conservados más allá del plazo de un mes desde su captación para acreditar la comisión de actos que atenten contra la integridad de personas, bienes o instalaciones, deberán ser puestas a disposición de la autoridad competente en un plazo máximo de cuarenta y ocho horas desde que se tuviera conocimiento de la existencia de la grabación."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "<span class=\"diff-highlight\">Solo</span> <span class=\"diff-highlight\">las</span> <span class=\"diff-highlight\">personas</span> <span class=\"diff-highlight\">físicas</span> <span class=\"diff-highlight\">podrán</span> <span class=\"diff-highlight\">llevar</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">cabo</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">tratamiento</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">imágenes</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">través</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">sistemas</span> de <span class=\"diff-highlight\">cámaras</span> <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">videocámaras</span> <span class=\"diff-highlight\">con</span> la <span class=\"diff-highlight\">finalidad</span> de <span class=\"diff-highlight\">preservar</span> la <span class=\"diff-highlight\">seguridad</span> de <span class=\"diff-highlight\">las</span> personas <span class=\"diff-highlight\">y</span> bienes<span class=\"diff-highlight\">, así</span> <span class=\"diff-highlight\">como</span> <span class=\"diff-highlight\">sus</span> instalaciones.",
          "B": "Los datos serán suprimidos<span class=\"diff-highlight\">, en</span> <span class=\"diff-highlight\">todo</span> <span class=\"diff-highlight\">caso, </span>en el plazo máximo de un mes desde su captación.",
          "C": "Los datos <span class=\"diff-highlight\">serán</span> <span class=\"diff-highlight\">suprimidos</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">el</span> plazo <span class=\"diff-highlight\">máximo</span> de un mes desde su captación<span class=\"diff-highlight\">, salvo</span> <span class=\"diff-highlight\">cuando</span> <span class=\"diff-highlight\">hubieran</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">ser</span> <span class=\"diff-highlight\">conservados</span> para acreditar la comisión de actos que atenten contra la integridad de personas, bienes o instalaciones.",
          "D": "<span class=\"diff-highlight\">En</span> <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">caso</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">que</span> los datos <span class=\"diff-highlight\">hubieran</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">ser</span> <span class=\"diff-highlight\">conservados</span> <span class=\"diff-highlight\">más</span> <span class=\"diff-highlight\">allá</span> <span class=\"diff-highlight\">del</span> <span class=\"diff-highlight\">plazo</span> de un mes desde su captación para acreditar la comisión de actos que atenten contra la integridad de personas, bienes o instalaciones<span class=\"diff-highlight\">, deberán</span> <span class=\"diff-highlight\">ser</span> <span class=\"diff-highlight\">puestas</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">disposición</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">autoridad</span> <span class=\"diff-highlight\">competente</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">un</span> <span class=\"diff-highlight\">plazo</span> <span class=\"diff-highlight\">máximo</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">cuarenta</span> <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">ocho</span> <span class=\"diff-highlight\">horas</span> <span class=\"diff-highlight\">desde</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">se</span> <span class=\"diff-highlight\">tuviera</span> <span class=\"diff-highlight\">conocimiento</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">existencia</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">grabación</span>."
        }
      },
      {
        "num": 178,
        "idpregunta": 178,
        "pregunta": "178.- Respecto a los sistemas de información de denuncias internas que contempla la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, es correcta la siguiente afirmación:",
        "opciones": {
          "A": "En todo caso, transcurridos tres meses desde la introducción de los datos, deberá procederse a su supresión del sistema de denuncias, salvo que la finalidad de la conservación sea dejar evidencia del funcionamiento del modelo de prevención de la comisión de delitos.",
          "B": "En todo caso, transcurridos seis meses desde la introducción de los datos, deberá procederse a su supresión del sistema de denuncias, salvo que la finalidad de la conservación sea dejar evidencia del funcionamiento del modelo de prevención de la comisión de delitos.",
          "C": "En todo caso, y sin excepción, transcurridos seis meses desde la introducción de los datos, deberá procederse a su supresión del sistema de denuncias.",
          "D": "La Ley no prevé plazo temporal alguno para la supresión de los datos del sistema de denuncias."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "En todo caso, transcurridos <span class=\"diff-highlight\">tres</span> meses desde la introducción de los datos, deberá procederse a su supresión del sistema de denuncias, salvo que la finalidad de la conservación sea dejar evidencia del funcionamiento del modelo de prevención de la comisión de delitos.",
          "B": "En todo caso, transcurridos <span class=\"diff-highlight\">seis</span> meses desde la introducción de los datos, deberá procederse a su supresión del sistema de denuncias, salvo que la finalidad de la conservación sea dejar evidencia del funcionamiento del modelo de prevención de la comisión de delitos.",
          "C": "En todo caso<span class=\"diff-highlight\">, y</span> <span class=\"diff-highlight\">sin</span> <span class=\"diff-highlight\">excepción</span>, transcurridos seis meses desde la introducción de los datos, deberá procederse a su supresión del sistema de denuncias.",
          "D": "<span class=\"diff-highlight\">La</span> <span class=\"diff-highlight\">Ley</span> <span class=\"diff-highlight\">no</span> <span class=\"diff-highlight\">prevé</span> <span class=\"diff-highlight\">plazo</span> <span class=\"diff-highlight\">temporal</span> <span class=\"diff-highlight\">alguno</span> <span class=\"diff-highlight\">para</span> la <span class=\"diff-highlight\">supresión</span> de los datos del sistema de denuncias."
        }
      },
      {
        "num": 179,
        "idpregunta": 179,
        "pregunta": "179.- Señale la respuesta correcta respecto a la Agencia Española de Protección de Datos:",
        "opciones": {
          "A": "Su denominación oficial es “Agencia Española de Protección de Datos, Autoridad Administrativa Independiente”.",
          "B": "Es una entidad administrativa de ámbito estatal sin personalidad jurídica propia.",
          "C": "Su denominación oficial es “Agencia Española de Protección de Datos”.",
          "D": "Se relaciona con el Gobierno a través de la Presidencia del Gobierno."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 180,
        "idpregunta": 180,
        "pregunta": "180.- Respecto al procedimiento de nombramiento de la Presidencia de la Agencia Española de Protección de Datos, señale la respuesta correcta:",
        "opciones": {
          "A": "Será nombrada por el Gobierno, a propuesta del Ministerio de Justicia, y estará auxiliada por dos personas adjuntas.",
          "B": "Su nombramiento debe ser ratificado por la Comisión de Justicia del Congreso de los Diputados por mayoría absoluta de sus integrantes en primera votación.",
          "C": "Su nombramiento debe ser ratificado por la Comisión de Justicia del Congreso de los Diputados por mayoría de tres quintos de sus integrantes en primera votación.",
          "D": "Será nombrada por el Parlamento mediante Ley."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "<span class=\"diff-highlight\">Será</span> <span class=\"diff-highlight\">nombrada</span> por <span class=\"diff-highlight\">el</span> <span class=\"diff-highlight\">Gobierno, a</span> <span class=\"diff-highlight\">propuesta</span> del <span class=\"diff-highlight\">Ministerio</span> de <span class=\"diff-highlight\">Justicia, y</span> <span class=\"diff-highlight\">estará</span> <span class=\"diff-highlight\">auxiliada</span> <span class=\"diff-highlight\">por</span> <span class=\"diff-highlight\">dos</span> <span class=\"diff-highlight\">personas</span> <span class=\"diff-highlight\">adjuntas</span>.",
          "B": "Su nombramiento debe ser ratificado por la Comisión de Justicia del Congreso de los Diputados por mayoría <span class=\"diff-highlight\">absoluta</span> de sus integrantes en primera votación.",
          "C": "Su nombramiento debe ser ratificado por la Comisión de Justicia del Congreso de los Diputados por mayoría <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">tres</span> <span class=\"diff-highlight\">quintos</span> de sus integrantes en primera votación.",
          "D": "Será nombrada por el <span class=\"diff-highlight\">Parlamento</span> <span class=\"diff-highlight\">mediante</span> <span class=\"diff-highlight\">Ley</span>."
        }
      },
      {
        "num": 181,
        "idpregunta": 181,
        "pregunta": "181.- Según el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, respecto a la legitimidad para presentar una queja ante Emakunde-Instituto Vasco de la Mujer, señale la respuesta correcta:",
        "opciones": {
          "A": "La legitimidad se reconoce a cualquier persona o grupo de personas que se considere discriminada por razón de sexo, o quienes legítimamente les representen",
          "B": "La legitimidad se reconoce solo a quien ostente nacionalidad española.",
          "C": "Las personas jurídicas no están legitimadas para iniciar y tomar parte en el procedimiento en nombre o en apoyo de la persona que se considere discriminada.",
          "D": "Las asociaciones y organizaciones que tengan entre sus fines velar por el cumplimiento del principio de igualdad de trato de mujeres y hombres siempre están legitimadas para iniciar y tomar parte en el procedimiento en nombre o en apoyo de la persona que se considere discriminada."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 182,
        "idpregunta": 182,
        "pregunta": "182.- El artículo 1 del Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, añade un concepto específico al objeto de la ley que refuerza el fin último de la norma, ¿cuál es?",
        "opciones": {
          "A": "La igualdad de oportunidades.",
          "B": "El empoderamiento de las mujeres.",
          "C": "Lograr una sociedad libre de violencia machista.",
          "D": "La eliminación de roles tradicionales."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 183,
        "idpregunta": 183,
        "pregunta": "183.- Según el artículo 2 del Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, ¿a qué entidades privadas les es exigible el cumplimiento de los principios generales de esta ley durante su relación con la administración?",
        "opciones": {
          "A": "Solo a las que tengan una plantilla superior a 250 personas.",
          "B": "A todas las empresas con sede en Euskadi.",
          "C": "A las que suscriban contratos o convenios, estén participadas por poderes públicos o sean beneficiarias de ayudas.",
          "D": "Ninguna entidad privada está sujeta a los principios de la ley."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 184,
        "idpregunta": 184,
        "pregunta": "184.- Según el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, ¿cuál de estos es un principio general de actuación de los poderes públicos vascos incorporado en la nueva redacción del artículo 3?",
        "opciones": {
          "A": "El principio de jerarquía administrativa.",
          "B": "La integración de la perspectiva interseccional.",
          "C": "El principio de celeridad procesal.",
          "D": "La centralización de recursos de acogida."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 185,
        "idpregunta": 185,
        "pregunta": "185.- Según el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, respecto al principio de representación equilibrada, ¿en qué caso se permite excepcionalmente una presencia de mujeres superior al 60%?",
        "opciones": {
          "A": "En ningún caso.",
          "B": "Solo si no hay hombres capacitados en el sector.",
          "C": "Cuando sea acorde al objetivo de corregir la histórica situación de infrarrepresentación de las mujeres.",
          "D": "Si el órgano tiene menos de cuatro integrantes."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 186,
        "idpregunta": 186,
        "pregunta": "186.- Según el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, ¿qué planes específicos deben someterse ahora, obligatoriamente, a una evaluación previa de impacto en función del género?",
        "opciones": {
          "A": "Solo los planes de formación interna.",
          "B": "Los planes territoriales y urbanísticos.",
          "C": "Los planes de marketing de empresas públicas.",
          "D": "Ningún plan, solo los proyectos de ley."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 187,
        "idpregunta": 187,
        "pregunta": "187.- Según el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, ¿qué requisito nuevo deben cumplir las empresas de más de 50 personas trabajadoras para poder recibir subvenciones públicas?",
        "opciones": {
          "A": "Tener paridad total en su directiva.",
          "B": "Acreditar haber establecido medidas para prevenir y combatir el acoso sexual y las violencias sexuales.",
          "C": "Tener un departamento exclusivo de igualdad.",
          "D": "Estar inscritas en un registro internacional de igualdad."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 188,
        "idpregunta": 188,
        "pregunta": "188.- De acuerdo con lo establecido en el artículo 54 del texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, aprobado por el Decreto Legislativo 1/2023, de 16 de marzo, ¿cómo se define la 'violencia machista contra las mujeres'?",
        "opciones": {
          "A": "Solo la violencia física en el hogar.",
          "B": "Una violación de los derechos humanos y un problema de salud pública de primer orden.",
          "C": "Únicamente los delitos contra la libertad sexual.",
          "D": "Un conflicto de convivencia familiar."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 189,
        "idpregunta": 189,
        "pregunta": "189.- De acuerdo con lo establecido en el artículo 54.3 del texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, aprobado por el Decreto Legislativo 1/2023, de 16 de marzo, ¿qué formas de violencia se incorporan como casos constitutivos de violencia machista por estar específicamente recogidos en dicho apartado?",
        "opciones": {
          "A": "Solo la violencia física y psicológica.",
          "B": "La violencia obstétrica, la política de género y la violencia digital.",
          "C": "Únicamente el acoso laboral.",
          "D": "No se detallan formas, se remite al Código Penal."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 190,
        "idpregunta": 190,
        "pregunta": "190.- De acuerdo con el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, ¿qué derecho se reconoce expresamente a las víctimas en el marco de las competencias de la Comunidad Autónoma de Euskadi?",
        "opciones": {
          "A": "Derecho a la inmunidad procesal.",
          "B": "Derecho a la reparación conforme al Convenio de Estambul",
          "C": "Derecho a la jubilación anticipada.",
          "D": "Derecho a la residencia gratuita permanente."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 191,
        "idpregunta": 191,
        "pregunta": "191.- ¿Cuántos Objetivos Generales, clasificados como finalistas e instrumentales, se definen en la estructura del Plan de Salud Euskadi 2030?",
        "opciones": {
          "A": "Cinco Objetivos Generales.",
          "B": "Seis Objetivos Generales.",
          "C": "Siete Objetivos Generales.",
          "D": "Ocho Objetivos Generales."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 192,
        "idpregunta": 192,
        "pregunta": "192.- Según el Plan de Salud Euskadi 2030, la VISIÓN que se aspira a lograr como país es:",
        "opciones": {
          "A": "Convertirnos en el sistema de salud pública más sólido y resiliente de Europa.",
          "B": "Liderar una Euskadi más saludable.",
          "C": "Reducir la morbimortalidad evitable y disminuir las desigualdades en salud antes de 2030.",
          "D": "Lograr la sostenibilidad y excelencia en los sistemas asistenciales sanitarios y sociosanitarios."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 193,
        "idpregunta": 193,
        "pregunta": "193.- ¿Cuál de los siguientes NO es un principio rector en los que se apoya el Plan de Salud Euskadi 2030?",
        "opciones": {
          "A": "La necesaria coordinación y colaboración interinstitucional, entre agentes y en todos los niveles.",
          "B": "Enfoque de Salud en Todas las Políticas y 'Una Sola Salud' ('One Health').",
          "C": "La autosuficiencia presupuestaria del Sistema Sanitario Público.",
          "D": "Contribución al Desarrollo Sostenible."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 194,
        "idpregunta": 194,
        "pregunta": "194.- El Objetivo General 1 (OG1) del Plan de Salud Euskadi 2030 se enfoca en:",
        "opciones": {
          "A": "Promover la salud de las mujeres y la salud reproductiva en la edad adulta.",
          "B": "Lograr que niñas, niños y adolescentes nazcan, crezcan y se desarrollen con todo su potencial de salud.",
          "C": "Mejorar la salud mental y reducir la morbimortalidad asociada a trastornos mentales.",
          "D": "La prevención y el control de las enfermedades no transmisibles (ENT)."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 195,
        "idpregunta": 195,
        "pregunta": "195.- El Objetivo General 4 (OG4) del Plan de Salud Euskadi 2030 se define como: “lograr la sostenibilidad y excelencia en los sistemas asistenciales sanitarios y sociosanitarios de Euskadi”, ¿en términos de qué tres conceptos clave?",
        "opciones": {
          "A": "Eficiencia, accesibilidad e innovación.",
          "B": "Calidad, humanización y seguridad.",
          "C": "Equidad, intersectorialidad y coordinación.",
          "D": "Investigación, formación y evaluación."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 196,
        "idpregunta": 196,
        "pregunta": "196.- ¿Cuál de los siguientes enfoques es uno de los fundamentos estratégicos detallados en el Plan de Salud Euskadi 2030, además de la reducción de las desigualdades en salud y la Salud en Todas las Políticas?",
        "opciones": {
          "A": "El enfoque de 'Un Mundo, Una Solución' ('One World, One Solution').",
          "B": "El enfoque del Marco de Resultados en Salud (MRS).",
          "C": "El enfoque de 'Una Sola Salud' ('One Health').",
          "D": "El enfoque de Centralidad del Sistema Sanitario."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 197,
        "idpregunta": 197,
        "pregunta": "197.- ¿A qué hace referencia el acrónimo AVAD en el Plan de Salud Euskadi 2030?",
        "opciones": {
          "A": "Áreas de Valoración de la Atención al Dependiente.",
          "B": "Años de Vida Activa Desaprovechados.",
          "C": "Atención Vasca a la Adicción a Drogas.",
          "D": "Años de Vida sana perdidos Ajustados por Discapacidad."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 198,
        "idpregunta": 198,
        "pregunta": "198.- ¿Cuántas personas aproximadamente, entre expertas, profesionales, entidades y ciudadanía, contribuyeron en la elaboración del Plan de Salud Euskadi 2030?",
        "opciones": {
          "A": "Cerca de 50 personas.",
          "B": "Menos de 100 personas.",
          "C": "Cerca de 200 personas.",
          "D": "Más de 300 personas."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 199,
        "idpregunta": 199,
        "pregunta": "199.- La MISIÓN del Plan de Salud Euskadi 2030 se define como:",
        "opciones": {
          "A": "Garantizar la cobertura universal y el acceso equitativo a los servicios de Osakidetza.",
          "B": "Generar valor a la ciudadanía vasca en términos de una mayor esperanza de vida y menos dependencia.",
          "C": "Definir un horizonte de Salud y facilitar la orientación y el diseño de políticas eficaces que lleven a conseguirlo.",
          "D": "Superar la Ley de Salud Pública de Euskadi y el Plan Estratégico de Osakidetza en impacto sobre la salud."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 200,
        "idpregunta": 200,
        "pregunta": "200.- ¿Cuál es uno de los objetivos clave del Plan de Salud Euskadi 2030, reiterado en varias secciones, respecto a la equidad y la gestión de la enfermedad?",
        "opciones": {
          "A": "Garantizar la participación de la empresa privada en la gestión de servicios hospitalarios.",
          "B": "Aumentar la esperanza de vida en 5 años en todos los colectivos sociales.",
          "C": "Reducir la morbimortalidad evitable y disminuir las desigualdades en salud.",
          "D": "Implementar un programa de cribado universal para todos los tipos de cáncer."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 201,
        "idpregunta": 201,
        "pregunta": "201.- ¿Qué órganos fueron responsables de la dirección y elaboración del Plan de Salud Euskadi 2030, según el documento?",
        "opciones": {
          "A": "El Consejo de Gobierno y el Departamento de Hacienda.",
          "B": "Un Comité de Dirección y un Comité Estratégico.",
          "C": "La Dirección General de Osakidetza y Lehendakaritza.",
          "D": "El Observatorio de Salud y la consultora LKS S Coop."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 202,
        "idpregunta": 202,
        "pregunta": "202.- Dentro del Objetivo General 5 del Plan de Salud Euskadi 2030, ¿cuáles son las características que deben definir al sistema de salud pública para responder a los nuevos retos?",
        "opciones": {
          "A": "Estratégico, descentralizado, participativo y eficiente.",
          "B": "Flexible, sólido, ágil y escalable.",
          "C": "Universal, equitativo, transparente y tecnológico.",
          "D": "Resiliente, preventivo, comunitario e integral."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 203,
        "idpregunta": 203,
        "pregunta": "203.- ¿Qué enfoque de investigación prioriza el Plan de Salud Euskadi 2030 para asegurar que los avances científicos lleguen de forma efectiva a la práctica clínica y la salud de la población?",
        "opciones": {
          "A": "Enfoque de investigación básica y fundamental.",
          "B": "Enfoque de investigación traslacional.",
          "C": "Enfoque de investigación puramente epidemiológica.",
          "D": "Enfoque de investigación competitiva internacional."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 204,
        "idpregunta": 204,
        "pregunta": "204.- Según el modelo de evaluación del Plan de Salud Euskadi 2030, ¿cuáles son los cuatro criterios fundamentales para determinar el éxito de las intervenciones?",
        "opciones": {
          "A": "Impacto, cobertura, equidad y transparencia.",
          "B": "Relevancia, efectividad, eficiencia y sostenibilidad.",
          "C": "Rentabilidad, participación, innovación y prestigio.",
          "D": "Calidad, calidez, rapidez y ahorro presupuestario."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 205,
        "idpregunta": 205,
        "pregunta": "205.- En la lucha contra las desigualdades, ¿qué tipo de soluciones habitacionales promueve el Plan de Salud Euskadi 2030 para las diferentes etapas de la vida?",
        "opciones": {
          "A": "Construcción de viviendas de protección oficial exclusivamente rurales.",
          "B": "Soluciones habitacionales asequibles, accesibles y adaptadas al ciclo vital.",
          "C": "Ayudas directas al alquiler únicamente para personas menores de 30 años",
          "D": "Fomento de grandes centros residenciales para todas las personas con enfermedades crónicas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 206,
        "idpregunta": 206,
        "pregunta": "206.- Según la comparativa de la Memoria Económica del Plan de Salud Euskadi 2030, ¿cuál es el programa presupuestario (fuera del gasto general de Osakidetza) con mayor dotación?",
        "opciones": {
          "A": "Programa de Salud Pública.",
          "B": "Programa de Farmacia.",
          "C": "Programa de Adicciones.",
          "D": "Programa de Investigación y Planificación."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 207,
        "idpregunta": 207,
        "pregunta": "207.- El Plan de Salud Euskadi 2030 busca lograr 'comunidades amigables' para las personas mayores. ¿Cuál es la finalidad última de esta estrategia?",
        "opciones": {
          "A": "Segregar los espacios públicos por franjas de edad.",
          "B": "Adaptar el entorno físico y social para fomentar un envejecimiento activo y con sentido.",
          "C": "Aumentar el número de plazas en residencias geriátricas de alta especialización.",
          "D": "Limitar el acceso de vehículos a las zonas cercanas a los centros de salud."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 208,
        "idpregunta": 208,
        "pregunta": "208.- En el ámbito de la salud digital, ¿qué concepto destaca el Plan de Salud Euskadi 2030 para transformar la atención personalizada?",
        "opciones": {
          "A": "La teleasistencia robótica obligatoria en todos los domicilios.",
          "B": "La medicina de precisión y la integración de datos genómicos.",
          "C": "La eliminación definitiva de la historia clínica en papel en favor del PDF.",
          "D": "La creación de una red social exclusiva para pacientes crónicos/as."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 209,
        "idpregunta": 209,
        "pregunta": "209.- ¿Cómo define el Plan de Salud Euskadi 2030 el concepto de 'Intersectorialidad' en la gestión de la salud?",
        "opciones": {
          "A": "La competencia entre diferentes sectores para obtener fondos públicos.",
          "B": "La colaboración entre departamentos del Gobierno para que la salud esté en todas las políticas.",
          "C": "La privatización de sectores sanitarios no críticos.",
          "D": "La creación de un único departamento que gestione salud, educación y vivienda."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 210,
        "idpregunta": 210,
        "pregunta": "210.- ¿Cuál es la visión del Plan de Salud Euskadi 2030 sobre el uso de la evidencia científica en la toma de decisiones políticas?",
        "opciones": {
          "A": "Es un elemento opcional supeditado a la oportunidad política.",
          "B": "Es la base fundamental para el diseño, implementación y evaluación de las políticas de salud.",
          "C": "Solo se debe aplicar en casos de alertas sanitarias internacionales.",
          "D": "Se reserva exclusivamente para el ámbito académico, no para el legislativo."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 211,
        "idpregunta": 211,
        "pregunta": "211.- Según el análisis del contexto social del documento de Diagnóstico del Pacto Vasco de Salud de Euskadi, ¿qué factor se identifica como un motor clave para que la ciudadanía del siglo XXI demande un papel más activo en su salud?",
        "opciones": {
          "A": "El incremento exclusivo de la esperanza de vida al nacer.",
          "B": "El acceso generalizado a la información y un mayor nivel educativo en la CAPV.",
          "C": "La reducción drástica de las listas de espera en consultas externas.",
          "D": "La implementación de la receta electrónica en todas las farmacias."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 212,
        "idpregunta": 212,
        "pregunta": "212.- El documento de Diagnóstico del Pacto Vasco de Salud de Euskadi señala que los flujos migratorios actuales en Euskadi:",
        "opciones": {
          "A": "No tienen impacto relevante en el perfil epidemiológico de la comunidad.",
          "B": "Revelan patologías anteriormente poco conocidas en nuestro entorno, pero prevalentes en otras latitudes.",
          "C": "Se limitan exclusivamente a personas en edad laboral con excelente estado de salud inicial.",
          "D": "Han provocado la saturación irreversible de los servicios de urgencias hospitalarias."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 213,
        "idpregunta": 213,
        "pregunta": "213.- ¿Cuál es uno de los principales desafíos identificados en el documento de Diagnóstico del Pacto Vasco de Salud de Euskadi respecto a la formación y relevo del personal sanitario?",
        "opciones": {
          "A": "La excesiva oferta de plazas MIR en todas las especialidades médicas.",
          "B": "La falta de interés de las nuevas generaciones por las profesiones biosanitarias.",
          "C": "La necesidad de planificar el relevo ante la jubilación de cohortes numerosas de profesionales.",
          "D": "La prohibición de la formación continua dentro del horario laboral."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 214,
        "idpregunta": 214,
        "pregunta": "214.- Sobre el impacto del cambio global y climático, el documento de Diagnóstico del Pacto Vasco de Salud de Euskadi advierte de la aparición de:",
        "opciones": {
          "A": "Patologías ligadas exclusivamente al consumo de alimentos ultraprocesados.",
          "B": "Nuevos vectores y virus anteriormente inexistentes en nuestro entorno, como el virus del Nilo.",
          "C": "Una disminución natural de las enfermedades respiratorias debido al aumento de temperaturas.",
          "D": "La erradicación total de las enfermedades infecciosas estacionales."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 215,
        "idpregunta": 215,
        "pregunta": "215.- El documento de Diagnóstico del Pacto Vasco de Salud de Euskadi propone que los indicadores sanitarios para evaluar el sistema deben:",
        "opciones": {
          "A": "Basarse exclusivamente en mediciones de actividad (número de consultas y cirugías).",
          "B": "Ser confidenciales y accesibles únicamente para la alta dirección del Departamento de Salud.",
          "C": "Ignorar la perspectiva de género para simplificar la toma de datos estadísticos.",
          "D": "Reflejar resultados en salud y sostenibilidad, y no solo volumen de actividad."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 216,
        "idpregunta": 216,
        "pregunta": "216.- ¿Cuál es la finalidad principal de los Valores Fundamentales del Pacto Vasco de Salud, según el Libro de Valores y principios?",
        "opciones": {
          "A": "Ser la base para la elaboración del futuro Plan Estratégico de Osakidetza.",
          "B": "Establecer la estructura financiera y la autonomía de gestión del sistema de salud.",
          "C": "Ser el fundamento ético y social que soporta la actividad del Sistema Público de Salud de Euskadi.",
          "D": "Garantizar la cobertura universal únicamente a la ciudadanía vasca empadronada."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 217,
        "idpregunta": 217,
        "pregunta": "217.- ¿Cuál de los siguientes es un Valor Fundamental explícito del Pacto Vasco de Salud, además de la Universalidad y la Equidad?",
        "opciones": {
          "A": "La Sostenibilidad del sistema.",
          "B": "La Eficiencia en el gasto.",
          "C": "La Corresponsabilidad.",
          "D": "El Plurilingüismo como eje central de la atención."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 218,
        "idpregunta": 218,
        "pregunta": "218.- El principio rector de la Salud en Todas las Políticas (STP) en el Pacto Vasco de Salud tiene como alcance la necesidad de:",
        "opciones": {
          "A": "Incorporar la perspectiva de salud en todas las decisiones y políticas públicas, fuera del ámbito sanitario.",
          "B": "Priorizar el presupuesto del Departamento de Salud sobre el resto de las carteras del Gobierno Vasco.",
          "C": "Centralizar toda la toma de decisiones en el Consejo Asesor del Departamento de Salud.",
          "D": "Desarrollar un plan de choque específico para la Atención Primaria, desvinculado de la hospitalaria."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 219,
        "idpregunta": 219,
        "pregunta": "219.- El principio de Innovación en el Pacto Vasco de Salud se aplica a:",
        "opciones": {
          "A": "Exclusivamente a la aplicación de nuevas tecnologías de imagen médica.",
          "B": "La I+D+i en todas las fases y dimensiones de la salud, incluyendo la organizativa y la asistencial.",
          "C": "La importación de modelos de éxito de otros sistemas sanitarios europeos.",
          "D": "La digitalización de la historia clínica en Osakidetza."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 220,
        "idpregunta": 220,
        "pregunta": "220.- En el marco del Pacto Vasco de Salud, el principio rector de la Transparencia y Rendición de Cuentas tiene como objetivo principal:",
        "opciones": {
          "A": "Garantizar la confidencialidad absoluta de los datos de salud de las personas pacientes.",
          "B": "Asegurar que las personas gestoras tengan acceso a todos los cuadros de mando de la OSI.",
          "C": "Comunicar regularmente los resultados y progresos del sistema a todas las partes involucradas, fortaleciendo la confianza.",
          "D": "Permitir auditorías externas del gasto sanitario cada cinco años."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 221,
        "idpregunta": 221,
        "pregunta": "221.- En el marco del Pacto Vasco de Salud, dentro de los principios rectores, la 'Orientación al Valor' significa que el sistema debe priorizar:",
        "opciones": {
          "A": "Las intervenciones que generen los mejores resultados relevantes para la persona al menor coste posible.",
          "B": "El valor de mercado de las acciones de las empresas proveedoras de tecnología.",
          "C": "El incremento constante de las infraestructuras físicas sobre la inversión en personal.",
          "D": "La compra masiva de medicamentos de marca sobre los genéricos."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 222,
        "idpregunta": 222,
        "pregunta": "222.- ¿En qué grandes ámbitos se estructuran las Líneas Estratégicas del Pacto Vasco de Salud?",
        "opciones": {
          "A": "Cinco Líneas Estratégicas. prevención y promoción de la salud; atención a la enfermedad; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y Gobernanza.",
          "B": "Seis Líneas Estratégicas: prevención y promoción de la salud; atención a la enfermedad; áreas prioritarias de salud; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y transparencia y participación ciudadana.",
          "C": "Seis Líneas Estratégicas: prevención y promoción de la salud; atención a la enfermedad; áreas prioritarias de salud; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y gobernanza.",
          "D": "Seis Líneas Estratégicas: prevención y promoción de la salud; atención sociosanitaria; áreas prioritarias de salud; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y gobernanza."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "<span class=\"diff-highlight\">Cinco</span> Líneas Estratégicas<span class=\"diff-highlight\">. </span>prevención y promoción de la salud; atención a la enfermedad; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y Gobernanza.",
          "B": "Seis Líneas Estratégicas: prevención y promoción de la salud; atención a la enfermedad; áreas prioritarias de salud; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y <span class=\"diff-highlight\">transparencia</span> <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">participación</span> <span class=\"diff-highlight\">ciudadana</span>.",
          "C": "Seis Líneas Estratégicas: prevención y promoción de la salud; atención a la enfermedad; áreas prioritarias de salud; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y <span class=\"diff-highlight\">gobernanza</span>.",
          "D": "Seis Líneas Estratégicas: prevención y promoción de la salud; atención <span class=\"diff-highlight\">sociosanitaria</span>; áreas prioritarias de salud; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y gobernanza."
        }
      },
      {
        "num": 223,
        "idpregunta": 223,
        "pregunta": "223.- La Línea Estratégica I del Pacto Vasco de Salud, centrada en el enfoque 'One Health' (Una Sola Salud), propone:",
        "opciones": {
          "A": "Centralizar todos los hospitales en una única gerencia provincial.",
          "B": "Crear un seguro de salud único para todas las mascotas de la CAPV.",
          "C": "Centrarse exclusivamente en la salud humana, delegando la ambiental a otros departamentos.",
          "D": "Integrar la salud humana, animal y ambiental en la planificación y vigilancia sanitaria."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 224,
        "idpregunta": 224,
        "pregunta": "224.- ¿Cuál es el papel de la Atención Primaria y Comunitaria dentro de las Líneas Estratégicas del Pacto Vasco de Salud?",
        "opciones": {
          "A": "Actuar como un servicio de triaje rápido para derivar todos los casos al hospital.",
          "B": "Ser un servicio opcional para quienes no dispongan de seguro privado.",
          "C": "Limitarse a la atención administrativa y la gestión de bajas laborales.",
          "D": "Ser la base estratégica que cohesione y sustente todo el sistema de salud vasco."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 225,
        "idpregunta": 225,
        "pregunta": "225.- En relación con la Línea Estratégica 06 sobre 'Cronicidad' del Pacto Vasco de Salud, ¿qué objetivo se persigue primordialmente?",
        "opciones": {
          "A": "Institucionalizar a todas las personas con enfermedades crónicas en centros especializados.",
          "B": "Reforzar la autonomía y corresponsabilidad de las personas con enfermedades crónicas.",
          "C": "Sustituir las consultas médicas presenciales por seguimiento telefónico automático.",
          "D": "Reducir la cobertura de medicamentos para patologías de larga duración."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 226,
        "idpregunta": 226,
        "pregunta": "226.- La Línea Estratégica 07 sobre 'Atención Sociosanitaria' del Pacto Vasco de Salud subraya la necesidad de:",
        "opciones": {
          "A": "Separar definitivamente las competencias de Salud de las de Servicios Sociales.",
          "B": "Mejorar la coordinación y el tránsito de las personas entre el sistema sanitario y el social.",
          "C": "Eliminar las ayudas a la dependencia para fomentar el ahorro público.",
          "D": "Obligar a las personas pacientes a elegir entre atención médica o apoyo social."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 227,
        "idpregunta": 227,
        "pregunta": "227.- Respecto a la 'Salud Mental' (Línea 11), el Pacto Vasco de Salud pone el foco en:",
        "opciones": {
          "A": "La promoción del bienestar emocional y la detección precoz, especialmente en jóvenes.",
          "B": "El aislamiento preventivo de las personas con trastornos mentales graves.",
          "C": "La medicalización sistemática de cualquier malestar emocional de la ciudadanía.",
          "D": "La reducción de la plantilla de psicología en los centros de salud primaria."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 228,
        "idpregunta": 228,
        "pregunta": "228.- La Línea Estratégica 18 sobre 'Digitalización en Salud' del Pacto Vasco de Salud busca la transformación digital para:",
        "opciones": {
          "A": "Reemplazar al personal sanitario por sistemas de inteligencia artificial autónomos.",
          "B": "Eliminar el papel de todos los archivos históricos sin digitalizar previamente.",
          "C": "Facilitar la accesibilidad, la personalización de la atención y la eficiencia organizativa.",
          "D": "Crear una base de datos pública con el historial clínico de toda la ciudadanía."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 229,
        "idpregunta": 229,
        "pregunta": "229.- En la 'Política de Personas' (Línea 21) del Pacto Vasco de Salud, se establece como prioridad:",
        "opciones": {
          "A": "Facilitar la jubilación forzosa a los 60 años para reducir costes laborales.",
          "B": "Fortalecer la atracción, fidelización, desarrollo y liderazgo de las y los profesionales.",
          "C": "Sustituir al personal fijo por contratos temporales para ganar flexibilidad.",
          "D": "Prohibir la participación de los sindicatos en la toma de decisiones estratégicas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 230,
        "idpregunta": 230,
        "pregunta": "230.- La Línea Estratégica 24 sobre 'Derechos Lingüísticos' del Pacto Vasco de Salud tiene como fin:",
        "opciones": {
          "A": "Garantizar que las personas pacientes puedan ser atendidas en la lengua oficial de su elección.",
          "B": "Obligar a toda la ciudadanía a realizar sus consultas médicas exclusivamente en euskera.",
          "C": "Eliminar el uso de lenguas extranjeras en la formación médica especializada.",
          "D": "Centralizar los servicios de traducción en una única sede en Vitoria-Gasteiz."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 231,
        "idpregunta": 231,
        "pregunta": "231.- ¿Cuál es el periodo de vigencia indicado en el título de la “Estrategia de Seguridad del Paciente” de Osakidetza, y en qué mes y año se publicó su primera edición?",
        "opciones": {
          "A": "Vigencia 2021-2030, editada en enero de 2023.",
          "B": "Vigencia 2020-2024, editada en diciembre de 2022.",
          "C": "Vigencia 2020-2030, editada en abril de 2023.",
          "D": "Vigencia 2023-2030, editada en julio de 2023."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 232,
        "idpregunta": 232,
        "pregunta": "232.- ¿Cuál es el Objetivo General establecido para la “Estrategia de Seguridad del Paciente 20-30”?",
        "opciones": {
          "A": "Reducir a cero los eventos adversos mediante la incorporación de tecnología robótica.",
          "B": "Mejorar la calidad asistencial del sistema sanitario vasco.",
          "C": "Promover el máximo nivel de seguridad posible, minimizando la probabilidad de ocurrencia de incidentes de seguridad en el transcurso de la asistencia sanitaria.",
          "D": "Centralizar la gestión de riesgos en un único organismo fuera de Osakidetza."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 233,
        "idpregunta": 233,
        "pregunta": "233.- El principio hipocrático al que se hace referencia en la “Estrategia de Seguridad del Paciente 20-30”, y que la ciudadanía asume que se verifica en el transcurso de la actividad asistencial, es:",
        "opciones": {
          "A": "Salus populi suprema lex esto (la salud del pueblo es la ley suprema).",
          "B": "Corpus sanum in mente sana (mente sana en cuerpo sano).",
          "C": "Lex artis ad hoc (ley del arte para el caso).",
          "D": "Primum non nocere (primero no hacer daño)."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 234,
        "idpregunta": 234,
        "pregunta": "234.- ¿A qué periodos correspondieron las dos estrategias previas de seguridad de paciente publicadas en Euskadi, de las cuales esta Estrategia 20-30 es la tercera?",
        "opciones": {
          "A": "2008-2012 y 2013-2017.",
          "B": "2010-2015 y 2016-2020.",
          "C": "2013-2016 y 2017-2020.",
          "D": "2018-2021 y 2022-2025."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 235,
        "idpregunta": 235,
        "pregunta": "235.- ¿Cuáles son las dos nuevas Líneas de Acción incorporadas en la “Estrategia de Seguridad del Paciente 20-30” que responden a una necesidad percibida por las personas expertas?",
        "opciones": {
          "A": "Seguridad en Pediatría y Buenas Prácticas en el Uso de Biológicos.",
          "B": "Atención en Cuidados Paliativos y Seguridad Domiciliaria.",
          "C": "La Seguridad de Paciente en Emergencias y la Prevención del Suicidio.",
          "D": "Seguridad en Salud Mental y Prevención de las Úlceras por Presión."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 236,
        "idpregunta": 236,
        "pregunta": "236.- De acuerdo con la “Estrategia de Seguridad de Paciente 20-30”, ¿cómo se denomina al incidente de seguridad que, a diferencia del incidente sin daño, sí ocasiona algún tipo de daño a las personas atendidas?",
        "opciones": {
          "A": "Error no evitable.",
          "B": "Circunstancia notificable.",
          "C": "Fallo latente.",
          "D": "Evento Adverso."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 237,
        "idpregunta": 237,
        "pregunta": "237.- ¿Cuál es el enfoque principal de la Línea de Acción Corporativa L2 de la “Estrategia de Seguridad del Paciente 20-30”?",
        "opciones": {
          "A": "Implicación de pacientes en su seguridad.",
          "B": "Conciliación de la medicación.",
          "C": "Atención a las segundas y terceras víctimas.",
          "D": "Gestión de los incidentes de seguridad."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 238,
        "idpregunta": 238,
        "pregunta": "238.- ¿Cuál de los siguientes es el Objetivo Específico número 1 de la “Estrategia de Seguridad del Paciente 20-30”, enfocado en el cambio interno?",
        "opciones": {
          "A": "Garantizar la continuidad de las líneas de acción y proyectos previamente implantados.",
          "B": "Impulsar la cultura de seguridad de paciente en las organizaciones de servicios de Osakidetza, promoviendo la formación y sensibilización como aspectos clave.",
          "C": "Optimizar la prescripción de pruebas diagnósticas que utilizan radiación ionizante.",
          "D": "Implantar un sistema de identificación inequívoca de pacientes en todas las fases del proceso asistencial."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 239,
        "idpregunta": 239,
        "pregunta": "239.- Según la “Estrategia de Seguridad del Paciente 20-30”, el Objetivo General de la Línea de Acción L4 'Implicación de pacientes en su seguridad' es:",
        "opciones": {
          "A": "Garantizar que todas las personas pacientes reciban un plan de acogida con información de seguridad.",
          "B": "Potenciar las capacidades de las personas pacientes para actuar como personal de apoyo en las unidades de enfermería.",
          "C": "Promover la participación de pacientes, familiares y personas cuidadoras para mejorar la seguridad del sistema sanitario.",
          "D": "Establecer un sistema de recompensas económicas para pacientes que notifiquen incidentes."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 240,
        "idpregunta": 240,
        "pregunta": "240.- La Línea de Acción Corporativa L8 de la “Estrategia de Seguridad del Paciente 20-30” está dedicada a:",
        "opciones": {
          "A": "Conciliación de la medicación.",
          "B": "Prevención y control de las infecciones relacionadas con la asistencia sanitaria.",
          "C": "Seguridad en el proceso asistencial gestación-parto-puerperio.",
          "D": "Seguridad transfusional."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 241,
        "idpregunta": 241,
        "pregunta": "241.- ¿A qué se refiere la Línea de Acción Corporativa L10 de la “Estrategia de Seguridad del Paciente 20-30”, cuyo objetivo es reducir los eventos adversos específicos de un proceso asistencial?",
        "opciones": {
          "A": "Cirugía Segura.",
          "B": "Atención Primaria.",
          "C": "Seguridad en el proceso asistencial gestación-parto-puerperio.",
          "D": "Seguridad de las personas pacientes en los servicios de urgencias."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 242,
        "idpregunta": 242,
        "pregunta": "242.- ¿Qué documento se menciona en la “Estrategia de Seguridad del Paciente 20- 30” como el que determinó que las personas atendidas por un sistema medicalizado (tipo 061/112) presentan un mayor porcentaje de incidentes de seguridad en el entorno de Emergencias?",
        "opciones": {
          "A": "Estudio Nacional de Efectos Adversos en centros hospitalarios (ENEAS).",
          "B": "Estudio APEAS.",
          "C": "Estudio EVADUR.",
          "D": "Informe del Instituto de Medicina de los Estados Unidos (IOM)."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 243,
        "idpregunta": 243,
        "pregunta": "243.- El capítulo de Formación de la “Estrategia de Seguridad del Paciente 20-30” señala que, además de impulsar el desarrollo de prácticas seguras, las organizaciones comprometidas orientan sus esfuerzos a aumentar la formación en los llamados:",
        "opciones": {
          "A": "Factores humanos o factores no técnicos.",
          "B": "Factores biomédicos y patofisiológicos.",
          "C": "Factores económicos y de sostenibilidad.",
          "D": "Factores organizativos de Osakidetza."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 244,
        "idpregunta": 244,
        "pregunta": "244.- ¿Cuál de las siguientes Líneas de Acción de la “Estrategia de Seguridad del Paciente 20-30” NO está relacionada con el sistema de utilización del medicamento?",
        "opciones": {
          "A": "L5. Conciliación de la medicación.",
          "B": "L14. Buenas prácticas asociadas a la utilización de medicación.",
          "C": "L6. Optimización en la prescripción de pruebas diagnósticas que utilizan radiación ionizante.",
          "D": "L7. Seguridad transfusional (Nota: la seguridad transfusional se considera una línea separada, aunque implica la administración de productos sanguíneos)."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 245,
        "idpregunta": 245,
        "pregunta": "245.- ¿Cuántas Líneas de Acción Corporativas (L1 a L...) se definen en la Estrategia de Seguridad del Paciente 20-30?",
        "opciones": {
          "A": "14 líneas de acción.",
          "B": "15 líneas de acción.",
          "C": "16 líneas de acción.",
          "D": "17 líneas de acción."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 246,
        "idpregunta": 246,
        "pregunta": "246.- Según el diagnóstico del II Plan para la Igualdad de Mujeres y Hombres en Osakidetza, ¿qué porcentaje de mujeres y hombres, respectivamente, componía la plantilla total de Osakidetza en enero de 2025?",
        "opciones": {
          "A": "60% mujeres y 40% hombres",
          "B": "75% mujeres y 25% hombres",
          "C": "80% mujeres y 20% hombres",
          "D": "90% mujeres y 10% hombres"
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 247,
        "idpregunta": 247,
        "pregunta": "247.- Una de las metas del II Plan para la Igualdad de Mujeres y Hombres en Osakidetza es la “CAPACITACIÓN EN IGUALDAD”. ¿Cuál es su objetivo principal?",
        "opciones": {
          "A": "Reducir la brecha de género en investigación en un 4%.",
          "B": "Conseguir que todas las personas trabajadoras de Osakidetza conozcan el Plan y el Protocolo de Acoso.",
          "C": "Reducir a la mitad las categorías con brecha retributiva superior al 5%.",
          "D": "Garantizar la formación básica, progresiva, permanente y obligatoria de todo el personal de Osakidetza."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 248,
        "idpregunta": 248,
        "pregunta": "248.- ¿Qué institución aprueba el II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028)?",
        "opciones": {
          "A": "Mesa Sectorial de Sanidad.",
          "B": "Emakunde.",
          "C": "Consejo de Administración de Osakidetza.",
          "D": "Dirección General de Osakidetza."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 249,
        "idpregunta": 249,
        "pregunta": "249.- De acuerdo con el II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028), ¿qué concepto define, dentro del diagnóstico de la organización, la dificultad invisible que encuentran las mujeres para acceder a puestos de mayor responsabilidad y toma de decisiones?",
        "opciones": {
          "A": "Segregación horizontal.",
          "B": "Suelo pegajoso.",
          "C": "Brecha salarial técnica",
          "D": "Techo de cristal."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 250,
        "idpregunta": 250,
        "pregunta": "250.- Una de las Metas del II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028) es “CORRESPONSABILIDAD”. ¿Cuál es el objetivo específico asociado a esta meta?",
        "opciones": {
          "A": "Reducir el porcentaje de hombres en puestos de dirección.",
          "B": "Reducir a la mitad la brecha de género en investigación.",
          "C": "Reducir, al menos, en un 2% la brecha de género existente en las medidas de conciliación para cuidados.",
          "D": "Aumentar el número de investigaciones con perspectiva de género interseccional en un 4%."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 251,
        "idpregunta": 251,
        "pregunta": "251.- ¿Cuál fue el objetivo del I Plan de Igualdad, teniendo en cuenta su condición de primer plan estratégico de Osakidetza en esta materia?",
        "opciones": {
          "A": "Consolidar los avances logrados y profundizar el proceso transformador.",
          "B": "Establecer unos cimientos sólidos para garantizar el cumplimiento de la legislación y la alineación a los marcos estratégicos.",
          "C": "Reducir la brecha salarial a la mitad en todas las categorías profesionales.",
          "D": "Lograr la aprobación por parte del Consejo de Dirección de Osakidetza en julio de 2025."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 252,
        "idpregunta": 252,
        "pregunta": "252.- ¿Cuál es la Meta 5 establecida en el II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028)?",
        "opciones": {
          "A": "Reducir la brecha de género existente en las medidas de conciliación para cuidados.",
          "B": "Capacitación en Igualdad, garantizando la formación progresiva del personal.",
          "C": "Igualdad Salarial, con el objetivo de reducir a la mitad las categorías que tienen una brecha retributiva > 5%.",
          "D": "Investigación, aumentando el número de investigaciones con perspectiva de género."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 253,
        "idpregunta": 253,
        "pregunta": "253.- ¿Cuál es el carácter y el propósito fundamental del II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028)?",
        "opciones": {
          "A": "Es un documento informativo sobre la normativa europea en materia de igualdad sin aplicación directa en la asistencia sanitaria.",
          "B": "Se define como una guía de recomendaciones de adhesión voluntaria para las diferentes Organizaciones de Servicios.",
          "C": "Se trata de un reglamento técnico dirigido exclusivamente al personal con funciones de gestión y dirección.",
          "D": "Es un instrumento estratégico de planificación que busca integrar de forma transversal la perspectiva de género en la cultura y gestión de la organización."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 254,
        "idpregunta": 254,
        "pregunta": "254.- El enfoque de 'interseccionalidad' mencionado en los fundamentos del II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028) implica:",
        "opciones": {
          "A": "Analizar cómo el género interactúa con otros factores (edad, origen, discapacidad, orientación sexual, etc.) para identificar formas específicas de discriminación.",
          "B": "Tratar todas las desigualdades de forma aislada para evitar confusiones estadísticas.",
          "C": "Fomentar el intercambio de personal entre diferentes centros hospitalarios para equilibrar la plantilla.",
          "D": "Priorizar la atención sanitaria en las intersecciones de las grandes áreas metropolitanas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 255,
        "idpregunta": 255,
        "pregunta": "255.- En relación con la violencia machista contra las mujeres, el II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028) establece como línea de actuación prioritaria:",
        "opciones": {
          "A": "El refuerzo de la prevención, la detección precoz y la mejora de la respuesta asistencial integrada desde el sistema de salud.",
          "B": "La derivación inmediata de cualquier caso detectado a servicios jurídicos externos, sin intervención del personal sanitario.",
          "C": "La creación de un registro anónimo donde las personas profesionales puedan denunciar conductas sin seguimiento posterior.",
          "D": "La limitación de la atención asistencial únicamente a las consecuencias físicas derivadas de la violencia."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 256,
        "idpregunta": 256,
        "pregunta": "256.- Tal y como dispone el III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028:",
        "opciones": {
          "A": "La rotulación fija, tanto interna como externa, en general ha de estar en las dos lenguas oficiales dando prioridad al euskera.",
          "B": "Solo la rotulación fija externa en general ha de estar en las dos lenguas oficiales dando prioridad al euskera.",
          "C": "Solo la rotulación fija interna en general ha de estar en las dos lenguas oficiales dando prioridad al euskera.",
          "D": "La rotulación fija, tanto interna como externa, debe aparecer únicamente en euskera."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 257,
        "idpregunta": 257,
        "pregunta": "257.- El III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028 establece respecto a los mensajes audiovisuales que:",
        "opciones": {
          "A": "Deben emitirse en la lengua que decidan las personas responsable de las unidades que utilizan estos sistemas audiovisuales.",
          "B": "Deben emitirse en las dos lenguas oficiales, primero en castellano y luego en euskera.",
          "C": "Deben emitirse en las dos lenguas oficiales, primero en euskera y luego en castellano.",
          "D": "Deben emitirse en una de las dos lenguas oficiales."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 258,
        "idpregunta": 258,
        "pregunta": "258.- Conforme al III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, respecto a las páginas Web de Osakidetza señale cuál de las siguientes repuestas no es correcta:",
        "opciones": {
          "A": "En las intranet, extranet y otros sitios web de Osakidetza las personas usuarias deben tener garantizada la navegación y el acceso a toda la información en las dos lenguas oficiales.",
          "B": "El personal administrador de los sitios web nunca publicará textos o contenidos que no estén en las dos lenguas oficiales.",
          "C": "Al acceder por primera vez a una página web de Osakidetza, la página de inicio se mostrará por defecto en euskera.",
          "D": "Las personas usuarias de los sitios web de Osakidetza deberán tener fácil acceso a los apartados sobre normalización del euskera en la entidad."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 259,
        "idpregunta": 259,
        "pregunta": "259.- De acuerdo con el III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, señale la respuesta correcta:",
        "opciones": {
          "A": "Por aplicación de la Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales no puede constar en los datos personales de cada paciente de Osakidetza su idioma de preferencia para las comunicaciones con Osakidetza.",
          "B": "El signo azul con la letra e indica que la persona paciente no tiene competencia para comunicarse en un idioma que no sea el euskera para las comunicaciones orales con Osakidetza.",
          "C": "En los datos personales de cada paciente, se registrará su idioma de preferencia para las comunicaciones orales con Osakidetza .",
          "D": "A las personas que elijan el euskera como lengua prioritaria en sus comunicaciones con Osakidetza solo se les deberá ofrecer servicios en euskera."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 260,
        "idpregunta": 260,
        "pregunta": "260.- En atención al III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, señale la respuesta correcta:",
        "opciones": {
          "A": "“Aukeratu zeure hizkuntza/Elige tu lengua” es el lema de la campaña de activación del registro de la lengua preferente de cada paciente llevada a cabo en 2017.",
          "B": "Se atribuye a todas las direcciones y gerencias de Osakidetza la responsabilidad de realizar la campaña con el lema “Aukeratu zeure hizkuntza/Elige tu lengua”.",
          "C": "“Aukeratu zeure hizkuntza/Elige tu lengua” es el lema de la campaña de activación del registro de la lengua preferente de cada paciente que realizará Osakidetza durante el primer año de planificación.",
          "D": "“Aukeratu zeure hizkuntza/Elige tu lengua” es el lema de la campaña de activación del registro de la lengua preferente de cada paciente que realizará Osakidetza durante el tercer año de planificación."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "“Aukeratu zeure hizkuntza/Elige tu lengua” es el lema de la campaña de activación del registro de la lengua preferente de cada paciente <span class=\"diff-highlight\">llevada</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">cabo</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">2017</span>.",
          "B": "<span class=\"diff-highlight\">Se</span> <span class=\"diff-highlight\">atribuye</span> <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">todas</span> <span class=\"diff-highlight\">las</span> <span class=\"diff-highlight\">direcciones</span> <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">gerencias</span> de <span class=\"diff-highlight\">Osakidetza</span> la <span class=\"diff-highlight\">responsabilidad</span> de <span class=\"diff-highlight\">realizar</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">campaña</span> <span class=\"diff-highlight\">con</span> el <span class=\"diff-highlight\">lema “Aukeratu</span> <span class=\"diff-highlight\">zeure</span> <span class=\"diff-highlight\">hizkuntza/Elige</span> <span class=\"diff-highlight\">tu</span> <span class=\"diff-highlight\">lengua”.</span>",
          "C": "“Aukeratu zeure hizkuntza/Elige tu lengua” es el lema de la campaña de activación del registro de la lengua preferente de cada paciente que realizará Osakidetza durante el <span class=\"diff-highlight\">primer</span> año de planificación.",
          "D": "“Aukeratu zeure hizkuntza/Elige tu lengua” es el lema de la campaña de activación del registro de la lengua preferente de cada paciente que realizará Osakidetza durante el <span class=\"diff-highlight\">tercer</span> año de planificación."
        }
      },
      {
        "num": 261,
        "idpregunta": 261,
        "pregunta": "261.- El III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028 contempla que tanto en los servicios de recepción y admisión, como en las unidades asistenciales y administrativas a toda la ciudadanía vascohablante debe garantizarse:",
        "opciones": {
          "A": "La recepción en euskera.",
          "B": "La recepción en euskera solo cuando la comunicación oral con pacientes y personas usuarias sea de modo presencial.",
          "C": "La recepción en euskera solo cuando la comunicación con pacientes y personas usuarias sea telefónicamente.",
          "D": "La recepción en euskera solo por las y los empleados que sepan en euskera."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 262,
        "idpregunta": 262,
        "pregunta": "262.- El III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028 establece que, en los escritos individualizados de respuesta a solicitudes y reclamaciones de pacientes o personas usuarias de Osakidetza se utilizará:",
        "opciones": {
          "A": "La lengua utilizada por cada ciudadano o ciudadana.",
          "B": "Siempre el euskera como lengua preferente.",
          "C": "Siempre las dos lenguas oficiales independientemente de la lengua utilizada por cada ciudadano o ciudadana.",
          "D": "Ambas lenguas oficiales, siendo los escritos contestados primero en euskera y luego en castellano."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 263,
        "idpregunta": 263,
        "pregunta": "263.- Siguiendo lo previsto en el III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, señale la respuesta que no es correcta:",
        "opciones": {
          "A": "Se pondrá a disposición del personal bilingüe que lo desee diferentes elementos identificativos portadores del circulo azul con la letra e, signo que invita a relacionarse en euskera.",
          "B": "El signo azul y la letra e solo se utilizará para la identificación individual del personal bilingüe.",
          "C": "En los centros de salud, consultorios y unidades hospitalarias, deberá estar colocado, de modo visible, el cartel que explica a las personas usuarias el significado del signo identificativo con la letra e.",
          "D": "Se estudiará introducir una variante del círculo azul con la letra e para el personal dispuesto a que le hablen en euskera pero que muestra dificultades para expresarse en ciertas situaciones."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 264,
        "idpregunta": 264,
        "pregunta": "264.- En atención a lo previsto en el III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, en todos los centros de atención primaria ha de ponerse en marcha un procedimiento para que, en la medida de las posibilidades, se propongan servicios en euskera a las personas pacientes que hayan registrado esta lengua como preferente y que aún reciban los citados servicios en castellano. Señale a qué servicios se refiere el citado Plan:",
        "opciones": {
          "A": "Medicina familiar, pediatría, enfermería y salud mental.",
          "B": "Pediatría, medicina familiar y salud mental.",
          "C": "Medicina familiar, pediatría, enfermería y matrona.",
          "D": "Todas las anteriores respuestas son correctas."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 265,
        "idpregunta": 265,
        "pregunta": "265.- Conforme al III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, con relación a las quejas relacionadas con el uso de las lenguas oficiales en Osakidetza, señale la respuesta que no es correcta:",
        "opciones": {
          "A": "La dirección responsable de las acciones previstas con relación a las quejas relaciones con el uso de las lenguas oficiales en Osakidetza es la Dirección de Recursos Humanos.",
          "B": "En los Servicios de Atención a Pacientes y personas Usuarias (SAPU) quedarán registradas las quejas relacionadas con el uso de las lenguas oficiales.",
          "C": "Las quejas relacionadas con el uso de las lenguas oficiales serán gestionadas por el SAPU y por la persona o personas responsables del servicio objeto de la queja.",
          "D": "Para mejorar la gestión y seguimiento de las quejas, Osakidetza acordará un protocolo con las entidades que trabajan en el ámbito de los derechos lingüísticos."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 266,
        "idpregunta": 266,
        "pregunta": "266.- Conforme al III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, en las relaciones con empresas proveedoras, entidades financieras y organismos privados:",
        "opciones": {
          "A": "Se designarán interlocutores o interlocutoras vasco-hablantes y se notificará el deseo de Osakidetza de relacionarse en euskera.",
          "B": "En la comunicación escrita siempre debe utilizarse las dos lenguas oficiales.",
          "C": "Osakidetza solicitará a las entidades proveedoras que sus productos que tengan como personas destinatarias a profesionales de Osakidetza estén en euskera .",
          "D": "Ninguna de las anteriores respuestas es correcta."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 267,
        "idpregunta": 267,
        "pregunta": "267.- Conforme al III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, la Dirección General de Osakidetza realizará una comunicación interna de cara a conocer el registro de la lengua preferente de cada profesional, explicar el modo de registrar la lengua preferente y animar al personal vascohablante a optar por el euskera:",
        "opciones": {
          "A": "Una vez cada seis meses.",
          "B": "Una vez al año.",
          "C": "Cada vez que haya una nueva contratación.",
          "D": "El III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2018 no contempla esta acción."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 268,
        "idpregunta": 268,
        "pregunta": "268.- Conforme al III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028:",
        "opciones": {
          "A": "En los casos de los mensajes SMS que se envían a los teléfonos móviles de personas trabajadoras o candidatas, estarán escritos en las dos lenguas oficiales, primero en castellano y luego en euskera.",
          "B": "Los escritos individualizados de respuesta a solicitudes y reclamaciones de las personas trabajadoras deberán redactarse en las dos lenguas oficiales.",
          "C": "Osakidetza ha de garantizar que la información y los servicios ofrecidos tanto al personal empleado como a personas candidatas a través de las tecnologías de la comunicación estén en las dos lenguas oficiales, con el fin de que cada persona haga uso de la lengua de su preferencia.",
          "D": "Las informaciones y comunicaciones no personalizadas dirigidas al personal deberán redactarse en las dos lenguas oficiales y se dará prioridad al castellano."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 269,
        "idpregunta": 269,
        "pregunta": "269.- Como contempla el III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028:",
        "opciones": {
          "A": "En puestos de Jefatura y responsabilidad, en los servicios de prioridad 2, se asignará fecha de preceptividad siempre que el porcentaje de fechas mínimas del servicio sea el 40% o superior.",
          "B": "En puestos de Jefatura y responsabilidad, en los servicios de prioridad 2, se asignará fecha de preceptividad siempre que el porcentaje de fechas mínimas del servicio sea el 50% o superior.",
          "C": "En los servicios de prioridad 2 se asignará fecha de preceptividad a los puestos vacantes por jubilación, incapacidad absoluta o fallecimiento de la persona titular cuando el porcentaje mínimo de fechas de preceptividad que corresponde al servicio sea el 50% o superior.",
          "D": "Osakidetza realizará al menos una convocatoria anual de acreditación de perfiles lingüísticos de acuerdo a lo establecido en el Decreto 67/2003."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "En puestos de Jefatura y responsabilidad, en los servicios de prioridad 2, se asignará fecha de preceptividad siempre que el porcentaje de fechas mínimas del servicio sea el <span class=\"diff-highlight\">40</span>% o superior.",
          "B": "En puestos de Jefatura y responsabilidad, en los servicios de prioridad 2, se asignará fecha de preceptividad siempre que el porcentaje de fechas mínimas del servicio sea el <span class=\"diff-highlight\">50</span>% o superior.",
          "C": "En los servicios de prioridad 2 se asignará fecha de preceptividad <span class=\"diff-highlight\">a</span> <span class=\"diff-highlight\">los</span> <span class=\"diff-highlight\">puestos</span> <span class=\"diff-highlight\">vacantes</span> <span class=\"diff-highlight\">por</span> <span class=\"diff-highlight\">jubilación, incapacidad</span> <span class=\"diff-highlight\">absoluta</span> <span class=\"diff-highlight\">o</span> <span class=\"diff-highlight\">fallecimiento</span> <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">la</span> <span class=\"diff-highlight\">persona</span> <span class=\"diff-highlight\">titular</span> <span class=\"diff-highlight\">cuando</span> el porcentaje <span class=\"diff-highlight\">mínimo</span> de fechas <span class=\"diff-highlight\">de</span> <span class=\"diff-highlight\">preceptividad</span> <span class=\"diff-highlight\">que</span> <span class=\"diff-highlight\">corresponde</span> <span class=\"diff-highlight\">al</span> servicio sea el <span class=\"diff-highlight\">50</span>% o superior.",
          "D": "Osakidetza realizará al menos una convocatoria anual de acreditación de perfiles lingüísticos de acuerdo a lo establecido en el Decreto 67/2003."
        }
      },
      {
        "num": 270,
        "idpregunta": 270,
        "pregunta": "270.- De acuerdo con el III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, Osakidetza realizará dos evaluaciones generales del plan de euskera:",
        "opciones": {
          "A": "La primera el tercer año del período de planificación y la segunda el sexto año.",
          "B": "La primera el segunda año del período de planificación y la segunda el sexto año.",
          "C": "La primera el tercer año del período de planificación y la segunda el sexto año, y será una evaluación cualitativa.",
          "D": "La primera el segunda año del período de planificación y la segunda el sexto año, y será una evaluación cuantitativa fundamentada en los indicadores del plan."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 271,
        "idpregunta": 271,
        "pregunta": "271.- ¿Cuál es la vigencia temporal del Plan Oncológico Integral de Euskadi (POIE) al que se refiere el documento?",
        "opciones": {
          "A": "2024-2028",
          "B": "2025-2030",
          "C": "2023-2027",
          "D": "2020-2025"
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 272,
        "idpregunta": 272,
        "pregunta": "272.- Según el Resumen Ejecutivo del Plan Oncológico Integral de Euskadi (POIE) 2025-2030, ¿de qué porcentaje de los fallecimientos en Euskadi fue responsable el cáncer en el año 2023?",
        "opciones": {
          "A": "22,3%",
          "B": "Menos del 15%",
          "C": "33,8%",
          "D": "28%"
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 273,
        "idpregunta": 273,
        "pregunta": "273.- Según el Resumen Ejecutivo del Plan Oncológico Integral de Euskadi (POIE) 2025-2030, ¿cuáles fueron las dos localizaciones de cáncer más frecuentes en Euskadi en el periodo 2015-2019, consideradas separadamente por sexo?",
        "opciones": {
          "A": "Cáncer colorrectal y cáncer de pulmón.",
          "B": "Cáncer de mama en mujeres y cáncer de próstata en hombres.",
          "C": "Cáncer de páncreas y cáncer de pulmón.",
          "D": "Leucemia y Linfoma de Hodgkin."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 274,
        "idpregunta": 274,
        "pregunta": "274.- ¿Cuál de las siguientes es una de las aspiraciones definidas en la VISIÓN del Plan Oncológico Integral de Euskadi (POIE) 2025-2030?",
        "opciones": {
          "A": "Mejorar la calidad de vida de las personas: de pacientes, supervivientes y de sus familiares y personas cuidadoras.",
          "B": "Aumentar la cuota de mercado de Osakidetza en el sector oncológico privado.",
          "C": "Garantizar la presencia equilibrada de ambos sexos en los órganos de gestión sanitaria.",
          "D": "Establecer la telemedicina como la única forma de seguimiento oncológico."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 275,
        "idpregunta": 275,
        "pregunta": "275.- La Misión del Plan Oncológico Integral de Euskadi (POIE) 2025-2030 busca generar valor a la ciudadanía vasca en términos de:",
        "opciones": {
          "A": "Mayor financiación externa para I+D.",
          "B": "Menores listas de espera y más personal asistencial.",
          "C": "Mejores resultados en salud.",
          "D": "Una mayor supervivencia a los 10 años en todos los tumores."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 276,
        "idpregunta": 276,
        "pregunta": "276.- En el Plan Oncológico Integral de Euskadi (POIE) 2025-2030, la “Centralidad de la persona y humanización” como Principio Rector incluye la incorporación de la perspectiva de género y la atención a:",
        "opciones": {
          "A": "La telemonitorización avanzada.",
          "B": "La diversidad.",
          "C": "El personal profesional no implicado directamente.",
          "D": "Las redes sociales."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 277,
        "idpregunta": 277,
        "pregunta": "277.- Teniendo en cuenta la introducción y el contexto del Plan Oncológico Integral de Euskadi 2025-2030. ¿Cuál fue una de las principales áreas de mejora identificadas en la evaluación del Plan Oncológico de Euskadi (POE) 2018- 2023?",
        "opciones": {
          "A": "La excesiva visibilidad del plan entre profesionales sin implicación.",
          "B": "La necesidad de aumentar el número de Comités de Tumores.",
          "C": "La necesidad de reforzar la atención a colectivos específicos (infancia, mayores, personas largas supervivientes).",
          "D": "La ausencia total de un modelo asistencial común."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 278,
        "idpregunta": 278,
        "pregunta": "278.- ¿Cuántas Áreas Prioritarias de actuación componen el nuevo Plan Oncológico Integral de Euskadi (POIE) 2025-2030, después de la actualización de la estructura?",
        "opciones": {
          "A": "Cinco (5) Áreas Prioritarias.",
          "B": "Seis (6) Áreas Prioritarias.",
          "C": "Siete (7) Áreas Prioritarias.",
          "D": "Ocho (8) Áreas Prioritarias."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 279,
        "idpregunta": 279,
        "pregunta": "279.- Según el listado de acrónimos del Plan Oncológico Integral de Euskadi (POIE) 2025-2030, ¿a qué hacen referencia las siglas PROMs?",
        "opciones": {
          "A": "Plan de Resultados Oncológicos y Metodología de Seguimiento.",
          "B": "Plan de Riesgos Ocupacionales en Medicina Sanitaria.",
          "C": "Programa de Rehabilitación Oncológica y Mejora de la Supervivencia.",
          "D": "Medidas de Resultados Reportadas por los y las Pacientes."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 280,
        "idpregunta": 280,
        "pregunta": "280.- El Plan Oncológico Integral de Euskadi (POIE) 2025-2030 se alinea con el Plan de Salud de Euskadi 2030. ¿Cuál de las siguientes es una de las prioridades estratégicas de dicho Plan de Salud mencionadas en el documento?",
        "opciones": {
          "A": "Creación de una red de servicios privados de salud.",
          "B": "Aumentar la esperanza de vida a 90 años.",
          "C": "Reducir la morbimortalidad evitable y disminuir las desigualdades en salud",
          "D": "Eliminación total del cáncer infantil antes de 2030."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 281,
        "idpregunta": 281,
        "pregunta": "281.- ¿Cuál es el objeto fundamental de la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, según su Artículo 1?",
        "opciones": {
          "A": "Regular los cuidados paliativos avanzados en el Sistema Nacional de Salud.",
          "B": "Modificar el Código Penal para despenalizar la asistencia al suicidio.",
          "C": "Regular el derecho de toda persona a solicitar y recibir la prestación de ayuda para morir y la obligación de las Administraciones de garantizarla.",
          "D": "Establecer el registro de las voluntades anticipadas y testamentos vitales."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 282,
        "idpregunta": 282,
        "pregunta": "282.- Conforme al Artículo 5 de la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿qué requisito de nacionalidad se exige para poder recibir la prestación de ayuda para morir?",
        "opciones": {
          "A": "Tener la ciudadanía española con residencia legal ininterrumpida de al menos 10 años.",
          "B": "Tener la nacionalidad española o tener residencia legal en España de al menos 5 años.",
          "C": "Ser mayor de edad y tener la nacionalidad española, residencia legal o certificado de empadronamiento que acredite un tiempo de permanencia superior a 12 meses en territorio español.",
          "D": "Tener la nacionalidad española y residencia en el mismo municipio durante los últimos 2 años."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 283,
        "idpregunta": 283,
        "pregunta": "283.- Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿qué concepto define la ley como la 'administración directa a la persona paciente de una sustancia por parte del personal sanitario competente'?",
        "opciones": {
          "A": "Suicidio médicamente asistido.",
          "B": "Sedación paliativa profunda.",
          "C": "Eutanasia.",
          "D": "Asistencia para morir."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 284,
        "idpregunta": 284,
        "pregunta": "284.- Según el Artículo 5 de la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿cuál es la condición que debe padecer la persona paciente para solicitar la prestación de ayuda para morir?",
        "opciones": {
          "A": "Padecer una enfermedad incurable en fase terminal o un deterioro funcional grave.",
          "B": "Sufrir una enfermedad que limite gravemente su autonomía.",
          "C": "Padecer una enfermedad grave e incurable o un padecimiento grave, crónico e imposibilitante, causantes de un sufrimiento intolerable.",
          "D": "Sufrir un dolor físico o psíquico que no puede ser tratado con paliativos."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 285,
        "idpregunta": 285,
        "pregunta": "285.- Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿cuál debe ser la periodicidad mínima con la que el personal facultativo responsable debe consultar a la persona paciente, una vez presentada la solicitud, para confirmar si mantiene su deseo?",
        "opciones": {
          "A": "Al menos cada 7 días.",
          "B": "Al menos cada 15 días, debiendo dejarse constancia en la historia clínica.",
          "C": "Al menos cada 30 días, si el procedimiento se extiende.",
          "D": "Una única vez antes de la prestación."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 286,
        "idpregunta": 286,
        "pregunta": "286.- Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿qué órgano tiene la función de verificar en cada caso el cumplimiento de los requisitos establecidos en dicha Ley, con carácter previo a la realización de la prestación de ayuda para morir?",
        "opciones": {
          "A": "El Comité de Ética Asistencial del centro sanitario.",
          "B": "El Consejo Interterritorial del Sistema Nacional de Salud.",
          "C": "La Comisión de Garantía y Evaluación.",
          "D": "La Inspección Sanitaria de la comunidad autónoma."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 287,
        "idpregunta": 287,
        "pregunta": "287.- Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, si la persona paciente se encuentra en situación de incapacidad de hecho en el momento de solicitar la prestación, ¿quién puede presentar la solicitud en su nombre?",
        "opciones": {
          "A": "Únicamente sus familiares directos o cónyuge.",
          "B": "Una persona facultativa o del trabajo social del equipo asistencial, siempre que la persona paciente hubiera suscrito con anterioridad un documento de instrucciones previas, testamento vital o documento equivalente.",
          "C": "La persona legalmente habilitada por la autoridad judicial.",
          "D": "No se puede solicitar la prestación si la persona paciente está en situación de incapacidad de hecho."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 288,
        "idpregunta": 288,
        "pregunta": "288.- Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿cuál es el derecho que asiste al personal sanitario directamente implicado en la prestación de ayuda para morir?",
        "opciones": {
          "A": "Derecho a la reubicación en un puesto de trabajo diferente.",
          "B": "Derecho a un incremento salarial por la complejidad de la prestación.",
          "C": "Derecho a la objeción de conciencia.",
          "D": "Derecho a recibir asistencia jurídica de oficio."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 289,
        "idpregunta": 289,
        "pregunta": "289.- Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿qué define como 'padecimiento grave, crónico e imposibilitante'?",
        "opciones": {
          "A": "Aquel que implica la existencia de sufrimiento físico o psíquico constante.",
          "B": "Aquel que genera una limitación que incide directamente sobre la autonomía física y capacidad de expresar su voluntad de la persona paciente.",
          "C": "La dependencia de otra persona para la realización de al menos dos actividades básicas de la vida diaria.",
          "D": "Una dolencia que ha sido declarada irreversible y con un pronóstico de vida inferior a seis meses."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 290,
        "idpregunta": 290,
        "pregunta": "290.- Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿cuál es el plazo que tiene la persona facultativa responsable para comunicar la resolución favorable a la Comisión de Garantía y Evaluación para su posterior verificación?",
        "opciones": {
          "A": "Dentro de las 24 horas siguientes a la resolución.",
          "B": "Dentro del día siguiente natural a la resolución.",
          "C": "7 días desde la resolución favorable.",
          "D": "No existe un plazo establecido para esta comunicación."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 291,
        "idpregunta": 291,
        "pregunta": "291.- ¿Cuál es el principio general que establece la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas?",
        "opciones": {
          "A": "La libre acumulación de empleos públicos.",
          "B": "La incompatibilidad para desempeñar más de un puesto en el sector público, salvo excepciones.",
          "C": "La compatibilidad automática entre empleo público y privado.",
          "D": "La compatibilidad solo en el ámbito sanitario."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 292,
        "idpregunta": 292,
        "pregunta": "292.- Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, ¿qué se considera “sector público”?",
        "opciones": {
          "A": "Solo la Administración General del Estado.",
          "B": "Solo las Comunidades Autónomas.",
          "C": "Las Administraciones Públicas y entidades vinculadas o dependientes de ellas.",
          "D": "Únicamente los organismos autónomos."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 293,
        "idpregunta": 293,
        "pregunta": "293.- Con carácter general, el personal comprendido en la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, podrá desempeñar:",
        "opciones": {
          "A": "Dos puestos públicos si uno es a tiempo parcial.",
          "B": "Un segundo puesto público únicamente con autorización previa y en los supuestos previstos por la Ley.",
          "C": "Cualquier actividad privada sin limitación.",
          "D": "Dos puestos públicos si pertenecen a distinta Administración."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 294,
        "idpregunta": 294,
        "pregunta": "294.- Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, ¿qué requisito es imprescindible para autorizar la compatibilidad con una actividad privada?",
        "opciones": {
          "A": "Que la actividad sea sanitaria.",
          "B": "Que no se supere la jornada ordinaria establecida.",
          "C": "Que no se comprometa la imparcialidad o independencia del personal público.",
          "D": "Que lo autorice la jefatura inmediata sin más trámites."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 295,
        "idpregunta": 295,
        "pregunta": "295.- Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, ¿puede percibirse más de una remuneración con cargo a los presupuestos públicos?",
        "opciones": {
          "A": "Sí, siempre que no superen el salario mínimo.",
          "B": "No, salvo en los casos expresamente previstos en la Ley.",
          "C": "Sí, sin limitación alguna.",
          "D": "Solo si se trata de diferentes Administraciones autonómicas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 296,
        "idpregunta": 296,
        "pregunta": "296.- ¿La Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, es aplicable al personal estatutario de los servicios de salud?",
        "opciones": {
          "A": "No, porque se rige por normativa específica exclusivamente.",
          "B": "Sí, como personal al servicio de las Administraciones Públicas.",
          "C": "Solo si tienen plaza en propiedad.",
          "D": "Solo al personal directivo."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 297,
        "idpregunta": 297,
        "pregunta": "297.- Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, ¿qué ocurre si se desempeña una actividad incompatible sin autorización?",
        "opciones": {
          "A": "No ocurre nada si es fuera del horario laboral.",
          "B": "Se considera falta leve.",
          "C": "Puede dar lugar a responsabilidad disciplinaria.",
          "D": "Solo se devuelve la remuneración percibida."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 298,
        "idpregunta": 298,
        "pregunta": "298.- Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, ¿qué actividades están exceptuadas del régimen general de incompatibilidades?",
        "opciones": {
          "A": "Las actividades docentes o de investigación en determinados supuestos.",
          "B": "Cualquier actividad privada.",
          "C": "Solo actividades artísticas.",
          "D": "Actividades comerciales propias sin límite."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 299,
        "idpregunta": 299,
        "pregunta": "299.- Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, para que se autorice la compatibilidad para un segundo puesto público es necesario que:",
        "opciones": {
          "A": "Sea en el mismo centro de trabajo.",
          "B": "Sea la jornada completa.",
          "C": "Sea en los supuestos tasados y no se modifique la jornada y horario del puesto principal.",
          "D": "Lo apruebe el personal trabajador del de servicio."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 300,
        "idpregunta": 300,
        "pregunta": "300.- La finalidad principal de la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, es:",
        "opciones": {
          "A": "Incrementar los ingresos del personal público.",
          "B": "Garantizar la dedicación y la imparcialidad en el servicio público.",
          "C": "Permitir la pluriactividad generalizada.",
          "D": "Reducir el número de personal público."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      }
    ]
  },
  "celador": {
    "label": "Celador",
    "meta": "200 preguntas",
    "questions": [
      {
        "num": 1,
        "idpregunta": 1,
        "pregunta": "1.- En Osakidetza, para todos los tipos de jornada, excepto la nocturna, el trabajo efectivo anual a realizar en concepto de jornada ordinaria será de:",
        "opciones": {
          "A": "1592 horas.",
          "B": "1433 horas.",
          "C": "1447 horas.",
          "D": "1492 horas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 2,
        "idpregunta": 2,
        "pregunta": "2.- Podrá acogerse a la exención de trabajo nocturno el personal mayor de:",
        "opciones": {
          "A": "60 años.",
          "B": "55 años.",
          "C": "50 años.",
          "D": "62 años."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 3,
        "idpregunta": 3,
        "pregunta": "3.- Al personal mayor de 60 años que preste sus servicios en régimen de turnos rotatorios se le aplicará a la hora nocturna el factor multiplicador que se señala a continuación:",
        "opciones": {
          "A": "1,15.",
          "B": "1,25.",
          "C": "1,20.",
          "D": "1,10."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 4,
        "idpregunta": 4,
        "pregunta": "4.- Con carácter general, la jornada normalizada diaria será de:",
        "opciones": {
          "A": "6 horas.",
          "B": "6 horas y 30 minutos.",
          "C": "7 horas.",
          "D": "7 horas y 30 minutos."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 5,
        "idpregunta": 5,
        "pregunta": "5.- En el ámbito de osakidetza, durante el disfrute por el personal de las vacaciones reglamentarias:",
        "opciones": {
          "A": "No se podrá hacer uso de las licencias, pero sí de los permisos.",
          "B": "Se podrá hacer uso de las licencias, en los casos establecidos.",
          "C": "No se podrá hacer uso de las licencias o permisos retribuidos.",
          "D": "Se podrá hacer uso de las licencias o permisos, sin retribución."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 6,
        "idpregunta": 6,
        "pregunta": "6.- Mantener al paciente en bipedestación está indicado para:",
        "opciones": {
          "A": "La realización de una punción lumbar.",
          "B": "La realización de pruebas ginecológica.",
          "C": "La realización de pruebas radiológicas.",
          "D": "Cambios posturales."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 7,
        "idpregunta": 7,
        "pregunta": "7.- Describa la posición genupectoral:",
        "opciones": {
          "A": "De rodillas e inclinado hacia delante.",
          "B": "Boca abajo.",
          "C": "Tumbado de lado en posición fetal.",
          "D": "Boca arriba con manos en el pecho."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 8,
        "idpregunta": 8,
        "pregunta": "8.- Los arneses de uso en pacientes:",
        "opciones": {
          "A": "Son desechados tras su uso.",
          "B": "Se utilizan para inmovilizar al paciente.",
          "C": "Tras su uso por el paciente se envían a la lavandería.",
          "D": "Son de talla única."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 9,
        "idpregunta": 9,
        "pregunta": "9.- El ecógrafo realiza exploraciones utilizando:",
        "opciones": {
          "A": "Ondas electromagnéticas.",
          "B": "Ultrasonidos.",
          "C": "Rayos X.",
          "D": "Ninguna de las respuestas anteriores es correcta."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 10,
        "idpregunta": 10,
        "pregunta": "10.- Defina temperatura de ignición:",
        "opciones": {
          "A": "Temperatura a la cual una sustancia comienza a desprender vapores en cantidad suficiente para mantener la combustión.",
          "B": "Temperatura a la cual una sustancia puede llegar a arder en determinadas condiciones ambientales.",
          "C": "Temperatura a la cual una sustancia empieza a arder espontáneamente.",
          "D": "Ninguna de las anteriores afirmaciones es correcta."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 11,
        "idpregunta": 11,
        "pregunta": "11.- El agua es el agente extintor por excelencia pero uno de sus inconvenientes es:",
        "opciones": {
          "A": "Provoca daños excesivos en la estructura y mobiliario de los edificios.",
          "B": "Requiere equipos de bombeo.",
          "C": "Es inadecuado para fuegos de materiales sólidos.",
          "D": "Conduce la electricidad."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 12,
        "idpregunta": 12,
        "pregunta": "12.- En caso de accidente biológico, ¿cuánto tiempo se recomienda limpiar la herida bajo el agua?",
        "opciones": {
          "A": "2 o 3 minutos induciendo el sangrado.",
          "B": "Hasta que deje de sangrar la herida.",
          "C": "2 o tres minutos restregando suavemente la herida.",
          "D": "No está recomendado limpiar con agua."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 13,
        "idpregunta": 13,
        "pregunta": "13.- Durante el transcurso de la licencia por enfermedad:",
        "opciones": {
          "A": "El trabajador podrá realizar actividades lucrativas.",
          "B": "El trabajador percibirá las retribuciones en los porcentajes establecidos legalmente.",
          "C": "El trabajador podrá superar el periodo de contratación estipulado.",
          "D": "El trabajador podrá ser despedido."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 14,
        "idpregunta": 14,
        "pregunta": "14.- El prefijo EPI indica la posición:",
        "opciones": {
          "A": "Encima.",
          "B": "Debajo.",
          "C": "Lateral.",
          "D": "Inferior."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 15,
        "idpregunta": 15,
        "pregunta": "15.- Para que una combustión sea posible es necesaria la presencia de:",
        "opciones": {
          "A": "Humedad relativa baja.",
          "B": "Ozono.",
          "C": "Comburente.",
          "D": "Humedad relativa alta."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 16,
        "idpregunta": 16,
        "pregunta": "16.- En caso de sufrir una agresión en el trabajo, ¿qué es lo que NO debe hacer?",
        "opciones": {
          "A": "Identificar al agresor y retenerlo hasta la llegada de la policía.",
          "B": "Comunicar la agresión a su responsable inmediato.",
          "C": "Si requiere asistencia sanitaria acudir a la Unidad Básica de Prevención.",
          "D": "Cumplimentar el formulario correspondiente."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 17,
        "idpregunta": 17,
        "pregunta": "17.- Indique la respuesta correcta sobre la posición de Roser:",
        "opciones": {
          "A": "Persona tumbada boca arriba.",
          "B": "Paciente tumbado boca abajo, con la cabeza ladeada.",
          "C": "Paciente boca arriba, con la cabeza colgando por la parte superior de la cama.",
          "D": "Paciente tumbado boca arriba, en un plano oblicuo de 45o, con la cabeza más baja que los pies."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 18,
        "idpregunta": 18,
        "pregunta": "18.- ¿Cuál es la indicación de posición en un paciente con problemas cardiacos y respiratorios?",
        "opciones": {
          "A": "Tremdelemburg.",
          "B": "Fowler.",
          "C": "Decúbito supino.",
          "D": "Decúbito lateral."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 19,
        "idpregunta": 19,
        "pregunta": "19.- ¿Cómo se denomina a la posición en la que el paciente se encuentra vertical sobre los pies?",
        "opciones": {
          "A": "Decúbito supino.",
          "B": "Decúbito frontal.",
          "C": "Tremdelemburg",
          "D": "Bipedestación."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 20,
        "idpregunta": 20,
        "pregunta": "20.- ¿En qué posición se colocará a un paciente inconsciente?",
        "opciones": {
          "A": "Sims.",
          "B": "Genupectoral.",
          "C": "Decúbito supino.",
          "D": "Decúbito lateral."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 21,
        "idpregunta": 21,
        "pregunta": "21.- En la posición decúbito lateral, ¿cómo se encontrará el paciente?",
        "opciones": {
          "A": "Inconsciente.",
          "B": "Tumbado y en posición fetal.",
          "C": "De rodillas e inclinado hacia delante.",
          "D": "Tumbado de lado y con la pierna superior flexionada en ángulo recto."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 22,
        "idpregunta": 22,
        "pregunta": "22.- Como norma general, ¿en qué posición encontraremos a un paciente consciente que está recibiendo oxigenoterapia en la cama?",
        "opciones": {
          "A": "Decúbito supino.",
          "B": "Decúbito prono.",
          "C": "Sentado.",
          "D": "Bipedestación."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 23,
        "idpregunta": 23,
        "pregunta": "23.- Indique la respuesta correcta sobre la posición de Morestin:",
        "opciones": {
          "A": "Paciente en decúbito supino con la cabeza más baja que los pies.",
          "B": "Paciente en decúbito supino con la cabeza más alta que los pies.",
          "C": "Paciente en decúbito prono.",
          "D": "Paciente decúbito supino con las piernas elevadas y flexionadas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 24,
        "idpregunta": 24,
        "pregunta": "24.- Entre los pasos posteriores a la movilización de un paciente:",
        "opciones": {
          "A": "Dejarlo acomodado, volver a colocar sueros en su lugar y verificar su seguridad.",
          "B": "Adoptar mecánica postural y retirar los objetos que le puedan molestar.",
          "C": "Frenar la cama e informar al paciente.",
          "D": "Todas son correctas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 25,
        "idpregunta": 25,
        "pregunta": "25.- En caso de movilizar a una persona con múltiples traumatismos, indique la respuesta correcta:",
        "opciones": {
          "A": "Dependerá si el paciente puede colaborar.",
          "B": "Se le desplazará agarrándole por las axilas.",
          "C": "Se le desplazará con una transfer entre dos o más personas.",
          "D": "Se le desplazará en bloque."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 26,
        "idpregunta": 26,
        "pregunta": "26.- En el movimiento hacia un lateral de la cama, estando la persona inconsciente, en decúbito supino, realizando el movimiento entre dos personas:",
        "opciones": {
          "A": "Una persona pasará los brazos por debajo de las axilas y la otra persona cogerá al paciente por rodillas y muslos.",
          "B": "Doblaremos la rodilla del paciente contraria al sentido del giro.",
          "C": "Doblaremos la rodilla del paciente del lado del sentido del giro.",
          "D": "Todas son correctas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 27,
        "idpregunta": 27,
        "pregunta": "27.- En el movimiento del paciente de plano a plano en el procedimiento con dos personas, indique la respuesta INCORRECTA:",
        "opciones": {
          "A": "Se coloca una persona a cada lado, cada una coge la sábana lo más próximo posible al paciente.",
          "B": "El cabecero de uno de los planos se coloca en el piecero del otro, o viceversa, para quedar los dos en ángulo recto y perpendiculares.",
          "C": "La persona más alejada del paciente apoyará su rodilla en el plano vacío para ayudarse en la movilización.",
          "D": "Colocar los dos planos a la misma altura, si es posible. Inmovilizar ambos y cubrir el hueco entre ambos."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 28,
        "idpregunta": 28,
        "pregunta": "28.- Cuando realizamos el movimiento del paciente hacia la cabecera de la cama sin ayuda del paciente, éste lo deberá realizar, como mínimo:",
        "opciones": {
          "A": "Una sola persona.",
          "B": "Dos personas.",
          "C": "Tres personas.",
          "D": "Cuatro personas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 29,
        "idpregunta": 29,
        "pregunta": "29.- El movimiento del paciente de la cama al sillón, cuando realizamos el procedimiento entre dos personas, sin colaboración del paciente, entre los pasos a realizar encontramos:",
        "opciones": {
          "A": "Sujetamos al paciente por los hombros y las rodillas, le giramos hasta sentarlo al borde de la cama.",
          "B": "Flexionamos las rodillas para abrazar ligeramente al paciente por la cintura para ayudarle a incorporarse de pie y a continuación en un cuarto de giro le sentamos en la silla o sillón.",
          "C": "a) y b) son correctas.",
          "D": "Una persona se pondrá al lado de la cabecera de la cama, en un costado. El otro se pone en el costado a la altura de la zona lumbar del paciente. Entre los dos, queda la silla en la que lo vamos a sentar."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 30,
        "idpregunta": 30,
        "pregunta": "30.- Entre los dispositivos y materiales para ayudar en la movilización se encuentran, indique la respuesta correcta:",
        "opciones": {
          "A": "Discos giratorios.",
          "B": "Bastón.",
          "C": "Silla de ruedas.",
          "D": "Cama o camilla."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 31,
        "idpregunta": 31,
        "pregunta": "31.- En cuanto a las grúas, ¿qué tipos de grúas podemos encontrar?",
        "opciones": {
          "A": "Eléctrica, mecánica e hidráulica.",
          "B": "Eléctrica enchufable y eléctrica con batería.",
          "C": "Hidráulica y manual.",
          "D": "Mecánica y manual."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 32,
        "idpregunta": 32,
        "pregunta": "32.- Para colocar al paciente el arnés de una grúa desde una posición de decúbito lateral:",
        "opciones": {
          "A": "Colocar al enfermo en decúbito lateral y pasar el arnés por debajo de la entremetida.",
          "B": "Colocar al enfermo en decúbito supino y pasar el arnés de arriba-abajo por detrás y por debajo de una sábana entremetida.",
          "C": "Colocar al enfermo en decúbito prono y pasar el arnés de abajo-arriba por detrás y por encima de una sábana entremetida.",
          "D": "Todas son correctas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 33,
        "idpregunta": 33,
        "pregunta": "33.- ¿Cuál es la finalidad principal de un purifica de ambiente?",
        "opciones": {
          "A": "Se utiliza para vaporizar o dispersar un líquido en partículas muy finas para su inhalación.",
          "B": "Dispositivo utilizado para eliminar del aire sustancias contaminantes.",
          "C": "Aparato destinado a calentar las camas de los pacientes antes de su ingreso.",
          "D": "Equipo diseñado exclusivamente para la esterilización por calor seco del material quirúrgico."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 34,
        "idpregunta": 34,
        "pregunta": "34.- Respecto a las grúas: (Indique la respuesta INCORRECTA):",
        "opciones": {
          "A": "Están equipadas con arnés.",
          "B": "Se emplean para la movilización de pacientes.",
          "C": "Permite al paciente caminar con mayor seguridad.",
          "D": "Algunos modelos incorporan un sistema de camillas de cintas para levantar horizontalmente al paciente."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 35,
        "idpregunta": 35,
        "pregunta": "35.- Para colocar adecuadamente el arnés en la grúa, para enganchar las bandas:",
        "opciones": {
          "A": "Se debe enganchar en primer lugar la zona del cuerpo y posteriormente las piernas.",
          "B": "Se debe enganchar en primer lugar las piernas y posteriormente el cuerpo.",
          "C": "Se debe enganchar en primer lugar el lateral no dominante y posteriormente el dominante.",
          "D": "Se debe enganchar en primer lugar el lateral dominante y posteriormente el no dominante."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 36,
        "idpregunta": 36,
        "pregunta": "36.- Una vez elevado el paciente con suavidad en la grúa, debemos abrir las patas de la grúa para:.",
        "opciones": {
          "A": "Aumentar la estabilidad.",
          "B": "No debemos abrir las patas de la grúa sino cerrarlas para que ocupe menos y sea más fácil manejarla.",
          "C": "Procurar mayor seguridad en el traslado.",
          "D": "a) y c) son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 37,
        "idpregunta": 37,
        "pregunta": "37.- Son normas generales del arnés. (Indique la respuesta la INCORRECTA):",
        "opciones": {
          "A": "Revisar antes de cada uso.",
          "B": "No utilizar si está deshilachado.",
          "C": "Tras el alta del paciente enviar a lavandería.",
          "D": "El paciente debe tener contacto directamente con el arnés, aunque veamos que lo puede manchar."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 38,
        "idpregunta": 38,
        "pregunta": "38.- La ubicación del arnés es: (Indique la respuesta INCORRECTA):",
        "opciones": {
          "A": "Planta de hospitalización.",
          "B": "Uno en cada habitación.",
          "C": "Almacén.",
          "D": "Dependencias que cada Organización determine."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 39,
        "idpregunta": 39,
        "pregunta": "39.- Sirve para deslizar de un plano a otro al paciente, suele utilizarse para transportar al paciente desde la cama al tablero quirúrgico o viceversa:",
        "opciones": {
          "A": "Camilla tijera.",
          "B": "Arnés.",
          "C": "Transfer.",
          "D": "Correa de sujeción."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 40,
        "idpregunta": 40,
        "pregunta": "40.- Son tipos de transfer:",
        "opciones": {
          "A": "Transfer fijo.",
          "B": "Rampa o chapa.",
          "C": "Rolón o rollbord.",
          "D": "Todas son ciertas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 41,
        "idpregunta": 41,
        "pregunta": "41.- ¿Cuál es el primer paso en la utilización de transfer para transportar entre dos planos?",
        "opciones": {
          "A": "Se mete el transfer entre la sábana y el paciente.",
          "B": "Se mete el transfer debajo de la sábana y el paciente.",
          "C": "Se centra al paciente en el transfer.",
          "D": "Se pasa al paciente con el transfer."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 42,
        "idpregunta": 42,
        "pregunta": "42.- Los transfers fijos, se manejan con:",
        "opciones": {
          "A": "Pedal.",
          "B": "Manivela.",
          "C": "Mando.",
          "D": "Todas son correctas."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 43,
        "idpregunta": 43,
        "pregunta": "43.- Es un elemento que consiste en una chapa, recubierta de una tela, que hace las veces de cinta sin fin:",
        "opciones": {
          "A": "Rolón/Rollbord.",
          "B": "Arnés.",
          "C": "Transfer fijo.",
          "D": "Rampa o chapa."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 44,
        "idpregunta": 44,
        "pregunta": "44.- Cuando nos referimos a las partes de la cama, el dispositivo a través del cual el paciente se ayuda para moverse en la cama, se denomina:",
        "opciones": {
          "A": "Vallas laterales.",
          "B": "Trapecio o potencia.",
          "C": "Vallas escamoteables.",
          "D": "Cabecero."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 45,
        "idpregunta": 45,
        "pregunta": "45.- Con respecto a los frenos de la cama:",
        "opciones": {
          "A": "Se pueden encontrar en la parte baja, lateral y media de una cama.",
          "B": "La palanca de frenos no permite fijar la dirección de las ruedas.",
          "C": "Nunca debemos circular con una rueda en sentido contrario, pues la cama se bambolea.",
          "D": "Se puede circular con las ruedas en sentido contrario."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 46,
        "idpregunta": 46,
        "pregunta": "46.- ¿Qué pieza de la cama se puede retirar si el médico necesita intubar al paciente?",
        "opciones": {
          "A": "El cabezal escamoteable.",
          "B": "Las vallas escamoteables.",
          "C": "El trapecio.",
          "D": "El portasuero del cabezal."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 47,
        "idpregunta": 47,
        "pregunta": "47.- ¿Qué función tiene la 5a rueda de la camilla?",
        "opciones": {
          "A": "Facilita la movilización del paciente.",
          "B": "Facilita la dirección y el giro.",
          "C": "Nos permite movilizar la cama cuando alargamos su longitud.",
          "D": "Nos permite tener mayor estabilidad."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 48,
        "idpregunta": 48,
        "pregunta": "48.- ¿En qué caso NO se realizará el traslado del paciente en la cama desde el piecero?",
        "opciones": {
          "A": "Para entrar en los ascensores.",
          "B": "Con pacientes con oxigenoterapia.",
          "C": "Cuando traslademos al paciente a realizar una ecografía.",
          "D": "Con pacientes monitorizados y el monitor colocado en la parte del piecero."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 49,
        "idpregunta": 49,
        "pregunta": "49.- ¿Dónde se ubican las camillas en el hospital?",
        "opciones": {
          "A": "En la entrada principal exclusivamente.",
          "B": "En las urgencias pediátricas y de adultos exclusivamente.",
          "C": "En los servicios especiales como los quirófanos, urgencias, exploraciones en consultas, etc.",
          "D": "En las consultas exclusivamente."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 50,
        "idpregunta": 50,
        "pregunta": "50.- La camilla de exploración tiene un cabecero que es elevable, ¿en cuántas posiciones?",
        "opciones": {
          "A": "El cabecero es fijo.",
          "B": "En dos posiciones.",
          "C": "En tres posiciones.",
          "D": "En cuatro posiciones."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 51,
        "idpregunta": 51,
        "pregunta": "51.- La camilla de traslado tiene una serie de características: Indique la respuesta INCORRECTA:",
        "opciones": {
          "A": "Pueden incorporar chasis para la realización de radiografías.",
          "B": "No permite instalar portasueros.",
          "C": "Lleva vallas laterales escamoteables.",
          "D": "Lleva portabalas de oxígeno."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 52,
        "idpregunta": 52,
        "pregunta": "52.- Cuando utilizamos una camilla tijera tenemos que tener en cuenta que:",
        "opciones": {
          "A": "Se debe colocar entre cuatro personas mínimo, ya que sirve para inmovilizar.",
          "B": "El plano donde se encuentra el paciente tiene que estar horizontal.",
          "C": "El plano donde se encuentra el paciente tiene que estar semi sentado.",
          "D": "Se debe utilizar inseparablemente junto a las correas de sujeción."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 53,
        "idpregunta": 53,
        "pregunta": "53.- Cuando utilizamos las correas de sujeción, en una sujeción lateral:",
        "opciones": {
          "A": "Solo permite fijar el cuerpo del paciente en decúbito supino.",
          "B": "No impide que el cuerpo del paciente ruede de manera lateral.",
          "C": "Permite fijar el cuerpo del paciente en decúbito supino y lateral, pero no permite en decúbito prono.",
          "D": "Todas son incorrectas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 54,
        "idpregunta": 54,
        "pregunta": "54.- Con respecto a la silla de ruedas: Indique la respuesta INCORRECTA:",
        "opciones": {
          "A": "Cubrir al paciente por delante cuando vaya sentado y con camisón.",
          "B": "Poner al paciente en contacto directo con el cuero de la silla, para evitar que se resbale.",
          "C": "Evitar que el paciente se desplace por encima de los reposapiés al incorporarse.",
          "D": "Tener precaución con las sondas ya que se podrían enganchar en las ruedas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 55,
        "idpregunta": 55,
        "pregunta": "55.- Señala la correcta con respecto al manejo de la silla de ruedas en la entrada y la salida del ascensor:",
        "opciones": {
          "A": "Para entrar se hará de frente al ascensor y para salir saldremos de frente a la puerta.",
          "B": "Para entrar se hará de espaldas al ascensor y para salir saldremos de espaldas a la puerta.",
          "C": "Para entrar se hará de frente al ascensor y para salir lo haremos de espaldas.",
          "D": "Para entrar se hará de espaldas al ascensor y para salir saldremos de frente a la puerta."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 56,
        "idpregunta": 56,
        "pregunta": "56.- ¿Dónde se sitúan las sillas de ruedas dentro del hospital?",
        "opciones": {
          "A": "En la entrada principal exclusivamente.",
          "B": "Se ubicarán en las entradas al hospital y en las unidades de hospitalización.",
          "C": "En las entradas de urgencias pediátricas y de adultos exclusivamente.",
          "D": "En la zona de quirófanos, la UCI y las urgencias exclusivamente."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 57,
        "idpregunta": 57,
        "pregunta": "57.- ¿Qué elemento NO se encuentra dentro de los accesorios que puede llevar una silla de ruedas?",
        "opciones": {
          "A": "Tabla que sirve para que los pacientes no puedan doblar el brazo.",
          "B": "Portabalas.",
          "C": "Portasueros.",
          "D": "Bolsa portadocumentos."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 58,
        "idpregunta": 58,
        "pregunta": "58.- ¿Qué particularidad presenta la mesa de quirófano?",
        "opciones": {
          "A": "Puede ser articulada y el cabecero es escamoteable para que el médico pueda intubar.",
          "B": "Es desmontable para que se pueda limpiar y desinfectar con tranquilidad.",
          "C": "Permite la movilización total de las extremidades del paciente en función de la intervención de que se trate.",
          "D": "Todas son correctas."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 59,
        "idpregunta": 59,
        "pregunta": "59.- En una bombona o bala de oxígeno portátil, ¿dónde se conecta el tubo de las gafas nasales?",
        "opciones": {
          "A": "En la parte frontal hay una toma de salida de oxígeno.",
          "B": "En la parte posterior hay una toma de salida.",
          "C": "En la conexión de pared, en el humidificador.",
          "D": "En la parte superior, junto al regulador de caudal."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 60,
        "idpregunta": 60,
        "pregunta": "60.- ¿Para qué sirve un balón de insuflación (AMBU)?",
        "opciones": {
          "A": "Para la ventilación de personas con problemas respiratorios graves.",
          "B": "Para la ventilación de personas con problemas respiratorios leves.",
          "C": "Para la ventilación manual de paciente que precise reanimación.",
          "D": "Para la ventilación manual de pacientes que se encuentran con un ataque de ansiedad."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 61,
        "idpregunta": 61,
        "pregunta": "61.- ¿Para qué sirve una bomba de perfusión?",
        "opciones": {
          "A": "Para introducir alimentos por vía nasogástrica.",
          "B": "Para introducir de forma lenta y continua una sustancia medicamentosa por vía intravenosa.",
          "C": "Para introducir alimentos por vía intravenosa.",
          "D": "Para introducir de forma lenta y continua una sustancia medicamentosa por vía nasogástrica."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 62,
        "idpregunta": 62,
        "pregunta": "62.- ¿Cómo se denomina al colchón que evita la aparición en el paciente de úlceras por presión?",
        "opciones": {
          "A": "Colchón para estancias prolongadas.",
          "B": "Colchón de aire.",
          "C": "Colchón anti-presión.",
          "D": "Colchón anti-escaras."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 63,
        "idpregunta": 63,
        "pregunta": "63.- A el armazón metálico utilizado en camas traumatológicas se le denomina:",
        "opciones": {
          "A": "Arco de protección.",
          "B": "Bastidor de Stryker.",
          "C": "Cuadro balcánico.",
          "D": "Arco salvasábanas."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 64,
        "idpregunta": 64,
        "pregunta": "64.- ¿Qué tipo de férulas se utiliza para realizar, junto con las pesas, tracción en los miembros inferiores?",
        "opciones": {
          "A": "Férula de Tracción bimodal.",
          "B": "Férula de Matrix.",
          "C": "Férula de Brown.",
          "D": "Férula Rígida."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 65,
        "idpregunta": 65,
        "pregunta": "65.- ¿Para qué sirve la tabla de paradas?",
        "opciones": {
          "A": "Es una superficie dura para acostar al paciente sobre una camilla.",
          "B": "Es una superficie dura para acostar al paciente sobre una silla.",
          "C": "Es una superficie dura para personas con múltiples traumatismos.",
          "D": "Es una superficie dura para acostar al paciente sobre el suelo."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 66,
        "idpregunta": 66,
        "pregunta": "66.- ¿Cómo se denomina el aparato que se utiliza para ver, diagnosticar y tratar problemas en la cavidad pélvico-abdominal?",
        "opciones": {
          "A": "Aparato de escopia.",
          "B": "Electrocardiógrafo.",
          "C": "Torre de laparoscopia.",
          "D": "Ecógrafo."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 67,
        "idpregunta": 67,
        "pregunta": "67.- El término hiperglucemia hace referencia a:",
        "opciones": {
          "A": "Defecto de la glucosa en sangre.",
          "B": "Exceso de glucosa en sangre.",
          "C": "Nivel normal de glucosa en sangre.",
          "D": "Todas son correctas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 68,
        "idpregunta": 68,
        "pregunta": "68.- El término hemiplejia hacer referencia a:",
        "opciones": {
          "A": "Parálisis de un lado del cuerpo.",
          "B": "Parálisis de todo el cuerpo.",
          "C": "Parálisis de una extremidad superior.",
          "D": "Parálisis de una extremidad inferior."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 69,
        "idpregunta": 69,
        "pregunta": "69.- A la definición referente al hígado le corresponde el prefijo:",
        "opciones": {
          "A": "Bio-.",
          "B": "Bradi-.",
          "C": "Endo–.",
          "D": "Hepat-."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 70,
        "idpregunta": 70,
        "pregunta": "70.- A la definición referente a los huesos le corresponde el prefijo:",
        "opciones": {
          "A": "Intra-.",
          "B": "Necro-.",
          "C": "Osteo-.",
          "D": "Poli-."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 71,
        "idpregunta": 71,
        "pregunta": "71.- El sufijo ITIS se corresponde con la definición:",
        "opciones": {
          "A": "Medicamento.",
          "B": "Inflamación.",
          "C": "Dolor.",
          "D": "Célula."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 72,
        "idpregunta": 72,
        "pregunta": "72.- El sufijo que indica que el término es referente a la mama, es:",
        "opciones": {
          "A": "Grafía.",
          "B": "Mastia.",
          "C": "Algia.",
          "D": "Megalia."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 73,
        "idpregunta": 73,
        "pregunta": "73.- ¿Qué siglas se corresponden a la prueba de Electrocardiograma?",
        "opciones": {
          "A": "A.F.G.",
          "B": "T.A.C.",
          "C": "E.C.G.",
          "D": "E.M.G."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 74,
        "idpregunta": 74,
        "pregunta": "74.- ¿Qué siglas corresponden a la Unidad de Reanimación Post Anestésica?",
        "opciones": {
          "A": "S.R.P.A.",
          "B": "R.P.A.",
          "C": "U.R.P.A.",
          "D": "R.P.A.N."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 75,
        "idpregunta": 75,
        "pregunta": "75.- ¿Qué siglas corresponden a la Enfermedad Pulmonar Obstructiva Crónica?",
        "opciones": {
          "A": "E.P.O.T.",
          "B": "E.P .O.D.",
          "C": "P.O.C.D.",
          "D": "E.P .O.C."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 76,
        "idpregunta": 76,
        "pregunta": "76.- La especialidad médica que se ocupa de las afecciones del corazón y aparato circulatorio:",
        "opciones": {
          "A": "Cardiología.",
          "B": "Neurología.",
          "C": "Nefrología.",
          "D": "Endocrinología."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 77,
        "idpregunta": 77,
        "pregunta": "77.- La especialidad médica que tiene como función llevar a la normalidad funcional y anatómica la cobertura corporal, es decir la forma del cuerpo:",
        "opciones": {
          "A": "Cirugía plástica.",
          "B": "Cirugía vascular.",
          "C": "Cirugía cardiovascular.",
          "D": "Cirugía general."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 78,
        "idpregunta": 78,
        "pregunta": "78.- Hace referencia al estudio y tratamiento de enfermedades de la sangre:",
        "opciones": {
          "A": "Nefrología.",
          "B": "Dermatología.",
          "C": "Obstetricia.",
          "D": "Hematología."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 79,
        "idpregunta": 79,
        "pregunta": "79.- La formación quirúrgica de un ano artificial, o estoma, a través del abdomen con el fin de evacuar el contenido intestinal, se denomina:",
        "opciones": {
          "A": "Edema",
          "B": "Úlcera.",
          "C": "Melena.",
          "D": "Colostomía."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 80,
        "idpregunta": 80,
        "pregunta": "80.- ¿Cómo se denomina al recipiente de borde plano y ancho utilizado por el paciente para excretar en posición de decúbito supino?",
        "opciones": {
          "A": "Cuña.",
          "B": "Batea.",
          "C": "Botella.",
          "D": "Orinal."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 81,
        "idpregunta": 81,
        "pregunta": "81.- ¿Qué prueba estudia la función respiratoria?",
        "opciones": {
          "A": "Electrocardiograma.",
          "B": "Espirometría.",
          "C": "Endoscopia.",
          "D": "Ecografía."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 82,
        "idpregunta": 82,
        "pregunta": "82.- El término paraplejia, se corresponde con la siguiente definición:",
        "opciones": {
          "A": "Parálisis de los miembros o extremidades inferiores (de la cintura hacia abajo).",
          "B": "Parálisis de las cuatro extremidades.",
          "C": "Parálisis del hemicuerpo derecho.",
          "D": "Parálisis del hemicuerpo izquierdo."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 83,
        "idpregunta": 83,
        "pregunta": "83.- El tubo que, introducido por el meato, llega hasta la vejiga, se denomina:",
        "opciones": {
          "A": "Sonda nasogástrica.",
          "B": "Sonda vesical.",
          "C": "a) y b) son incorrectas.",
          "D": "a) y b) son correctas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 84,
        "idpregunta": 84,
        "pregunta": "84.- La lesión secundaria de la piel, con pérdida de sustancia, muy profunda, que ocupa la dermis, epidermis e hipodermis, se denomina:",
        "opciones": {
          "A": "Herida.",
          "B": "Úlcera.",
          "C": "Mácula.",
          "D": "Pústula."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 85,
        "idpregunta": 85,
        "pregunta": "85.- Cualquier suceso no esperado ni deseado que da lugar a la pérdida de la salud o lesiones a los trabajadores, se denomina:",
        "opciones": {
          "A": "Accidente de trabajo.",
          "B": "Incidente.",
          "C": "a) y b) son correctas.",
          "D": "a) y b) son incorrectas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 86,
        "idpregunta": 86,
        "pregunta": "86.- Para colocar al paciente el arnés de una grúa desde la posición sentado en una silla:",
        "opciones": {
          "A": "Colocar el arnés de abajo-arriba, por detrás y por debajo de una sábana entremetida, hasta la altura de la cintura.",
          "B": "Colocar el arnés de arriba-abajo, por detrás y por debajo de una sábana entremetida, hasta la altura de la cintura.",
          "C": "Colocar el arnés de arriba-abajo, por delante y por encima de una sábana entremetida, hasta la altura de la cintura.",
          "D": "Colocar el arnés de abajo-arriba, por delante y por encima de una sábana entremetida, hasta la altura de la cintura."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 87,
        "idpregunta": 87,
        "pregunta": "87.- El término taquicardia hace referencia a:",
        "opciones": {
          "A": "Aceleración del ritmo cardíaco.",
          "B": "Disminución del ritmo cardíaco.",
          "C": "Aceleración de la frecuencia respiratoria.",
          "D": "Disminución de la frecuencia respiratoria."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 88,
        "idpregunta": 88,
        "pregunta": "88.- El término disnea, se corresponde con la siguiente definición:",
        "opciones": {
          "A": "Dificultad para deglutir.",
          "B": "Dificultad para hablar.",
          "C": "Dificultad para respirar.",
          "D": "Dificultad para articular palabras."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 89,
        "idpregunta": 89,
        "pregunta": "89.- ¿Cómo se denomina el carro que sirve para el depósito del material sanitario necesario para realizar las curas a los pacientes?",
        "opciones": {
          "A": "Carro de curas.",
          "B": "Carro de material.",
          "C": "Carro sanitario.",
          "D": "Carro de farmacia."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 90,
        "idpregunta": 90,
        "pregunta": "90.- La sujeción abdominal de las correas de sujeción:",
        "opciones": {
          "A": "Se puede instalar antes o después de que el paciente se haya acostado.",
          "B": "Se debe instalar siempre antes de que el paciente se acueste.",
          "C": "Se debe instalar siempre después de que el paciente se acueste.",
          "D": "Se debe instalar con la cama vacía."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 91,
        "idpregunta": 91,
        "pregunta": "91.- En cuanto a la utilización de rolón o rollbord:",
        "opciones": {
          "A": "En el desplazamiento no deberemos mantener el eje cabeza-pies recto.",
          "B": "En el desplazamiento deberemos mantener el eje cabeza-pies recto.",
          "C": "Se ladea totalmente al paciente para apoyarlo en el centro del rolón.",
          "D": "b) y c) son incorrectas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 92,
        "idpregunta": 92,
        "pregunta": "92.- La bombona de oxígeno consta de varias partes, entre las que se encuentran:",
        "opciones": {
          "A": "Un manómetro, que mide la presión que hay en la botella.",
          "B": "Un tirador de apertura.",
          "C": "En un lateral, hay una leyenda sobre las instrucciones de uso y seguridad.",
          "D": "Todas las respuestas son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 93,
        "idpregunta": 93,
        "pregunta": "93.- Según las normas generales de movilización de pacientes, ¿cuál de las siguientes actuaciones se considera obligatoria?",
        "opciones": {
          "A": "Priorizar la rapidez del traslado del paciente.",
          "B": "Guardar en todo momento la intimidad del paciente.",
          "C": "Informar al paciente solo si colabora activamente.",
          "D": "Evitar cualquier movilización siempre si el paciente presenta dolor."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 94,
        "idpregunta": 94,
        "pregunta": "94.- En cuanto a los pasos previos a la movilización del paciente, ¿qué acción debe realizarse antes de dicha movilización?",
        "opciones": {
          "A": "Colocar al paciente en posición Fowler siempre que sea posible.",
          "B": "Frenar la cama.",
          "C": "Solicitar autorización médica por escrito.",
          "D": "Comprobar las constantes vitales del paciente."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 95,
        "idpregunta": 95,
        "pregunta": "95.- Al realizar el traslado del paciente en silla de ruedas, señale la afirmación INCORRECTA:",
        "opciones": {
          "A": "Comprobar el correcto funcionamiento de la silla antes de usarla.",
          "B": "Informar al paciente del procedimiento que se va a realizar.",
          "C": "Colocar los reposapiés antes de sentar al paciente.",
          "D": "Asegurar que los frenos estén puestos durante las transferencias."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 96,
        "idpregunta": 96,
        "pregunta": "96.- El parte interno de notificación de accidente/incidente es:",
        "opciones": {
          "A": "El documento opcional para comunicar verbalmente un suceso.",
          "B": "El registro necesario para declarar un accidente de trabajo, un incidente o una agresión, y que sea reconocido legalmente.",
          "C": "Un informe médico emitido por la Mutua.",
          "D": "Un documento exclusivo para accidentes con baja laboral."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 97,
        "idpregunta": 97,
        "pregunta": "97.- Según el manual de prevención de incendios, el polvo polivalente es:",
        "opciones": {
          "A": "El agente extintor más seguro para su uso.",
          "B": "Adecuado únicamente para fuegos de materiales sólidos (A).",
          "C": "El agente extintor por excelencia por su eficacia y abundancia para fuegos de materiales sólidos (A).",
          "D": "Ineficaz contra brasas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 98,
        "idpregunta": 98,
        "pregunta": "98.- Ante una situación de emergencia relacionada con un incendio, el trabajador debe:",
        "opciones": {
          "A": "Abandonar el centro inmediatamente sin avisar.",
          "B": "Confirmar la emergencia, informar a su responsable e intentar sofocar el conato de incendio con ayuda del extintor.",
          "C": "Esperar instrucciones sin intervenir.",
          "D": "Utilizar agua siempre como primera opción."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 99,
        "idpregunta": 99,
        "pregunta": "99.- El importe máximo de los adelantos de nómina a conceder será de:",
        "opciones": {
          "A": "3.000 euros.",
          "B": "6.000 euros.",
          "C": "3.500 euros.",
          "D": "4.500 euros."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 100,
        "idpregunta": 100,
        "pregunta": "100.- Cuando la duración de una jornada exceda de seis horas continuadas existirá un período de descanso de:",
        "opciones": {
          "A": "Diez minutos.",
          "B": "Treinta minutos.",
          "C": "Quince minutos.",
          "D": "Veinte minutos."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 101,
        "idpregunta": 101,
        "pregunta": "101.- El personal liberado para el estudio del euskera podrá percibir:",
        "opciones": {
          "A": "El 50% de las retribuciones fijas.",
          "B": "El 75% de las retribuciones totales, tanto fijas como variables, que por cartelera tenga asignadas.",
          "C": "El 100% de las retribuciones fijas.",
          "D": "El 100% de las retribuciones, tanto fijas como variables, que por cartelera tenga asignadas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 102,
        "idpregunta": 102,
        "pregunta": "102.- En caso de agresión, el trabajador o trabajadora deberá:",
        "opciones": {
          "A": "Comunicarlo exclusivamente a la Mutua.",
          "B": "Ponerlo en conocimiento de en el menor plazo de tiempo posible a su responsable inmediato.",
          "C": "Esperar a que la Dirección abra expediente.",
          "D": "Comunicarlo únicamente a los Delegados de Prevención."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 103,
        "idpregunta": 103,
        "pregunta": "103.- Los fuegos de clase C son aquellos que se producen en:",
        "opciones": {
          "A": "Materiales sólidos que dejan brasas.",
          "B": "Líquidos inflamables.",
          "C": "Gases inflamables.",
          "D": "Metales combustibles."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 104,
        "idpregunta": 104,
        "pregunta": "104.- Según el Decreto 255/1997 ¿qué es el Ente Público Osakidetza-Servicio vasco de salud?",
        "opciones": {
          "A": "Una sociedad anónima de capital mixto.",
          "B": "Un organismo autónomo estatal.",
          "C": "El Ente Institucional de la Comunidad Autónoma, de naturaleza pública y bajo la calificación de Ente Público de Derecho Privado.",
          "D": "Una fundación sanitaria privada."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 105,
        "idpregunta": 105,
        "pregunta": "105.- ¿Qué posición se utiliza específicamente para el lavado de pelo y la RCP?",
        "opciones": {
          "A": "Fowler.",
          "B": "Roser.",
          "C": "Sims.",
          "D": "Antitrendelemburg."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 106,
        "idpregunta": 106,
        "pregunta": "106.- En el movimiento de cama a sillón con paciente colaborador, ¿qué debe hacerse antes de sentarlo al borde de la cama?",
        "opciones": {
          "A": "Colocar la silla a 90o.",
          "B": "Incorporar el cabezal en Fowler.",
          "C": "Retirar la entremetida.",
          "D": "Ajustar el trapecio."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 107,
        "idpregunta": 107,
        "pregunta": "107.- Corresponde a cada organización de servicios del Ente Público Osakidetza- Servicio vasco de salud:",
        "opciones": {
          "A": "Únicamente funciones asistenciales clínicas.",
          "B": "El ejercicio de todas las facultades de gestión y administración necesarias para la provisión de servicios sanitarios encomendados.",
          "C": "Aprobar el Plan Estratégico del Ente .",
          "D": "Elaborar los Presupuestos Generales de la Comunidad Autónoma."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 108,
        "idpregunta": 108,
        "pregunta": "108.- ¿Qué acción ayuda a prevenir accidentes por orden y limpieza?",
        "opciones": {
          "A": "Dejar material en zonas de paso.",
          "B": "Mantener objetos cerca para tenerlos a mano.",
          "C": "No dejar objetos en zonas de paso.",
          "D": "Guardar solo el material pesado."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 109,
        "idpregunta": 109,
        "pregunta": "109.- ¿Qué requisito es imprescindible antes de entrar en áreas con radiación ionizante?",
        "opciones": {
          "A": "Llevar ropa blanca.",
          "B": "Usar dosímetro personal.",
          "C": "No llevar objetos metálicos.",
          "D": "Haber comido previamente."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 110,
        "idpregunta": 110,
        "pregunta": "110.- ¿Qué acción debe evitarse al manejar agujas?",
        "opciones": {
          "A": "Desecharlas en contenedores.",
          "B": "Reencapucharlas para tirarlas con mayor seguridad.",
          "C": "Usar guantes.",
          "D": "Todas son correctas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 111,
        "idpregunta": 111,
        "pregunta": "111.- El arnés se utiliza junto con:",
        "opciones": {
          "A": "Silla convencional.",
          "B": "Bastón.",
          "C": "Grúa.",
          "D": "Camilla simple."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 112,
        "idpregunta": 112,
        "pregunta": "112.- Según el Decreto 255/1997, Osakidetza es el Ente Institucional de la Comunidad Autónoma, bajo la calificación de:",
        "opciones": {
          "A": "Ente privado de Derecho Privado.",
          "B": "Ente privado de Derecho Público.",
          "C": "Ente público de Derecho Público.",
          "D": "Ente público de Derecho Privado."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 113,
        "idpregunta": 113,
        "pregunta": "113.- ¿Cuál NO es uno de los fines de interés general del Ente Público Osakidetza- Servicio vasco de salud?",
        "opciones": {
          "A": "Ejecutar la provisión del servicio público sanitario mediante las prestaciones de asistencia primaria y especializada que sean objeto de aseguramiento y contratación pública.",
          "B": "Garantizar el trato equitativo de las personas residentes en la Comunidad Autónoma del País Vasco mediante solo la emisión de tarjetas sanitarias.",
          "C": "Proporcionar a las personas que accedan a sus servicios las condiciones necesarias para el pleno ejercicio de sus derechos y deberes de carácter instrumental o complementario.",
          "D": "Promover la docencia en ciencias de la salud."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 114,
        "idpregunta": 114,
        "pregunta": "114.- La organización rectora de Osakidetza está comprendida por:",
        "opciones": {
          "A": "Presidente y Consejo Administración.",
          "B": "Presidente, secretario y Consejo de Administración.",
          "C": "Viceconsejero, gerente y Consejo de Administración.",
          "D": "Director ejecutivo, secretario y Consejo de Administración."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 115,
        "idpregunta": 115,
        "pregunta": "115.- Dentro del organigrama de Osakidetza, ¿qué función le corresponde al Consejero de Sanidad?",
        "opciones": {
          "A": "Gerencia.",
          "B": "Presidencia.",
          "C": "Director ejecutivo.",
          "D": "Secretario."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 116,
        "idpregunta": 116,
        "pregunta": "116.- ¿Quiénes forman parte del Consejo de Administración de Osakidetza?",
        "opciones": {
          "A": "El Viceconsejero y tres miembros nombrados por el Consejero de Hacienda.",
          "B": "El gerente y cuatro miembros en representación de la Administración del Estado.",
          "C": "El consejero de Hacienda y tres miembros a propuesta del Consejero de Sanidad.",
          "D": "El presidente y cinco miembros en representación de la administración de la Comunidad Autónoma."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 117,
        "idpregunta": 117,
        "pregunta": "117.- Según el Decreto 255/1997, las organizaciones de servicios sanitarios dependientes del Ente Público Osakidetza-Servicio vasco de salud realizarán la actividad de provisión de servicios sanitarios, actuando a tal efecto, ¿bajo qué principio?",
        "opciones": {
          "A": "Principio de equidad.",
          "B": "Principio de reciprocidad.",
          "C": "Principio de autonomía económico-financiera y de gestión.",
          "D": "Principio de igualdad."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 118,
        "idpregunta": 118,
        "pregunta": "118.- El Consejo de Administración del Ente Público, al objeto de preservar los criterios de eficacia y eficiencia en la gestión, adoptará las medidas de intervención que considere necesarias sobre las organizaciones de servicios. Estas pueden ser:",
        "opciones": {
          "A": "Suspender temporalmente, y con carácter total o parcial, las facultades de gestión que tienen atribuidas las organizaciones de servicios del Ente Público.",
          "B": "No podrá suspender en ningún caso las facultades de gestión.",
          "C": "Suspender temporalmente, y de manera exclusivamente parcial, las facultades de gestión que tienen atribuidas las organizaciones de servicios del Ente Público.",
          "D": "Suspender temporalmente, y de manera exclusivamente total, las facultades de gestión que tienen atribuidas las organizaciones de servicios del Ente Público."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "Suspender temporalmente, y <span class=\"diff-highlight\">con</span> <span class=\"diff-highlight\">carácter</span> <span class=\"diff-highlight\">total</span> <span class=\"diff-highlight\">o</span> parcial, las facultades de gestión que tienen atribuidas las organizaciones de servicios del Ente Público.",
          "B": "<span class=\"diff-highlight\">No</span> <span class=\"diff-highlight\">podrá</span> <span class=\"diff-highlight\">suspender</span> <span class=\"diff-highlight\">en</span> <span class=\"diff-highlight\">ningún</span> <span class=\"diff-highlight\">caso</span> las facultades de gestión.",
          "C": "Suspender temporalmente, y de manera exclusivamente <span class=\"diff-highlight\">parcial</span>, las facultades de gestión que tienen atribuidas las organizaciones de servicios del Ente Público.",
          "D": "Suspender temporalmente, y de manera exclusivamente <span class=\"diff-highlight\">total</span>, las facultades de gestión que tienen atribuidas las organizaciones de servicios del Ente Público."
        }
      },
      {
        "num": 119,
        "idpregunta": 119,
        "pregunta": "119.- ¿Cuál de las siguientes afirmaciones NO son funciones del Consejo Técnico que va a desarrollar dentro de las previsiones del Plan Estratégico de la Organización?",
        "opciones": {
          "A": "Propuesta de líneas de actuación en materia de investigación, docencia y formación.",
          "B": "Valoración de nuevas estrategias asistenciales, diagnósticas y terapéuticas.",
          "C": "Formulación de políticas, propuestas y recomendaciones referidas a la calidad asistencial.",
          "D": "Conocer y participar en el plan de salud de la zona."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 120,
        "idpregunta": 120,
        "pregunta": "120.- ¿Cómo está establecido el periodo de descanso?",
        "opciones": {
          "A": "En descanso diario, con un periodo mínimo ininterrumpido de 12 horas y descanso semanal, con periodo mínimo ininterrumpido de 24 horas semanales.",
          "B": "En descanso diario, con un periodo mínimo ininterrumpido de 8 horas y descanso semanal, con periodo mínimo ininterrumpido de 36 horas semanales.",
          "C": "En descanso diario, con un periodo mínimo ininterrumpido de 8 horas y descanso semanal, con periodo mínimo ininterrumpido de 24 horas semanales.",
          "D": "En descanso diario, con un periodo mínimo ininterrumpido de 12 horas y descanso semanal, con periodo mínimo ininterrumpido de 32 horas semanales."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 121,
        "idpregunta": 121,
        "pregunta": "121.- Con respecto a las vacaciones, el personal tendrá derecho a disfrutar durante cada año completo de servicio de una vacación retribuida de:",
        "opciones": {
          "A": "30 días laborales sin computarse los sábados como laborales.",
          "B": "30 días laborales computándose los sábados como laborales.",
          "C": "28 días laborales sin computarse los sábados como laborales.",
          "D": "28 días laborales computándose los sábados como laborales."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 122,
        "idpregunta": 122,
        "pregunta": "122.- En el supuesto de que estando disfrutando las vacaciones el personal iniciara una situación de IT (incapacidad temporal), ¿qué sucede con el periodo vacacional?",
        "opciones": {
          "A": "El periodo vacacional quedará interrumpido.",
          "B": "Con contratos de sustitución, se pierde el periodo vacacional.",
          "C": "Solo al personal estatutario se le interrumpe el periodo vacacional.",
          "D": "El periodo vacacional no quedará interrumpido."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 123,
        "idpregunta": 123,
        "pregunta": "123.- En todas las Organizaciones de servicios se establecerán anualmente, previa negociación, los calendarios de días laborables anuales y los horarios de trabajo. ¿Quiénes realizan dicha negociación?",
        "opciones": {
          "A": "El personal estatutario y los representantes del personal.",
          "B": "La Dirección y la Viceconsejería de Sanidad.",
          "C": "El personal estatutario y el personal interino.",
          "D": "La Dirección y los representantes del personal."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 124,
        "idpregunta": 124,
        "pregunta": "124.- Las carteleras de trabajo específicas negociadas en cada unidad tendrán carácter obligatorio bimestral. ¿En qué casos se pueden modificar?",
        "opciones": {
          "A": "Cuando el jefe del servicio, previa petición de los trabajadores, así lo decida.",
          "B": "Cuando el jefe del servicio lo decida, sin necesidad de petición de los trabajadores de su unidad.",
          "C": "Por necesidades exclusivamente graves, urgentes o imprevisibles.",
          "D": "Tras el aumento de la demanda de trabajo, ya sea por bajas o vacaciones."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 125,
        "idpregunta": 125,
        "pregunta": "125.- Si quisieras solicitar una licencia, ¿ante quien se tiene que solicitar?",
        "opciones": {
          "A": "La Dirección de Recursos Humanos de la organización de servicios correspondiente.",
          "B": "La Dirección de la Organización de Servicios correspondiente.",
          "C": "La secretaria de la Organización.",
          "D": "Primero ante la jefatura del servicio, posteriormente ante la Dirección de la Organización del servicio correspondiente."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 126,
        "idpregunta": 126,
        "pregunta": "126.- En caso de realizar un acogimiento simple de un menor, ¿a qué tengo derecho?",
        "opciones": {
          "A": "A un permiso por asuntos propios.",
          "B": "A una licencia retribuida.",
          "C": "En caso de acogimiento no se tiene los mismos derechos que si fuera un alumbramiento.",
          "D": "Todas son correctas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 127,
        "idpregunta": 127,
        "pregunta": "127.- La especialidad médica que se ocupa del estudio de la estructura y la función renal se denomina:",
        "opciones": {
          "A": "Cardiología.",
          "B": "Neurología.",
          "C": "Nefrología",
          "D": "Endocrinología."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 128,
        "idpregunta": 128,
        "pregunta": "128.- En caso de tener que asistir a exámenes académicos en un centro oficial en horario laboral, tendremos derecho a un permiso. ¿Dicho permiso de cuántos días será?",
        "opciones": {
          "A": "Un día natural por cada prueba de examen.",
          "B": "Un día laboral por cada prueba de examen.",
          "C": "Un día laboral independientemente de las pruebas de examen que tenga.",
          "D": "No se tiene derecho a ningún día."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 129,
        "idpregunta": 129,
        "pregunta": "129.- En caso de tener que acudir a una consulta médica durante la jornada laboral, tendremos derecho a:",
        "opciones": {
          "A": "Una licencia.",
          "B": "Un permiso no retribuido y con un máximo de 4 horas, que podrá modificarse de manera excepcional.",
          "C": "Un permiso retribuido y con un máximo de 4 horas, que podrá modificarse de manera excepcional.",
          "D": "Un permiso no retribuido y con un máximo de 2 horas, que podrá modificarse de manera excepcional."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 130,
        "idpregunta": 130,
        "pregunta": "130.- La descripción “paciente tumbado boca arriba, en un plano oblicuo de 45o, con la cabeza más baja que los pies” hace referencia a la posición:",
        "opciones": {
          "A": "Sims.",
          "B": "Litotomía.",
          "C": "Anti-trendelemburg.",
          "D": "Trendelemburg."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 131,
        "idpregunta": 131,
        "pregunta": "131.- Señala la INCORRECTA. Entre las competencias necesarias para el desempeño del puesto de celador/celadora se encuentran:",
        "opciones": {
          "A": "Orientación al paciente.",
          "B": "Resolución de problemas.",
          "C": "Competencias necesarias para proporcionar cuidados de calidad.",
          "D": "Adaptación al cambio y contribución a la mejora."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 132,
        "idpregunta": 132,
        "pregunta": "132.- ¿Cuál es la posición indicada en un parto?",
        "opciones": {
          "A": "Roser.",
          "B": "Fowler.",
          "C": "Sims o semiprona.",
          "D": "Litotomía."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 133,
        "idpregunta": 133,
        "pregunta": "133.- Son normas generales para la movilización de pacientes:",
        "opciones": {
          "A": "Retirar los objetos que nos molesten.",
          "B": "Dejar acomodado al paciente.",
          "C": "Evitar movimientos bruscos en la movilización del paciente.",
          "D": "b) y c) son correctas."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 134,
        "idpregunta": 134,
        "pregunta": "134.- Señala la respuesta INCORRECTA. Son pasos previos a toda movilización:",
        "opciones": {
          "A": "Verificar la seguridad del paciente.",
          "B": "Colocar la cama en la posición que más nos ayude en la movilización del paciente.",
          "C": "Retirar los objetos que nos molesten.",
          "D": "Adoptar mecánica postural."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 135,
        "idpregunta": 135,
        "pregunta": "135.- Señala la respuesta INCORRECTA. Son dispositivos y materiales para ayudar en la movilización:",
        "opciones": {
          "A": "Escabel.",
          "B": "Rolón.",
          "C": "Potencia.",
          "D": "Férula de Brown."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 136,
        "idpregunta": 136,
        "pregunta": "136.- A la hora de movilizar un paciente que no colabora hacia un lateral de la cama y posicionarlo en decúbito lateral izquierdo:",
        "opciones": {
          "A": "Comprobaremos que el brazo derecho no quede presionado debajo de su cuerpo.",
          "B": "Comprobaremos que el brazo izquierdo no quede presionado debajo de su cuerpo.",
          "C": "Comprobaremos que la pierna derecha no quede presionada debajo de su cuerpo.",
          "D": "Comprobaremos que la pierna izquierda no quede presionada debajo de su cuerpo."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 137,
        "idpregunta": 137,
        "pregunta": "137.- Cuando realizamos el movimiento del paciente de plano a plano, en un procedimiento con dos o más personas:",
        "opciones": {
          "A": "Las personas se sitúan en el lado contrario del plano por donde vamos a hacer el movimiento.",
          "B": "El cabecero de uno de los planos se coloca en el piecero del otro, o viceversa, para quedar los dos en ángulo recto y perpendiculares.",
          "C": "Los cabeceros de ambos planos se colocan paralelamente.",
          "D": "Las respuestas a) y b) son correctas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 138,
        "idpregunta": 138,
        "pregunta": "138.- Señale la respuesta que NO es correcta, en relación a las grúas:",
        "opciones": {
          "A": "Hay algunos modelos de grúas que incorporan un sistema de camillas de cintas para levantar horizontalmente al paciente y realizar el aseo y/o curas.",
          "B": "Las grúas están equipadas con un arnés que nos ayuda en el movimiento del paciente.",
          "C": "Se emplea en las unidades de hospitalización para la movilización de pacientes impedidos o demasiado pesados, garantizando así mayor seguridad y menor riesgo de lesiones para el paciente y para el personal de enfermería y celador.",
          "D": "Podemos encontrar tres tipos de grúas: hidráulica, eléctrica y electrohidráulica."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 139,
        "idpregunta": 139,
        "pregunta": "139.- En la utilización de transfer como puente entre plano y plano:",
        "opciones": {
          "A": "Se introduce por debajo de la sábana del paciente dejando la mitad del transfer debajo de éste y la otra mitad fuera de la camilla.",
          "B": "Se introduce por debajo de la sábana del paciente dejando todo el transfer debajo de la sábana del paciente.",
          "C": "Se introduce por debajo de la sábana del paciente dejando dos tercios del transfer debajo de éste y el otro tercio fuera de la camilla.",
          "D": "Ninguna de las respuestas anteriores es correcta."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 140,
        "idpregunta": 140,
        "pregunta": "140.- ¿Qué significa la sigla “TAC”?",
        "opciones": {
          "A": "Tomografía Axial Computarizada.",
          "B": "Tratamiento Asistido Clínico.",
          "C": "Técnica de Análisis Corporal.",
          "D": "Tomografía Avanzada de Contraste."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 141,
        "idpregunta": 141,
        "pregunta": "141.- Señala la respuesta correcta en relación al transfer fijo:",
        "opciones": {
          "A": "El transfer fijo, es en realidad un rolón eléctrico, con desplazamientos verticales.",
          "B": "El transfer fijo, es en realidad un rolón eléctrico, con desplazamientos horizontales.",
          "C": "a) y b) son correctas.",
          "D": "a) y b) son incorrectas."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 142,
        "idpregunta": 142,
        "pregunta": "142.- Señale la respuesta que NO es correcta en el manejo de la silla de ruedas:",
        "opciones": {
          "A": "En las rampas, para subir lo haremos de frente.",
          "B": "Para salir del ascensor, lo haremos de frente a la puerta.",
          "C": "Para entrar en el ascensor se hará de espaldas al mismo.",
          "D": "En las rampas para bajar lo haremos de frente."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 143,
        "idpregunta": 143,
        "pregunta": "143.- Señale la respuesta INCORRECTA respecto al oxígeno:",
        "opciones": {
          "A": "Es un gas poco reactivo.",
          "B": "Su manipulación precisa de adopción de precauciones.",
          "C": "Es un gas incoloro e insípido.",
          "D": "Es un gas inodoro."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 144,
        "idpregunta": 144,
        "pregunta": "144.- Señale la respuesta que NO es correcta en el manejo de un paciente con bala de oxígeno:",
        "opciones": {
          "A": "Debemos colgar la bala de oxígeno en la cama del paciente.",
          "B": "Si el traslado se realiza con el humidificador no se debe colocar la bala tumbada.",
          "C": "Cerraremos el caudalímetro para prevenir fugas durante el traslado.",
          "D": "a) y b) son correctas."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 145,
        "idpregunta": 145,
        "pregunta": "145.- El aparato que regula la nutrición vía sanguínea se denomina:",
        "opciones": {
          "A": "Bomba de nutrición enteral.",
          "B": "Bomba de nutrición parenteral.",
          "C": "Bomba de perfusión.",
          "D": "Bomba de nutrición contínua."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 146,
        "idpregunta": 146,
        "pregunta": "146.- Señale la respuesta que NO es correcta en relación con el microdifusor electrotérmico:",
        "opciones": {
          "A": "Los tratamientos DVA proporcionan reducciones importantes en los niveles de contaminación microbiológica de todos los puntos, excepto en los más alejados o de difícil acceso.",
          "B": "Es el sistema que permite la desinfección total de superficies a través del aire.",
          "C": "Es un proceso en el que el aire sirve de vector de transmisión del aerosol biocida.",
          "D": "b) y c) son verdaderas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 147,
        "idpregunta": 147,
        "pregunta": "147.- El aparato cuya finalidad es registrar corrientes eléctricas del corazón se denomina:",
        "opciones": {
          "A": "Electrocardiógrafo.",
          "B": "Ecocardiógrafo.",
          "C": "Ecógrafo.",
          "D": "a) y b) son correctas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 148,
        "idpregunta": 148,
        "pregunta": "148.- Señale la respuesta correcta respecto al Escabel:",
        "opciones": {
          "A": "Puede utilizarse como ayuda para subir a la cama.",
          "B": "Se utiliza para el descanso de los pies en pacientes que están sentados.",
          "C": "Se utiliza para evitar el roce de las sábanas.",
          "D": "a) y b) son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 149,
        "idpregunta": 149,
        "pregunta": "149.- Señala, de los siguientes sufijos, cuál significa “aumento de volumen”:",
        "opciones": {
          "A": "-logía.",
          "B": "-tomía.",
          "C": "-osis.",
          "D": "-megalia."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 150,
        "idpregunta": 150,
        "pregunta": "150.- El trapecio o potencia:",
        "opciones": {
          "A": "Es un armazón metálico utilizado en camas traumatológicas.",
          "B": "Es un dispositivo que permite limitar los movimientos de la cabeza y cuello.",
          "C": "Es un recipiente para transportar muestras, recoger residuos orgánicos y de curas.",
          "D": "Es un dispositivo a través del cual se ayuda el paciente para moverse en la cama."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 151,
        "idpregunta": 151,
        "pregunta": "151.- La especialidad que se encarga del cuidado total de los pacientes cuya enfermedad no responde al tratamiento activo con intención curativa es:",
        "opciones": {
          "A": "Cuidados contínuos.",
          "B": "Cuidados paliativos.",
          "C": "Cuidados terminales.",
          "D": "Cuidados intensivos."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 152,
        "idpregunta": 152,
        "pregunta": "152.- La técnica mediante la cual se separan los componentes de la sangre siendo seleccionados los necesarios, para su aplicación en medicina, y devueltos al torrente sanguíneo el resto de sus componentes, se denomina:",
        "opciones": {
          "A": "Frotis.",
          "B": "Amniocentesis.",
          "C": "Aféresis.",
          "D": "Desbridación."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 153,
        "idpregunta": 153,
        "pregunta": "153.- La cirugía reparadora de los vasos sanguíneos se denomina:",
        "opciones": {
          "A": "Angioplastia.",
          "B": "Broncoscopia.",
          "C": "Colangiografía.",
          "D": "Profilaxis."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 154,
        "idpregunta": 154,
        "pregunta": "154.- Para colocar el arnés al paciente desde la posición de decúbito lateral:",
        "opciones": {
          "A": "Debemos pasar el arnés por encima de la entremetida, moverlo hacia decúbito lateral contrario, estirar el arnés y la entremetida.",
          "B": "Debemos pasar el arnés por encima de la entremetida, moverlo hacia decúbito lateral contrario, estirar el arnés y la entremetida para finalizar en decúbito supino.",
          "C": "Debemos pasar el arnés por debajo de la entremetida, moverlo hacia decúbito supino, estirar el arnés y la entremetida para finalizar en decúbito lateral.",
          "D": "Debemos pasar el arnés por debajo de la entremetida, moverlo hacia decúbito lateral contrario, estirar el arnés y la entremetida para finalizar en decúbito supino."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 155,
        "idpregunta": 155,
        "pregunta": "155.- La quinta rueda de las camillas sirve para:",
        "opciones": {
          "A": "Facilitar los giros.",
          "B": "Fijar la dirección de las ruedas delanteras en sentido de la marcha.",
          "C": "Facilitar los desplazamientos laterales.",
          "D": "a) y c) son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 156,
        "idpregunta": 156,
        "pregunta": "156.- La actuación inmediata a realizar ante una agresión será:",
        "opciones": {
          "A": "Aunque se necesite asistencia médica, lo primero sería la interposición de la correspondiente denuncia ante la autoridad policial.",
          "B": "Si requiere asistencia médica, acuda a la Unidad Básica de Prevención (UBP) correspondiente. Si la asistencia se aporta fuera de la UBP, en el propio centro o en cualquier otro centro de Osakidetza, solicite la emisión de un informe médico donde consten las causas de la asistencia y las lesiones objetivadas.",
          "C": "Aunque se necesite asistencia médica, lo primero es elaborar junto con el responsable inmediato, un informe lo más exhaustivo posible, incluyendo datos de la situación, hechos observados o declaraciones de testigos.",
          "D": "Cumplimente el Registro para la Notificación de Accidente “Formato I” firmado por el responsable inmediato, antes de acudir al servicio de urgencias."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 157,
        "idpregunta": 157,
        "pregunta": "157.- El fuego se clasifica en diferentes clases, y no todas se apagan con el mismo agente extintor. Por eso, para cada clase de fuego encontramos diferentes tipos de extintores:",
        "opciones": {
          "A": "Para fuegos de clase B se puede utilizar agua.",
          "B": "Para fuegos de clase ABC se puede utilizar extintores de Polvo Polivalente.",
          "C": "Para fuegos de clase ABC se puede utilizar agua pulverizada o dióxido de carbono (CO2).",
          "D": "Para fuegos de clase C se puede utilizar extintores de dióxido de carbono (CO2)."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 158,
        "idpregunta": 158,
        "pregunta": "158.- ¿Qué precaución se tiene que tener en cuenta cuando se utiliza un extintor de dióxido de carbono?",
        "opciones": {
          "A": "Solo es adecuado para fuegos de tipo C y el contacto de CO2 con partes del cuerpo al salir al exterior puede producir quemaduras por calor.",
          "B": "Solo es adecuado para fuegos de tipo A y B y el contacto de CO2 con partes del cuerpo al salir al exterior puede producir quemaduras por calor.",
          "C": "Solo es adecuado para fuegos de tipo C y el contacto de CO2 con partes del cuerpo al salir al exterior puede producir quemaduras por frío.",
          "D": "Solo es adecuado para fuegos de tipo A y B y el contacto de CO2 con partes del cuerpo al salir al exterior puede producir quemaduras por frío."
        },
        "correcta": "D",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Solo es adecuado para fuegos de tipo <span class=\"diff-highlight\">C</span> y el contacto de CO2 con partes del cuerpo al salir al exterior puede producir quemaduras por calor.",
          "B": "Solo es adecuado para fuegos de tipo <span class=\"diff-highlight\">A</span> <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">B</span> y el contacto de CO2 con partes del cuerpo al salir al exterior puede producir quemaduras por calor.",
          "C": "Solo es adecuado para fuegos de tipo <span class=\"diff-highlight\">C</span> y el contacto de CO2 con partes del cuerpo al salir al exterior puede producir quemaduras por frío.",
          "D": "Solo es adecuado para fuegos de tipo <span class=\"diff-highlight\">A</span> <span class=\"diff-highlight\">y</span> <span class=\"diff-highlight\">B</span> y el contacto de CO2 con partes del cuerpo al salir al exterior puede producir quemaduras por frío."
        }
      },
      {
        "num": 159,
        "idpregunta": 159,
        "pregunta": "159.- Un accidente biológico se produce por la exposición accidental a agentes biológicos, y esto puede ocurrir por:",
        "opciones": {
          "A": "Contacto con piel no intacta.",
          "B": "Contacto con piel intacta.",
          "C": "Contacto con sangre u otros fluidos biológicos a través de cortes o pinchazos.",
          "D": "a) y c) son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 160,
        "idpregunta": 160,
        "pregunta": "160.- ¿Cómo se denomina al suceso no esperado ni deseado que no dando lugar a pérdidas de salud o lesiones a las personas, pueda ocasionar daños en el equipo que estamos manejando?",
        "opciones": {
          "A": "Accidente de trabajo.",
          "B": "Accidente sin baja.",
          "C": "Accidente in-itinere.",
          "D": "Incidente."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 161,
        "idpregunta": 161,
        "pregunta": "161.- Con respecto a las vacaciones:",
        "opciones": {
          "A": "Las vacaciones pueden ser compensadas con dinero si así lo solicita mediante un escrito notarial 15 días antes de cada periodo vacacional.",
          "B": "Como norma general, las vacaciones no podrán ser compensadas, ni en todo ni en parte, en metálico.",
          "C": "El trabajador solicita al inicio de su prestación laboral si quiere ser compensado en parte en metálico cuando finalice su periodo de contratación.",
          "D": "En ningún caso se podrá solicitar que se compense las vacaciones."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 162,
        "idpregunta": 162,
        "pregunta": "162.- Elige la respuesta correcta en relación al equipo de protección individual:",
        "opciones": {
          "A": "Cualquier máquina , aparato, instrumento o instalación utilizada en el trabajo.",
          "B": "Toda herramienta o dispositivo que el responsable inmediato entrega al trabajador para realizar su tarea de forma rápida.",
          "C": "Un conjunto de medidas colectivas diseñadas para eliminar los riesgos ambientales en el entorno sanitario.",
          "D": "Cualquier equipo destinado a ser llevado o sujetado por el trabajador para que le proteja de uno o varios riesgos que puedan amenazar su seguridad o salud en el trabajo."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 163,
        "idpregunta": 163,
        "pregunta": "163.- En una sujeción abdominal, las correas de sujeción:",
        "opciones": {
          "A": "La parte inferior se sujeta a la cama y la superior se coloca alrededor de la cintura del paciente.",
          "B": "La parte abdominal se sujeta a la cama y la inferior se coloca alrededor de los miembros inferiores del paciente.",
          "C": "Facilita la inmovilización total del paciente encamado.",
          "D": "a) y c) son correctas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 164,
        "idpregunta": 164,
        "pregunta": "164.- En las correas de peto, el kit número 1, para el corsé abdominal, contaremos con:",
        "opciones": {
          "A": "4 botones de cierre magnético.",
          "B": "5 botones de cierre magnético.",
          "C": "3 botones de cierre magnético.",
          "D": "6 botones de cierre magnético."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 165,
        "idpregunta": 165,
        "pregunta": "165.- ¿Qué se debe comprobar siempre después de movilizar a un paciente?",
        "opciones": {
          "A": "Que la cama esté en posición Trendelemburg.",
          "B": "Que el paciente tenga el suero lleno.",
          "C": "La seguridad del paciente.",
          "D": "Que el paciente esté en decúbito supino."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 166,
        "idpregunta": 166,
        "pregunta": "166.- ¿Qué aparato se utiliza para realizar exploraciones mediante ondas de ultrasonido?",
        "opciones": {
          "A": "Ecocardiógrafo.",
          "B": "Ecógrafo.",
          "C": "Endoscopio.",
          "D": "Monitor."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 167,
        "idpregunta": 167,
        "pregunta": "167.- ¿Qué material se utiliza para inmovilizar completamente la columna en pacientes politraumatizados?",
        "opciones": {
          "A": "Tabla para paradas.",
          "B": "Férula de Brown.",
          "C": "Tablero de inmovilización espinal.",
          "D": "Escopia."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 168,
        "idpregunta": 168,
        "pregunta": "168.- Según en la Carpeta Roja, ¿Cuál de las siguientes afirmaciones sobre la Hoja de Consulta en Prevención es INCORRECTA?",
        "opciones": {
          "A": "El trabajador la entrega a su responsable inmediato.",
          "B": "Sirve para sugerencias de mejora.",
          "C": "Solo puede usarse para quejas formales.",
          "D": "Puede emplearse para consultar sobre vigilancia de la salud."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 169,
        "idpregunta": 169,
        "pregunta": "169.- ¿Cuál de las siguientes afirmaciones sobre riesgos ergonómicos es INCORRECTA?",
        "opciones": {
          "A": "Mantener la misma postura durante un tiempo ayuda a evitar fatiga.",
          "B": "Acompañar el movimiento del tronco con los pies.",
          "C": "Flexionar las piernas y mantener la espalda recta al movilizar pacientes.",
          "D": "Realizar cambios frecuentes de postura."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 170,
        "idpregunta": 170,
        "pregunta": "170.- ¿Qué acción forma parte del procedimiento correcto al usar un extintor según el manual?",
        "opciones": {
          "A": "Apuntar directamente al centro de las llamas.",
          "B": "Realizar movimientos en abanico cubriendo la base del fuego.",
          "C": "Mantener el extintor inclinado para aumentar el alcance.",
          "D": "Probar el extintor apuntando hacia arriba antes de usarlo."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 171,
        "idpregunta": 171,
        "pregunta": "171.- Según el manual de Riesgos Generales de Osakidetza, ¿cuál de las siguientes es una norma general en el manejo de productos químicos en un centro sanitario?",
        "opciones": {
          "A": "Se permite el consumo de bebidas en las áreas de manipulación siempre que los envases estén cerrados.",
          "B": "Se pueden oler los productos químicos para identificarlos en caso de que la etiqueta no sea legible.",
          "C": "En caso de trasvase a otro recipiente, identifique el contenido y etiquete el nuevo envase.",
          "D": "Mantenga abiertos los recipientes con productos químicos, en especial los que contengan productos volátiles (glutaraldehído) para evitar la acumulación de gases."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 172,
        "idpregunta": 172,
        "pregunta": "172.- Indica la respuesta INCORRECTA en relación al uso del extintor:",
        "opciones": {
          "A": "Apunte hacia la base del fuego.",
          "B": "Coloque el extintor en posición vertical.",
          "C": "Coloque el extintor en posición horizontal.",
          "D": "Rompa el precinto y retire el seguro."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 173,
        "idpregunta": 173,
        "pregunta": "173.- La temperatura a la cual una sustancia comienza a desprender vapores en cantidad suficiente para mantener la combustión, se denomina:",
        "opciones": {
          "A": "Proceso de combustión.",
          "B": "Temperatura de autoinflamación.",
          "C": "Punto de inflamación.",
          "D": "Calor."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 174,
        "idpregunta": 174,
        "pregunta": "174.- ¿Qué medida se establece para asegurar el seguimiento de la jornada en los centros de Osakidetza?",
        "opciones": {
          "A": "Existirá un sistema de control horario, de obligado cumplimiento en todas las organizaciones de servicios dependiente del Ente público.",
          "B": "Los Jefes de Unidad supervisarán a diario quién entra y quién sale.",
          "C": "Se implementará un registro de firmas manual únicamente en aquellos centros que no dispongan de sistemas informáticos de fichaje.",
          "D": "Todas las respuestas son correctas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 175,
        "idpregunta": 175,
        "pregunta": "175.- A la hemorragia procedente del útero, que no está relacionada con la regla se le denomina:",
        "opciones": {
          "A": "Metrorragia.",
          "B": "Melena.",
          "C": "Aftas.",
          "D": "Amniocentesis."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 176,
        "idpregunta": 176,
        "pregunta": "176.- ¿Cómo se denomina el aparato que se utiliza para realizar ecografías cardíacas?",
        "opciones": {
          "A": "Ecocardiógrafo.",
          "B": "Escopia.",
          "C": "Electrocardiógrafo.",
          "D": "Hemofiltro."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 177,
        "idpregunta": 177,
        "pregunta": "177.- El término esplenomegalia hace referencia a:",
        "opciones": {
          "A": "Estrechamiento de un orificio.",
          "B": "Hinchazón por acúmulo anormal de líquido.",
          "C": "Inflamación del bazo.",
          "D": "Enfermedad de carácter agudo consistente en una inflamación del hígado."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 178,
        "idpregunta": 178,
        "pregunta": "178.- A la inflamación de un ganglio linfático se le denomina:",
        "opciones": {
          "A": "Adenoma.",
          "B": "Aféresis.",
          "C": "Adenitis.",
          "D": "Absceso."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 179,
        "idpregunta": 179,
        "pregunta": "179.- A la membrana interna que contiene el líquido amniótico, se le denomina:",
        "opciones": {
          "A": "Amniocentesis.",
          "B": "Amnios.",
          "C": "Anamnesis.",
          "D": "Anemia."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 180,
        "idpregunta": 180,
        "pregunta": "180.- A la definición referente a las vida le corresponde el prefijo:",
        "opciones": {
          "A": "Bio- .",
          "B": "Hidro-.",
          "C": "Inter-.",
          "D": "Logía-."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 181,
        "idpregunta": 181,
        "pregunta": "181.- En el decreto 255/1998, ¿quién es competente para fijar o trasladar el domicilio del Ente Público Osakidetza-Servicio vasco de salud?",
        "opciones": {
          "A": "El Gobierno Vasco mediante Decreto.",
          "B": "El Departamento de Sanidad de la Comunidad Autónoma.",
          "C": "El Consejo de Administración del Ente Público.",
          "D": "El Director de Régimen Económico y Financiero del Ente Público."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 182,
        "idpregunta": 182,
        "pregunta": "182.- De acuerdo con la clasificación de los fuegos, ¿cómo se catalogaría un incendio que involucra exclusivamente a líquidos?",
        "opciones": {
          "A": "Fuegos clase A.",
          "B": "Fuegos clase B.",
          "C": "Fuegos clase C.",
          "D": "Fuegos clase D."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 183,
        "idpregunta": 183,
        "pregunta": "183.- Si se produce un fuego en una zona con brasas, ¿cuál de los siguientes agentes extintores NO debe utilizarse según las propiedades descritas en el manual?",
        "opciones": {
          "A": "Polvo polivalente.",
          "B": "Agua.",
          "C": "Dióxido de carbono.",
          "D": "Todas las respuestas son correctas."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 184,
        "idpregunta": 184,
        "pregunta": "184.- Indica la respuesta correcta en relación a la radiación ionizante:",
        "opciones": {
          "A": "El acceso a las áreas en las cuales se utiliza radiación ionizante está restringido a personas autorizadas.",
          "B": "La radiación ionizante pueden ser diversas: infrarroja y láser, Electromagnética...",
          "C": "Los efectos para la salud evidenciados son escasos (calor local, enrojecimiento de piel).",
          "D": "Todas las respuestas son correctas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 185,
        "idpregunta": 185,
        "pregunta": "185.- En el uso de pantallas de Visualización de datos (PVD’s), ¿cómo se debe colocar la pantalla respecto a los ojos?",
        "opciones": {
          "A": "De manera que los ojos se sitúen a la altura de los bordes superiores de esta.",
          "B": "De manera que los ojos se sitúen a la altura de los bordes inferiores de esta.",
          "C": "Lo más alta posible para estirar el cuello.",
          "D": "Por debajo del nivel de la mesa."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 186,
        "idpregunta": 186,
        "pregunta": "186.- En caso de sufrir un accidente laboral que precise asistencia médica inmediata en horario de mañana (8:00 a 15:00), ¿a dónde debe acudir el trabajador prioritariamente?",
        "opciones": {
          "A": "A su médico de cabecera en el centro de salud.",
          "B": "A la Unidad Básica de Prevención (UPB) de su organización.",
          "C": "Directamente a las oficinas de Mutualia.",
          "D": "Todas las respuestas son incorrectas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 187,
        "idpregunta": 187,
        "pregunta": "187.- Para que un accidente de trabajo sea considerado in itinere, es necesario que:",
        "opciones": {
          "A": "El medio de locomoción sea el habitual.",
          "B": "El trayecto no se haya modificado o interrumpido voluntariamente.",
          "C": "El margen de tiempo está dentro de los límites normales.",
          "D": "Todas las respuestas son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 188,
        "idpregunta": 188,
        "pregunta": "188.- Indica la respuesta correcta en relación al tubo tubo de Guedel:",
        "opciones": {
          "A": "Cánula que se utiliza para impedir que la lengua caiga hacia atrás, bloqueando la vía respiratoria",
          "B": "Tubo flexible, que puede introducirse en un vaso o una cavidad del cuerpo, para introducir o extraer líquidos.",
          "C": "Se le denomina también cánula de Mayo.",
          "D": "Las respuestas a y c son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 189,
        "idpregunta": 189,
        "pregunta": "189.- El término hematuria hace referencia a:",
        "opciones": {
          "A": "Vómito en sangre procedente de estómago-intestino.",
          "B": "Coloración amarillenta de la piel.",
          "C": "Presencia de sangre en orina.",
          "D": "Expulsión de sangre procedente de vías respiratorias."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 190,
        "idpregunta": 190,
        "pregunta": "190.- El término colelitiasis se define como:",
        "opciones": {
          "A": "Inflamación de la vejiga de la orina causada por infección bacteriana.",
          "B": "Estudio y visualización de las vías biliares, a través de Rx, y la inyección de un preparado radiopaco.",
          "C": "Presencia de piedras en vesícula biliar.",
          "D": "Todas las respuestas son incorrectas."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 191,
        "idpregunta": 191,
        "pregunta": "191.- El término aneurisma hace referencia a:",
        "opciones": {
          "A": "Dilatación de la pared debilitada de un vaso sanguíneo.",
          "B": "Estudio con técnicas radiológicas de las estructuras vasculares. Se utiliza con fines diagnósticos y terapéuticos.",
          "C": "Coloración azul violeta de la piel y mucosas debida a la falta de oxígeno en la sangre.",
          "D": "Todas las respuestas son incorrectas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 192,
        "idpregunta": 192,
        "pregunta": "192.- La especialidad médica encargada del estudio de la función normal, la anatomía y los desórdenes producidos por alteraciones de las glándulas endocrinas es:",
        "opciones": {
          "A": "Dermatología.",
          "B": "Hematología.",
          "C": "Endocrinología.",
          "D": "Nefrología."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 193,
        "idpregunta": 193,
        "pregunta": "193.- A la definición referente al dolor, le corresponde el sufijo:",
        "opciones": {
          "A": "-grafía.",
          "B": "-algia.",
          "C": "-itis.",
          "D": "-citosis."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 194,
        "idpregunta": 194,
        "pregunta": "194.- A la definición referente a las venas le corresponde el prefijo:",
        "opciones": {
          "A": "Hemi-.",
          "B": "Endo-.",
          "C": "Hidro-.",
          "D": "Flebo-."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 195,
        "idpregunta": 195,
        "pregunta": "195.- El término histerectomía hace referencia a:",
        "opciones": {
          "A": "Extirpación del útero.",
          "B": "Hemorragia del útero.",
          "C": "Caída del útero.",
          "D": "Todas las respuestas son correctas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 196,
        "idpregunta": 196,
        "pregunta": "196.- Indica la respuesta correcta en relación a la licencia por traslado o mudanza del domicilio habitual:",
        "opciones": {
          "A": "Tendrá derecho a una licencia de un día de duración dentro del plazo de un mes natural a contar desde la fecha de empadronamiento en el nuevo domicilio.",
          "B": "Tendrá derecho a una licencia de un día de duración dentro del plazo de un año natural a contar desde la fecha de empadronamiento en el nuevo domicilio.",
          "C": "Tendrá derecho a una licencia de dos días naturales de duración dentro del plazo de un mes natural a contar desde la fecha de empadronamiento en el nuevo domicilio.",
          "D": "Tendrá derecho a una licencia de dos días naturales de duración dentro del plazo de un año natural a contar desde la fecha de empadronamiento en el nuevo domicilio."
        },
        "correcta": "C",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "Tendrá derecho a una licencia de un día de duración dentro del plazo de un <span class=\"diff-highlight\">mes</span> natural a contar desde la fecha de empadronamiento en el nuevo domicilio.",
          "B": "Tendrá derecho a una licencia de un día de duración dentro del plazo de un <span class=\"diff-highlight\">año</span> natural a contar desde la fecha de empadronamiento en el nuevo domicilio.",
          "C": "Tendrá derecho a una licencia de dos días naturales de duración dentro del plazo de un <span class=\"diff-highlight\">mes</span> natural a contar desde la fecha de empadronamiento en el nuevo domicilio.",
          "D": "Tendrá derecho a una licencia de dos días naturales de duración dentro del plazo de un <span class=\"diff-highlight\">año</span> natural a contar desde la fecha de empadronamiento en el nuevo domicilio."
        }
      },
      {
        "num": 197,
        "idpregunta": 197,
        "pregunta": "197.- Indica la respuesta correcta en relación a la licencia para atender el cuidado de un familiar de primer grado por razones de enfermedad muy grave:",
        "opciones": {
          "A": "El trabajador tendrá derecho a solicitar una reducción de hasta el cincuenta por ciento de la jornada laboral con carácter retribuido y por el plazo máximo de 2 meses.",
          "B": "El trabajador tendrá derecho a solicitar una reducción de hasta el cincuenta por ciento de la jornada laboral con carácter retribuido y por el plazo máximo de 1 mes.",
          "C": "El trabajador tendrá derecho a solicitar una reducción de hasta el cien por ciento de la jornada laboral con carácter retribuido y por el plazo máximo de 1 mes.",
          "D": "Todas las respuestas son incorrectas."
        },
        "correcta": "B",
        "metodo": "fallo->azul",
        "diffs": {
          "A": "El trabajador tendrá derecho a solicitar una reducción de hasta el cincuenta por ciento de la jornada laboral con carácter retribuido y por el plazo máximo de <span class=\"diff-highlight\">2</span> <span class=\"diff-highlight\">meses</span>.",
          "B": "El trabajador tendrá derecho a solicitar una reducción de hasta el cincuenta por ciento de la jornada laboral con carácter retribuido y por el plazo máximo de <span class=\"diff-highlight\">1</span> <span class=\"diff-highlight\">mes</span>.",
          "C": "El trabajador tendrá derecho a solicitar una reducción de hasta el <span class=\"diff-highlight\">cien</span> por ciento de la jornada laboral con carácter retribuido y por el plazo máximo de 1 mes.",
          "D": "Todas las respuestas son incorrectas."
        }
      },
      {
        "num": 198,
        "idpregunta": 198,
        "pregunta": "198.- Según el Acuerdo Regulador de Osakidetza, ¿cuál es la duración de la licencia retribuida por matrimonio propio?",
        "opciones": {
          "A": "El personal tiene derecho a una licencia de 20 días naturales de duración que podrá disfrutar con anterioridad o posterioridad a su celebración, incluyendo dicha fecha en ese periodo.",
          "B": "El personal tiene derecho a una licencia de 25 días naturales de duración que podrá disfrutar con anterioridad o posterioridad a su celebración, incluyendo dicha fecha en ese periodo.",
          "C": "El personal tiene derecho a una licencia de 20 días naturales de duración que podrá disfrutar únicamente con posterioridad a su celebración.",
          "D": "El personal tiene derecho a una licencia de 25 días naturales de duración que podrá disfrutar únicamente con posterioridad a su celebración."
        },
        "correcta": "A",
        "metodo": "acierto",
        "diffs": {
          "A": "El personal tiene derecho a una licencia de <span class=\"diff-highlight\">20</span> días naturales de duración que podrá disfrutar con anterioridad o posterioridad a su celebración, incluyendo dicha fecha en ese periodo.",
          "B": "El personal tiene derecho a una licencia de <span class=\"diff-highlight\">25</span> días naturales de duración que podrá disfrutar con anterioridad o posterioridad a su celebración, incluyendo dicha fecha en ese periodo.",
          "C": "El personal tiene derecho a una licencia de <span class=\"diff-highlight\">20</span> días naturales de duración que podrá disfrutar únicamente con posterioridad a su celebración.",
          "D": "El personal tiene derecho a una licencia de <span class=\"diff-highlight\">25</span> días naturales de duración que podrá disfrutar únicamente con posterioridad a su celebración."
        }
      },
      {
        "num": 199,
        "idpregunta": 199,
        "pregunta": "199.- A el tablero destinado a pacientes que precisen de una inmovilización de urgencia, se le denomina:",
        "opciones": {
          "A": "Tablero de inmovilización espinal.",
          "B": "Tablero de paradas.",
          "C": "Transpaleta eléctrica.",
          "D": "Camilla de exploración."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 200,
        "idpregunta": 200,
        "pregunta": "200.- El decreto 255/1997 en su artículo 4 (personalidad jurídica y capacidad de obrar) indica que el Ente Público Osakidetza-Servicio Vasco de Salud:.",
        "opciones": {
          "A": "Actúa con personalidad jurídica privada y capacidad limitada al ámbito sanitario.",
          "B": "Dispone de personalidad jurídica pública diferenciada y plena capacidad de obrar para el cumplimiento de su objeto y fines.",
          "C": "Carece de personalidad jurídica propia y depende orgánicamente del Departamento de Sanidad.",
          "D": "Todas son incorrectas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      }
    ]
  },
  "operario": {
    "label": "Operario",
    "meta": "200 preguntas",
    "questions": [
      {
        "num": 1,
        "idpregunta": 1,
        "pregunta": "1.- La cocina caliente es:",
        "opciones": {
          "A": "Es la encargada de conservar en buenas condiciones higiénicas los géneros de uso no inmediato.",
          "B": "Es el lugar donde se limpia y conserva la batería de cocina.",
          "C": "Es el lugar donde racionar ciertos platos, terminar algunos platos cocinados, confeccionar totalmente platos y guarniciones y salsas frías.",
          "D": "Es la encargada de transformar, por medio de calor, los alimentos crudos."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 2,
        "idpregunta": 2,
        "pregunta": "2.- En cocina, tendrá suelo inclinado con vertiente central a un sumidero:",
        "opciones": {
          "A": "El economato.",
          "B": "La antecámara.",
          "C": "La cámara de refrigeración.",
          "D": "El fregadero."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 3,
        "idpregunta": 3,
        "pregunta": "3.- Lugar donde se almacenan los alimentos no perecederos:",
        "opciones": {
          "A": "Almacén.",
          "B": "Cuarto de verduras y frutas.",
          "C": "Economato.",
          "D": "Ninguna de las anteriores."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 4,
        "idpregunta": 4,
        "pregunta": "4.- La temperatura de la cámara de congelación será del orden de:",
        "opciones": {
          "A": "0 grados centígrados.",
          "B": "18 grados centígrados bajo cero.",
          "C": "20 grados centígrados bajo cero.",
          "D": "12 grados centígrados bajo cero."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 5,
        "idpregunta": 5,
        "pregunta": "5.- La temperatura de la antecámara será del orden de:",
        "opciones": {
          "A": "8 a 12 grados centígrados.",
          "B": "10 a 12 grados centígrados.",
          "C": "3 a 4 grados centígrados.",
          "D": "8 a 10 grados centígrados."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 6,
        "idpregunta": 6,
        "pregunta": "6.- El lugar donde se limpia y conserva la batería de cocina, que posee tres pilas, grandes, profundas y fuertes, es:",
        "opciones": {
          "A": "El cuarto de verduras y frutas.",
          "B": "El economato.",
          "C": "La plonge.",
          "D": "La lavandería."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 7,
        "idpregunta": 7,
        "pregunta": "7.- Recibe el nombre de 'placares”:",
        "opciones": {
          "A": "El lugar acondicionado para que la brigada de cocina se cambie y deposite sus ropas.",
          "B": "El lugar donde se limpia la loza, el cristal y la plata del establecimiento.",
          "C": "El espacio donde se limpian las planchas y rustideras de la batería de cocina.",
          "D": "El lugar donde se instala el friegaplatos y el lavavajillas mecánico."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 8,
        "idpregunta": 8,
        "pregunta": "8.- El departamento que debe estar dotado de cafetera, baño maría de leche, tostadores de pan, frigorífico para zumos, mantequilla, leche, etc., pequeño fogón con plancha, pila y armario, se conoce como:",
        "opciones": {
          "A": "Cocina de familia.",
          "B": "Cocina de meriendas.",
          "C": "Cafetería del hotel.",
          "D": "Ambigú."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 9,
        "idpregunta": 9,
        "pregunta": "9.- Se emplea para la conservación de alimentos crudos, y también de géneros cocinados. Su temperatura será de 1 a 2 grados centígrados aproximadamente.",
        "opciones": {
          "A": "Antecámara.",
          "B": "Cámara de congelación.",
          "C": "Abatidor de temperatura.",
          "D": "Cámara de refrigeración."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 10,
        "idpregunta": 10,
        "pregunta": "10.- Las grandes cámaras frigoríficas más completas, comprenden:",
        "opciones": {
          "A": "Antecámara, cámara de refrigeración y cámara de congelación.",
          "B": "Antecámara, cámara de refrigeración y abatidor de temperatura.",
          "C": "Sorbetera, cámara de refrigeración y cámara de congelación.",
          "D": "Ninguna de las anteriores."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 11,
        "idpregunta": 11,
        "pregunta": "11.- Los fogones según sus características de acoplamiento podrán ser:",
        "opciones": {
          "A": "Murales, centrales, transportables, integrales o acoplables.",
          "B": "Murales, centrales, plegables, integrales o por elementos.",
          "C": "Transportables, centrales, plegables, integrales o acoplables.",
          "D": "Murales, centrales, transportables, integrales o plegables."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 12,
        "idpregunta": 12,
        "pregunta": "12.- Señala la respuesta INCORRECTA, la cocina de familia.",
        "opciones": {
          "A": "Estará dedicada exclusivamente a confeccionar la comida del personal.",
          "B": "Tiene como objetivo evitar la interferencia con la cocina de clientes.",
          "C": "Deberá estar situada en un lugar que domine la totalidad de la cocina y para una mejor visión formada por cristaleras.",
          "D": "Será, en sí, una cocina completa."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 13,
        "idpregunta": 13,
        "pregunta": "13.- Señala la respuesta CORRECTA:",
        "opciones": {
          "A": "El gas butano es más puro y gasifica mejor que el gas propano.",
          "B": "El gas propano es más puro y gasifica mejor que el gas butano.",
          "C": "El gas butano y propano son igual de puros.",
          "D": "El gas propano y butano gasifican igual."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 14,
        "idpregunta": 14,
        "pregunta": "14.- En el gas propano, la mala combustión se identifica:",
        "opciones": {
          "A": "Por convertir la llama en amarillenta, en vez de rojiza.",
          "B": "Por convertir la llama en rojiza, en vez de azulada.",
          "C": "Por convertir la llama en azulada, en vez de rojiza.",
          "D": "Por convertir la llama en rojiza, en vez de amarillenta."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 15,
        "idpregunta": 15,
        "pregunta": "15.- ¿Cuál es la situación en el local de cocina de la salamandra?",
        "opciones": {
          "A": "Partida del asador.",
          "B": "Cuarto frío.",
          "C": "Partida de carnes.",
          "D": "Partida del entradero o pescadero."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 16,
        "idpregunta": 16,
        "pregunta": "16.- El tamaño de la cubeta de las freidoras:",
        "opciones": {
          "A": "Es de 4 hasta 10 litros.",
          "B": "Es de 4 hasta 50 litros.",
          "C": "Es de 4 hasta 100 litros.",
          "D": "Es de 4 hasta 200 litros."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 17,
        "idpregunta": 17,
        "pregunta": "17.- El tipo de horno más usado es:",
        "opciones": {
          "A": "El eléctrico.",
          "B": "El de gas propano.",
          "C": "El de leña.",
          "D": "El de gas-oil."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 18,
        "idpregunta": 18,
        "pregunta": "18.- ¿Cuál de los siguientes debe situarse como medianera entre la cocina y el paso al comedor?",
        "opciones": {
          "A": "Placar.",
          "B": "Prusiana.",
          "C": "Mesa caliente.",
          "D": "Plonge."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 19,
        "idpregunta": 19,
        "pregunta": "19.- ¿Cuál es el generador de calor que se emplea para freír a la llamada 'gran fritura” alimentos de distinta cualidad de sabor y clase, en gran cantidad, con poco ennegrecimiento de la grasa y perfecta regulación de calor?",
        "opciones": {
          "A": "Parrilla.",
          "B": "Plancha parrilla.",
          "C": "Freidora.",
          "D": "Sartén abatible."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 20,
        "idpregunta": 20,
        "pregunta": "20.- Los tipos de marmitas y olla a presión según el elemento de calentamiento empleado son:",
        "opciones": {
          "A": "Vapor, gas propano y electricidad.",
          "B": "Electricidad únicamente.",
          "C": "Vapor, gas y vapor, gas directo y electricidad.",
          "D": "Vapor con gas, gas azul y electricidad."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 21,
        "idpregunta": 21,
        "pregunta": "21.- Los recipientes generadores de calor, con posibilidad de vaciado rápido por basculación, adecuados para elaborar salteados, estofados, arroces, fritos con poco aceite, etc., con placa cerrada o cubierta, son:",
        "opciones": {
          "A": "Baño María.",
          "B": "Freidora a presión.",
          "C": "Sartén abatible.",
          "D": "Sartén volteable."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 22,
        "idpregunta": 22,
        "pregunta": "22.- Utensilio contenedor de agua caliente dentro del cual se sitúan los recipientes contenedores de alimentos para conservarlos calientes por un espacio de tiempo determinado.",
        "opciones": {
          "A": "Baño caliente.",
          "B": "Roner.",
          "C": "Sous vide.",
          "D": "Ninguna de las anteriores."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 23,
        "idpregunta": 23,
        "pregunta": "23.- La misión de la cámara de congelación es conservar géneros:",
        "opciones": {
          "A": "Hasta 3 meses.",
          "B": "Más de 6 meses.",
          "C": "Hasta 6 meses.",
          "D": "Hasta 12 meses."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 24,
        "idpregunta": 24,
        "pregunta": "24.- Los fogones centrales (señala la opción INCORRECTA):",
        "opciones": {
          "A": "Están construidos para instalar retirados de las paredes.",
          "B": "Se requieren conductos de instalación aérea o por el suelo.",
          "C": "Son los usados en los grandes establecimientos por permitir el agrupamiento de las partidas.",
          "D": "Tienen sus hornos y estufas en un solo frente, que es el de titulación de trabajo."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 25,
        "idpregunta": 25,
        "pregunta": "25.- Los tipos de 'baño maría' (señala la opción INCORRECTA):",
        "opciones": {
          "A": "Placa de bordes altos con agua.",
          "B": "Fijo.",
          "C": "Mural.",
          "D": "Transportable."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 26,
        "idpregunta": 26,
        "pregunta": "26.- La ventilación de la cocina será por medio de:",
        "opciones": {
          "A": "Ventanales de salida a nivel bajo.",
          "B": "Ventanales de entrada a nivel más alto.",
          "C": "Ventanales de salida a nivel alto.",
          "D": "Ventanales de entrada y salida a nivel medio."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 27,
        "idpregunta": 27,
        "pregunta": "27.- La ubicación de la cocina:",
        "opciones": {
          "A": "Estará situada en la misma planta que los comedores principales.",
          "B": "Estará alejada de terrazas y comedores para evitar olores.",
          "C": "Para evitar que la comida se enfríe, se emplearán mantas isotérmicas.",
          "D": "Deberá estar alejada de la zona de llegada de mercancías para evitar contaminaciones."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 28,
        "idpregunta": 28,
        "pregunta": "28.- Los materiales adecuados para la construcción de las cocinas como revestimiento de paredes, suelos y techos:",
        "opciones": {
          "A": "En los suelos ha de buscarse material que permita el fácil deslizamiento.",
          "B": "Para el techo se emplea el encalado o revestimiento de yeso o pintura gris.",
          "C": "En las paredes han de emplearse materiales de fácil limpieza e inalterables al calor.",
          "D": "Ninguna de las respuestas anteriores es correcta."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 29,
        "idpregunta": 29,
        "pregunta": "29.- El despacho del jefe:",
        "opciones": {
          "A": "Debe estar alejado de la cocina para que no haya ruidos.",
          "B": "Dispondrá de teléfono, control de micrófonos y mesa de despacho.",
          "C": "Es imprescindible en todos los establecimientos, sea cual sea su tamaño.",
          "D": "Es el lugar donde se controlan el peso, el rendimiento y la calidad de los artículos alimenticios."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 30,
        "idpregunta": 30,
        "pregunta": "30.- Los gases más usados en la generación de frío en principio fueron:",
        "opciones": {
          "A": "Cloruro de metilo y gas carbónico.",
          "B": "Gas cianhídrico y el amoníaco.",
          "C": "El sulfuro y el amoníaco.",
          "D": "Ninguna de las anteriores."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 31,
        "idpregunta": 31,
        "pregunta": "31.- Los materiales que se utilizan principalmente para la fabricación del colador chino, son:",
        "opciones": {
          "A": "Hierro estañado o aluminio.",
          "B": "Hierro estañado o acero inoxidable.",
          "C": "Cobre o acero inoxidable.",
          "D": "Aluminio anodizado o acero inoxidable."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 32,
        "idpregunta": 32,
        "pregunta": "32.- El material de fabricación del mortero o almirez será:",
        "opciones": {
          "A": "Madera.",
          "B": "Acero inoxidable.",
          "C": "Poliestireno.",
          "D": "Mármol."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 33,
        "idpregunta": 33,
        "pregunta": "33.- Para toda clase de fritos y géneros a la 'gran fritura” como croquetas, gambas orly, soldaditos de pavía, etc. se utiliza:",
        "opciones": {
          "A": "La salamandra.",
          "B": "La carmela.",
          "C": "La sauté.",
          "D": "El sartén escurridor o fritura."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 34,
        "idpregunta": 34,
        "pregunta": "34.- Se emplean para medir líquidos:",
        "opciones": {
          "A": "Las medidas de capacidad.",
          "B": "Caudalímetro.",
          "C": "Vaso medidor.",
          "D": "Balanza."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 35,
        "idpregunta": 35,
        "pregunta": "35.- Se emplea para majar y machacar elementos de condimentación:",
        "opciones": {
          "A": "Colador cónico perforado o 'chino”.",
          "B": "Batidora de mano.",
          "C": "Pasapurés de mano.",
          "D": "Mortero o almirez."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 36,
        "idpregunta": 36,
        "pregunta": "36.- El utensilio, de hierro estañado, utilizado para tamizar purés, cremas y salsas, es:",
        "opciones": {
          "A": "Cedazo.",
          "B": "Pasapurés.",
          "C": "Tamiz.",
          "D": "Colador."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 37,
        "idpregunta": 37,
        "pregunta": "37.- Son tipos de cuchillos:",
        "opciones": {
          "A": "De golpe, de medio golpe, cebollero y puntilla.",
          "B": "De golpe, cebollero, chuletero y puntilla.",
          "C": "De golpe, de medio golpe, descorazonador y deshuesador.",
          "D": "Cebollero, tronchante, puntilla y jamonero."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 38,
        "idpregunta": 38,
        "pregunta": "38.- Cuchillo que se emplea para cortar hortalizas, pescados, carnes, etc. de dimensiones entre 37,5 y 42 cm. Se trata de:",
        "opciones": {
          "A": "Cuchillo de medio golpe.",
          "B": "Puntilla.",
          "C": "Cuchillo cebollero.",
          "D": "Cuchillo tranchelar."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 39,
        "idpregunta": 39,
        "pregunta": "39.- Se emplea para cortar grandes piezas con huesos muy tiernos, inclusive.",
        "opciones": {
          "A": "Macheta.",
          "B": "Medio golpe.",
          "C": "Cebollero.",
          "D": "Ninguna de las anteriores."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 40,
        "idpregunta": 40,
        "pregunta": "40.- Se emplea para pasar y colar caldos y cremas, y también salsas.",
        "opciones": {
          "A": "Colador 'chino”.",
          "B": "Pasapuré.",
          "C": "Tamizador.",
          "D": "Estameña."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 41,
        "idpregunta": 41,
        "pregunta": "41.- En cocina, para tornear utilizaremos preferentemente:",
        "opciones": {
          "A": "Un cuchillo de medio golpe.",
          "B": "Un cuchillo cebollero.",
          "C": "Una puntilla.",
          "D": "Un trinchante."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 42,
        "idpregunta": 42,
        "pregunta": "42.- Las aplicaciones de la balanza son:",
        "opciones": {
          "A": "Pesar hasta un determinado número de kilos (de 6 a 10).",
          "B": "Pesar hasta un determinado número de kilos (de 1 a 2).",
          "C": "Pesar hasta un determinado número de kilos (de 4 a 12).",
          "D": "Pesar hasta un determinado número de kilos (de 6 a 12)."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 43,
        "idpregunta": 43,
        "pregunta": "43.- Se emplea para cortar huesos:",
        "opciones": {
          "A": "Jamonero.",
          "B": "Trinchante.",
          "C": "Macheta.",
          "D": "Puntilla."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 44,
        "idpregunta": 44,
        "pregunta": "44.- El recipiente que se emplea para la elaboración de caldos y fondos y que, en algunos casos, sirve para hervidos se denomina:",
        "opciones": {
          "A": "Cazo alto.",
          "B": "Sauté.",
          "C": "Rondón.",
          "D": "Marmita con tapa."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 45,
        "idpregunta": 45,
        "pregunta": "45.- Un cuchillo jamonero mide:",
        "opciones": {
          "A": "40 cm.",
          "B": "44 cm.",
          "C": "48 cm.",
          "D": "52 cm."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 46,
        "idpregunta": 46,
        "pregunta": "46.- La capacidad de la marmita con tapa será de:",
        "opciones": {
          "A": "De 15 a 100 litros.",
          "B": "De 12 a 170 litros.",
          "C": "De 10 a 150 litros.",
          "D": "De 20 a 160 litros."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 47,
        "idpregunta": 47,
        "pregunta": "47.- En la cocina caliente, las mesas de trabajo irán paralelas a los fogones, con una separación mínima de:",
        "opciones": {
          "A": "1 m.",
          "B": "1,10 m.",
          "C": "1,20 m.",
          "D": "1,30 m."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 48,
        "idpregunta": 48,
        "pregunta": "48.- ¿De qué material suelen estar fabricadas las medidas de capacidad?",
        "opciones": {
          "A": "De plástico y de acero inoxidable.",
          "B": "De hojalata, acero inoxidable y aluminio.",
          "C": "De plástico, aluminio y acero estañado.",
          "D": "De hojalata, acero inoxidable y plástico."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 49,
        "idpregunta": 49,
        "pregunta": "49.- Se usa para trinchar jamón serrano y otras piezas similares:",
        "opciones": {
          "A": "Trinchante o tranchelar.",
          "B": "Jamonero.",
          "C": "Deshuesador.",
          "D": "Cebollero."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 50,
        "idpregunta": 50,
        "pregunta": "50.- Muebles situados dentro de la cocina caliente o de sus departamentos, empleados en la conservación por refrigeración a corto plazo de géneros de uso inmediato o constante:",
        "opciones": {
          "A": "Antecámara.",
          "B": "Cámaras frigoríficas.",
          "C": "Armarios frigoríficos.",
          "D": "Timbres."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 51,
        "idpregunta": 51,
        "pregunta": "51.- El diámetro del colador chino oscila entre:",
        "opciones": {
          "A": "20-23 cm.",
          "B": "20-25 cm.",
          "C": "18-22 cm.",
          "D": "10-20 cm."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 52,
        "idpregunta": 52,
        "pregunta": "52.- Lugar de almacenaje de artículos poco perecederos, como fiambres, conservas y escabeches:",
        "opciones": {
          "A": "Cámara de refrigeración.",
          "B": "Antecámara.",
          "C": "Cuarto frío.",
          "D": "Armarios frigoríficos."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 53,
        "idpregunta": 53,
        "pregunta": "53.- El material empleado para la fabricación de la sartén es:",
        "opciones": {
          "A": "Hierro fundido.",
          "B": "Hierro negro.",
          "C": "Hierro estañado.",
          "D": "Teflón."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 54,
        "idpregunta": 54,
        "pregunta": "54.- ¿Qué diámetro suele tener el mortero grande?",
        "opciones": {
          "A": "14,5 cm.",
          "B": "26 cm.",
          "C": "30 cm.",
          "D": "25,5 cm."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 55,
        "idpregunta": 55,
        "pregunta": "55.- Se establece para las mesas de trabajo en lo que se refiere a la amplitud, que cada puesto de trabajo necesita:",
        "opciones": {
          "A": "1,20 metros de largo por 0,50 de ancho.",
          "B": "1,20 metros de largo por 0,70 de ancho.",
          "C": "1,30 metros de largo por 0,50 de ancho.",
          "D": "1,30 metros de largo por 0,70 de ancho."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 56,
        "idpregunta": 56,
        "pregunta": "56.- La capacidad de las cámaras de congelación, marcada en litros o metros cúbicos, será:",
        "opciones": {
          "A": "Adecuada a las necesidades de almacenamiento.",
          "B": "La mayor capacidad posible para cubrir imprevistos.",
          "C": "De 50 metros cúbicos.",
          "D": "Es indiferente."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 57,
        "idpregunta": 57,
        "pregunta": "57.- El material empleado para la fabricación del rallador manual es:",
        "opciones": {
          "A": "Acero inoxidable.",
          "B": "Hierro y acero inoxidable.",
          "C": "Hojalata y hierro.",
          "D": "Hojalata."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 58,
        "idpregunta": 58,
        "pregunta": "58.- La misión del cuarto frío es:",
        "opciones": {
          "A": "Conservar grandes piezas de carne y también géneros cocinados.",
          "B": "Limpiar y racionar los géneros en crudo.",
          "C": "Conservar géneros, por medio de la congelación a largo plazo.",
          "D": "Lugar donde se limpia y conserva la batería de cocina."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 59,
        "idpregunta": 59,
        "pregunta": "59.- Respecto al comedor del personal de cocina (señala la INCORRECTA):",
        "opciones": {
          "A": "Suele estar anexo a la cocina.",
          "B": "Puede tener dos o tres mesas.",
          "C": "Debe ser un lugar agradable por su temperatura, aspecto y sencilla comodidad.",
          "D": "Estará dotada de cafetera y baño maría, pequeño fogón con plancha, pila y armario."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 60,
        "idpregunta": 60,
        "pregunta": "60.- Su misión es conservar, cocinar y distribuir los alimentos.",
        "opciones": {
          "A": "La cocina.",
          "B": "La mesa caliente.",
          "C": "La cocina caliente.",
          "D": "La cafetería del hotel."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 61,
        "idpregunta": 61,
        "pregunta": "61.- Entre las instalaciones necesarias en el cuarto frío están (SEÑALE LA INCORRECTA):",
        "opciones": {
          "A": "Grandes pilas con agua fría.",
          "B": "Tajos o pilones.",
          "C": "Altavoz que permita escuchar las comandas.",
          "D": "Cajones basculantes para legumbres secas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 62,
        "idpregunta": 62,
        "pregunta": "62.- La temperatura de la mesa caliente será:",
        "opciones": {
          "A": "Menor de 100 o C.",
          "B": "Entre 20 y 50 oC.",
          "C": "Entre 70 y 120 oC.",
          "D": "Entre 40 y 60 oC."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 63,
        "idpregunta": 63,
        "pregunta": "63.- La capacidad máxima de una cacerola será de:",
        "opciones": {
          "A": "25 litros.",
          "B": "32 litros.",
          "C": "23 litros.",
          "D": "28 litros"
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 64,
        "idpregunta": 64,
        "pregunta": "64.- Se usa para rallar géneros tales como: quesos duros, nuez moscada, cáscara de limón, etc.",
        "opciones": {
          "A": "Rallador eléctrico.",
          "B": "Rallador microplane.",
          "C": "Rallador manual.",
          "D": "Rallador 'chino”."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 65,
        "idpregunta": 65,
        "pregunta": "65.- Utensilio contenedor de agua caliente dentro del cual se sitúan los recipientes contenedores de alimentos para conservarlos calientes por espacio de un tiempo determinado:",
        "opciones": {
          "A": "Marmita con tapa.",
          "B": "Sartén basculante.",
          "C": "Mesa caliente.",
          "D": "Baño María."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 66,
        "idpregunta": 66,
        "pregunta": "66.- Fuera de la hora del 'servicio” puede usarse como lugar de trabajo y estufa fermentadora.",
        "opciones": {
          "A": "Sartén abatible.",
          "B": "Sartén basculante.",
          "C": "Mesa caliente.",
          "D": "Mesa de trabajo."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 67,
        "idpregunta": 67,
        "pregunta": "67.- Señala el requisito INNECESARIO en un buen programa de limpieza hospitalaria:",
        "opciones": {
          "A": "Buen personal.",
          "B": "Equipo adecuado.",
          "C": "Flexibilidad de horarios.",
          "D": "Procedimientos de limpieza modernos."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 68,
        "idpregunta": 68,
        "pregunta": "68.- Señala la respuesta CORRECTA:",
        "opciones": {
          "A": "Se deben utilizar mopas de algodón de 16 onzas (unos 453 gramos) para las habitaciones con enfermos.",
          "B": "Se deben utilizar mopas de algodón de 24 onzas (unos 680 gramos) en las zonas públicas.",
          "C": "Se deben utilizar mopas de 12 pulgadas (unos 30 cm) para zonas más estrechas.",
          "D": "a) b) y c) son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 69,
        "idpregunta": 69,
        "pregunta": "69.- En la limpieza de ventanas, la segunda pasada debe hacerse:",
        "opciones": {
          "A": "Empezando por la superficie seca, por la esquina derecha de la parte superior de la ventana.",
          "B": "Empezando por la superficie seca, por la esquina izquierda de la parte inferior de la ventana.",
          "C": "Empezando por la superficie seca, por la esquina izquierda de la parte superior de la ventana.",
          "D": "Empezando por la superficie mojada, por la esquina izquierda de la parte superior de la ventana."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 70,
        "idpregunta": 70,
        "pregunta": "70.- En relación con la aplicación y acabado de resina en mesas (muebles):",
        "opciones": {
          "A": "Haga una pasada, o sea, una capa.",
          "B": "Haga dos pasadas, o sea, dos capas.",
          "C": "Haga tres pasadas, o sea, tres capas.",
          "D": "No es recomendable su uso."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 71,
        "idpregunta": 71,
        "pregunta": "71.- El procedimiento de esterilización de las habitaciones hospitalarias conlleva:",
        "opciones": {
          "A": "Esperar 24 horas después del fumigado antes de entrar en la habitación.",
          "B": "Esperar 12 horas después del fumigado antes de entrar en la habitación.",
          "C": "Esperar 1 hora después del fumigado antes de entrar en la habitación.",
          "D": "Esperar 30 minutos después del fumigado antes de entrar en la habitación."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 72,
        "idpregunta": 72,
        "pregunta": "72.- Bacteriostático es:",
        "opciones": {
          "A": "Cualquier agente químico que destruye las bacterias.",
          "B": "Cualquier agente químico que retrasa o inhibe el crecimiento de las bacterias.",
          "C": "Cualquier agente de índole químico.",
          "D": "Ninguna es correcta."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 73,
        "idpregunta": 73,
        "pregunta": "73.- Proceso mediante el cual se destruyen todos los organismos tanto patógenos como no patógenos incluyendo esporas:",
        "opciones": {
          "A": "Desinfección.",
          "B": "Aniquilación.",
          "C": "Esterilización.",
          "D": "Desgerminación."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 74,
        "idpregunta": 74,
        "pregunta": "74.- Señala la CORRECTA:",
        "opciones": {
          "A": "Para poder ocuparse de la limpieza de los quirófanos, es necesario un cierto conocimiento de microbiología y electricidad, así como un considerable dominio de los procedimientos de sanificación.",
          "B": "Para poder ocuparse de la limpieza de los quirófanos, no es necesario un cierto conocimiento de microbiología y electricidad.",
          "C": "Para poder ocuparse de la limpieza de los quirófanos, es necesario un cierto conocimiento de microbiología, electricidad e inmunología.",
          "D": "Ninguna es correcta."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 75,
        "idpregunta": 75,
        "pregunta": "75.- La técnica de limpieza básica empleada actualmente en los quirófanos es:",
        "opciones": {
          "A": "Mopa y doble cubo.",
          "B": "Limpieza con el lavapavimentos.",
          "C": "Limpieza spray.",
          "D": "a) b) y c) son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 76,
        "idpregunta": 76,
        "pregunta": "76.- La limpieza de los pavimentos es una operación muy importante ya que:",
        "opciones": {
          "A": "Elimina grandes concentraciones de polvo e impide la acumulación de materiales no conductores.",
          "B": "Elimina grandes concentraciones de bacterias e impide la acumulación de materiales conductores.",
          "C": "Elimina grandes concentraciones de polvo, impide la acumulación de materiales conductores y evita que el personal resbale.",
          "D": "Elimina grandes concentraciones de bacterias, impide la acumulación de materiales no conductores y evita que el personal resbale."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 77,
        "idpregunta": 77,
        "pregunta": "77.- El recipiente de plástico que contiene una bolsa plástica color gris que sobresale 5 o 10 centímetros del borde del bote y se utiliza para depositar los desechos ordinarios no recuperables es de color:",
        "opciones": {
          "A": "Rojo.",
          "B": "Amarillo.",
          "C": "V erde.",
          "D": "Gris."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 78,
        "idpregunta": 78,
        "pregunta": "78.- El término 'coeficiente del fenol”, aplicado a un producto, es:",
        "opciones": {
          "A": "La medida del poder exterminador de este producto, comparado con el del ácido carbónico puro.",
          "B": "El número que indica si el producto es ácido, alcalino o neutro.",
          "C": "La medida del poder limpiador de este producto, comparado con el del ácido carbónico puro.",
          "D": "Ninguna de las respuestas anteriores es correcta."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 79,
        "idpregunta": 79,
        "pregunta": "79.- El pH de un producto es:",
        "opciones": {
          "A": "Un número que indica el grado de densidad del material.",
          "B": "Un número que indica si el material es ácido, alcalino o neutro.",
          "C": "Un número que indica el grado de humedad del material.",
          "D": "Ninguna de las respuestas anteriores es correcta."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 80,
        "idpregunta": 80,
        "pregunta": "80.- Señala la respuesta INCORRECTA:",
        "opciones": {
          "A": "La función de la limpieza y el mantenimiento no debe interferir con la función principal del cuidado de los enfermos.",
          "B": "El departamento de limpieza y mantenimiento de un hospital es el centro alrededor del cual se desarrollan toda clase de actividades que implican todo un sinfín de responsabilidades.",
          "C": "Es necesario que los alrededores del hospital ofrezcan un aspecto atractivo.",
          "D": "Los procedimientos básicos de limpieza en ningún caso pueden ser modificados."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 81,
        "idpregunta": 81,
        "pregunta": "81.- El objetivo del fregado con mopa y doble cubo es:",
        "opciones": {
          "A": "Conseguir una limpieza más esmerada, más higiénica y de más belleza ambiental.",
          "B": "Dejar en el suelo el detergente germicida el tiempo suficiente para que mate las bacterias.",
          "C": "Eliminar todo el polvo del pavimento.",
          "D": "Quitar toda suciedad del suelo, antes de aplicar el nuevo acabado al suelo."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 82,
        "idpregunta": 82,
        "pregunta": "82.- Señala la respuesta que NO es correcta:",
        "opciones": {
          "A": "En el proceso de esterilización de habitaciones hay que ponerse uniforme apropiado, mascarilla y guantes de goma.",
          "B": "En el proceso de esterilización de habitaciones hay que sellar la habitación.",
          "C": "En el proceso de esterilización de habitaciones hay que airear la habitación.",
          "D": "En el proceso de esterilización de habitaciones hay que fumigar al menos durante 15 minutos."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 83,
        "idpregunta": 83,
        "pregunta": "83.- El objetivo de la limpieza y desinfección de una habitación ocupada aislada es:",
        "opciones": {
          "A": "Ofrecer una habitación limpia al nuevo paciente que debe ocuparla.",
          "B": "Ofrecer una habitación limpia y atractiva al nuevo paciente que debe ocuparla.",
          "C": "Ofrecer una habitación limpia, higiénica y atractiva usando las más modernas técnicas de asepsia.",
          "D": "Ofrecer una habitación atractiva al nuevo paciente que debe ocuparla."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 84,
        "idpregunta": 84,
        "pregunta": "84.- Los antisépticos son:",
        "opciones": {
          "A": "Agentes o sustancias fuertes, por lo general de índole químico, que no entran en contacto con el tejido viviente, sino que se aplican a objetos inanimados, destruyendo los microorganismos patógenos.",
          "B": "Soluciones más débiles porque hay peligro de lesionar tejidos ya que se aplican sobre el cuerpo humano. Con actividad microbiana suficiente para interferir el desarrollo de la infección.",
          "C": "Cualquier agente químico que retrasa o inhibe el crecimiento de bacterias.",
          "D": "Cualquier agente químico que destruye bacterias."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 85,
        "idpregunta": 85,
        "pregunta": "85.- Son agentes o sustancias fuertes, por lo general de índole químico, que no entran en contacto con el tejido viviente, sino que se aplican a objetos inanimados, destruyendo los microorganismos patógenos:",
        "opciones": {
          "A": "Bactericidas.",
          "B": "Antisépticos.",
          "C": "Desinfectantes.",
          "D": "Esterilizantes."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 86,
        "idpregunta": 86,
        "pregunta": "86.- Señala la respuesta que NO es correcta:",
        "opciones": {
          "A": "La limpieza de los pavimentos es una operación muy importante ya que elimina grandes concentraciones de bacterias.",
          "B": "La limpieza de los pavimentos es una operación muy importante ya que impide la acumulación de materiales no conductores.",
          "C": "La limpieza de los pavimentos es una operación muy importante ya que evita que el personal resbale.",
          "D": "Muchos pavimentos de los quirófanos son no conductores para impedir la formación de electricidad estática."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 87,
        "idpregunta": 87,
        "pregunta": "87.- Respecto al manejo de basuras hospitalarias:",
        "opciones": {
          "A": "No deben permanecer recipientes que contengan basuras en áreas de mucha circulación de manera que causen problemas estéticos entre otros.",
          "B": "La separación de la basura debe hacerse en destino.",
          "C": "La basura debe apretarse en las bolsas plásticas con el fin de ocupar menos espacio y evitar accidentes.",
          "D": "La basura debe vaciarse de un recipiente a otro."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 88,
        "idpregunta": 88,
        "pregunta": "88.- Señala la respuesta que NO es correcta. Entre los efectos nocivos que más comúnmente encontramos originados por los deshechos tenemos:",
        "opciones": {
          "A": "Los contaminantes.",
          "B": "Los tóxicos.",
          "C": "Los patógenos.",
          "D": "Los alérgicos."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 89,
        "idpregunta": 89,
        "pregunta": "89.- Señala la respuesta que NO es correcta:",
        "opciones": {
          "A": "La recolección de basura debe efectuarse en horas que no coincidan con las de mayor tránsito (comida, visitas, etc.).",
          "B": "La basura seca es aquella que proviene de la limpieza diaria, y también se incluye a los residuos sólidos que son recuperables para terceros.",
          "C": "La basura húmeda es aquella que proviene del servicio de alimentación, cirugía, etc.",
          "D": "La recolección de basura en cada área del hospital debe tener una frecuencia mínima de una vez cada dos días."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 90,
        "idpregunta": 90,
        "pregunta": "90.- En el procedimiento de quitar el polvo con mopas en zonas públicas, pasillos y vestíbulos, utilizaremos:",
        "opciones": {
          "A": "Mopas de impregnación de 1,20 m.",
          "B": "Mopas de impregnación de 1 m.",
          "C": "Mopas de impregnación de 80 cm.",
          "D": "Mopas de impregnación de 30 cm."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 91,
        "idpregunta": 91,
        "pregunta": "91.- En el procedimiento de quitar el polvo con mopas en habitaciones con pacientes y áreas congestionadas, remplazaremos el cabezal de la mopa:",
        "opciones": {
          "A": "Máximo tres veces al día.",
          "B": "Al cambiar de estancia.",
          "C": "Cuando la suciedad ya no pueda ser quitada o vea que está demasiado sucia.",
          "D": "a) b) y c) son correctas."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 92,
        "idpregunta": 92,
        "pregunta": "92.- En el procedimiento de 'Aplicación del acabado de los suelos”:",
        "opciones": {
          "A": "Deje que se seque la primera capa durante unos 5 minutos.",
          "B": "Deje que se seque la primera capa durante unos 20 minutos.",
          "C": "Deje que se seque la primera capa durante unos 60 minutos.",
          "D": "Deje que se seque la primera capa durante al menos 24 horas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 93,
        "idpregunta": 93,
        "pregunta": "93.- En la limpieza de una habitación que está desocupada:",
        "opciones": {
          "A": "Empiece a fregar partiendo de la puerta y siga trabajando a lo largo de la habitación.",
          "B": "Inspeccione y quite las telarañas.",
          "C": "Se debe fregar la habitación y el cuarto de baño todos los días, aunque siga desocupada.",
          "D": "Ninguna es correcta."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 94,
        "idpregunta": 94,
        "pregunta": "94.- La limpieza y desinfección recurrente en áreas críticas se hace:",
        "opciones": {
          "A": "Diariamente y se repite 2 o más veces al día según las condiciones de cada área.",
          "B": "Periódicamente cada 2 días.",
          "C": "Periódicamente cada 7 días.",
          "D": "Ninguna es correcta."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 95,
        "idpregunta": 95,
        "pregunta": "95.- Señala la respuesta que NO es correcta:",
        "opciones": {
          "A": "La limpieza diaria de la sala de reanimación incluirá quitar el polvo de los muebles con un detergente germicida.",
          "B": "La limpieza diaria de la sala de reanimación incluirá limpiar en seco con una mopa todo el pavimento.",
          "C": "Una limpieza completa de la sala de reanimación debería realizarse, al menos, mensualmente.",
          "D": "La limpieza completa de la sala de reanimación incluye el lavado de las paredes y los puntos de luz."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 96,
        "idpregunta": 96,
        "pregunta": "96.- Para depositar los residuos sólidos patógenos y residuos sólidos tóxicos utilizaremos:",
        "opciones": {
          "A": "Bolsa plástica color negro.",
          "B": "Recipiente color rojo.",
          "C": "Recipiente plástico color verde.",
          "D": "Recipiente color naranja."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 97,
        "idpregunta": 97,
        "pregunta": "97.- Cuando un producto tiene un coeficiente de fenol del 2, quiere decir que es aproximadamente:",
        "opciones": {
          "A": "Unas 2 veces más efectivo que el ácido carbónico.",
          "B": "Unas 20 veces más efectivo que el ácido carbónico.",
          "C": "Unas 40 veces más efectivo que el ácido carbónico.",
          "D": "Unas 80 veces más efectivo que el ácido carbónico."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 98,
        "idpregunta": 98,
        "pregunta": "98.- El agente 'chelating” es un producto limpiador que:",
        "opciones": {
          "A": "En un detergente incrementa la efectividad del producto.",
          "B": "Aporta espuma jabonosa.",
          "C": "Reduce la espuma jabonosa.",
          "D": "Al combinarse con materiales solubles los convierte en insolubles."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 99,
        "idpregunta": 99,
        "pregunta": "99.- Utensilios y equipo necesario para el abrillantado de suelos:",
        "opciones": {
          "A": "Máquina fregadora provista de cepillos abrillantadores.",
          "B": "Discos de lana de acero o discos abrillantadores sintéticos.",
          "C": "Mopas de fregar de 24 onzas (unos 680 gramos) para las áreas públicas.",
          "D": "a) b) y c) son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 100,
        "idpregunta": 100,
        "pregunta": "100.- Para quitar el polvo con mopas en habitaciones con pacientes y áreas congestionadas se utilizan mopas de impregnación:",
        "opciones": {
          "A": "De 1,20 m.",
          "B": "De 45-50 cm.",
          "C": "De 80-85 cm.",
          "D": "De 1 m."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 101,
        "idpregunta": 101,
        "pregunta": "101.- El objetivo del fregado con mopas esterilizadas es:",
        "opciones": {
          "A": "Dejar en el suelo detergente germicida el tiempo suficiente para que mate las bacterias.",
          "B": "Conseguir una limpieza más esmerada, más higiénica y de más belleza ambiental.",
          "C": "Quitar los desperdicios, el polvo y la suciedad del suelo.",
          "D": "Que el ambiente esté limpio, higiénico y atractivo."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 102,
        "idpregunta": 102,
        "pregunta": "102.- ¿Qué paso NO se realiza en el fregado de mopa y doble cubo?",
        "opciones": {
          "A": "Quitar el polvo.",
          "B": "Aplicar la disolución del fregado a la mopa.",
          "C": "Recoger el agua sucia.",
          "D": "Pasar la máquina abrillantadora."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 103,
        "idpregunta": 103,
        "pregunta": "103.- Señala la respuesta INCORRECTA. En el lavado de paredes:",
        "opciones": {
          "A": "Una parte importante es la técnica de asepsia en la incomunicación de la habitación.",
          "B": "En el depósito de la máquina se echa el detergente germicida y medio litro de agua.",
          "C": "Al preparar la maquinaria se bombea a mano la bomba hasta llegar a la presión recomendada.",
          "D": "Las marcas y manchas difíciles se deben quitar rascando con la almohadilla abrasiva."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 104,
        "idpregunta": 104,
        "pregunta": "104.- ¿Cuál de las siguientes acciones NO se debe realizar en el mantenimiento diario de habitaciones de descanso?",
        "opciones": {
          "A": "Desinfectar la taza del wáter y los urinarios.",
          "B": "Fregar las instalaciones con un paño mojado.",
          "C": "Vaciar los recipientes de desechos.",
          "D": "Cambiar las cortinas y los cortinajes."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 105,
        "idpregunta": 105,
        "pregunta": "105.- Proceso que destruye la mayor parte de los microorganismos, pero no todas las formas:",
        "opciones": {
          "A": "Esterilización.",
          "B": "Desgerminación.",
          "C": "Desinfección.",
          "D": "Limpieza."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 106,
        "idpregunta": 106,
        "pregunta": "106.- Señala la respuesta INCORRECTA:",
        "opciones": {
          "A": "Las bacterias se reproducen aproximadamente cada 50 segundos.",
          "B": "Las bacterias son células vivientes.",
          "C": "La suciedad es una fuente excelente de alimento para las bacterias.",
          "D": "La supervivencia de las bacterias está ligada a la disponibilidad de alimento."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 107,
        "idpregunta": 107,
        "pregunta": "107.- Señala la respuesta INCORRECTA. En la limpieza postoperatoria:",
        "opciones": {
          "A": "Se lavan los cubos con jabón y germicida.",
          "B": "Las esponjas y la ropa sucia de sangre se colocan en contenedores separados.",
          "C": "La ropa blanca y verde se guardan en el mismo saco.",
          "D": "Se deben mover los muebles a una parte de la estancia."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 108,
        "idpregunta": 108,
        "pregunta": "108.- La limpieza general de los quirófanos se realiza:",
        "opciones": {
          "A": "Una vez acabadas todas las operaciones programadas.",
          "B": "Hacia las cinco de la tarde.",
          "C": "Entre operación y operación.",
          "D": "Por la mañana, justo antes de empezar con las operaciones."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 109,
        "idpregunta": 109,
        "pregunta": "109.- Señala la afirmación INCORRECTA:",
        "opciones": {
          "A": "Las ruedas de los muebles del quirófano se deben limpiar siempre muy bien para eliminar todos los residuos.",
          "B": "Si se olvida un objeto en la sala operatoria las bacterias podrían difundirse rápidamente.",
          "C": "Siempre se debe aplicar el sellador en los pavimentos conductores de los quirófanos.",
          "D": "Los pavimentos de los quirófanos son conductores, para impedir la formación de electricidad estática."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 110,
        "idpregunta": 110,
        "pregunta": "110.- Para la limpieza y desinfección de los equipos del área de endoscopia se debe utilizar diariamente hipoclorito de sodio en:",
        "opciones": {
          "A": "500 ppm.",
          "B": "50 ppm.",
          "C": "200 ppm.",
          "D": "100 ppm."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 111,
        "idpregunta": 111,
        "pregunta": "111.- Son los desechos procedentes de la elaboración de materiales y suministros propios del hospital:",
        "opciones": {
          "A": "Desechos industriales.",
          "B": "Desechos contaminantes.",
          "C": "Desechos orgánicos.",
          "D": "Desechos orgánicos humanos."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 112,
        "idpregunta": 112,
        "pregunta": "112.- Señala la respuesta INCORRECTA. Para el correcto mantenimiento de la mopa se debe:",
        "opciones": {
          "A": "Enjuagar la mopa después de cada sesión de trabajo.",
          "B": "Retorcer la mopa para escurrir.",
          "C": "Utilizar los colgadores de mopas.",
          "D": "Utilizar el tamaño de mopa apropiado para cada exprimidor."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 113,
        "idpregunta": 113,
        "pregunta": "113.- Identifica la respuesta CORRECTA sobre el factor pH:",
        "opciones": {
          "A": "El pH del 1 al 6 es ácido y del 8 al 14 es alcalino.",
          "B": "Un valor de pH 8 es neutro.",
          "C": "Los ácidos son más fuertes cuando el número es más grande, es decir, del 7 al 14.",
          "D": "Las respuestas b) y c) son correctas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 114,
        "idpregunta": 114,
        "pregunta": "114.- En la limpieza de los zócalos, en la aplicación del disolvente:",
        "opciones": {
          "A": "Se utiliza una brocha de unos 5 cm y se deja reposar durante 5 minutos.",
          "B": "Se utiliza un rodillo de 10 cm y se deja reposar durante 15 minutos.",
          "C": "Se utiliza una brocha de unos 15 cm y se deja reposar durante 30 minutos.",
          "D": "Se utiliza una brocha de unos 5 cm y se deja reposar durante 15 minutos."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 115,
        "idpregunta": 115,
        "pregunta": "115.- Señala la opción CORRECTA. Para la limpieza diaria de los quirófanos debe:",
        "opciones": {
          "A": "Lavarse las manos y las uñas con jabón quirúrgico durante 3 minutos.",
          "B": "Ponerse un uniforme de quirófano limpio.",
          "C": "Recoger los residuos y limpiar la zona operatoria con un spray desinfectante.",
          "D": "a) b) y c) son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 116,
        "idpregunta": 116,
        "pregunta": "116.- En la sala de reanimación se debe limpiar el polvo de los muebles y de los aparatos en húmedo con detergente germicida:",
        "opciones": {
          "A": "Todos los días.",
          "B": "Semanalmente.",
          "C": "Mensualmente.",
          "D": "Cada 2 días."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 117,
        "idpregunta": 117,
        "pregunta": "117.- El objetivo de la renovación de suelos es:",
        "opciones": {
          "A": "Proteger varios tipos de superficies y mantener limpio y atractivo el suelo del hospital.",
          "B": "Conseguir una limpieza más esmerada, más higiénica y de más belleza ambiental.",
          "C": "Quitar los desperdicios, el polvo y la suciedad del suelo.",
          "D": "Quitar toda suciedad del suelo, la cera o acabados sintéticos antes de aplicar el nuevo acabado del suelo."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 118,
        "idpregunta": 118,
        "pregunta": "118.- Algunos residuos pueden causar infecciones o enfermedades en animales y personas, debido a sus características, a su composición o a su utilización. ¿A qué efecto nocivo de los desechos se refiere esta frase?",
        "opciones": {
          "A": "Efectos contaminantes.",
          "B": "Efectos tóxicos.",
          "C": "Efectos patógenos.",
          "D": "Plagas."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 119,
        "idpregunta": 119,
        "pregunta": "119.- Señala la opción CORRECTA. Los productos de higienización:",
        "opciones": {
          "A": "Son productos que reducen el número de gérmenes o bacterias con el fin de garantizar los niveles mínimos de seguridad recomendados en la salvaguarda de la salud pública.",
          "B": "Son sustancias que se aplican a una superficie que se supone que puede ser infecciosa y sirven para matar las bacterias infecciosas de los objetos inanimados.",
          "C": "Son productos limpiadores que en un detergente incrementan la efectividad del producto.",
          "D": "Son productos que exterminan las bacterias, se aplican especialmente a los agentes químicos que matan a los gérmenes patógenos."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 120,
        "idpregunta": 120,
        "pregunta": "120.- Señala la opción INCORRECTA. En la limpieza de las ventanas:",
        "opciones": {
          "A": "La parte exterior de las ventanas es posible que necesite una disolución más concentrada.",
          "B": "En ventanas grandes, remoje y pase el limpiador solamente por la mitad inferior de la misma.",
          "C": "Empiece siempre pasando el limpiador pegado al marco de la ventana.",
          "D": "En las ventanas altas utilice pértigas extensibles."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 121,
        "idpregunta": 121,
        "pregunta": "121.- Son utensilios y equipo necesario para el abrillantado de los suelos:",
        "opciones": {
          "A": "La máquina fregadora provista de cepillos abrillantadores.",
          "B": "Los discos de lana de acero o discos abrillantadores sintéticos.",
          "C": "El doble cubo, uno para fregar y el otro para enjuagar.",
          "D": "a) b) y c) son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 122,
        "idpregunta": 122,
        "pregunta": "122.- Señala la opción CORRECTA. La desgerminación es:",
        "opciones": {
          "A": "Un procedimiento encaminado a disminuir el número de gérmenes en un área. Tal es el caso del lavado de las manos o el aseo de pisos.",
          "B": "El proceso que destruye la mayor parte de los microorganismos, pero no todas las formas.",
          "C": "Proceso mediante el cual se destruyen todos los organismos tanto patógenos como no patógenos incluyendo esporas.",
          "D": "a) b) y c) son correctas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 123,
        "idpregunta": 123,
        "pregunta": "123.- Señala la respuesta INCORRECTA. Pasos a realizar en la limpieza de una habitación que está ocupada por un paciente:",
        "opciones": {
          "A": "Vaciado de los cubos de desperdicios.",
          "B": "Fregar la habitación y el cuarto de baño.",
          "C": "Fregar toda la cama, los colchones, las fundas, todos los muebles, instalaciones, y el alféizar de las ventanas.",
          "D": "Quitar el polvo de la habitación."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 124,
        "idpregunta": 124,
        "pregunta": "124.- Señala la respuesta INCORRECTA:",
        "opciones": {
          "A": "La limpieza y desinfección recurrente se hace diariamente y se repite 2 o más veces al día según las condiciones de cada área.",
          "B": "La limpieza y desinfección terminal se hace cuando entra un paciente infectado o periódicamente cada 8 días.",
          "C": "En la limpieza y desinfección terminal se pretende cubrir todos los materiales, equipos y toda el área incluyendo la parte alta de las paredes y ventanas.",
          "D": "En la limpieza y desinfección en áreas críticas es recomendable una estricta limpieza y desinfección."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 125,
        "idpregunta": 125,
        "pregunta": "125.- El departamento de Limpieza y Mantenimiento de un Hospital se responsabiliza de:",
        "opciones": {
          "A": "Mantenimiento del edificio.",
          "B": "Equipo.",
          "C": "Dar facilidades en la limpieza del Hospital.",
          "D": "a) b) y c) son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 126,
        "idpregunta": 126,
        "pregunta": "126.- Señala la respuesta INCORRECTA:",
        "opciones": {
          "A": "Si el cuerpo del paciente está limpio los gérmenes tienen más posibilidades de penetrar en el paciente.",
          "B": "Si el médico tiene el uniforme limpio los gérmenes tienen menos posibilidades de penetrar en el paciente.",
          "C": "Cuanto más limpio esté el quirófano, menos posibilidades de infección existirán para nuestro paciente.",
          "D": "Las bacterias presentes en el aire pueden penetrar en el paciente y causar infecciones o enfermedades."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 127,
        "idpregunta": 127,
        "pregunta": "127.- La limpieza que tiene por objetivo el ofrecer un aspecto limpio, higiénico y atractivo sin molestar al paciente es:",
        "opciones": {
          "A": "La limpieza de las habitaciones aisladas que acaban de ser desocupadas.",
          "B": "La limpieza de una habitación que está ocupada por un paciente.",
          "C": "El abrillantado de los suelos.",
          "D": "El fregado con mopa y doble cubo."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 128,
        "idpregunta": 128,
        "pregunta": "128.- El objetivo de quitar el polvo con mopas es:",
        "opciones": {
          "A": "Limpiar de una forma esmerada toda la habitación y todos los muebles antes que otro paciente la ocupe, de tal manera que ofrezca un aspecto atractivo e higiénico.",
          "B": "Proteger varios tipos de superficies y mantener limpio, seguro, y atractivo el suelo de todo el hospital.",
          "C": "Quitar los desperdicios, polvo y suciedad del suelo como tarea diaria de mantenimiento o como preparación para el fregado con mopa y cubo.",
          "D": "Ofrecer un aspecto limpio, higiénico y atractivo sin molestar al paciente."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 129,
        "idpregunta": 129,
        "pregunta": "129.- Los recipientes destinados para depositar agujas usadas y darle su disposición final son:",
        "opciones": {
          "A": "Recipientes de color naranja.",
          "B": "Recipientes plásticos de color verde.",
          "C": "Bolsas plásticas de color negro.",
          "D": "Recipientes rígidos."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 130,
        "idpregunta": 130,
        "pregunta": "130.- El objetivo de la aplicación del acabado de los suelos es:",
        "opciones": {
          "A": "Proteger varios tipos de superficies y mantener limpio, seguro y atractivo el suelo de todo el hospital.",
          "B": "Ofrecer una habitación limpia, higiénica y atractiva usando las más modernas técnicas de asepsia.",
          "C": "Limpiar de una forma esmerada toda la habitación y todos los muebles antes que otro paciente la ocupe, de tal manera que ofrezca un aspecto atractivo e higiénico.",
          "D": "Conseguir una limpieza más esmerada, más higiénica y de más belleza ambiental."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 131,
        "idpregunta": 131,
        "pregunta": "131.- Tiene por objetivo el mantener el suelo limpio, seguro y atractivo:",
        "opciones": {
          "A": "El abrillantado de los suelos.",
          "B": "Fregar con mopas esterilizadas.",
          "C": "El mantenimiento diario de habitaciones de descanso.",
          "D": "La desinfección de las habitaciones ocupadas aisladas."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 132,
        "idpregunta": 132,
        "pregunta": "132.- En un hospital general, el cambio de ropa de las camas y de los pacientes es más frecuente, pudiéndose admitir el cambio diario de la misma hasta un total de:",
        "opciones": {
          "A": "6 kg. /lecho/día.",
          "B": "4 kg. /lecho/día.",
          "C": "2 kg. /lecho/día.",
          "D": "1 kg. /lecho/día."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 133,
        "idpregunta": 133,
        "pregunta": "133.- La máquina de lavar más utilizada en la lavandería de los hospitales modernos es:",
        "opciones": {
          "A": "Una lavadora convencional, con control manual y automático.",
          "B": "Una lavadora-extractora, que combina el proceso de lavado con la centrifugación o acondicionamiento.",
          "C": "Una lavadora de desinfección, que queda encajada entre paredes o barrera contra la contaminación.",
          "D": "Una lavadora continua, también llamada túnel de lavado."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 134,
        "idpregunta": 134,
        "pregunta": "134.- El equipamiento que se destina a secar y a planchar la ropa al mismo tiempo se denomina:",
        "opciones": {
          "A": "Cabina.",
          "B": "Extractor.",
          "C": "Calandra.",
          "D": "Prensa."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 135,
        "idpregunta": 135,
        "pregunta": "135.- Señala la CORRECTA:",
        "opciones": {
          "A": "La centrífuga o extractora elimina hasta 60% de agua de la ropa salida de la lavadora.",
          "B": "Las lavadoras – extractoras requieren más espacio.",
          "C": "La capacidad de la lavadora continua varía de 300 a 1000 kg. de ropa seca procesada por hora.",
          "D": "La prensa está constituida por dos cilindros, uno fijo externo y uno giratorio interno."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 136,
        "idpregunta": 136,
        "pregunta": "136.- El equipamiento destinado a pasar ropa de personal, donde se esteriliza la ropa es la:",
        "opciones": {
          "A": "Centrífuga o extractora.",
          "B": "Calandra.",
          "C": "Plancha de vapor.",
          "D": "Prensa."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 137,
        "idpregunta": 137,
        "pregunta": "137.- Los tejidos para la confección de la ropa más utilizados en el hospital son:",
        "opciones": {
          "A": "Algodón y poliéster/algodón.",
          "B": "Algodón y viscosa.",
          "C": "Algodón y lino.",
          "D": "Algodón y poliamida."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 138,
        "idpregunta": 138,
        "pregunta": "138.- La calidad del agua utilizada en lavandería:",
        "opciones": {
          "A": "Es muy importante y debe cumplir, por lo menos, tres requisitos.",
          "B": "Es importante, debe de ser blanda.",
          "C": "Es indiferente, lo que importa son los productos.",
          "D": "No tiene importancia, depende de la máquina."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 139,
        "idpregunta": 139,
        "pregunta": "139.- El vapor consumido en la lavandería para el calentamiento del agua, secadoras, calandras y prensas debe ser de:",
        "opciones": {
          "A": "No se necesita vapor.",
          "B": "Vapor de baja presión.",
          "C": "Vapor de alta presión.",
          "D": "Vapor de media presión."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 140,
        "idpregunta": 140,
        "pregunta": "140.- En el procesamiento de la ropa hospitalaria, la que se debe introducir en los sacos de plástico autosolubles es la:",
        "opciones": {
          "A": "Ropa reciclable.",
          "B": "Ropa sucia.",
          "C": "Ropa contaminada.",
          "D": "Ropa esterilizada."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 141,
        "idpregunta": 141,
        "pregunta": "141.- Los Sacos Autodisolubles:",
        "opciones": {
          "A": "Desinfectan el agua de lavado y las aguas residuales.",
          "B": "Están fabricados en film opaco.",
          "C": "Son permeables a cualquier tipo de transpiración de gas, etc.",
          "D": "Son tóxicos para el organismo humano."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 142,
        "idpregunta": 142,
        "pregunta": "142.- Un buen lavado empieza con la separación de la ropa sucia, que se clasificará según:",
        "opciones": {
          "A": "El grado de suciedad, tamaño y tipo de tejido.",
          "B": "El grado de suciedad, tamaño y color.",
          "C": "El grado de suciedad, nivel de deterioro y color.",
          "D": "El grado de suciedad, tipo de tejido y color."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 143,
        "idpregunta": 143,
        "pregunta": "143.- Durante la separación, la ropa es agrupada en lotes o fardos correspondientes a una fracción de la capacidad de la máquina:",
        "opciones": {
          "A": "En general, 50% de sus capacidades de lavado.",
          "B": "Entre el 40% y 80% de sus capacidades de lavado.",
          "C": "Por encima del 50% de sus capacidades de lavado.",
          "D": "En general, 80% de sus capacidades de lavado."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 144,
        "idpregunta": 144,
        "pregunta": "144.- El ciclo para el lavado de ropa con suciedad más acusada comienza con:",
        "opciones": {
          "A": "El remojado previo.",
          "B": "El prelavado.",
          "C": "La humectación.",
          "D": "La vaporización."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 145,
        "idpregunta": 145,
        "pregunta": "145.- En el procesamiento de la ropa hospitalaria, terminadas las operaciones de recepción, separación, pesaje y lavado:",
        "opciones": {
          "A": "Toda el área debe ser ordenada.",
          "B": "Toda el área debe ser desinfectada y lavada.",
          "C": "Se hace control de stock.",
          "D": "Se realiza el cambio de turno."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 146,
        "idpregunta": 146,
        "pregunta": "146.- Los principios asociados en el proceso del lavado son de orden:",
        "opciones": {
          "A": "Físico.",
          "B": "Químico.",
          "C": "Físico y químico.",
          "D": "Electromecánico."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 147,
        "idpregunta": 147,
        "pregunta": "147.- Si el nivel del agua estuviera demasiado alto, durante los enjabonamientos, blanqueado y acidulación, puede ocurrir:",
        "opciones": {
          "A": "Menor costo.",
          "B": "Menor necesidad de productos de lavado.",
          "C": "Permanencia de los residuos de productos.",
          "D": "Menor acción mecánica."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 148,
        "idpregunta": 148,
        "pregunta": "148.- En general, ¿Qué cantidad del agua utilizada en el lavado es agua tibia o caliente?",
        "opciones": {
          "A": "Del 5 al 15%.",
          "B": "Del 15 al 25%.",
          "C": "Del 25 al 35%.",
          "D": "Del 35 al 45%."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 149,
        "idpregunta": 149,
        "pregunta": "149.- El tiempo es uno de los factores importantes del lavado. Señala la CORRECTA.",
        "opciones": {
          "A": "Si el enjabonado es muy rápido será insuficiente para la actuación de los productos.",
          "B": "El enjuague es, en general, la operación más lenta del proceso.",
          "C": "El tiempo prolongado es más importante que la cantidad de enjabonado.",
          "D": "El tiempo utilizado para el lavado necesita de una media de 15 minutos."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 150,
        "idpregunta": 150,
        "pregunta": "150.- Cuando el jabón es colocado en demasiada cantidad, produce exceso de espuma...",
        "opciones": {
          "A": "Facilitando el proceso de lavado.",
          "B": "Dificulta el enjuague.",
          "C": "Aumentando la concentración de la solución.",
          "D": "Mejora la acción mecánica."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 151,
        "idpregunta": 151,
        "pregunta": "151.- El blanqueador debe ser adicionado en la última enjabonada o en el primer enjuagado, para:",
        "opciones": {
          "A": "Neutralizar los residuos alcalinos de la ropa.",
          "B": "Evitar que los efectos del cloro sean disminuidos por la presencia de materias orgánicas.",
          "C": "Economizar agua, tiempo y energía.",
          "D": "Evitar amarillear la ropa en el secado y el calandrado."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 152,
        "idpregunta": 152,
        "pregunta": "152.- La acidulación consiste en:",
        "opciones": {
          "A": "Adicionar un producto ácido durante el blanqueado para bajar el pH y neutralizar los residuos alcalinos de la ropa.",
          "B": "Adicionar un producto ácido en el último aclarado para bajar el pH y neutralizar los residuos alcalinos de la ropa.",
          "C": "Adicionar un producto ácido en el último aclarado para subir el pH.",
          "D": "Adicionar en el último enjuague de determinados tejidos, un producto que contiene glicerina en su composición."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 153,
        "idpregunta": 153,
        "pregunta": "153.- Para conseguir una desinfección completa en el lavado de la ropa debe usarse:",
        "opciones": {
          "A": "La temperatura de 65 a 75oC durante 15 minutos.",
          "B": "La temperatura de 75 a 85 oC, durante 10 minutos.",
          "C": "La temperatura de 85 a 95 oC, durante 15 minutos.",
          "D": "La temperatura de 100 oC, durante 10 minutos."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 154,
        "idpregunta": 154,
        "pregunta": "154.- La eliminación de las bacterias patógenas presentes en la ropa se consigue mediante la:",
        "opciones": {
          "A": "Acidulación.",
          "B": "Clorodesinfección.",
          "C": "V aporización.",
          "D": "Glicerinación."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 155,
        "idpregunta": 155,
        "pregunta": "155.- Señala la opción CORRECTA. En la eliminación de manchas.",
        "opciones": {
          "A": "Herrumbre (amarillo-rojizo): a través de un prelavado en agua fría con sal.",
          "B": "Café: son quitadas con acidulantes.",
          "C": "Aceite o grasa: son disueltas por almidón, talco o arcilla blanca en polvo.",
          "D": "Tinta de escribir se quita con hielo."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 156,
        "idpregunta": 156,
        "pregunta": "156.- Quitaremos las manchas de sangre:",
        "opciones": {
          "A": "A través de un prelavado con agua caliente.",
          "B": "A través de un prelavado con agua fría.",
          "C": "Aplicando alcohol.",
          "D": "Con limón y sal en agua caliente."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 157,
        "idpregunta": 157,
        "pregunta": "157.- Dentro del proceso de la ropa en el área limpia, la ropa seleccionada es distribuida para el secado en la siguiente proporción:",
        "opciones": {
          "A": "35% para el calandrado, 35% para la secadora y 30% para el prensado o planchado.",
          "B": "45% para el calandrado, 35% para la secadora y 20% para el prensado o planchado.",
          "C": "55% para el calandrado, 35% para la secadora y 10% para el prensado o planchado.",
          "D": "70% para el calandrado, 25% para la secadora y 5% para el prensado o planchado."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 158,
        "idpregunta": 158,
        "pregunta": "158.- El calandrado es una operación que seca y pisa al mismo tiempo",
        "opciones": {
          "A": "Los uniformes.",
          "B": "Las piezas pesadas.",
          "C": "Las piezas pequeñas.",
          "D": "Las piezas de la ropa lisa."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 159,
        "idpregunta": 159,
        "pregunta": "159.- Señala la CORRECTA:",
        "opciones": {
          "A": "En la centrifugación, por la eliminación del agua, se reduce un 80% del peso de la ropa.",
          "B": "En la centrifugadora la ropa se colocará en grandes pilas dentro de sacos de lona.",
          "C": "Ropas como colchas pesadas, piezas pequeñas y otras, son secadas en la secadora.",
          "D": "Las sábanas u colchas ligeras son pasadas por la prensa."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 160,
        "idpregunta": 160,
        "pregunta": "160.- ¿Cuál de los siguientes es un elemento del área física, complementa el área limpia y canaliza el movimiento de toda la ropa del hospital?",
        "opciones": {
          "A": "El ropero.",
          "B": "El vestidor.",
          "C": "La lavandería.",
          "D": "El vestuario."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 161,
        "idpregunta": 161,
        "pregunta": "161.- La barrera de contaminación:",
        "opciones": {
          "A": "Separa la lavandería en 3 áreas: lavado, secado y ropero.",
          "B": "Separa el área sucia y el área limpia.",
          "C": "Es eficiente si existe una lavadora de desinfección.",
          "D": "No puede tener visores."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 162,
        "idpregunta": 162,
        "pregunta": "162.- Señala la INCORRECTA. Si el agua del lavado contiene sales de calcio (cal) se produce:",
        "opciones": {
          "A": "Desperdicios de detergente.",
          "B": "La destrucción prematura de la ropa.",
          "C": "La disminución de las capacidades de absorción del tejido.",
          "D": "El ablandamiento y suavizado de la ropa."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 163,
        "idpregunta": 163,
        "pregunta": "163.- La caja de suspensión o de grosor con tela sirve para:",
        "opciones": {
          "A": "Retener los hilos de la ropa.",
          "B": "Filtrar la cal del agua.",
          "C": "Suministrar productos desinfectantes.",
          "D": "Medir la temperatura"
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 164,
        "idpregunta": 164,
        "pregunta": "164.- Señala la afirmación CORRECTA respecto de la recogida de la ropa sucia:",
        "opciones": {
          "A": "Debe permanecer el mayor tiempo posible en la unidad.",
          "B": "El empleado debe usar guantes de caucho, máscara y gorro.",
          "C": "La ropa sucia se deposita directamente en el carro.",
          "D": "Utilizaremos el carro de la ropa limpia cuando se vacíe."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 165,
        "idpregunta": 165,
        "pregunta": "165.- En cada unidad de enfermería ¿Cuántas mudas se reciben para cada cama por día?",
        "opciones": {
          "A": "Una y media por cama y día.",
          "B": "De una y media a dos mudas.",
          "C": "Dos mudas.",
          "D": "De dos a tres mudas."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 166,
        "idpregunta": 166,
        "pregunta": "166.- En la unidad de enfermería, la ropa de reserva:",
        "opciones": {
          "A": "Debe constar en una lista de ropa.",
          "B": "Debe estar protegida con bolsa de tela.",
          "C": "Estará bien planchada y colgada en la percha.",
          "D": "No se repone hasta la mañana siguiente."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 167,
        "idpregunta": 167,
        "pregunta": "167.- Las mesas de planchado están recubiertas de:",
        "opciones": {
          "A": "Una espuma siliconizada.",
          "B": "Una funda de nylon.",
          "C": "Una garnitura flexible y de una funda muletón.",
          "D": "Una tela de algodón."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 168,
        "idpregunta": 168,
        "pregunta": "168.- El planchado:",
        "opciones": {
          "A": "Es un conjunto de operaciones diversas que tienen por objeto poner los artículos ya usados en un estado lo más próximo posible al que tenían de nuevos.",
          "B": "Es una operación que tiende a devolver a las ropas su aspecto, su textura y su calidad inicial.",
          "C": "Requiere destreza y entrenamiento práctico experto y la cuidadosa práctica de técnicas correctas.",
          "D": "Todas son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 169,
        "idpregunta": 169,
        "pregunta": "169.- En el planchado, la recomendación en general es que el tiempo de vacío:",
        "opciones": {
          "A": "Debe durar entre cinco y 15 segundos, y que la prenda debe sentirse siempre fría al tacto, antes de pasar a la siguiente operación.",
          "B": "NO debe ser menor de cinco segundos, y que la prenda debe sentirse siempre caliente al tacto, antes de pasar a la siguiente operación.",
          "C": "NO debe ser menor de cinco segundos, y que la prenda debe sentirse siempre fría al tacto, antes de pasar a la siguiente operación.",
          "D": "Debe durar entre cinco y 15 segundos, y que la prenda debe sentirse siempre caliente al tacto, antes de pasar a la siguiente operación."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 170,
        "idpregunta": 170,
        "pregunta": "170.- De las siguientes fibras textiles, la que mejor soporta el calor es:",
        "opciones": {
          "A": "Lino.",
          "B": "Lana.",
          "C": "Acrílico.",
          "D": "Poliamidas"
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 171,
        "idpregunta": 171,
        "pregunta": "171.- Señala la CORRECTA:",
        "opciones": {
          "A": "Tanto el túnel de acabado como la cabina de acabado trabajan 'continuamente”.",
          "B": "Tanto la cabina de acabado como el túnel de acabado trabajan 'discontinuamente”.",
          "C": "Mientras el túnel de acabado trabaja 'discontinuamente”, la cabina de acabado lo hace 'continuamente”.",
          "D": "Mientras la cabina de acabado trabaja 'discontinuamente”, el túnel de acabado lo hace 'continuamente”."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 172,
        "idpregunta": 172,
        "pregunta": "172.- La funda de tela que se hincha, para el planchado del cuerpo del pantalón, se denomina:",
        "opciones": {
          "A": "Bacín.",
          "B": "Pan-topper.",
          "C": "Prensa.",
          "D": "Cojinete."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 173,
        "idpregunta": 173,
        "pregunta": "173.- En el taller de planchado es importante:",
        "opciones": {
          "A": "Tener todos los aparatos muy juntos.",
          "B": "Buena calefacción.",
          "C": "Un humidificador.",
          "D": "Buena aireación."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 174,
        "idpregunta": 174,
        "pregunta": "174.- El factor más importante para obtener un buen planchado es:",
        "opciones": {
          "A": "La humedad.",
          "B": "La presión.",
          "C": "El calor.",
          "D": "El descenso brusco de la temperatura del tejido después del calentamiento."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 175,
        "idpregunta": 175,
        "pregunta": "175.- La excesiva vaporización en el proceso del planchado puede producir:",
        "opciones": {
          "A": "Fatiga al operador.",
          "B": "Disolución del tejido.",
          "C": "Holgura en tejidos de algodón.",
          "D": "Endurecimiento del tejido."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 176,
        "idpregunta": 176,
        "pregunta": "176.- En el planchado:",
        "opciones": {
          "A": "La operación de vacío es menos importante que la vaporización.",
          "B": "El vacío es el que da consistencia a la pieza.",
          "C": "En la operación de vacío será suficiente un ligero toque de pedal.",
          "D": "La recomendación en general es que el tiempo de vacío NO debe ser menor de quince segundos."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 177,
        "idpregunta": 177,
        "pregunta": "177.- El poliéster soporta una temperatura hasta:",
        "opciones": {
          "A": "110oc.",
          "B": "150oc.",
          "C": "200oc.",
          "D": "245oc."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 178,
        "idpregunta": 178,
        "pregunta": "178.- La prensa universal de planchado:",
        "opciones": {
          "A": "Lleva accesorios diversos como el soporte para la plancha.",
          "B": "Tiene un ciclo de 4 tiempos.",
          "C": "Se compone de dos platos recubiertos.",
          "D": "Puede ser con bancada de forma rectangular o contorneada."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 179,
        "idpregunta": 179,
        "pregunta": "179.- Cualidades que debe tener el revestimiento de tela de la prensa universal de planchado:",
        "opciones": {
          "A": "Ser lisa, para NO dejar marcas en los tejidos finos.",
          "B": "Ser impermeable al vapor.",
          "C": "Ser de seda natural.",
          "D": "Ser suficientemente rígida."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 180,
        "idpregunta": 180,
        "pregunta": "180.- El sistema de aspiración de la prensa universal se encuentra:",
        "opciones": {
          "A": "En el plato inferior.",
          "B": "En el plato superior.",
          "C": "En ambos platos.",
          "D": "La prensa universal no tiene este sistema."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 181,
        "idpregunta": 181,
        "pregunta": "181.- ¿Cuál NO es un tipo de mesa de planchado?",
        "opciones": {
          "A": "Mesa calentadora.",
          "B": "Mesa aspirante.",
          "C": "Mesa vaporizante.",
          "D": "Mesa irradiante."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 182,
        "idpregunta": 182,
        "pregunta": "182.- El recubrimiento de la mesa de planchar:",
        "opciones": {
          "A": "Debe ser impermeable.",
          "B": "Debe ser duro y compacto.",
          "C": "Necesita 'elasticidad”.",
          "D": "Consiste en una funda de espuma siliconizada."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 183,
        "idpregunta": 183,
        "pregunta": "183.- Las cabinas y túneles de acabado del proceso de planchado:",
        "opciones": {
          "A": "Permiten tratar simultáneamente más de 25 prendas.",
          "B": "Eliminan completamente las arrugas de uso de las entrepiernas de pantalones.",
          "C": "Ambos trabajan continuamente.",
          "D": "Interesan especialmente para artículos de punto sintéticos o naturales."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 184,
        "idpregunta": 184,
        "pregunta": "184.- En el planchado, el equipo base de servicio de acabado comprende:",
        "opciones": {
          "A": "La prensa universal y el túnel de acabado.",
          "B": "La prensa universal y la mesa de planchado.",
          "C": "La prensa universal y la cabina.",
          "D": "La prensa universal y el pan-topper"
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 185,
        "idpregunta": 185,
        "pregunta": "185.- Es un aparato con forma de armario equipado con un sistema de vaporización y otro de circulación de aire caliente:",
        "opciones": {
          "A": "Cabina de acabado.",
          "B": "Mesa de planchar.",
          "C": "V aporizador.",
          "D": "Prensa universal."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 186,
        "idpregunta": 186,
        "pregunta": "186.- Señala la opción INCORRECTA sobre la operación de vacío en el planchado.",
        "opciones": {
          "A": "Esta operación es más importante que la vaporización.",
          "B": "Tras vaporizar, antes de pasar a la siguiente operación, la prenda debe sentirse siempre caliente al tacto.",
          "C": "El tiempo de vacío NO debe ser menor de 5 segundos.",
          "D": "Es preferible sobrevaporizar que vaporizar de menos."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 187,
        "idpregunta": 187,
        "pregunta": "187.- ¿Dónde se suele ejecutar el planchado de la chaqueta?",
        "opciones": {
          "A": "Prensa universal.",
          "B": "Cabina de acabado.",
          "C": "Maniquí.",
          "D": "Todas son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 188,
        "idpregunta": 188,
        "pregunta": "188.- Con la ropa que pasa por el túnel de acabado es posible:",
        "opciones": {
          "A": "Borrar más o menos todos los pliegues.",
          "B": "Rehacer los pliegues de confección.",
          "C": "Ahuecar el tejido mejorando el aspecto y la caída de la prenda.",
          "D": "a) y c) son correctas."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 189,
        "idpregunta": 189,
        "pregunta": "189.- En prendas ligeras (blusas):",
        "opciones": {
          "A": "El vaporizado debe durar 1-2 segundos y el vacío 5 segundos.",
          "B": "El vaporizado debe durar 8 segundos y el vacío 16-17 segundos.",
          "C": "El vaporizado debe durar 5-6 segundos y el vacío 10-12 segundos.",
          "D": "El vaporizado debe durar 4 segundos y el vacío 8-9 segundos."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 190,
        "idpregunta": 190,
        "pregunta": "190.- ¿Cuál de las siguientes prendas NO se deben planchar?",
        "opciones": {
          "A": "Prendas de clorofibra.",
          "B": "Prendas de lino.",
          "C": "Prendas de seda.",
          "D": "Prendas de poliéster."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 191,
        "idpregunta": 191,
        "pregunta": "191.- En el planchado, la temperatura de seguridad de la lana es de:",
        "opciones": {
          "A": "230 oC.",
          "B": "150 oC.",
          "C": "180 oC",
          "D": "215 oC."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 192,
        "idpregunta": 192,
        "pregunta": "192.- ¿Cuál es una causa principal del pegado de componentes accionados por aire?",
        "opciones": {
          "A": "Presión de vapor demasiado alta.",
          "B": "Mala calidad del aire del compresor: aire caliente, húmedo o con lubricación incorrecta.",
          "C": "Exceso de vacío en la prensa.",
          "D": "Temperatura baja del plato de planchado."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 193,
        "idpregunta": 193,
        "pregunta": "193.- ¿Cuál es una medida CORRECTA para evitar deformaciones y alargamientos en las prendas?",
        "opciones": {
          "A": "Usar siempre el mismo ciclo de temperatura y duración.",
          "B": "Evitar clasificar las prendas por tipo.",
          "C": "Clasificar los artículos por categoría y adaptar el ciclo a cada uno.",
          "D": "Usar cualquier tipo de percha disponible."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 194,
        "idpregunta": 194,
        "pregunta": "194.- Al planchar un pantalón en prensa universal, ¿por qué es importante controlar el paso del calor al frío?",
        "opciones": {
          "A": "Porque evita que el tejido se humedezca demasiado.",
          "B": "Porque fija el tejido en la forma deseada, manteniendo los pliegues correctamente.",
          "C": "Porque acelera el secado de la prenda sin afectar la forma.",
          "D": "Porque reduce la presión necesaria sobre la prenda."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 195,
        "idpregunta": 195,
        "pregunta": "195.- ¿Cuáles son las dos fases del funcionamiento de los túneles de acabado?",
        "opciones": {
          "A": "Lavado y centrifugado.",
          "B": "Vaporización y secado.",
          "C": "Enfriamiento y doblado.",
          "D": "Compresión y sellado."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 196,
        "idpregunta": 196,
        "pregunta": "196.- En el planchado, la temperatura de seguridad de la acrílica es de:",
        "opciones": {
          "A": "75-100 oC.",
          "B": "150- 2175 oC.",
          "C": "180-200 oC.",
          "D": "200-215 oC."
        },
        "correcta": "A",
        "metodo": "acierto"
      },
      {
        "num": 197,
        "idpregunta": 197,
        "pregunta": "197.- ¿Cuáles son las dos grandes fases del planchado del pantalón?",
        "opciones": {
          "A": "Lavado y secado.",
          "B": "Vaporización y doblado.",
          "C": "Planchado del bacín hasta la cintura y planchado de las piernas.",
          "D": "Marcado de bolsillos y costuras laterales."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      },
      {
        "num": 198,
        "idpregunta": 198,
        "pregunta": "198.- Se usa para enfriar y secar totalmente el artículo, de modo que los pliegues queden bien marcados.",
        "opciones": {
          "A": "El lavado.",
          "B": "El vacío.",
          "C": "La presión.",
          "D": "El vapor."
        },
        "correcta": "B",
        "metodo": "fallo->azul"
      },
      {
        "num": 199,
        "idpregunta": 199,
        "pregunta": "199.- La prensa de doble pierna...",
        "opciones": {
          "A": "Es una prensa corta en la cual se efectúa el planchado del bacín en 5 o 6 operaciones.",
          "B": "Es una prensa cuya plancha inferior más plana que la de una prensa universal.",
          "C": "Tiene una escotadura en el extremo o en una esquina.",
          "D": "Permite el prensado de las dos piernas al mismo tiempo."
        },
        "correcta": "D",
        "metodo": "fallo->azul"
      },
      {
        "num": 200,
        "idpregunta": 200,
        "pregunta": "200.- ¿En qué tipo de artículos son más frecuentes los alargamientos?",
        "opciones": {
          "A": "En prendas de algodón ligero.",
          "B": "En artículos de seda natural.",
          "C": "En artículos de fibras acrílicas y, a veces, de lana.",
          "D": "En prendas de lino corto."
        },
        "correcta": "C",
        "metodo": "fallo->azul"
      }
    ]
  }
};
