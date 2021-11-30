import React from 'react';
import SectionWrapper from '../layout/section-wrapper';
import SectionHeading from '../layout/section-heading';
import CardsGrid from '../cards/cards-grid';
import ProjectsCards from '../cards/projects/projects-cards';
import { useProjectsPageData } from '../../hooks/page-data/use-projects-page-data';
import { getImgSrc } from '../../utilities/process-img';

const ProjectsSection = () => {
	const { title, excerpt, featuredImage } = useProjectsPageData();

	return (
		<SectionWrapper id="projects-wrapper" bgImgSrc={getImgSrc(featuredImage)}>
			<SectionHeading title={title} excerpt={excerpt} />
			<CardsGrid>
				<ProjectsCards />
			</CardsGrid>
		</SectionWrapper>
	);
};

export default ProjectsSection;
