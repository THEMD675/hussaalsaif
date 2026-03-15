import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Hussa AlSaif | Content Creator & Brand Ambassador',
  description:
    'Saudi content creator & brand ambassador. Partnered with Sephora, Estée Lauder, MAC, Too Faced, Fendi, P&G & more. 330K+ followers. Based in Khobar & Riyadh.',
};

export default function Home() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Thumbnail />
        <Project />
      </main>
      <Contact />
    </Transition>
  );
}
