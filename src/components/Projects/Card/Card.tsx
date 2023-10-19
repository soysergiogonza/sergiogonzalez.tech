'use client';

import Image from 'next/image';
import {Projects} from '~/data/projects';

interface Props {
  project: Projects;
}

const Card = ({project}: Props) => {
  console.log('project', project.description);
  return (
    <div className='polygon flex flex-col w-72 rounded-tr-3xl bg-gray-900'>
      <span className='uppercase bg-gray-500 font-bold text-white text-center'>{project.name}</span>
      <div className='w-full h-32 border-2 border-orange-600'>
        <Image className='object-cover h-full w-full' src={project.image} alt='Cetasdi' width={100}
               height={100} />
      </div>
      <div className='flex flex-col gap-3 px-3 py-3'>
        <p className='text-start text-white h-32 font-normal text-base'>
          {project.description}
        </p>
        <div className='flex flex-wrap gap-2 justify-start'>
          {
            project.stack.map((stack: string, index: number) => {
              return (
                <span key={index} className='rounded-full border-2 px-2 border-amber-400'>{stack}</span>
              );
            })
          }
        </div>
        <div className='flex text-black gap-3 font-bold items-center justify-center'>
          <button className='px-3 bg-white'>
            <a href={project.urlGitHub} target='_blank'>GitHub</a>
          </button>
          {
            project.urlPreview.length > 0
              ? (<button className='px-3 bg-white'>
                <a href={project.urlPreview} target='_blank'>Preview</a>
              </button>)
              : null
          }
        </div>
      </div>
    </div>
  );
};

export {Card};