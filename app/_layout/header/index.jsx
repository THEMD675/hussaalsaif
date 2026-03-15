'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import Image from 'next/image';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden text-background'
      style={{ background: 'linear-gradient(135deg, #89BBdf 0%, #a8d4f0 30%, #f0f7fc 100%)' }}
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      {/* Placeholder gradient - replace with her actual hero photo */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30' />

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Hussa AlSaif
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>Content Creator</span>
              <span className='block'>&amp; Brand Ambassador</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
