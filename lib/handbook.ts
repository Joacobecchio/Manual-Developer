export type ChapterStatus = 'Disponible' | 'Próximamente';

export type Chapter = {
  slug: string;
  section: string;
  title: string;
  description: string;
  level: string;
  status: ChapterStatus;
  progress: number;
};

export const chapters: Chapter[] = [
  {
    slug: 'contame-sobre-vos',
    section: 'Presentación profesional',
    title: 'Contame sobre vos',
    description: 'Construí una presentación profesional honesta, clara y orientada al puesto.',
    level: 'Inicial',
    status: 'Disponible',
    progress: 35,
  },
  {
    slug: 'por-que-desarrollo',
    section: 'Presentación profesional',
    title: '¿Por qué querés pasar a desarrollo?',
    description: 'Explicá la transición desde QA sin negar tu experiencia previa ni sonar improvisado.',
    level: 'Inicial',
    status: 'Disponible',
    progress: 20,
  },
  {
    slug: 'monedero-overview',
    section: 'Monedero',
    title: 'Presentación técnica de Monedero',
    description: 'Aprendé a explicar el problema, la arquitectura, las decisiones y los tradeoffs del proyecto.',
    level: 'Intermedio',
    status: 'Disponible',
    progress: 20,
  },
  {
    slug: 'monedero-autenticacion',
    section: 'Monedero',
    title: 'Autenticación y seguridad',
    description: 'Defendé las decisiones de autenticación, sesiones, proveedores OAuth y protección de datos.',
    level: 'Intermedio',
    status: 'Disponible',
    progress: 15,
  },
  {
    slug: 'monedero-estado-y-datos',
    section: 'Monedero',
    title: 'Estado, datos y sincronización',
    description: 'Explicá cómo se organizan el estado local, Supabase, filtros y actualización de la interfaz.',
    level: 'Intermedio',
    status: 'Próximamente',
    progress: 0,
  },
];

export function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}
