import React from 'react';
import { __ } from '@wordpress/i18n';
import Layout from '../components/layout';
import Section from '../components/section';
import { useProjectsData } from '../hooks/use-projects-data.js';

const Projects = () => {
	return (
		<Layout location="/projects">
			<Section
				section={__('projects', 'bsyzk-portfolio')}
				description={__("A sample of work I've done.", 'bsyzk-portfolio')}
				edges={useProjectsData()}
			/>
		</Layout>
	);
};

export default Projects;
