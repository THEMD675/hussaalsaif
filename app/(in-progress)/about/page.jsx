import { Contact, Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Hussa AlSaif — Saudi content creator & brand ambassador. BA in Media & Communication. 330K+ followers. Partnered with Sephora, Estée Lauder, MAC, Fendi & more.',
};

const brands = [
  'Sephora', 'Estée Lauder', 'MAC', 'Too Faced', 'Sol de Janeiro',
  'Herbal Essences', 'P&G', 'Fendi', 'Level Shoes', 'La Belle',
  'Assaf', 'Laverne', 'ClaraLevel',
];

const stats = [
  { value: '330K+', label: 'Total Followers' },
  { value: '141K', label: 'Instagram' },
  { value: '196K', label: 'TikTok' },
  { value: '13+', label: 'Brand Partners' },
];

export default function About() {
  return (
    <Transition>
      <Navbar />
      <main>
        <section className='min-h-screen pt-32 pb-20'>
          <div className='container'>
            <div className='mx-auto max-w-5xl px-4'>
              <h1
                className='mb-16 font-neue_montreal'
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.1 }}
              >
                Creating content that
                <br />
                <span className='text-primary-foreground'>moves audiences</span>
              </h1>

              <div className='grid gap-16 lg:grid-cols-2'>
                <div>
                  <div className='mb-12 overflow-hidden rounded-lg'>
                    <img
                      src='/images/hero.jpg'
                      alt='Hussa AlSaif'
                      className='w-full object-cover'
                      style={{ aspectRatio: '3/4' }}
                    />
                  </div>
                </div>

                <div className='flex flex-col justify-center'>
                  <p className='mb-8 text-lg leading-relaxed text-muted-foreground'>
                    Hussa AlSaif is a Saudi-based content creator and brand ambassador
                    with a combined following of over 330,000 across Instagram, TikTok,
                    YouTube, and Snapchat.
                  </p>

                  <p className='mb-8 text-lg leading-relaxed text-muted-foreground'>
                    With a Bachelor&apos;s degree in Media & Communication from Imam
                    Abdulrahman Bin Faisal University, she brings a professional
                    foundation to every collaboration — from campaign strategy to
                    content execution.
                  </p>

                  <p className='mb-12 text-lg leading-relaxed text-muted-foreground'>
                    Based between Khobar and Riyadh, she specializes in beauty,
                    lifestyle, and fashion content — bridging global brands with the
                    Saudi and GCC market through authentic, high-engagement storytelling.
                  </p>

                  <div className='grid grid-cols-2 gap-8'>
                    {stats.map(({ value, label }) => (
                      <div key={label}>
                        <p className='text-3xl font-bold'>{value}</p>
                        <p className='mt-1 text-sm text-muted-foreground'>{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='mt-24'>
                <h5 className='mb-8 text-xs uppercase tracking-widest text-secondary-foreground'>
                  Brands I&apos;ve worked with
                </h5>
                <div className='flex flex-wrap gap-4'>
                  {brands.map((brand) => (
                    <span
                      key={brand}
                      className='rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-background'
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              <div className='mt-24'>
                <h5 className='mb-8 text-xs uppercase tracking-widest text-secondary-foreground'>
                  Content pillars
                </h5>
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                  {[
                    { title: 'Beauty & Skincare', desc: 'Product reviews, tutorials, routines. Trusted voice for major beauty brands.' },
                    { title: 'Hair & Styling', desc: 'Curly hair tutorials, color transformations, styling tips for natural hair.' },
                    { title: 'Fashion', desc: 'Event coverage, brand campaigns, seasonal looks and streetwear.' },
                    { title: 'Lifestyle Vlogs', desc: 'Daily vlogs, travel, cooking adventures, and behind-the-scenes.' },
                    { title: 'Brand Campaigns', desc: 'End-to-end campaign content — from concept to delivery across platforms.' },
                    { title: 'Video Production', desc: 'Reels, TikToks, YouTube content — optimized for each platform.' },
                  ].map(({ title, desc }) => (
                    <div
                      key={title}
                      className='rounded-lg border border-border p-6 transition-colors hover:border-foreground'
                    >
                      <h4 className='mb-2 text-lg font-medium'>{title}</h4>
                      <p className='text-sm leading-relaxed text-muted-foreground'>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </Transition>
  );
}
