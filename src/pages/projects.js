import React from 'react';
import { __ } from '@wordpress/i18n';
import Layout from '../components/layout';
import SectionWrapper from '../components/section-wrapper';
import CardsGrid from '../components/cards-grid';
import ProjectsCards from '../components/projects-cards';
import { useProjectsPageData } from '../hooks/use-projects-page-data';

const Projects = (props) => {
	/**
	 * Desctructure props.
	 */
	const {
		location: { pathname },
	} = props;

	const { blocks } = useProjectsPageData();

	const description = blocks[0].innerHtml;

	return (
		<Layout {...props}>
			<SectionWrapper id={`${pathname.substring(1)}`}>
				<CardsGrid>
					<ProjectsCards />
				</CardsGrid>
			</SectionWrapper>
		</Layout>
	);
};

export default Projects;
