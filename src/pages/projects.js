import React from 'react';
// import { graphql } from 'gatsby';
// import parse from 'html-react-parser';

import Layout from '../components/layout';
import Section from '../components/section';
import { useProjectsData } from '../hooks/use-projects-data.js';
import { useSkillsData } from '../hooks/use-skills-data.js';

const Projects = () => {
	return (
		<Layout location="/projects">
			<Section section="projects" edges={useProjectsData()} />
			<Section section="skills" edges={useSkillsData()} />
		</Layout>
	);
};

export default Projects;