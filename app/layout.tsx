import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://movel-estrutura.sites.openai.com'),
  title: 'Locação de Estruturas para Eventos em BH | Móvel Estrutura',
  description: 'Locação e venda de gradis, praticáveis, box truss e fechamentos em tecido para eventos em Belo Horizonte e Minas Gerais. Solicite um orçamento.',
  openGraph: { title: 'Móvel Estrutura', description: 'Estrutura que move seu evento.', type: 'website', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Móvel Estrutura', description: 'Estrutura que move seu evento.', images: ['/og.png'] },
};
const organization = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness',
  name: 'Móvel Estrutura', url: 'https://movel-estrutura.contatohelthon.chatgpt.site',
  email: 'movelestrutura@gmail.com',
  description: 'Locação e venda de estruturas para eventos, incluindo gradis, praticáveis, box truss e fechamentos em tecido.',
  areaServed: [{ '@type': 'City', name: 'Belo Horizonte' }, { '@type': 'State', name: 'Minas Gerais' }],
  sameAs: ['https://www.instagram.com/movelestrutura/'],
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}}/>{children}</body></html>}
