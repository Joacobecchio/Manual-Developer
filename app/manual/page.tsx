import Link from 'next/link';

export default function ManualPage() {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark">DH</div><div><h1>Developer Handbook</h1><p>Modo estudio</p></div></div>
        <Link className="nav-link" href="/">← Volver al dashboard</Link>
        <div className="nav-title">Capítulo 1</div>
        <a className="nav-link active" href="#pregunta">Contame sobre vos</a>
        <a className="nav-link" href="#respuesta">Respuesta ideal</a>
        <a className="nav-link" href="#teoria">Explicación del tutor</a>
        <a className="nav-link" href="#repreguntas">Repreguntas</a>
        <a className="nav-link" href="#ejercicio">Ejercicio</a>
      </aside>
      <main className="main">
        <article className="article">
          <div className="eyebrow">Presentación profesional · Nivel inicial</div>
          <h1 id="pregunta">¿Podés contarme sobre vos?</h1>
          <p>Esta suele ser la primera pregunta de una entrevista. No busca conocer tu biografía completa: busca entender rápidamente quién sos profesionalmente, cómo evolucionaste y qué valor podrías aportar.</p>

          <h2 id="respuesta">Respuesta recomendada</h2>
          <div className="callout">
            Soy QA Manual desde hace aproximadamente tres años y, durante ese tiempo, fui desarrollando un perfil cada vez más orientado al desarrollo de software. Antes de trabajar como QA hice cursos introductorios y luego participé durante seis meses en la escuelita de Crombie, donde trabajé con React, Node.js, AWS y fundamentos full stack. En los proyectos que testeaba empecé a descargar los repositorios, estudiar su arquitectura y relacionar el código con las funcionalidades. Con el tiempo comencé a escribir pruebas unitarias y pequeños cambios. Paralelamente construí productos propios: Monedero, publicado en App Store; Editor Académico APA, usado por estudiantes; Prode; y colaboro en Picadito. Hoy trabajo principalmente con TypeScript, React, Next.js, React Native, Expo y Supabase. Mi experiencia como QA me aporta una mirada muy fuerte sobre calidad, casos borde y prevención de regresiones.
          </div>

          <h2 id="teoria">Explicación del profesor</h2>
          <p>Una buena presentación profesional tiene tres actos: origen, evolución y situación actual. Primero explicás cómo comenzaste. Después mostrás qué acciones concretas tomaste para crecer. Finalmente conectás ese recorrido con el puesto al que apuntás.</p>
          <p>La clave es no venderte como alguien que “quiere escapar de QA”. QA forma parte de tu ventaja competitiva. Te entrenó para pensar en calidad, comportamiento esperado, riesgos y experiencia de usuario. El mensaje correcto es: evolucionaste desde QA hacia un perfil de construcción de producto.</p>

          <h2 id="repreguntas">Repreguntas probables</h2>
          <ul>
            <li>¿Por qué querés pasar de QA a desarrollo?</li>
            <li>¿Cuál fue tu primera contribución técnica en un repositorio real?</li>
            <li>¿Qué ventaja concreta te da tu experiencia como QA?</li>
            <li>¿Cuál de tus proyectos representa mejor tu nivel actual?</li>
            <li>¿Cómo utilizás IA sin depender ciegamente de ella?</li>
          </ul>

          <h2 id="ejercicio">Ejercicio</h2>
          <p>Explicá tu recorrido durante 90 segundos sin nombrar una tecnología durante los primeros 30. Eso te obliga a hablar de evolución, decisiones, impacto y aprendizaje antes de recitar herramientas.</p>
          <div className="callout"><strong>Nivel actual:</strong> ⭐☆☆☆☆ · Pendiente de primera respuesta grabada o simulada.</div>
        </article>
      </main>
    </div>
  );
}
