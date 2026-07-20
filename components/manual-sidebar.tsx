import Link from 'next/link';
import { chapters } from '@/lib/handbook';

export function ManualSidebar({ activeSlug }: { activeSlug?: string }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">DH</div>
        <div>
          <h1>Developer Handbook</h1>
          <p>Modo estudio</p>
        </div>
      </div>

      <Link className="nav-link" href="/">← Dashboard</Link>
      <Link className={!activeSlug ? 'nav-link active' : 'nav-link'} href="/manual">
        Todos los capítulos
      </Link>

      <div className="nav-title">Formación</div>
      {chapters.map((chapter) => (
        <Link
          className={activeSlug === chapter.slug ? 'nav-link active' : 'nav-link'}
          href={chapter.status === 'Disponible' ? `/manual/${chapter.slug}` : '/manual'}
          key={chapter.slug}
        >
          <span>{chapter.title}</span>
          {chapter.status !== 'Disponible' && <small className="nav-status">Próximamente</small>}
        </Link>
      ))}
    </aside>
  );
}
