function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="chapter-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Answer({ children }: { children: React.ReactNode }) {
  return <div className="callout">{children}</div>;
}

const evaluationChecklist = [
  'Explico quién soy profesionalmente en la primera oración.',
  'Muestro una evolución concreta desde QA hacia desarrollo.',
  'Incluyo evidencia real: repositorios, pruebas, productos y publicación.',
  'Conecto mi experiencia en QA con una ventaja para desarrollar.',
  'Aclaro mi nivel actual sin minimizarme ni exagerarlo.',
  'Cierro explicando qué tipo de oportunidad estoy buscando.',
  'Mantengo la respuesta principal entre 60 y 90 segundos.',
];

export function AboutYouChapter() {
  return (
    <>
      <h1 id="pregunta">Capítulo 1 — ¿Podés contarme sobre vos?</h1>
      <p>
        Esta suele ser la primera pregunta de una entrevista. No te están pidiendo una biografía completa:
        quieren entender rápidamente quién sos profesionalmente, cómo llegaste hasta acá y por qué tu perfil
        tiene sentido para el puesto.
      </p>

      <Section title="Objetivo del capítulo">
        <p>Al terminar deberías poder presentarte con naturalidad en tres formatos:</p>
        <ul>
          <li><strong>30 segundos:</strong> presentación rápida para recruiter o primer contacto.</li>
          <li><strong>60 a 90 segundos:</strong> respuesta principal de entrevista.</li>
          <li><strong>2 minutos:</strong> versión técnica con proyectos, decisiones y aprendizaje.</li>
        </ul>
        <p>No necesitás memorizar palabra por palabra. Necesitás dominar la estructura y las ideas.</p>
      </Section>

      <Section title="Qué intenta evaluar el entrevistador">
        <ul>
          <li>Si podés ordenar tu historia y comunicarte con claridad.</li>
          <li>Si tu transición de QA a desarrollo es consistente o improvisada.</li>
          <li>Si tenés experiencia demostrable más allá de cursos.</li>
          <li>Si comprendés tu nivel actual y podés trabajar con acompañamiento.</li>
          <li>Si tu experiencia previa aporta valor al equipo.</li>
          <li>Si lo que buscás coincide con el puesto disponible.</li>
        </ul>
      </Section>

      <Section title="La estructura correcta: presente, evolución, evidencia y objetivo">
        <ol>
          <li><strong>Presente:</strong> quién sos hoy y cuál es tu perfil.</li>
          <li><strong>Evolución:</strong> cómo nació y se consolidó tu interés por desarrollo.</li>
          <li><strong>Evidencia:</strong> qué hiciste realmente para convertir ese interés en capacidad.</li>
          <li><strong>Ventaja:</strong> qué te aporta haber trabajado en QA.</li>
          <li><strong>Objetivo:</strong> qué oportunidad buscás ahora.</li>
        </ol>
        <Answer>
          <strong>Fórmula mental:</strong> “Hoy soy… / Con el tiempo empecé a… / Lo llevé a la práctica mediante… /
          Mi experiencia anterior me aporta… / Ahora busco…”.
        </Answer>
      </Section>

      <Section title="Respuesta de 30 segundos">
        <Answer>
          Soy QA Manual con aproximadamente tres años de experiencia y fui construyendo un perfil cada vez más
          orientado al desarrollo. Actualmente trabajo principalmente con TypeScript, React, Next.js, React Native,
          Expo y Supabase. Además de estudiar y analizar repositorios reales, desarrollé productos propios como
          Monedero, una aplicación de finanzas personales publicada en App Store. Ahora busco dar el paso formal a
          desarrollo, aprovechando también la mirada de calidad y prevención de errores que adquirí como QA.
        </Answer>
        <p><strong>Cuándo usarla:</strong> llamadas breves, eventos, presentaciones iniciales o recruiters con poco tiempo.</p>
      </Section>

      <Section title="Respuesta recomendada de 60 a 90 segundos">
        <Answer>
          Soy QA Manual desde hace aproximadamente tres años y, durante ese tiempo, fui desarrollando un perfil cada
          vez más orientado al desarrollo de software. Antes de trabajar como QA hice formación introductoria y luego
          participé durante seis meses en la escuelita de Crombie, donde trabajé con React, Node.js, AWS y fundamentos
          full stack. En mi trabajo empecé a descargar y estudiar los repositorios de los productos que probaba para
          entender cómo se relacionaban el código, los datos y las funcionalidades. Con el tiempo también escribí
          pruebas unitarias y realicé aportes técnicos pequeños.
          <br /><br />
          Paralelamente construí productos propios. El principal es Monedero, una aplicación de finanzas personales
          creada con React Native, Expo, TypeScript y Supabase, que publiqué en App Store. También trabajé en proyectos
          web como Editor Académico APA, Prode y Picadito. Hoy quiero incorporarme formalmente a un equipo de desarrollo
          donde pueda seguir creciendo con revisión y buenas prácticas. Mi experiencia como QA me aporta una mirada
          fuerte sobre comportamiento esperado, casos borde, experiencia de usuario y prevención de regresiones.
        </Answer>
      </Section>

      <Section title="Versión técnica de hasta 2 minutos">
        <Answer>
          Mi experiencia profesional principal es como QA Manual, rol en el que trabajo desde hace aproximadamente
          tres años sobre productos web y flujos de negocio complejos. Ese trabajo me permitió aprender a analizar
          requerimientos, investigar errores, consultar APIs y bases de datos, revisar logs y comunicarme con producto
          y desarrollo. A medida que entendía mejor los sistemas, empecé a revisar los repositorios y a estudiar cómo
          estaban construidas las funcionalidades que probaba.
          <br /><br />
          Para profundizar esa transición me formé en React, Node.js, AWS y fundamentos full stack, escribí pruebas
          unitarias con Jest y desarrollé proyectos propios. El más completo es Monedero, una app multiplataforma de
          finanzas personales con React Native, Expo y TypeScript. Usé Supabase para autenticación y PostgreSQL,
          Zustand para estado compartido e i18n para internacionalización. La aplicación fue publicada en App Store,
          por lo que también atravesé decisiones de producto, validaciones, builds y mantenimiento posterior al lanzamiento.
          <br /><br />
          No me presento como alguien con años de experiencia profesional desarrollando, sino como un perfil junior
          con experiencia real en tecnología, criterio de calidad y productos construidos de punta a punta. Busco un
          equipo donde pueda aportar esa base y seguir creciendo mediante código real, revisiones y colaboración.
        </Answer>
      </Section>

      <Section title="Por qué esta respuesta funciona">
        <ul>
          <li><strong>No oculta QA:</strong> lo transforma en contexto y ventaja competitiva.</li>
          <li><strong>No depende de una lista de tecnologías:</strong> muestra evolución y acciones.</li>
          <li><strong>Incluye evidencia:</strong> formación, repositorios, pruebas, proyectos y publicación.</li>
          <li><strong>Es honesta:</strong> diferencia experiencia profesional de experiencia práctica.</li>
          <li><strong>Cierra con intención:</strong> deja claro qué buscás y cómo querés crecer.</li>
        </ul>
      </Section>

      <Section title="Conceptos que debés comprender y poder defender">
        <h3>Perfil híbrido</h3>
        <p>
          No significa que seas “mitad QA y mitad developer”. Significa que tu experiencia previa te permite construir
          teniendo en cuenta riesgos, datos de prueba, errores, regresiones y comportamiento del usuario.
        </p>
        <h3>Experiencia profesional versus experiencia práctica</h3>
        <p>
          Tu trabajo formal todavía fue principalmente QA. Tus proyectos demuestran capacidad de desarrollo, pero no
          deben presentarse como años de experiencia laboral que no existieron. La precisión aumenta tu credibilidad.
        </p>
        <h3>Producto publicado</h3>
        <p>
          Publicar Monedero demuestra más que completar un tutorial: hubo alcance, decisiones, errores reales, builds,
          revisión de plataforma y mantenimiento. Debés poder explicar tanto sus logros como sus límites.
        </p>
        <h3>Junior no significa principiante absoluto</h3>
        <p>
          Podés postularte a una posición junior y aun así aportar experiencia trabajando con equipos, tickets, APIs,
          bases de datos, debugging y calidad. Tu desafío es crecer en diseño e implementación profesional de código.
        </p>
      </Section>

      <Section title="Repreguntas probables y cómo responderlas">
        <h3>¿Por qué querés pasar de QA a desarrollo?</h3>
        <Answer>
          La transición fue gradual. Mientras probaba funcionalidades empecé a interesarme por cómo estaban construidas,
          a revisar repositorios y a relacionar los errores con el código y los datos. Después confirmé ese interés
          desarrollando y publicando productos propios. Descubrí que disfruto diseñar soluciones y construir el producto,
          no solamente validar el resultado. No abandono la calidad: la incorporo a mi forma de desarrollar.
        </Answer>

        <h3>¿Qué ventaja concreta te da QA?</h3>
        <Answer>
          Me acostumbró a pensar antes de implementar en caminos felices, casos borde, estados inválidos, datos
          inconsistentes y regresiones. También aprendí a investigar problemas de punta a punta y a comunicar evidencia
          clara. Como developer, eso puede ayudarme a entregar cambios más fáciles de probar y con menos sorpresas.
        </Answer>

        <h3>¿Cuál es tu nivel real como developer?</h3>
        <Answer>
          Me considero junior. Puedo construir funcionalidades y productos completos con las tecnologías que vengo
          usando, investigar problemas y defender varias decisiones. Al mismo tiempo, todavía necesito crecer en
          arquitectura a escala, revisión profesional constante, performance avanzada y trabajo diario dentro de un
          equipo de desarrollo. Prefiero ser preciso con eso y demostrar mi evolución con código.
        </Answer>

        <h3>¿Cuál fue tu primera contribución técnica real?</h3>
        <Answer>
          Empecé acercándome al código desde las pruebas: revisaba repositorios para entender los flujos y después escribí
          pruebas unitarias sobre lógica existente. Eso me obligó a comprender dependencias, mocks, casos de error y
          comportamiento esperado. También fui realizando cambios pequeños y trasladé ese aprendizaje a mis proyectos propios.
        </Answer>

        <h3>¿Cuál de tus proyectos representa mejor tu nivel?</h3>
        <Answer>
          Monedero, porque combina frontend mobile, autenticación, persistencia, estado, internacionalización y publicación
          real. Me permite explicar no solo qué construí, sino por qué elegí Expo, Supabase y Zustand, qué límites tiene
          hoy y qué mejoraría para hacerlo más robusto.
        </Answer>

        <h3>¿Cómo utilizás inteligencia artificial?</h3>
        <Answer>
          La uso como herramienta para investigar, discutir alternativas, acelerar tareas repetitivas y revisar ideas,
          pero intento no aceptar código que no puedo explicar. Verifico los cambios, los adapto al contexto del proyecto
          y pruebo el comportamiento. También la uso para detectar preguntas que todavía no sé responder y convertirlas
          en temas de estudio.
        </Answer>
      </Section>

      <Section title="Preguntas difíciles de presión">
        <h3>¿Por qué deberíamos contratarte como developer si tu experiencia es QA?</h3>
        <Answer>
          Porque no parto de cero en el trabajo con software. Ya tengo experiencia comprendiendo productos complejos,
          investigando fallas, trabajando con APIs, datos, logs y equipos multidisciplinarios. A eso le sumé formación y
          productos de desarrollo concretos. No afirmo reemplazar la experiencia profesional que todavía estoy construyendo,
          pero sí puedo aportar una base técnica, criterio de calidad y una curva de adaptación más corta que la de alguien
          que nunca trabajó en un producto real.
        </Answer>

        <h3>¿Aceptarías empezar como junior?</h3>
        <Answer>
          Sí. Entiendo que mi experiencia laboral en tecnología aporta valor, pero que mi experiencia formal en desarrollo
          todavía está creciendo. Busco una posición con responsabilidades acordes, espacio para aprender y expectativas
          claras. Mi objetivo no es defender un título, sino convertirme en un developer sólido.
        </Answer>

        <h3>¿Qué parte del desarrollo te cuesta más?</h3>
        <Answer>
          Todavía estoy fortaleciendo arquitectura y decisiones a mayor escala: cómo dividir dominios, definir límites
          entre capas y anticipar crecimiento sin sobrearquitectura. En proyectos propios puedo resolver muchas cosas,
          pero quiero ganar experiencia recibiendo revisión de developers con más recorrido y trabajando con restricciones reales.
        </Answer>

        <h3>¿Qué pasa si el puesto también incluye testing?</h3>
        <Answer>
          No tendría problema. Considero que probar es parte de desarrollar bien. Lo importante para mí es que el rol me
          permita participar de forma real en la implementación y seguir creciendo como developer, no evitar cualquier
          tarea relacionada con calidad.
        </Answer>
      </Section>

      <Section title="Errores comunes y señales de alerta">
        <ul>
          <li><strong>“Me cansé de QA”:</strong> transmite rechazo, no evolución.</li>
          <li><strong>Recitar tecnologías:</strong> no demuestra qué hiciste con ellas.</li>
          <li><strong>Inventar seniority:</strong> una repregunta técnica puede romper toda la credibilidad.</li>
          <li><strong>Decir que la IA hizo el proyecto:</strong> hace dudar de tu comprensión y autonomía.</li>
          <li><strong>Hablar durante cinco minutos:</strong> obliga al entrevistador a buscar la idea principal.</li>
          <li><strong>Contar datos personales irrelevantes:</strong> consume tiempo sin fortalecer tu candidatura.</li>
          <li><strong>Minimizarte demasiado:</strong> honestidad no significa presentarte como incapaz.</li>
          <li><strong>No cerrar la respuesta:</strong> debe quedar claro por qué estás en esa entrevista.</li>
        </ul>
      </Section>

      <Section title="Checklist de autoevaluación">
        <p>Después de practicar, marcá mentalmente cada criterio:</p>
        <ul>{evaluationChecklist.map((item) => <li key={item}>{item}</li>)}</ul>
        <Answer>
          <strong>Regla de aprobación:</strong> si cumplís al menos seis criterios y no exagerás experiencia, la respuesta
          está en condiciones de usarse. Después se mejora naturalidad, no contenido inventado.
        </Answer>
      </Section>

      <Section title="Ejercicios — no mires las soluciones todavía">
        <ol>
          <li>Escribí una presentación de máximo 70 palabras para una llamada con recruiter.</li>
          <li>Grabá una respuesta de entre 60 y 90 segundos sin leer.</li>
          <li>Repetí la respuesta sin mencionar tecnologías durante los primeros 30 segundos.</li>
          <li>Explicá en una oración cuál es tu ventaja frente a otro developer junior.</li>
          <li>Respondé: “¿Por qué deberíamos creerte que querés ser developer?”.</li>
          <li>Nombrá una fortaleza y una limitación real de tu perfil actual.</li>
          <li>Presentate para una búsqueda React Native y luego adaptá la respuesta a una búsqueda frontend web.</li>
        </ol>
      </Section>

      <Section title="Simulación guiada de entrevista">
        <ol>
          <li><strong>Entrevistador:</strong> Contame sobre vos.</li>
          <li><strong>Entrevistador:</strong> ¿Qué te llevó de QA a desarrollo?</li>
          <li><strong>Entrevistador:</strong> ¿Qué hiciste vos específicamente en Monedero?</li>
          <li><strong>Entrevistador:</strong> ¿Qué decisión técnica defenderías y cuál cambiarías?</li>
          <li><strong>Entrevistador:</strong> ¿Qué necesitás aprender para dejar de ser junior?</li>
          <li><strong>Entrevistador:</strong> ¿Por qué este puesto encaja con tu próximo paso?</li>
        </ol>
        <p>Respondé toda la secuencia sin consultar la respuesta modelo. El objetivo es conservar coherencia entre todas tus respuestas.</p>
      </Section>

      <Section title="Soluciones y respuestas de referencia">
        <details>
          <summary><strong>Mostrar soluciones de los ejercicios</strong></summary>
          <h3>1. Ejemplo de presentación de hasta 70 palabras</h3>
          <p>
            Soy QA Manual con tres años de experiencia y estoy orientando mi carrera hacia desarrollo. Además de trabajar
            con productos reales, APIs, datos y debugging, construí aplicaciones con TypeScript, React y React Native.
            Mi proyecto principal es Monedero, publicado en App Store. Busco una posición junior donde pueda aportar mi
            criterio de calidad y seguir creciendo mediante implementación y revisión de código.
          </p>
          <h3>4. Ventaja diferencial en una oración</h3>
          <p>
            Además de poder implementar, ya estoy entrenado para anticipar casos borde, investigar fallas y pensar cómo
            un cambio puede afectar al usuario y al resto del producto.
          </p>
          <h3>5. Por qué deberían creer en la transición</h3>
          <p>
            Porque no se basa solamente en una intención: revisé repositorios, escribí pruebas, me formé, construí varios
            productos y publiqué una aplicación real; llevo tiempo convirtiendo la decisión en acciones verificables.
          </p>
          <h3>6. Fortaleza y limitación</h3>
          <p>
            Mi fortaleza es combinar criterio de calidad con experiencia construyendo productos propios. Mi limitación es
            que todavía necesito más experiencia desarrollando diariamente dentro de un equipo y recibiendo revisiones
            sobre arquitectura y calidad de código.
          </p>
          <h3>7. Adaptación por puesto</h3>
          <p><strong>React Native:</strong> destacá Monedero, Expo, publicación, estado, autenticación y diferencias de plataforma.</p>
          <p><strong>Frontend web:</strong> destacá React, Next.js, TypeScript, componentes, integración con APIs y proyectos web.</p>
        </details>
      </Section>

      <Section title="Plan de estudio recomendado">
        <ol>
          <li>Leé el capítulo completo una vez, sin memorizar.</li>
          <li>Subrayá cinco ideas que obligatoriamente deben aparecer.</li>
          <li>Escribí tu propia versión de 60 a 90 segundos.</li>
          <li>Grabala tres veces y escuchá claridad, velocidad y repeticiones.</li>
          <li>Practicá las seis repreguntas sin leer.</li>
          <li>Realizá la simulación guiada completa.</li>
          <li>Repetí al día siguiente y una semana después.</li>
        </ol>
        <Answer>
          <strong>Capítulo completado cuando:</strong> podés responder la pregunta principal en menos de 90 segundos,
          sostener las repreguntas sin contradecirte y explicar con honestidad tanto tu valor como tus límites.
        </Answer>
      </Section>
    </>
  );
}
