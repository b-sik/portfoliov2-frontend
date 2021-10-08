import React, { useState, useEffect } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { __ } from '@wordpress/i18n';
import parse from 'html-react-parser';
import {
	defaultBlockParse as mdParse,
	defaultReactOutput as mdOutput,
} from 'simple-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import ReactTooltip from 'react-tooltip';
import Layout from '../components/layout';
import Section from '../components/section';
import Toggle from '../components/ui/toggle';
import { useAboutPageData } from '../hooks/use-about-page-data.js';
import { useSkillsData } from '../hooks/use-skills-data.js';
import { getBgGradientClass } from '../utilities/background';

const About = () => {
	/**
	 * Markdown view state.
	 */
	const [mdView, setMdView] = useState(true);

	/**
	 * Bg color state.
	 */
	const bgColor = 'indigo';

	/**
	 * Bg gradient state.
	 */
	const [bgGradient, setBgGradient] = useState(null);

	/**
	 * Set bg color.
	 */
	// useEffect(() => {
	// 	setBgColor(getBgColor());
	// }, []);

	/**
	 * Set gradient class.
	 */
	useEffect(() => {
		setBgGradient(getBgGradientClass(bgColor, 't'));
	}, [bgColor]);

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
	 * Toggle.
	 */
	const onToggleChange = () => {
		setMdView(!mdView);
	};

	return (
		<Layout location={'/about'} bgImgSrc={bgImgSrc} bgColor={bgColor}>
			<div
				id="about"
				className={`${bgGradient} opacity-90 w-full h-auto overflow-hidden flex-grow grid grid-cols-12 sm:grid-rows-about-layout grid-rows-about-layout-mobile`}
			>
				<div
					id="about--excerpt"
					className="col-start-2 col-end-12 md:col-start-4 md:col-end-10 row-start-2 row-end-3 self-center opacity-90"
				>
					{mdView ? mdOutput(mdParse(mdString)) : parse(content)}
				</div>
				<ReactTooltip
					type={'light'}
					delayShow={500}
					place={'left'}
					id={'tooltip-markdown'}
				/>
				<Toggle
					wrapperClassNames="row-start-3 row-end-4 col-start-10 col-end-12 sm:col-start-9 sm:col-end-10 opacity-70 h-auto justify-self-end py-4"
					label={
						<FontAwesomeIcon
							icon={faMarkdown}
							className="dark:text-white cursor-pointer"
						/>
					}
					onChange={onToggleChange}
					checked={mdView}
					dataTip={__('Toggle markdown view on/off', 'bszyk-portfolio')}
				/>
			</div>
			<Section
				section={__('skills', 'bszyk-portfolio')}
				description={__('This is a description.', 'bszyk-portfolio')}
				edges={skillsData}
				bgGradient={getBgGradientClass(bgColor, 'b')}
			/>
		</Layout>
	);
};

export default About;
