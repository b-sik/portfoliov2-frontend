import React from 'react';
import { graphql, Link } from 'gatsby';
import parse from 'html-react-parser';
// import {
// 	BrowserView,
// 	MobileView,
// 	isBrowser,
// 	isMobile
//   } from "react-device-detect";

import Nav from '../components/nav';
import Seo from '../components/seo';

const FrontPage = ({
	data: {
		allWpPage: { edges },
	},
}) => {
	const aboutExcerpt = edges[0].node.excerpt;

	return (
		<div
			id="front-page-wrapper"
			className="flex flex-wrap overflow-hidden grid grid-cols-1 grid-rows-1"
		>
			<div
				id="nav-and-about-excerpt-wrapper"
				className="flex flex-wrap overflow-hidden h-screen grid grid-cols-1 grid-rows-nav-about-layout"
			>
				<Nav location="/" />
				<Seo title="Brian Siklinski - Web Developer" />

				{/* 
					Main about section.
				*/}
				<div id="about" className="w-full overflow-hidden flex-grow">
					<div id="about--excerpt">{parse(aboutExcerpt)}</div>
				</div>
			</div>
		</div>
	);
};

export default FrontPage;

export const pageQuery = graphql`
	{
		allWpPage(filter: { databaseId: { eq: 27 } }) {
			edges {
				node {
					excerpt
				}
			}
		}
	}
`;
