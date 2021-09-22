import React from 'react';
import { Link } from 'gatsby';
import { __ } from '@wordpress/i18n';

const config = [
	{
		name: __('Home', 'bszyk-portfolio'),
		slug: '/',
	},
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
		<nav className={`bg-${bgColor}-500 border-b-1 w-full overflow-hidden flex-grow-0`}>
			<ul className="flex justify-around content-center">
				{config.map((page, i) => {
					const { name, slug } = page;
					const linkClassName = `inline-block hover:border-gray-200 ${
						location === slug ? 'text-red-500' : 'text-blue-500'
					} hover:bg-gray-200 py-2 px-4 h-full`;

					return (
						<li key={i} className="my-2">
							<Link className={linkClassName} to={slug}>
								<h6>{name}</h6>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Nav;
