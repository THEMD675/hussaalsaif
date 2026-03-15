import { Contact as ContactFooter, Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Hussa AlSaif for brand partnerships, campaign collaborations, and business inquiries.',
};

const socials = [
  { name: 'Instagram', handle: '@hussa.ss', href: 'https://www.instagram.com/hussa.ss/', followers: '141K' },
  { name: 'TikTok', handle: '@hussa.502', href: 'https://www.tiktok.com/@hussa.502', followers: '196K' },
  { name: 'YouTube', handle: '@hussaalsaif', href: 'https://www.youtube.com/@hussaalsaif', followers: '' },
  { name: 'Snapchat', handle: 'hussa.alsaif', href: 'https://www.snapchat.com/add/hussa.alsaif', followers: '' },
];

export default function Contact() {
  return (
    <Transition>
      <Navbar />
      <main>
        <section className='min-h-screen pt-32 pb-20'>
          <div className='container'>
            <div className='mx-auto max-w-5xl px-4'>
              <h1
                className='mb-6 font-neue_montreal'
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.1 }}
              >
                Let&apos;s work
                <br />
                <span className='text-primary-foreground'>together</span>
              </h1>
              <p className='mb-16 max-w-xl text-lg text-muted-foreground'>
                Open to brand partnerships, campaign collaborations, event coverage,
                and creative projects. Based in Khobar &amp; Riyadh.
              </p>

              <div className='grid gap-16 lg:grid-cols-2'>
                <div>
                  <h5 className='mb-8 text-xs uppercase tracking-widest text-secondary-foreground'>
                    Get in touch
                  </h5>

                  <div className='mb-12'>
                    <p className='mb-2 text-sm text-muted-foreground'>Business inquiries</p>
                    <a
                      href='mailto:inquiries@hussaalsaif.com'
                      className='text-2xl font-medium transition-colors hover:text-primary-foreground'
                    >
                      inquiries@hussaalsaif.com
                    </a>
                  </div>

                  <div className='mb-12'>
                    <p className='mb-2 text-sm text-muted-foreground'>Location</p>
                    <p className='text-2xl font-medium'>Khobar & Riyadh, Saudi Arabia</p>
                  </div>

                  <div>
                    <p className='mb-2 text-sm text-muted-foreground'>Response time</p>
                    <p className='text-2xl font-medium'>Within 24–48 hours</p>
                  </div>
                </div>

                <div>
                  <h5 className='mb-8 text-xs uppercase tracking-widest text-secondary-foreground'>
                    Follow me
                  </h5>

                  <div className='flex flex-col gap-4'>
                    {socials.map(({ name, handle, href, followers }) => (
                      <a
                        key={name}
                        href={href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group flex items-center justify-between rounded-lg border border-border p-5 transition-all hover:border-foreground hover:bg-foreground hover:text-background'
                      >
                        <div>
                          <p className='text-lg font-medium'>{name}</p>
                          <p className='text-sm text-muted-foreground group-hover:text-background/60'>
                            {handle}
                          </p>
                        </div>
                        {followers && (
                          <span className='text-sm font-medium'>{followers} followers</span>
                        )}
                      </a>
                    ))}
                  </div>

                  <div className='mt-12 rounded-lg bg-muted p-8'>
                    <h4 className='mb-3 text-lg font-medium'>For brands & agencies</h4>
                    <p className='mb-4 text-sm leading-relaxed text-muted-foreground'>
                      Looking for a media kit or rate card? Send a brief to the email above
                      and I&apos;ll get back to you with a tailored proposal for your campaign.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {['Instagram Reels', 'TikTok Videos', 'YouTube', 'Stories', 'UGC', 'Event Coverage'].map((s) => (
                        <span
                          key={s}
                          className='rounded-full border border-border bg-background px-3 py-1 text-xs'
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </Transition>
  );
}
