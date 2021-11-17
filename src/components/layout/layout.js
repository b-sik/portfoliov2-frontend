import React from 'react';
import Nav from '../nav/nav';
import Seo from '../seo';
import Footer from '../footer/footer';
import FooterNav from '../footer/footer-nav';
import { useGeneralSettingsData } from '../../hooks/use-general-settings-data';

const Layout = (props) => {
	/**
	 * Destructure props.
	 */
	const {
		location: { pathname },
		children,
	} = props;

	/**
	 * Site title.
	 */
	const { title } = useGeneralSettingsData();

	/**
	 * Gradient.
	 */
	const bgGradient =
		'bg-gradient-to-b from-indigo-300 to-white dark:from-indigo-500 dark:to-black';

	return (
		<>
			<Seo title={title} />
			<div
				id="site-container"
				className={`${bgGradient} flex-wrap grid grid-cols-1 auto-rows-min`}
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
