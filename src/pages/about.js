import React, { useState } from 'react';
import { getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';
import {
	defaultBlockParse as mdParse,
	defaultOutput as mdOutput,
} from 'simple-markdown';
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
	 * Get bg color info.
	 */
	const bgColor = getBgColor();
	const bgGradient = getBgGradientClass(bgColor);

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
					label="md"
					onChange={onToggleChange}
				/>
			</div>
		</Layout>
	);
};

export default About;
