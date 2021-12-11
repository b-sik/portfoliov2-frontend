import React from 'react';
import ProjectCard from './project-card';
import { useProjectsData } from '../../../hooks/post-type-data/use-projects-data';
import { chunk } from 'lodash';
import CardRow from '../card-row';

const ProjectsCards = () => {
	const projectsData = chunk(useProjectsData(), 1);

	return (
		<>
			{projectsData.map((nodes, i) => {
				const rowStart = 2;

				return (
					<CardRow rowStart={rowStart} currentRow={i} key={i}>
						{nodes.map((node, j) => (
							<ProjectCard node={node} key={j}/>
						))}
					</CardRow>
				);
			})}
		</>
	);
};

export default ProjectsCards;
