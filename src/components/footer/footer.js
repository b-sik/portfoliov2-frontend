import React from 'react';
import { useContactPageData } from '../../hooks/page-data/use-contact-page-data';
import Icons from '../icons';

const Footer = ({ pathname }) => {
	const { socialLinks } = useContactPageData();
	const linkClassnames = 'text-blue-700 dark:text-blue-200';

	return (
		<footer className="py-2 bg-white dark:bg-black overflow-hidden relative text-center">
			<div className="flex flex-col sm:flex-row place-content-center">
				<div id="footer-copyright-div flex place-content-center">
					<span className="text-xs sm:text-sm text-black dark:text-gray-200 leading-none my-auto">{`© ${new Date().getFullYear()} Brian Siklinski. `}</span>
					<br className="inline sm:hidden" />
					<span className="text-xs sm:text-sm text-black dark:text-gray-200 leading-none my-auto">
						Created with&nbsp;
						<a
							href="https://reactjs.org/"
							target="_blank"
							rel="noopener noreferrer"
							className={linkClassnames}
						>
							React
						</a>
						,&nbsp;
						<a
							href="https://www.gatsbyjs.com/"
							target="_blank"
							rel="noopener noreferrer"
							className={linkClassnames}
						>
							Gatsby
						</a>
						,&nbsp;
						<a
							href="https://wordpress.org/"
							target="_blank"
							rel="noopener noreferrer"
							className={linkClassnames}
						>
							WordPress
						</a>
						,&nbsp;&&nbsp;
						<a
							href="https://tailwindcss.com/"
							target="_blank"
							rel="noopener noreferrer"
							className={linkClassnames}
						>
							TailwindCSS
						</a>
						.
					</span>
					<span
						className={`text-lg text-black dark:text-gray-200 ${
							pathname === '/contact'
								? 'hidden'
								: 'hidden md:inline'
						}`}
					>
						{' '}
						|{' '}
					</span>
				</div>
				<ul
					className={`${
						pathname === '/contact' ? 'hidden' : 'inline'
					} w-auto mx-auto sm:mx-0 flex justify-items-center order-first sm:order-none`}
				>
					{Object.entries(socialLinks).map((link, i) => {
						const { name, url, icon } = link[1];

						return (
							<li
								key={i}
								className="mx-2 cursor-pointer brand-icon-list-item"
							>
								<a
									href={url}
									target="_blank"
									rel="noreferrer noopener"
									className={`text-lg text-black dark:text-gray-200`}
								>
									<span
										className={`brand-icon-${name.toLowerCase()} ${
											link[0] === 'email'
												? `hover:text-red-500`
												: ''
										}`}
									>
										<Icons iconName={icon} />
									</span>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
