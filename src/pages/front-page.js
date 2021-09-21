import React from 'react';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import { getImage } from 'gatsby-plugin-image';
// import { DB_ID_ABOUT_PAGE, DB_ID_FRONT_PAGE } from '../constants';
// import {
// 	BrowserView,
// 	MobileView,
// 	isBrowser,
// 	isMobile
//   } from "react-device-detect";

import Nav from '../components/nav';
import Seo from '../components/seo';
import Section from '../components/section';
import Contact from '../components/contact';
import { useProjectsData } from '../hooks/use-projects-data.js';
import { useSkillsData } from '../hooks/use-skills-data.js';
import { useAboutPageData } from '../hooks/use-about-page-data.js';
// import { useContactPageData } from '../hooks/use-contact-page-data.js';

const FrontPage = ({
	data: {
		allWpPage: { edges },
	},
}) => {
	/**
	 * Front page data.
	 */
	const frontPageData = edges[0].node;

	/**
	 * About page data.
	 */
	const aboutPageData = useAboutPageData();

	/**
	 * Background image.
	 */
	const bgImgData = getImage(frontPageData.featuredImage.node.localFile);
	const bgImgSrc = bgImgData.images.fallback.src;

	return (
		<div
			id="front-page-wrapper"
			className="flex flex-wrap overflow-hidden grid grid-cols-1 auto-rows-min"
		>
			{/* 
				Row 1
			*/}
			<div
				id="nav-and-about-excerpt-wrapper"
				className="bg-cover bg-center bg-no-repeat flex flex-wrap overflow-hidden h-screen grid grid-cols-1 grid-rows-nav-about-layout"
				style={{
					backgroundImage: `url(${bgImgSrc})`,
				}}
			>
				<Nav location="/" />
				<Seo title="Brian Siklinski - Web Developer" />

				{/* 
					Main about section.
				*/}
				<div
					id="about"
					className="bg-white opacity-90 w-full overflow-hidden flex-grow grid grid-cols-12 grid-rows-3"
				>
					<div
						id="about--excerpt"
						className="col-start-4 col-end-10 row-start-2 row-end-3"
					>
						{parse(aboutPageData.excerpt)}
					</div>
				</div>
			</div>

			{/* 
				Row 2
			*/}
			<Section section="projects" edges={useProjectsData()} />

			{/* 
				Row 3
			*/}
			<Section section="skills" edges={useSkillsData()} />

			{/*
				Row 4
			*/}
			<Contact />
		</div>
	);
};

export default FrontPage;

export const pageQuery = graphql`
	{
		allWpPage(filter: { isFrontPage: { eq: true } }) {
			edges {
				node {
					id
					content
					excerpt
					featuredImage {
						node {
							localFile {
								childImageSharp {
									gatsbyImageData
								}
							}
						}
					}
				}
			}
		}
	}
`;
