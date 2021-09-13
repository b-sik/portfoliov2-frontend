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
import Projects from '../components/projects';

const FrontPage = ({
	data: {
		allWpPage: { edges, nodes },
	},
}) => {
	/**
	 * Pages data.
	 */
	const aboutData = edges[0].node;

	/**
	 * Background image.
	 */
	const bgImgData = getImage(nodes[1].featuredImage.node.localFile);
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
						{parse(aboutData.excerpt)}
					</div>
				</div>
			</div>

			{/* 
				Row 2
			*/}
			<div
				id="projects-wrapper"
				className="bg-gradient-to-b from-white to-indigo-100 flex flex-wrap overflow-hidden  grid grid-cols-12 auto-rows-min"
			>
				<h2 className="col-span-full row-start-1 row-end-2 text-center">
					Projects
				</h2>
				<Projects />
			</div>
		</div>
	);
};

export default FrontPage;

export const pageQuery = graphql`
	{
		allWpPage(filter: { databaseId: { in: [12, 27] } }) {
			edges {
				node {
					excerpt
				}
			}
			nodes {
				title
				uri
				featuredImage {
					node {
						id
						localFile {
							childImageSharp {
								gatsbyImageData
								fluid {
									base64
									tracedSVG
									srcWebp
									srcSetWebp
									originalImg
									originalName
								}
							}
						}
					}
				}
			}
		}
	}
`;
