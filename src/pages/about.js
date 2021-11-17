import React from 'react';
import { __ } from '@wordpress/i18n';
import Layout from '../components/layout';
import CardsGrid from '../components/cards-grid';
import SkillsCards from '../components/skills-cards';
import Markdown from '../components/markdown';
import Button from '../components/ui/button';
import SectionWrapper from '../components/section-wrapper';
import SectionHeading from '../components/section-heading';
import { useAboutPageData } from '../hooks/use-about-page-data';
import { useSkillsPageData } from '../hooks/use-skills-page-data';

const About = (props) => {
	/**
	 * Desctructure props.
	 */
	const {
		location: { pathname },
	} = props;

	/**
	 * GQL query data.
	 */
	const { content, featuredImage, blocks } = useAboutPageData();
	const mdString = blocks[0].innerHtml;

	/**
	 * Skills page description.
	 */
	const skillsPageData = useSkillsPageData();

	return (
		<Layout {...props}>
			<SectionWrapper
				id={`${pathname.substring(1)}-1`}
				featuredImage={featuredImage}
			>
				<Markdown mdString={mdString} content={content} />
				<div className="row-start-3 row-end-4 col-span-full text-center self-end flex flex-col place-items-center">
					<Button
						url="/about#skills-wrapper"
						label={__('learn more', 'bszyk-portfolio')}
						classnames="py-1 flex flex-row place-items-center border-indigo-500 bg-indigo-200 hover:bg-indigo-300 hover:animate-hover-grow transition-all"
						link
						iconName="faAngleDown"
						iconClassnames="animate-bounce"
					/>
				</div>
				<div className="row-start-4 row-end-5" />
			</SectionWrapper>
			<SectionWrapper id={`${pathname.substring(1)}-2`}>
				<SectionHeading
					title={skillsPageData.title}
					excerpt={skillsPageData.excerpt}
				/>
				<CardsGrid>
					<SkillsCards />
				</CardsGrid>
			</SectionWrapper>
		</Layout>
	);
};

export default About;
