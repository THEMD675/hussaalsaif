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
    'Saudi-based content creator and brand ambassador. Beauty, lifestyle, and fashion content across Instagram, TikTok, YouTube, and Snapchat. Based in Riyadh.',
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
