import React from 'react';
import SectionWrapper from '../layout/section-wrapper';
import SectionHeading from '../layout/section-heading';
import CardsGrid from '../cards/cards-grid';
import SkillsCards from '../cards/skills/skills-cards';
import { useSkillsPageData } from '../../hooks/page-data/use-skills-page-data';
import { getImgSrc } from '../../utilities/process-img';

const SkillsSection = () => {
	const { title, excerpt, featuredImage } = useSkillsPageData();

	return (
		<SectionWrapper id="skills-wrapper" bgImgSrc={getImgSrc(featuredImage)}>
			<SectionHeading title={title} excerpt={excerpt} />
			<CardsGrid>
				<SkillsCards />
			</CardsGrid>
		</SectionWrapper>
	);
};

export default SkillsSection;
