'use client';

export function NavbarBrand() {
  return (
    <div className='group flex cursor-pointer pb-5'>
      <div className='relative ms-2 flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-expo group-hover:pe-8'>
        <h5 className='transition-transform duration-500 ease-in-expo group-hover:-translate-x-full'>
          Hussa
        </h5>
        <h5 className='ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-12'>
          AlSaif
        </h5>
        <h5 className='absolute left-20 ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-12'>
          .com
        </h5>
      </div>
    </div>
  );
}
