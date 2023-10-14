'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section className='hero' aria-label='hero'>
      <div className='relative rounded-lg shadow-xl sm:gap-4'>
        <div
          className='bg-gray-950 z-10 mt-2 w-full flex flex-col md:flex-row items-center gap-4 border-2 rounded-2xl border-b-cyan-50 p-4'>
          <Image src='/profile.jpeg' width={100} height={100} alt='imagen'
                 className='border-2 border-white rounded-full' />
          <div>
            <h1 className='text-4xl font-bold text-white'>Sergio González Sánchez</h1>
            <h2 className='text-base font-light text-white'>Frontend Developer | Frontend Architect</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export {Hero};