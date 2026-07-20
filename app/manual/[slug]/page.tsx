import { notFound } from 'next/navigation';
import { ChapterContent } from '@/components/chapter-content';
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
          <ChapterContent slug={slug} />
        </article>
      </main>
    </div>
  );
}
