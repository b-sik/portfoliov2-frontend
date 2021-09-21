import React from 'react';
import Particles from 'react-particles-js';
import Nav from '../components/nav';
import Seo from '../components/seo';
import { spaceParams } from '../utilities/particles-params';

const Layout = ({ location, children, bgImgSrc, bgColor }) => {
	return (
		<div
			id="front-page-wrapper"
			className="flex flex-wrap overflow-hidden grid grid-cols-1 auto-rows-min"
		>
			<div
				id="nav-and-section-wrapper"
				className="bg-cover bg-center bg-no-repeat flex flex-wrap overflow-hidden h-auto grid grid-cols-1 grid-rows-nav-section-layout"
				style={
					bgImgSrc
						? {
								backgroundImage: `url(${bgImgSrc})`,
						  }
						: {}
				}
			>
				<Nav location={location} bgColor={bgColor} />
				<Seo title="Brian Siklinski - Web Developer" />

				{children}
			</div>
			<footer className="text-center py-2 bg-black overflow-hidden relative">
				<Particles
					params={spaceParams}
					className="absolute"
				/>
				<span className="text-sm text-white">{`© ${new Date().getFullYear()} Brian Siklinski. Created with React, Gatsby, Wordpress and Tailwind.`}</span>
			</footer>
		</div>
	);
};

export default Layout;
