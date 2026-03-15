'use client';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 * @param {string} [props.alt]
 */
export function ProjectSlider({ type, source, alt = 'Hussa AlSaif' }) {
  const image =
    type === 'image' ? (
      <img
        src={source}
        className='object-cover w-full h-full absolute inset-0'
        alt={alt}
      />
    ) : null;
  const video =
    type === 'video' ? (
      <video
        src={source}
        loop
        controls={false}
        muted
        autoPlay
        playsInline
        className='object-cover w-full h-full absolute inset-0'
      />
    ) : null;

  return (
    <Center
      className='relative w-1/4 rounded overflow-hidden'
      style={{
        minWidth: '150px',
        height: '20vw',
        background: 'linear-gradient(135deg, #89BBdf 0%, #a8d4f0 50%, #d4e8f7 100%)',
      }}
    >
      {image}
      {video}
    </Center>
  );
}
