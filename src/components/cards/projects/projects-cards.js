import React from 'react';
import ProjectCard from './project-card';
import { useProjectsData } from '../../../hooks/post-type-data/use-projects-data';
import CardRow from '../card-row';

const ProjectsCards = () => {
	const projectsData = useProjectsData();

	return (
		<>
			{projectsData.map((node, i) => {
				const rowStart = 2;

				return (
					<CardRow rowStart={rowStart} currentRow={i} key={i}>
						<ProjectCard node={node} />
					</CardRow>
				);
			})}
		</>
	);
};

export default ProjectsCards;
