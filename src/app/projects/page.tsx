import {Card} from '~/components/Projects/Card/Card';
import {Projects, projects} from '~/data/projects';

const Projects = () => {
  return (
    <div
      className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center grid-cols-4 auto-cols-max'>
      {
        projects?.map((project: Projects, index: number) => {
          return (
            <Card project={project} key={index} />
          );
        })
      }
    </div>
  );
};

export default Projects;
