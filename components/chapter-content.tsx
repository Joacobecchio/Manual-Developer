import { MonederoAuthenticationChapter } from '@/components/chapters/monedero-authentication';
import { MonederoStateDataChapter } from '@/components/chapters/monedero-state-data';

type ChapterContentProps = {
  slug: string;
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="chapter-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function SkillLevel({ children }: { children: React.ReactNode }) {
  return <div className="callout"><strong>Nivel actual:</strong> {children}</div>;
}

function AboutYouChapter() {
  return (
    <>
      <h1 id="pregunta">¿Podés contarme sobre vos?</h1>
      <p>Esta suele ser la primera pregunta de una entrevista. No busca conocer tu biografía completa: busca entender rápidamente quién sos profesionalmente, cómo evolucionaste y qué valor podrías aportar.</p>
      <Section title="Qué intenta evaluar el entrevistador"><p>Evalúa si podés ordenar tu historia, comunicarte con claridad y conectar tu experiencia con el puesto. También mide riesgo: quiere saber si tu transición hacia desarrollo es consistente o improvisada.</p></Section>
      <Section title="Respuesta breve"><div className="callout">Soy QA Manual desde hace aproximadamente tres años y fui construyendo un perfil cada vez más orientado al desarrollo. Estudié fundamentos full stack, empecé a analizar repositorios reales, escribir pruebas unitarias y desarrollar productos propios. Hoy trabajo principalmente con TypeScript, React, Next.js, React Native, Expo y Supabase. Mi experiencia en QA me aporta una mirada fuerte sobre calidad, casos borde y prevención de regresiones.</div></Section>
      <Section title="Respuesta desarrollada"><div className="callout">Soy QA Manual desde hace aproximadamente tres años y, durante ese tiempo, fui desarrollando un perfil cada vez más orientado al desarrollo de software. Antes de trabajar como QA hice cursos introductorios y luego participé durante seis meses en la escuelita de Crombie, donde trabajé con React, Node.js, AWS y fundamentos full stack. En los proyectos que testeaba empecé a descargar los repositorios, estudiar su arquitectura y relacionar el código con las funcionalidades. Con el tiempo comencé a escribir pruebas unitarias y pequeños cambios. Paralelamente construí productos propios: Monedero, publicado en App Store; Editor Académico APA; Prode; y colaboro en Picadito. Hoy trabajo principalmente con TypeScript, React, Next.js, React Native, Expo y Supabase. Mi experiencia como QA me aporta una mirada muy fuerte sobre calidad, casos borde y prevención de regresiones.</div></Section>
      <Section title="Explicación del profesor"><p>Una buena presentación profesional tiene tres actos: origen, evolución y situación actual. Primero explicás cómo comenzaste. Después mostrás qué acciones concretas tomaste para crecer. Finalmente conectás ese recorrido con el puesto al que apuntás.</p><p>QA no es una etapa que debas esconder. Es parte de tu ventaja competitiva: te entrenó para pensar en comportamiento esperado, riesgos, experiencia de usuario y regresiones.</p></Section>
      <Section title="Repreguntas probables"><ul><li>¿Por qué querés pasar de QA a desarrollo?</li><li>¿Cuál fue tu primera contribución técnica en un repositorio real?</li><li>¿Qué ventaja concreta te da tu experiencia como QA?</li><li>¿Cuál de tus proyectos representa mejor tu nivel actual?</li><li>¿Cómo utilizás IA sin depender ciegamente de ella?</li></ul></Section>
      <Section title="Errores comunes"><ul><li>Decir que querés “dejar QA” como si tu experiencia previa no tuviera valor.</li><li>Enumerar tecnologías sin explicar evolución, decisiones o impacto.</li><li>Exagerar experiencia profesional de desarrollo que todavía no tenés.</li><li>Dar una respuesta de cinco minutos sin una estructura clara.</li></ul></Section>
      <Section title="Ejercicio"><p>Explicá tu recorrido durante 90 segundos sin nombrar una tecnología durante los primeros 30. Esto te obliga a hablar de evolución, decisiones, impacto y aprendizaje antes de recitar herramientas.</p><SkillLevel>⭐☆☆☆☆ · Pendiente de primera simulación.</SkillLevel></Section>
    </>
  );
}

function WhyDevelopmentChapter() {
  return (
    <>
      <h1>¿Por qué querés pasar de QA a desarrollo?</h1>
      <p>La respuesta correcta no presenta a QA como un error ni al desarrollo como una moda. Debe mostrar una evolución gradual respaldada por acciones concretas.</p>
      <Section title="Qué intenta evaluar el entrevistador"><p>Quiere saber si entendés el trabajo real de un developer, si la decisión es sostenible y si aceptarías comenzar con responsabilidades acordes a tu experiencia. También busca detectar frustración, rechazo a QA o expectativas poco realistas.</p></Section>
      <Section title="Respuesta recomendada"><div className="callout">Mi interés por desarrollo no nació de un día para otro. Mientras trabajaba como QA empecé a sentir curiosidad por cómo estaban construidas las funcionalidades que probaba. Comencé a revisar repositorios, seguir el flujo de los datos, entender componentes y escribir pruebas unitarias. Después llevé ese aprendizaje a productos propios, especialmente Monedero, que publiqué en App Store. Descubrí que disfruto no solo encontrar problemas, sino diseñar soluciones y construir el producto. No veo mi experiencia en QA como algo que abandono: la considero una base que me ayuda a desarrollar con una mirada más completa sobre calidad y usuario.</div></Section>
      <Section title="Ideas que debe transmitir tu respuesta"><ul><li>La transición fue progresiva y demostrable.</li><li>Conocés la diferencia entre estudiar programación y trabajar en un producto.</li><li>Aceptás que todavía estás creciendo como developer.</li><li>QA mejora tu perfil; no es algo que ocultar.</li><li>Ya construiste, publicaste y mantuviste productos propios.</li></ul></Section>
      <Section title="Repreguntas difíciles"><ul><li>¿Aceptarías un puesto junior después de tres años trabajando en tecnología?</li><li>¿Qué te hace pensar que vas a disfrutar desarrollo a largo plazo?</li><li>¿Por qué no continuás creciendo en automatización?</li><li>¿Qué parte del desarrollo todavía te cuesta más?</li><li>¿Qué harías si el puesto incluye tareas de testing?</li></ul></Section>
      <Section title="Respuesta ante la comparación con automatización"><p>Automatización sigue siendo valiosa para vos y forma parte de tu perfil técnico. La diferencia es que tu objetivo principal está en participar de la construcción del producto: diseñar flujos, implementar funcionalidades, trabajar con datos y tomar decisiones de arquitectura.</p></Section>
      <Section title="Errores comunes"><ul><li>Decir “me cansé de hacer QA”.</li><li>Hablar solamente de mejores salarios.</li><li>Presentarte como developer senior por haber usado IA en proyectos personales.</li><li>Negar que todavía necesitás acompañamiento y revisión de código.</li></ul></Section>
      <Section title="Ejercicio"><p>Respondé en menos de un minuto usando esta estructura: curiosidad inicial, acciones concretas, confirmación mediante proyectos y valor que trasladás desde QA.</p><SkillLevel>⭐☆☆☆☆ · Pendiente de respuesta propia.</SkillLevel></Section>
    </>
  );
}

function MonederoOverviewChapter() {
  return (
    <>
      <h1>¿Cómo presentarías técnicamente Monedero?</h1>
      <p>Monedero es tu proyecto principal porque no quedó como prototipo: resolviste un problema, construiste un producto multiplataforma, lo conectaste a un backend y lo publicaste en App Store.</p>
      <Section title="Respuesta breve de entrevista"><div className="callout">Monedero es una aplicación de finanzas personales desarrollada con React Native, Expo y TypeScript. Permite registrar ingresos y gastos, trabajar con cuentas y tarjetas, manejar ARS y USD, consultar estadísticas y crear objetivos de ahorro. Utilicé Supabase para autenticación, base de datos y seguridad mediante RLS; Zustand para estado global e i18n para internacionalización. Organicé la aplicación con una arquitectura modular para separar UI, lógica y acceso a datos. La publiqué en App Store y actualmente estoy preparando la versión Android.</div></Section>
      <Section title="Problema que resuelve"><p>Busca que una persona pueda registrar y entender sus movimientos financieros sin depender de una planilla compleja ni conectar obligatoriamente sus cuentas bancarias. La carga es manual, pero la interfaz reduce fricción y ofrece una lectura clara del balance, las categorías y la evolución del gasto.</p></Section>
      <Section title="Arquitectura explicada sin humo"><ul><li><strong>Presentación:</strong> pantallas y componentes de React Native.</li><li><strong>Estado:</strong> Zustand para información compartida y estado local cuando no hace falta globalizar.</li><li><strong>Datos:</strong> servicios que encapsulan las consultas a Supabase.</li><li><strong>Backend:</strong> Supabase Auth, PostgreSQL y Row Level Security.</li><li><strong>Plataformas:</strong> Expo permite compartir gran parte del código entre iOS, Android y web.</li><li><strong>Experiencia:</strong> tema claro/oscuro, i18n, skeletons, filtros, búsqueda y feedback visual.</li></ul></Section>
      <Section title="Decisiones técnicas defendibles"><p><strong>Expo:</strong> aceleró configuración, builds y publicación sin impedir el acceso a capacidades nativas necesarias para el alcance actual.</p><p><strong>Supabase:</strong> permitió tener autenticación, PostgreSQL y políticas de seguridad sin construir desde cero un backend completo.</p><p><strong>Zustand:</strong> ofreció un manejo de estado simple y con menos ceremonia que alternativas más pesadas para el tamaño del producto.</p><p><strong>TypeScript:</strong> ayudó a modelar transacciones, cuentas, tarjetas y respuestas del backend, reduciendo errores durante refactors.</p></Section>
      <Section title="Tradeoffs y límites actuales"><ul><li>La aplicación no se conecta con bancos: prioriza control, privacidad y alcance realista.</li><li>Supabase acelera el desarrollo, pero genera dependencia de su plataforma y requiere diseñar correctamente RLS.</li><li>Expo reduce complejidad nativa, aunque algunas integraciones futuras podrían exigir módulos específicos.</li><li>El soporte multiplataforma no significa comportamiento idéntico: Android necesita pruebas reales, no solo que el código compile.</li></ul></Section>
      <Section title="Qué mejoraría con más tiempo"><ul><li>Mayor cobertura automatizada en lógica financiera y flujos críticos.</li><li>Estrategia offline y resolución de conflictos de sincronización.</li><li>Observabilidad de errores y métricas de producto.</li><li>Accesibilidad y pruebas con distintos tamaños de pantalla.</li><li>Separación más estricta entre dominio financiero, infraestructura y UI.</li></ul></Section>
      <Section title="Repreguntas probables"><ul><li>¿Por qué elegiste Supabase y no un backend propio?</li><li>¿Cómo protegés los movimientos de cada usuario?</li><li>¿Cómo manejás el estado global?</li><li>¿Qué diferencias encontraste entre iOS y Android?</li><li>¿Cómo probarías que los balances son correctos?</li><li>¿Qué harías si la aplicación creciera a cien mil usuarios?</li></ul></Section>
      <Section title="Ejercicio"><p>Presentá Monedero en dos minutos. Usá este orden: problema, usuario, funcionalidades principales, arquitectura, decisión importante, tradeoff y próximo paso.</p><SkillLevel>⭐☆☆☆☆ · Pendiente de primera presentación técnica.</SkillLevel></Section>
    </>
  );
}

export function ChapterContent({ slug }: ChapterContentProps) {
  if (slug === 'contame-sobre-vos') return <AboutYouChapter />;
  if (slug === 'por-que-desarrollo') return <WhyDevelopmentChapter />;
  if (slug === 'monedero-overview') return <MonederoOverviewChapter />;
  if (slug === 'monedero-autenticacion') return <MonederoAuthenticationChapter />;
  if (slug === 'monedero-estado-y-datos') return <MonederoStateDataChapter />;
  return null;
}
