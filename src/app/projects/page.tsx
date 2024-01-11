import {projects} from '~/data/projects';
import {CardProject} from '~/components/Projects/CardProject/CardProject';
import {Projects} from '~/interfaces/index';

const Projects = () => {
	return (
		<div
			className="grid gap-5 grid-cols-1 md:grid-cols-2 place-content-center place-items-center auto-cols-max">
			{
				projects?.map((project: Projects, index: number) => {
					return (
						<CardProject key={index} project={project}/>
					);
				})
			}
		</div>
	);
};

export default Projects;
