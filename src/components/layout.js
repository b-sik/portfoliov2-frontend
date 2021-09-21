import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// import parse from 'html-react-parser';
// import {
// 	BrowserView,
// 	MobileView,
// 	isBrowser,
// 	isMobile
//   } from "react-device-detect";

import Nav from '../components/nav';
import Seo from '../components/seo';

const Layout = ({ location, children, bgImgSrc }) => {

	return (
		<div
			id="front-page-wrapper"
			className="flex flex-wrap overflow-hidden grid grid-cols-1 auto-rows-min"
		>
			<div
				id="nav-and-section-wrapper"
				className="bg-cover bg-center bg-no-repeat flex flex-wrap overflow-hidden h-auto grid grid-cols-1 grid-rows-nav-section-layout"
				style={{
					backgroundImage: `url(${bgImgSrc})`,
				}}
			>
				<Nav location={location} />
				<Seo title="Brian Siklinski - Web Developer" />

				{children}
			</div>
			<footer className="text-center">
				{`© ${new Date().getFullYear()} Brian Siklinski. Created with React, Gatsby, Wordpress and Tailwind.`}
			</footer>
		</div>
	);
};

export default Layout;
