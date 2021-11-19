import React from 'react';
import Nav from '../nav/nav';
import Seo from '../seo';
import Footer from '../footer/footer';
import FooterNav from '../footer/footer-nav';

const Layout = ({ location: { pathname }, children }) => {

	return (
		<>
			<Seo />
			<div
				id="site-container"
				className={`bg-white dark:bg-black dark:text-gray-300 flex-wrap grid grid-cols-1 auto-rows-min`}
			>
				<Nav pathname={pathname} />
				<main
					className={`flex-wrap h-auto grid grid-cols-1 grid-rows-auto`}
				>
					{children}
					<FooterNav pathname={pathname} />
				</main>
				<Footer pathname={pathname} />
			</div>
		</>
	);
};

export default Layout;
