import Image from 'next/image';

export const HomeContent = () => {
  return (
    <section className='flex flex-col gap-8'>
      <article className='flex flex-col gap-2'>
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
      <section className='flex flex-col gap-8'>
        <h3 className='text-orange-600 text-3xl font-bold'>Experience</h3>
        <article>
          <div className='flex items-end gap-3'>
            <picture>
              <Image src='/EvolutionCode.jpeg' alt='EvolutionCode' width={100} height={100} />
            </picture>
            <div>
              <h4 className='text-2xl font-bold'>Frontend Developer</h4>
              <span>Evolution Code | Full Time</span>
            </div>
          </div>
          <div className='flex flex-col ml-28 mt-2'>
            <span>September 2022 - September 2023 | 1 year</span>
            <span>Miami, Florida, United States | Remote</span>
          </div>
        </article>
        <article>
          <div className='flex items-end gap-3'>
            <picture>
              <Image src='/Cetasdi.png' alt='Cetasdi' width={100} height={100} />
            </picture>
            <div className='flex flex-col'>
              <h4 className='text-2xl font-bold'>Teacher Web Developer</h4>
              <span>Cetasdi | Partial Time</span>
            </div>
          </div>
          <div className='flex flex-col ml-28 mt-2'>
            <span>November 2020 - November 2021 |  1 year 1 month</span>
            <span>Rionegro, Antioquia, Colombia | On-site</span>
          </div>
        </article>
        <article>
          <div className='flex items-end gap-3'>
            <picture>
              <Image src='/Unisys.jpeg' alt='EvolutionCode' width={100} height={100} />
            </picture>
            <div className='flex flex-col'>
              <h3 className='text-3xl font-bold'>Unisys</h3>
              <span>3 years 3 months</span>
            </div>
          </div>
          <div>
            <div className='flex flex-col ml-28 mt-2 gap-4'>
              <div className='flex flex-col'>
                <h4 className='text-2xl font-bold'>Technical Support Representative 3</h4>
                <span>April 2018 - November 2020 | 2 years 8 months</span>
                <span>Rionegro, Antioquia, Colombia</span>
              </div>
              <div className='flex flex-col'>
                <h4 className='text-2xl font-bold'>Technical Assistant</h4>
                <span>September 2017 - March 2018 | 6 months</span>
                <span>Rionegro, Antioquia, Colombia</span>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className='flex flex-col gap-8'>
        <h3 className='text-orange-600 text-3xl font-bold'>Education</h3>
        <article>
          <div className='flex items-end gap-3'>
            <picture>
              <Image src='/SENA.jpeg' alt='SENA' width={100} height={100} />
            </picture>
            <div>
              <h4 className='text-2xl font-bold'>Servicio Nacional de Aprendizaje (SENA)</h4>
              <span>SOFTWARE ANALYSIS AND DEVELOPMENT</span>
            </div>
          </div>
          <div className='flex flex-col ml-28 mt-2'>
            <span>May 2023 - August 2025</span>
            <span>Medellín, Colombia</span>
          </div>
        </article>
        <article>
          <div className='flex items-end gap-3'>
            <picture>
              <Image src='/Cetasdi.png' alt='Cetasdi' width={100} height={100} />
            </picture>
            <div className='flex flex-col'>
              <h4 className='text-2xl font-bold'>Cetasdi</h4>
              <span>Labor technique by competencies in computer systems</span>
            </div>
          </div>
          <div className='flex flex-col ml-28 mt-2'>
            <span>January 2016 - June 2018</span>
            <span>Rionegro, Antioquia, Colombia</span>
          </div>
        </article>
      </section>
      <section className='flex flex-col gap-8'>
        <h3 className='text-orange-600 text-3xl font-bold'>Courses</h3>
        <article>
          <div className='flex items-end gap-3'>
            <picture>
              <Image src='/DevTalles.jpeg' alt='EvolutionCode' width={100} height={100} />
            </picture>
            <div className='flex flex-col'>
              <h3 className='text-3xl font-bold'>DevTalles</h3>
              <span>2 Courses</span>
            </div>
          </div>
          <div className='flex flex-col ml-28 mt-2 gap-4'>
            <div className='flex flex-col'>
              <h4 className='text-2xl font-bold'>React Query</h4>
              <span>September 2023</span>
              <a href='https://sergiogonzalez.co'>Show Credential</a>
            </div>
            <div className='flex flex-col'>
              <h4 className='text-2xl font-bold'>React Query</h4>
              <span>September 2023</span>
              <a href='https://sergiogonzalez.co'>Show Credential</a>
            </div>
          </div>
        </article>
        <article>
          <div className='flex items-end gap-3'>
            <picture>
              <Image src='/Platzi.jpeg' alt='Platzi' width={100} height={100} />
            </picture>
            <div className='flex flex-col'>
              <h3 className='text-3xl font-bold'>Platzi</h3>
              <span>2 Courses</span>
            </div>
          </div>
          <div className='flex flex-col ml-28 mt-2 gap-4'>
            <div className='flex flex-col'>
              <h4 className='text-2xl font-bold'>Curso de Automatización de Test con Playwright</h4>
              <span>June 2023</span>
              <a href='https://sergiogonzalez.co'>Show Credential</a>
            </div>
            <div className='flex flex-col'>
              <h4 className='text-2xl font-bold'>Curso de Fundamentos de TypeScript</h4>
              <span>January 2023</span>
              <a href='https://sergiogonzalez.co'>Show Credential</a>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};