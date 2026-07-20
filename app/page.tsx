import Link from 'next/link';

const sections = [
  { title: 'Presentación profesional', text: 'Tu historia, propuesta de valor y respuestas para RRHH.', progress: 18 },
  { title: 'Monedero', text: 'Arquitectura mobile, Expo, Supabase, offline, testing y escalabilidad.', progress: 8 },
  { title: 'Fundamentos técnicos', text: 'React, TypeScript, bases de datos, arquitectura y buenas prácticas.', progress: 4 },
];

export default function HomePage() {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark">DH</div><div><h1>Developer Handbook</h1><p>QA → Developer</p></div></div>
        <div className="nav-title">Principal</div>
        <Link className="nav-link active" href="/">Dashboard</Link>
        <Link className="nav-link" href="/manual">Empezar a estudiar</Link>
        <div className="nav-title">Proyectos</div>
        {['Monedero', 'Editor APA', 'Prode', 'Picadito'].map((item) => <span className="nav-link" key={item}>{item}</span>)}
        <div className="nav-title">Entrenamiento</div>
        {['Preguntas técnicas', 'Mock interviews', 'Glosario'].map((item) => <span className="nav-link" key={item}>{item}</span>)}
      </aside>
      <main className="main">
        <div className="topbar"><input className="search" placeholder="Buscar conceptos, preguntas o proyectos..." /><span className="badge">Manual vivo · v0.1</span></div>
        <section className="hero">
          <div className="eyebrow">Developer Interview Handbook</div>
          <h2>Aprender a pensar y hablar como developer.</h2>
          <p>Una plataforma de estudio construida alrededor de proyectos reales. Cada tema combina preguntas de entrevista, respuestas recomendadas, teoría, repreguntas, ejercicios y feedback.</p>
          <div className="actions"><Link className="button" href="/manual">Continuar formación</Link><a className="button secondary" href="https://github.com/Joacobecchio/Manual-Developer">Ver repositorio</a></div>
        </section>
        <section className="grid">
          {sections.map((section) => <article className="card" key={section.title}><span>En progreso</span><h3>{section.title}</h3><p>{section.text}</p><div className="progress"><div style={{ width: `${section.progress}%` }} /></div></article>)}
        </section>
      </main>
    </div>
  );
}
