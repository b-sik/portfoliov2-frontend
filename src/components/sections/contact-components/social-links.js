import React from 'react';
import Icons from '../../icons';
import { useContactPageData } from '../../../hooks/page-data/use-contact-page-data';

const SocialLinks = () => {
	const { socialLinks } = useContactPageData();

	return (
		<ul className="mt-8 md:mt-0 row-start-3 row-end-4 md:row-start-2 md:row-end-3 text-gray-200 flex flex-col justify-center text-center content-center col-span-full md:col-start-8 md:col-end-11 w-full">
			{Object.entries(socialLinks).map((link, i) => {
				const { name, url, icon } = link[1];

				return (
					<li
						key={i}
						className={`z-10 brand-icon-list-item my-4 hover:animate-hover-grow border rounded-xl p-2 mx-4 md:mx-0 bg-white`}
					>
						<a
							href={url}
							target="_blank"
							rel="noreferrer noopener"
							className={`text-2xl text-black dark:text-gray-200 brand-icon-anchor cursor-pointer`}
						>
							{
								// @see '../css/icons.css'
							}
							<span
								className={`brand-icon-${name.toLowerCase()} ${
									link[0] === 'email' && `hover:text-red-500`
								}`}
							>
								<Icons iconName={icon} />
							</span>
							&nbsp;&nbsp;
							<span>{name}</span>
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default SocialLinks;
