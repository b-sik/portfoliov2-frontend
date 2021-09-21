import React from 'react';
import Layout from '../components/layout';
import Section from '../components/section';
import { useProjectsData } from '../hooks/use-projects-data.js';
import { useSkillsData } from '../hooks/use-skills-data.js';
import { getBgColor, getBgGradientClass } from '../utilities/background';

const Projects = () => {
	const bgColor = getBgColor();
	const bgGradient = getBgGradientClass(bgColor, 't');

	return (
		<Layout location="/projects" bgColor={bgColor}>
			<Section
				section="projects"
				edges={useProjectsData()}
				bgGradient={bgGradient}
			/>
			<Section
				section="skills"
				edges={useSkillsData()}
				bgGradient={bgGradient}
			/>
		</Layout>
	);
};

export default Projects;
