import React from 'react';
import { __ } from '@wordpress/i18n';
import Layout from '../components/layout/layout';
import ProjectsSection from '../components/sections/projects-section';

const Projects = (props) => {
	return (
		<Layout {...props}>
			<ProjectsSection />
		</Layout>
	);
};

export default Projects;
