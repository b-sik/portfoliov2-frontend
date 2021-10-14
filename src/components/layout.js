import React from 'react';
import Nav from '../components/nav';
import Seo from '../components/seo';
import Footer from '../components/footer';
import { useGeneralSettingsData } from '../hooks/use-general-settings-data';

const Layout = ({ location, children, bgImgSrc }) => {
	/**
	 * Site title.
	 */
	const { title } = useGeneralSettingsData();

	return (
		<div
			id="front-page-wrapper"
			className="flex flex-wrap overflow-hidden grid grid-cols-1 auto-rows-min dark:text-gray-300"
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
				<Nav location={location} />
				<Seo title={title} />

				{children}
			</div>
			<Footer location={location} />
		</div>
	);
};

export default Layout;
