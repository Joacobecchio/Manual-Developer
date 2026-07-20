import { notFound } from 'next/navigation';
import { ManualSidebar } from '@/components/manual-sidebar';
import { chapters, getChapter } from '@/lib/handbook';

export function generateStaticParams() {
  return chapters
    .filter((chapter) => chapter.status === 'Disponible')
    .map((chapter) => ({ slug: chapter.slug }));
}

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = getChapter(slug);

  if (!chapter || chapter.status !== 'Disponible') notFound();

  return (
    <div className="shell">
      <ManualSidebar activeSlug={slug} />
      <main className="main">
        <article className="article">
          <div className="eyebrow">{chapter.section} · Nivel {chapter.level}</div>
          <h1 id="pregunta">¿Podés contarme sobre vos?</h1>
          <p>
            Esta suele ser la primera pregunta de una entrevista. No busca conocer tu biografía completa:
            busca entender rápidamente quién sos profesionalmente, cómo evolucionaste y qué valor podrías aportar.
          </p>

          <h2>Qué intenta evaluar el entrevistador</h2>
          <p>
            Evalúa si podés ordenar tu historia, comunicarte con claridad y conectar tu experiencia con el puesto.
            También mide riesgo: quiere saber si tu transición hacia desarrollo es consistente o improvisada.
          </p>

          <h2>Respuesta breve</h2>
          <div className="callout">
            Soy QA Manual desde hace aproximadamente tres años y fui construyendo un perfil cada vez más orientado
            al desarrollo. Estudié React, Node.js, AWS y fundamentos full stack; luego empecé a analizar repositorios,
            escribir pruebas unitarias y desarrollar productos propios. Hoy trabajo principalmente con TypeScript,
            React, Next.js, React Native, Expo y Supabase. Mi experiencia en QA me aporta una mirada fuerte sobre
            calidad, casos borde y prevención de regresiones.
          </div>

          <h2>Respuesta desarrollada</h2>
          <div className="callout">
            Soy QA Manual desde hace aproximadamente tres años y, durante ese tiempo, fui desarrollando un perfil
            cada vez más orientado al desarrollo de software. Antes de trabajar como QA hice cursos introductorios y
            luego participé durante seis meses en la escuelita de Crombie, donde trabajé con React, Node.js, AWS y
            fundamentos full stack. En los proyectos que testeaba empecé a descargar los repositorios, estudiar su
            arquitectura y relacionar el código con las funcionalidades. Con el tiempo comencé a escribir pruebas
            unitarias y pequeños cambios. Paralelamente construí productos propios: Monedero, publicado en App Store;
            Editor Académico APA; Prode; y colaboro en Picadito. Hoy trabajo principalmente con TypeScript, React,
            Next.js, React Native, Expo y Supabase. Mi experiencia como QA me aporta una mirada muy fuerte sobre
            calidad, casos borde y prevención de regresiones.
          </div>

          <h2>Explicación del profesor</h2>
          <p>
            Una buena presentación profesional tiene tres actos: origen, evolución y situación actual. Primero
            explicás cómo comenzaste. Después mostrás qué acciones concretas tomaste para crecer. Finalmente conectás
            ese recorrido con el puesto al que apuntás.
          </p>
          <p>
            QA no es una etapa que debas esconder. Es parte de tu ventaja competitiva: te entrenó para pensar en
            comportamiento esperado, riesgos, experiencia de usuario y regresiones.
          </p>

          <h2>Repreguntas probables</h2>
          <ul>
            <li>¿Por qué querés pasar de QA a desarrollo?</li>
            <li>¿Cuál fue tu primera contribución técnica en un repositorio real?</li>
            <li>¿Qué ventaja concreta te da tu experiencia como QA?</li>
            <li>¿Cuál de tus proyectos representa mejor tu nivel actual?</li>
            <li>¿Cómo utilizás IA sin depender ciegamente de ella?</li>
          </ul>

          <h2>Errores comunes</h2>
          <ul>
            <li>Decir que querés “dejar QA” como si tu experiencia previa no tuviera valor.</li>
            <li>Enumerar tecnologías sin explicar evolución, decisiones o impacto.</li>
            <li>Exagerar experiencia profesional de desarrollo que todavía no tenés.</li>
            <li>Dar una respuesta de cinco minutos sin una estructura clara.</li>
          </ul>

          <h2>Ejercicio</h2>
          <p>
            Explicá tu recorrido durante 90 segundos sin nombrar una tecnología durante los primeros 30. Esto te
            obliga a hablar de evolución, decisiones, impacto y aprendizaje antes de recitar herramientas.
          </p>
          <div className="callout"><strong>Nivel actual:</strong> ⭐☆☆☆☆ · Pendiente de primera simulación.</div>
        </article>
      </main>
    </div>
  );
}
