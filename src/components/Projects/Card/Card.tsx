import Image from 'next/image';

export const Card = () => {
  return (
    <div className='absolute flex items-center justify-center top-44 left-1/4'>
      <div className='card hover:cursor-pointer flex items-center justify-center w-64 h-32 rounded-2xl'>
        <Image className='w-full rounded-2xl' src='/Cetasdi.png' alt='Banner' width={100} height={100} />
      </div>
      <div
        className='card2 transition-all duration-[400ms] ease-in-out hover:h-72  -z-10 w-60 h-32 absolute rounded-2xl bg-red-950'>
        <div className='h-32 flex items-center justify-center'>
          Hola
        </div>
        <div className='bg-blue-500 absolute flex items-center justify-center top-0 w-full h-32 ease-in-out'>
          Chao
        </div>
        <div
          className='card3 flex justify-center items-center w-full h-8 absolute bg-orange-600 text-white text-xs font-bold rounded-b-2xl bottom-0 transition ease-in-out'>
          ELISA PORTFOLIO
        </div>
      </div>
    </div>
  );
};