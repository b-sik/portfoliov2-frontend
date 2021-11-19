import React from 'react';
import SectionWrapper from '../layout/section-wrapper';
import SectionHeading from '../layout/section-heading';
import CardsGrid from '../cards/cards-grid';
import ProjectsCards from '../cards/projects/projects-cards';
import { useProjectsPageData } from '../../hooks/page-data/use-projects-page-data';

const ProjectsSection = () => {
	const { title, excerpt } = useProjectsPageData();

	return (
		<SectionWrapper id="projects-wrapper">
			<SectionHeading title={title} excerpt={excerpt} />
			<CardsGrid>
				<ProjectsCards />
			</CardsGrid>
		</SectionWrapper>
	);
};

export default ProjectsSection;
