import {Card} from '~/components/Projects/Card/Card';
import {Projects, projects} from '~/data/projects';
import {CardProject} from '~/components/components/card-project';

const Projects = () => {
  return (
    <div
      className='grid gap-5 grid-cols-1 place-content-center place-items-center grid-cols-4 auto-cols-max'>
      {
        projects?.map((project: Projects, index: number) => {
          return (
            <CardProject key={index} />
          );
        })
      }
    </div>
  );
};

export default Projects;
