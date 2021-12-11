import React from 'react';
import Icons from '../../icons';
import { useContactPageData } from '../../../hooks/page-data/use-contact-page-data';

const SocialLinks = ({ iconsOnly = false }) => {
	const { socialLinks } = useContactPageData();

	const iconCss = {
		ul: 'w-auto h-full mx-auto sm:mx-0 flex items-center  order-first sm:order-none',
		li: 'mx-2 cursor-pointer brand-icon-list-item',
		anchor: 'text-lg text-white',
	};

	const btnCss = {
		ul: 'mt-8 md:mt-0 row-start-3 row-end-4 md:row-start-2 md:row-end-3 text-gray-200 flex flex-col justify-center text-center content-center col-span-full md:col-start-8 md:col-end-11 w-full',
		li: 'z-10 brand-icon-list-item my-4 hover:animate-hover-grow border rounded-xl p-2 mx-4 md:mx-0 bg-white',
		anchor: 'text-2xl text-black brand-icon-anchor cursor-pointer',
	};

	const ulClassNames = iconsOnly ? iconCss : btnCss;

	const { ul, li, anchor } = ulClassNames;

	return (
		<ul className={ul}>
			{Object.entries(socialLinks).map((link, i) => {
				const { name, url, icon } = link[1];

				return (
					<li key={i} className={li}>
						<a
							href={url}
							target="_blank"
							rel="noreferrer noopener"
							className={anchor}
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
							{iconsOnly ? null : (
								<>
									&nbsp;&nbsp;
									<span>{name}</span>
								</>
							)}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default SocialLinks;
