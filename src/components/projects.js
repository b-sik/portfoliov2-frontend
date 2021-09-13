import React from 'react';
import { __ } from '@wordpress/i18n';

import Project from './project';

const chunk = require(`lodash/chunk`);

const config = [
	{
        name: 'project-1',
		title: __('Project 1', 'bszyk-portfolio'),
		content: 'This is information about project 1',
	},
	{
        name: 'project-2',
		title: __('Project 2', 'bszyk-portfolio'),
		content: 'This is information about project 2',
	},
	{
        name: 'project-3',
		title: __('Project 3', 'bszyk-portfolio'),
		content: 'This is information about project 3',
	},
	{
        name: 'project-4',
		title: __('Project 1', 'bszyk-portfolio'),
		content: 'This is information about project 4',
	},
	{
        name: 'project-5',
		title: __('Project 2', 'bszyk-portfolio'),
		content: 'This is information about project 5',
	},
	{
        name: 'project-6',
		title: __('Project 3', 'bszyk-portfolio'),
		content: 'This is information about project 6',
	},
];

const Projects = () => {
    const chunked = chunk(config, 2);
    const rowStart = 2;

	return (
		<>
			{chunked.map((projects, i) => {
				return (
					<div
						key={i}
						id={`projects-container-${i}`}
						className={`col-start-2 col-end-12 row-start-${
							rowStart + i
						} row-end-${rowStart + 1 + i} flex justify-around my-10`}
					>
						{projects.map((project) => {
							const { title, content, name } = project;

							return (
								<Project
									key={name}
									title={title}
									content={content}
								/>
							);
						})}
					</div>
				);
			})}
		</>
	);
};

export default Projects;
