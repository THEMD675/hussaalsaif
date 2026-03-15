import Link from 'next/link';

import { Center } from '@/components';

/** @type {import('next').Metadata} */
export const metadata = {
  title: '404',
  description: 'Page not found — Hussa AlSaif',
};

export default function NotFound() {
  return (
    <Center className='h-screen'>
      <div className='select-none text-center'>
        <h1 className='text-[max(9.5em,16vw)]'>404</h1>
        <p className='mb-8 text-lg text-muted-foreground'>This page doesn&apos;t exist</p>
        <Link
          href='/'
          className='inline-block rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80'
        >
          Back to home
        </Link>
      </div>
    </Center>
  );
}
