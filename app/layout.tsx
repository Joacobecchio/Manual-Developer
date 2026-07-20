import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Developer Interview Handbook',
  description: 'Manual vivo para pasar de QA a Frontend, Mobile o Full Stack Developer.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
