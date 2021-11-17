import React from 'react';
import Card from './card';
import { useProjectsData } from '../../hooks/use-projects-data';

const ProjectsCards = () => {
	const projectsData = useProjectsData();

	console.log(projectsData)
	const rowStart = 2;

	return (
		<>
			{projectsData.map((node, i) => (
				<div
					key={i}
					className={`col-span-full md:col-start-2 md:col-end-12 row-start-${
						rowStart + i
					} row-end-${
						rowStart + 1 + i
					} flex items-center justify-around my-6`}
				>
					<Card node={node} />
				</div>
			))}
		</>
	);
};

export default ProjectsCards;
