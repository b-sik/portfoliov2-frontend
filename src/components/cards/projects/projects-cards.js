import React from 'react';
import ProjectCard from './project-card';
import { useProjectsData } from '../../../hooks/post-type-data/use-projects-data';
import { chunk } from 'lodash';
import { isMobileOnly } from 'react-device-detect';
import CardRow from '../card-row';

const ProjectsCards = () => {
	const projectsData = useProjectsData();

	/**
	 * Determines num of columns.
	 */
	const chunked = chunk(projectsData, 1);

	return (
		<>
			{chunked.map((nodes, i) => {
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
