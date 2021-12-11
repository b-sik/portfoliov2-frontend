import React from 'react';
import { __ } from '@wordpress/i18n';
import SocialLinks from '../sections/contact-components/social-links';
// import NavToolbar from './nav-toolbar';

const config = [
	{
		name: __('Skills', 'bszyk-portfolio'),
		slug: '#skills',
	},
	{
		name: __('Projects', 'bszyk-portfolio'),
		slug: '#projects',
	},
	{
		name: __('Contact', 'bszyk-portfolio'),
		slug: '#contact',
	},
];

const Nav = () => {
	return (
		<nav
			className={`flex justify-between border border-b-2 border-t-0 border-l-0 border-r-0 border-indigo-500 bg-black w-full overflow-hidden flex-grow-0 relative`}
		>
			<div className="hidden md:inline justify-self-start h-full">
				<SocialLinks iconsOnly />
			</div>

			<ul
				className={
					'flex w-full justify-evenly md:justify-end content-center'
				}
			>
				{config.map((page, i) => {
					const { name, slug } = page;

					const linkClassName = `inline-block hover:bg-indigo-500 hover:border-black py-2 px-1 md:px-4 h-full`;

					return (
						<li key={i} className="h-full">
							<a className={linkClassName} href={slug}>
								<h6 className="text-white">{name}</h6>
							</a>
						</li>
					);
				})}
				{/* <NavToolbar /> */}
			</ul>
		</nav>
	);
};

export default Nav;
