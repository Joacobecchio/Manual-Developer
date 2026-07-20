import Link from 'next/link';
import { ManualSidebar } from '@/components/manual-sidebar';
import { chapters } from '@/lib/handbook';

export default function ManualPage() {
  return (
    <div className="shell">
      <ManualSidebar />
      <main className="main">
        <div className="topbar">
          <div>
            <div className="eyebrow">Ruta de formación</div>
            <h1 className="page-title">Capítulos del handbook</h1>
          </div>
          <span className="badge">{chapters.filter((chapter) => chapter.status === 'Disponible').length} disponible</span>
        </div>

        <section className="chapter-grid">
          {chapters.map((chapter, index) => {
            const available = chapter.status === 'Disponible';
            const content = (
              <article className={available ? 'chapter-card' : 'chapter-card disabled'}>
                <div className="chapter-meta">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{chapter.section}</span>
                </div>
                <h2>{chapter.title}</h2>
                <p>{chapter.description}</p>
                <div className="chapter-footer">
                  <span>Nivel {chapter.level}</span>
                  <strong>{chapter.status}</strong>
                </div>
                <div className="progress"><div style={{ width: `${chapter.progress}%` }} /></div>
              </article>
            );

            return available ? (
              <Link href={`/manual/${chapter.slug}`} key={chapter.slug}>{content}</Link>
            ) : (
              <div key={chapter.slug}>{content}</div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
