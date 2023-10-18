import Image from 'next/image';

const Card = () => {
  return (
    <div className='polygon flex flex-col w-72 rounded-tr-3xl bg-gray-900'>
      <span className='uppercase bg-gray-500 font-bold text-white text-center'>Elisa Portfolio</span>
      <div className='w-full'>
        <Image className='w-full' src='/elisa.png' alt='Cetasdi' width={100} height={100} />
      </div>
      <div className='flex flex-col gap-3 px-3 py-3'>
        <p className='text-start text-white font-normal text-base'>
          Elisa&apos;s Portfolio is a project that showcases my web development skills and knowledge. I used Flexbox CSS
          to
          create an attractive and responsive design.
        </p>
        <div className='flex flex-wrap gap-2 justify-start'>
          <span className='rounded-full border-2 px-2 border-amber-400'>HTML</span>
          <span className='rounded-full border-2 px-2 border-amber-400'>CSS</span>
          <span className='rounded-full border-2 px-2 border-amber-400'>JS</span>
        </div>
        <div className='flex text-black gap-3 font-bold items-center justify-center'>
          <button className='px-3 bg-white'>GitHub</button>
          <button className='px-3 bg-white'>Preview</button>
        </div>
      </div>
    </div>
  );
};

export {Card};