import React from 'react';
import Nav from '../components/nav';
import Seo from '../components/seo';
import Footer from '../components/footer';

const Layout = ({ location, children, bgImgSrc, bgColor }) => {
	
	return (
		<div
			id="front-page-wrapper"
			className="flex flex-wrap overflow-hidden grid grid-cols-1 auto-rows-min dark:text-white"
		>
			<div
				id="nav-and-section-wrapper"
				className={`bg-auto bg-left-top bg-no-repeat flex flex-wrap overflow-hidden h-auto grid grid-cols-1 grid-rows-nav-section-layout`}
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
			<Footer bgColor={bgColor} />
		</div>
	);
};

export default Layout;
