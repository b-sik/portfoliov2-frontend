import React from 'react';
import { contactConfig } from '../config/contact-config';

const Footer = ({ bgColor, location }) => {
	return (
		<footer className="py-2 bg-white dark:bg-black overflow-hidden relative text-center">
			<div className="flex flex-col sm:flex-row place-content-center">
				<div id="footer-copyright-div flex place-content-center">
					<span className="text-xs sm:text-sm text-black dark:text-white leading-none my-auto">{`© ${new Date().getFullYear()} Brian Siklinski. `}</span>
					<br className='inline sm:hidden' />
					<span className="text-xs sm:text-sm text-black dark:text-white leading-none my-auto">{`Created with React, Gatsby, Wordpress and Tailwind.`}</span>
					<span
						className={`text-lg text-black dark:text-white ml-2 hidden sm:inline`}
					>
						{' '}
						|{' '}
					</span>
				</div>
				<ul
					className={`${
						location === '/contact' ? 'hidden sm:inline-block' : 'inline-block'
					}  w-auto mx-auto sm:mx-0 flex justify-items-center order-first sm:order-none`}
				>
					{contactConfig.map((link, i) => {
						const { name, url, icon } = link;

						return (
							<li key={i} className="mx-2 cursor-pointer">
								<a
									href={
										name === 'email'
											? 'bszyk.codes@gmail.com'
											: url
									}
									target="_blank"
									rel="noreferrer noopener"
									className={`text-lg text-black dark:text-white brand-icon-anchor`}
								>
									<span
										className={`brand-icon-${name.toLowerCase()} ${
											name === 'email' &&
											`hover:text-${bgColor}-500`
										}`}
									>
										{icon}
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
