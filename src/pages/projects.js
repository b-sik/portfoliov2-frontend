import React from 'react';
import { __ } from '@wordpress/i18n';
import Layout from '../components/layout';
import Section from '../components/section';
import { useProjectsData } from '../hooks/use-projects-data';
import { useProjectsPageData } from '../hooks/use-projects-page-data';

const Projects = () => {
	const { blocks } = useProjectsPageData();

	const description = blocks[0].innerHtml;

	return (
		<Layout location="/projects">
			<Section
				section={__('projects', 'bsyzk-portfolio')}
				description={description}
				edges={useProjectsData()}
			/>
		</Layout>
	);
};

export default Projects;
