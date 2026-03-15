import { Contact, Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work',
  description:
    'Portfolio of brand collaborations and content campaigns by Hussa AlSaif. Sephora, Estée Lauder, MAC, Too Faced, Fendi & more.',
};

const projects = [
  {
    brand: 'Sephora Collection',
    type: 'Paid Partnership',
    platform: 'Instagram',
    description: 'Lip tint launch campaign — product showcase reel with natural beauty styling.',
    image: '/images/beauty-editorials.jpg',
    category: 'Beauty',
  },
  {
    brand: 'Too Faced x Sephora ME',
    type: 'Paid Partnership',
    platform: 'TikTok',
    description: 'Lip & cheek combo campaign — daily routine style content for Middle East launch.',
    image: '/images/brand-campaigns.jpg',
    category: 'Beauty',
  },
  {
    brand: 'Herbal Essences',
    type: 'Paid Partnership',
    platform: 'TikTok',
    description: 'Hair color care campaign — sulfate-free shampoo series, multiple deliverables.',
    image: '/images/gallery-6.jpg',
    category: 'Hair',
  },
  {
    brand: 'Fendi',
    type: 'Brand Feature',
    platform: 'Instagram',
    description: 'FW25 collection — fashion editorial shoot with product placement.',
    image: '/images/gallery-8.jpg',
    category: 'Fashion',
  },
  {
    brand: 'Estée Lauder',
    type: 'Campaign',
    platform: 'Multi-platform',
    description: 'Skincare routine content featuring hero products for the Saudi market.',
    image: '/images/event-coverage.jpg',
    category: 'Beauty',
  },
  {
    brand: 'MAC Cosmetics',
    type: 'Campaign',
    platform: 'Instagram & TikTok',
    description: 'Makeup tutorial series showcasing seasonal collections.',
    image: '/images/gallery-5.jpg',
    category: 'Beauty',
  },
  {
    brand: 'Sol de Janeiro',
    type: 'Paid Partnership',
    platform: 'Instagram',
    description: 'Body care routine content for GCC market launch.',
    image: '/images/gallery-4.jpg',
    category: 'Lifestyle',
  },
  {
    brand: 'Level Shoes',
    type: 'Campaign',
    platform: 'Instagram',
    description: 'Fashion content and event coverage for seasonal drops.',
    image: '/images/gallery-7.jpg',
    category: 'Fashion',
  },
];

export default function Work() {
  return (
    <Transition>
      <Navbar />
      <main>
        <section className='min-h-screen pt-32 pb-20'>
          <div className='container'>
            <div className='mx-auto max-w-6xl px-4'>
              <h1
                className='mb-6 font-neue_montreal'
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.1 }}
              >
                Selected work
              </h1>
              <p className='mb-16 max-w-xl text-lg text-muted-foreground'>
                A selection of brand collaborations and campaigns across beauty,
                fashion, and lifestyle.
              </p>

              <div className='grid gap-8 md:grid-cols-2'>
                {projects.map(({ brand, type, platform, description, image, category }) => (
                  <div
                    key={brand}
                    className='group cursor-pointer overflow-hidden rounded-lg border border-border transition-all hover:border-foreground'
                  >
                    <div className='relative overflow-hidden'>
                      <img
                        src={image}
                        alt={brand}
                        className='w-full object-cover transition-transform duration-700 group-hover:scale-105'
                        style={{ aspectRatio: '16/10' }}
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100' />
                      <span className='absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-sm'>
                        {category}
                      </span>
                    </div>
                    <div className='p-6'>
                      <div className='mb-3 flex items-center justify-between'>
                        <h3 className='text-xl font-medium'>{brand}</h3>
                        <span className='text-xs text-muted-foreground'>{platform}</span>
                      </div>
                      <p className='mb-3 text-sm leading-relaxed text-muted-foreground'>
                        {description}
                      </p>
                      <span className='text-xs font-medium uppercase tracking-wider text-primary-foreground'>
                        {type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className='mt-24 rounded-lg border border-border p-12 text-center'>
                <h3
                  className='mb-4 font-neue_montreal'
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                >
                  Want to collaborate?
                </h3>
                <p className='mx-auto mb-8 max-w-md text-muted-foreground'>
                  I&apos;m always open to new brand partnerships and creative campaigns.
                  Let&apos;s create something that resonates with your audience.
                </p>
                <a
                  href='mailto:inquiries@hussaalsaif.com'
                  className='inline-block rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80'
                >
                  inquiries@hussaalsaif.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </Transition>
  );
}
