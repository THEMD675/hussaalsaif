'use client';

import { forwardRef } from 'react';

import { motion } from 'framer-motion';

import { Center } from '@/components';
import { thumbnailOptions } from '@/data';
import { randomId } from '@/utils';

const COLORS = [
  'from-[#89BBdf]/30 to-[#c4e0f5]/50',
  'from-pink-100/50 to-rose-100/50',
  'from-violet-100/50 to-purple-100/50',
  'from-amber-100/50 to-orange-100/50',
];

const MotionComponent = motion(Center);

export const ThumbnailModal = forwardRef(
  function ThumbnailModal({ variants, active, index, ...props }, ref) {
    const items = thumbnailOptions.map(({ title }, i) => {
      const id = randomId();
      return (
        <Center key={id} className='h-full w-full'>
          <div className={`w-full h-full bg-gradient-to-br ${COLORS[i % COLORS.length]} flex items-center justify-center`}>
            <p className='text-2xl font-bold text-gray-400/50'>{title}</p>
          </div>
        </Center>
      );
    });

    return (
      <MotionComponent
        ref={ref}
        className='pointer-events-none fixed left-1/2 top-1/2 h-80 w-80 overflow-hidden rounded bg-secondary-foreground'
        variants={variants}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        {...props}
      >
        <div
          className='relative h-full w-full'
          style={{
            top: `${index * -100}%`,
            transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
          }}
        >
          {items}
        </div>
      </MotionComponent>
    );
  },
);
