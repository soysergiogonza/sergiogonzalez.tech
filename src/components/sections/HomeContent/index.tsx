import Image from 'next/image';

export const HomeContent = () => {
  return (
    <section>
      <article>
        <h3 className='text-orange-600 text-3xl font-bold'>About Me</h3>
        <p>
          Frontend developer with 2+ years of experience, specialized in React, Next.js, JavaScript and TypeScript. I
          work
          with API integration using Rest and Axios, state management with Redux and React-Query. I apply unit testing
          with
          Playwright and with a focus on a clean software architecture. Currently, I am constantly improving my skills
          studying Technology in Software Analysis and Development at SENA with a focus on Frontend Architecture. I am
          passionate about teaching and constant development in IT.
        </p>
      </article>
      <section>
        <h3 className='text-orange-600 text-3xl font-bold'>Experience</h3>
        <article>
          <div className='flex items-center gap-2'>
            <picture>
              <Image src='/EvolutionCode.jpeg' alt='EvolutionCode' width={100} height={100} />
            </picture>
            <div>
              <h4 className='text-2xl font-bold'>Frontend Developer</h4>
              <span>Evolution Code | Full Time</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <span>Sep 2022 - Sep 2023 | 1 year</span>
            <span>Miami, Florida, United States | Remote</span>
          </div>
        </article>
        <article>
          <div className='flex gap-2 items-center'>
            <picture>
              <Image src='/Cetasdi.png' alt='EvolutionCode' width={100} height={100} />
            </picture>
            <div className='flex flex-col'>
              <h4 className='text-2xl font-bold'>Teacher Web Developer</h4>
              <span>Partial Time</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <span>Cetasdi | Partial Time</span>
            <span>November 2020 - November 2021 |  1 year 1 month</span>
            <span>Rionegro, Antioquia, Colombia | On-site</span>
          </div>
        </article>
        <article>
          <div className='flex items-center gap-2'>
            <picture>
              <Image src='/Unisys.jpeg' alt='EvolutionCode' width={100} height={100} />
            </picture>
            <div className='flex flex-col'>
              <h3 className='text-3xl font-bold'>Unisys</h3>
              <span>3 years 3 months</span>
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col'>
                <h4 className='text-2xl font-bold'>Technical Support Representative 3</h4>
                <span>Nov.2020 - Nov.2021 | 1 year 1 month</span>
                <span>Rionegro, Antioquia, Colombia</span>
              </div>
              <div className='flex flex-col'>
                <h4 className='text-2xl font-bold'>Technical Assistant</h4>
                <span>Sep. 2017 - Mar. 2018 | 6 meses</span>
                <span>Rionegro, Antioquia, Colombia</span>
              </div>
            </div>
          </div>
        </article>
      </section>
    
    </section>
  );
};