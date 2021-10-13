import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { __ } from '@wordpress/i18n';
import Layout from '../components/layout';
import Section from '../components/section';
import Markdown from '../components/markdown';
import { useAboutPageData } from '../hooks/use-about-page-data.js';
import { useSkillsData } from '../hooks/use-skills-data.js';

const About = () => {
	/**
	 * GQL query data.
	 */
	const { content, featuredImage, blocks } = useAboutPageData();
	const mdString = blocks[0].innerHtml;

	/**
	 * Process image data.
	 */
	const bgImgData = getImage(featuredImage.node.localFile);
	const bgImgSrc = bgImgData.images.fallback.src;

	/**
	 * Skills CPT data.
	 */
	const skillsData = useSkillsData();

	/**
	 * Gradient.
	 */
	const bgGradient =
		'bg-gradient-to-r from-indigo-300 to-white dark:from-indigo-500 dark:to-black';

	return (
		<Layout location={'/about'} bgImgSrc={bgImgSrc}>
			<div
				id="about"
				className={`${bgGradient} opacity-90 w-full h-auto overflow-hidden flex-grow grid grid-cols-12 sm:grid-rows-about-layout grid-rows-about-layout-mobile`}
			>
				<Markdown
					mdString={mdString}
					content={content}
				/>
			</div>
			<Section
				section={__('skills', 'bszyk-portfolio')}
				description={__('This is a description.', 'bszyk-portfolio')}
				edges={skillsData}
			/>
		</Layout>
	);
};

export default About;
