import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://movel-estrutura.sites.openai.com'),
  title: 'Móvel Estrutura | Estruturas para eventos em BH',
  description: 'Locação e venda de gradis, praticáveis, box trusses e fechamentos para eventos em Belo Horizonte.',
  openGraph: { title: 'Móvel Estrutura', description: 'Estrutura que move seu evento.', type: 'website', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Móvel Estrutura', description: 'Estrutura que move seu evento.', images: ['/og.png'] },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
