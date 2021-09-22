import React, { useState, useEffect } from 'react';
import { getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';
import {
	defaultBlockParse as mdParse,
	defaultOutput as mdOutput,
} from 'simple-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout';
import Toggle from '../components/UI/toggle';
import { useAboutPageData } from '../hooks/use-about-page-data.js';
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
		setBgGradient(getBgGradientClass(bgColor));
	}, [bgColor]);

	/**
	 * GQL query data.
	 */
	const { content, excerpt, featuredImage, blocks } = useAboutPageData();
	const mdString = blocks[0].innerHtml;

	/**
	 * Process image data.
	 */
	const bgImgData = getImage(featuredImage.node.localFile);
	const bgImgSrc = bgImgData.images.fallback.src;

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
				className={`${bgGradient} opacity-90 w-full h-screen overflow-hidden flex-grow grid grid-cols-12 grid-rows-3`}
			>
				<div
					id="about--excerpt"
					className="col-start-4 col-end-10 row-start-2 row-end-3 -my-10"
				>
					{mdView ? mdOutput(mdParse(mdString)) : parse(content)}
				</div>
				<Toggle
					wrapperClasses="row-start-3 row-end-4 col-start-9 col-end-10"
					label={<FontAwesomeIcon icon={faMarkdown} />}
					onChange={onToggleChange}
					checked={mdView}
					bgColor={bgColor}
				/>
			</div>
		</Layout>
	);
};

export default About;
