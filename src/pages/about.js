import React, { useState, useEffect } from 'react';
import { getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';
import {
	defaultBlockParse as mdParse,
	defaultReactOutput as mdOutput,
} from 'simple-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/layout';
import Section from '../components/section';
import Toggle from '../components-ui/toggle';
import { useAboutPageData } from '../hooks/use-about-page-data.js';
import { useSkillsData } from '../hooks/use-skills-data.js';
import { getBgColor, getBgGradientClass } from '../utilities/background';

const About = ({ isExcerpt }) => {
	/**
	 * Markdown view state.
	 */
	const [mdView, setMdView] = useState(true);

	/**
	 * Bg color state.
	 */
	const [bgColor, setBgColor] = useState(null);

	/**
	 * Bg gradient state.
	 */
	const [bgGradient, setBgGradient] = useState(null);

	/**
	 * Set bg color.
	 */
	useEffect(() => {
		setBgColor(getBgColor());
	}, []);

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
		<Layout
			location={isExcerpt ? '/' : '/about'}
			bgImgSrc={bgImgSrc}
			bgColor={bgColor}
		>
			<div
				id="about"
				className={`${bgGradient} opacity-90 w-full h-auto overflow-hidden flex-grow grid grid-cols-12 sm:grid-rows-about-layout grid-rows-about-layout-mobile`}
			>
				<div
					id="about--excerpt"
					className="col-start-2 col-end-12 sm:col-start-4 sm:col-end-10 row-start-2 row-end-3 self-center opacity-90"
				>
					{mdView ? mdOutput(mdParse(mdString)) : parse(content)}
				</div>
				<Toggle
					wrapperClassNames="row-start-3 row-end-4 col-start-11 col-end-12 sm:col-start-9 sm:col-end-10 opacity-70 h-auto justify-self-end py-4"
					label={<FontAwesomeIcon icon={faMarkdown} className="dark:text-white cursor-pointer" />}
					onChange={onToggleChange}
					checked={mdView}
				/>
			</div>
			{!isExcerpt && (
				<Section
					section="skills"
					edges={skillsData}
					bgGradient={getBgGradientClass(bgColor, 'b')}
				/>
			)}
		</Layout>
	);
};

export default About;
