import React from 'react';
import Nav from '../nav/nav';
import Seo from '../seo';
import Footer from '../footer/footer';

const Layout = ({ location: { pathname }, children }) => {

	return (
		<>
			<Seo />
			<div
				id="site-container"
				className={`bg-gray-100 dark:bg-black dark:text-gray-300 flex-wrap grid grid-cols-1 auto-rows-min`}
			>
				<Nav pathname={pathname} />
				<main
					className={`flex-wrap h-auto grid grid-cols-1 grid-rows-auto`}
				>
					{children}
				</main>
				<Footer pathname={pathname} />
			</div>
		</>
	);
};

export default Layout;
