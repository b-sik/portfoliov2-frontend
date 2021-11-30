import React from 'react';
import { Link } from 'gatsby';
import { __ } from '@wordpress/i18n';
import { stripTrailingSlash } from '../../utilities/strip-trailing-slash';
// import NavToolbar from './nav-toolbar';

const config = [
	{
		name: __('Home', 'bszyk-portfolio'),
		slug: '/home',
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

const Nav = ({ pathname }) => {
	return (
		<nav
			className={` bg-black bg-opacity-90 border-b-1 w-full overflow-hidden flex-grow-0 relative shadow-xl`}
		>
			<ul className="flex justify-around content-center">
				{config.map((page, i) => {
					const { name, slug } = page;

					const linkClassName = `inline-block ${
						stripTrailingSlash(pathname) === slug
							? 'cursor-default hover:border-gray-200'
							: 'hover:bg-indigo-500 hover:border-black'
					}  py-2 px-4 h-full border rounded border-indigo-500`;

					return (
						<li key={i} className="my-2">
							<Link className={linkClassName} to={slug}>
								<h6 className='text-white'>{name}</h6>
							</Link>
						</li>
					);
				})}
				{/* <NavToolbar /> */}
			</ul>
		</nav>
	);
};

export default Nav;
