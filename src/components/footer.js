import React from 'react';
import { contactConfig } from '../config/contact-config';
import { useDarkMode } from '../hooks/use-dark-mode';

const Footer = ({ bgColor }) => {
	const [darkMode] = useDarkMode();

	return (
		<footer className="py-2 bg-white dark:bg-black overflow-hidden relative">
			<div className="flex place-content-center z-50">
				<span className="text-sm text-black dark:text-white leading-none my-auto">{`© ${new Date().getFullYear()} Brian Siklinski. Created with React, Gatsby, Wordpress and Tailwind.`}</span>
				<span className={`text-lg text-black dark:text-white ml-2`}>
					{' '}
					|{' '}
				</span>
				<ul className="inline flex">
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
