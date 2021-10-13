import React from 'react';
import { useContactPageData } from '../hooks/use-contact-page-data';
import FooterNav from '../components/footer-nav';
import Icons from '../components/icons';

const Footer = ({ location }) => {
	const { socialLinks } = useContactPageData();

	return (
		<>
			<footer className="py-2 bg-white dark:bg-black overflow-hidden relative text-center">
				<FooterNav location={location} />
				<div className="flex flex-col sm:flex-row place-content-center">
					<div id="footer-copyright-div flex place-content-center">
						<span className="text-xs sm:text-sm text-black dark:text-white leading-none my-auto">{`© ${new Date().getFullYear()} Brian Siklinski. `}</span>
						<br className="inline sm:hidden" />
						<span className="text-xs sm:text-sm text-black dark:text-white leading-none my-auto">{`Created with React, Gatsby, Wordpress and Tailwind.`}</span>
						<span
							className={`text-lg text-black dark:text-white ml-2 ${
								location === '/contact'
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
							location === '/contact' ? 'hidden' : 'inline'
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
										className={`text-lg text-black dark:text-white`}
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
		</>
	);
};

export default Footer;
