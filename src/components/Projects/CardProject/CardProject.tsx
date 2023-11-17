'use client';
import React from 'react';
import Image from 'next/image';
import {Projects} from '~/interfaces/index';

interface Props {
  project: Projects;
}

export const CardProject = ({project}: Props) => {
  return (
    <div
      className='rounded-md gap-y-6 sm:gap-y-8 w-full flex flex-col hover:scale-105 transition duration-300 ease-in-out bg-white delay-150 transform shadow-lg text-card-foreground'>
      <div className='rounded-md border-2 m-1 p-8 bg-gray-200 dark:bg-gray-800'>
        <div
          className='tracking-tight font-bold leading-none text-2xl text-black dark:text-white'>
          {project.name}
        </div>
        <div className='text-gray-600 dark:text-gray-300 text-lg'>
          {project.description}
        </div>
      </div>
      <div className='p-4 rounded-md overflow-hidden'>
        <Image
          alt='Project Image'
          className='object-contain w-full h-full rounded max-h-96'
          src={project.image}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

