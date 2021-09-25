import React from 'react';
import { Link } from 'gatsby';
import { __ } from '@wordpress/i18n';
import NavToolbar from './nav-toolbar';

const config = [
	{
		name: __('About', 'bszyk-portfolio'),
		slug: '/about',
	},
	{
		name: __('Projects', 'bszyk-portfolio'),
		slug: '/projects',
	},
	{
		name: __('Contact', 'bszyk-portfolio'),
		slug: '/contact',
	},
];

const Nav = ({ location, bgColor }) => {
	
	return (
		<nav
			className={`bg-${bgColor}-500 dark:bg-${bgColor}-900 border-b-1 w-full overflow-hidden flex-grow-0 relative dark:opacity-50 shadow-xl`}
		>
			<ul className="flex justify-around content-center">
				{config.map((page, i) => {
					const { name, slug } = page;
					const linkClassName = `inline-block ${
						location === slug
							? 'cursor-default'
							: 'hover:bg-gray-200 hover:opacity-70'
					}  py-2 px-4 h-full`;
					const hClassName = `${
						location === slug
							? 'text-gray-200 dark:text-black'
							: 'text-black dark:text-gray-200 dark:hover:text-black'
					}`;

					return (
						<li key={i} className="my-2">
							<Link className={linkClassName} to={slug}>
								<h6 className={hClassName}>{name}</h6>
							</Link>
						</li>
					);
				})}
				<NavToolbar />
			</ul>
		</nav>
	);
};

export default Nav;
