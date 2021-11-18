import React from 'react';
import ProjectCard from './project-card';
import { useProjectsData } from '../../../hooks/post-type-data/use-projects-data';

const ProjectsCards = () => {
	const projectsData = useProjectsData();

	return (
		<>
			{projectsData.map((node, i) => {
				const rowStart = 2;

				return (
					<div
						key={i}
						className={`col-span-full md:col-start-3 md:col-end-11 row-start-${
							rowStart + i
						} row-end-${
							rowStart + 1 + i
						} flex items-center justify-around my-6`}
					>
						<ProjectCard node={node} />
					</div>
				);
			})}
		</>
	);
};

export default ProjectsCards;
