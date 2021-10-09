import React, { Fragment } from 'react';
import Layout from '../components/layout';
import { contactConfig } from '../config/contact-config';
import { __ } from '@wordpress/i18n';

const Contact = () => {
	const currentEmail = 'bszyk.codes@gmail.com';

	/**
	 * Gradient.
	 */
	const bgGradient = 'bg-gradient-to-b from-indigo-300 to-white dark:from-indigo-500 dark:to-black';

	return (
		<Layout location="/contact">
			<div
				id="contact"
				className={`${bgGradient} w-full h-screen overflow-hidden grid grid-cols-12 grid-rows-auto place-items-center col-span-full relative`}
			>
				<h2 className="row-start-1 row-end-2 col-span-full">
					{__('Contact', 'bszyk-portfolio')}
				</h2>
				<ul className="row-start-2 row-end-3 text-white flex flex-col sm:flex-row justify-center text-center content-center col-span-full">
					{contactConfig.map((link, i, arr) => {
						const { name, url, icon } = link;

						return (
							<Fragment key={i}>
								<li
									key={i}
									className={`my-4 hover:animate-hover-grow`}
								>
									<a
										key={`anchor-${i}`}
										href={
											name === 'email'
												? `mailto:${currentEmail}`
												: url
										}
										target="_blank"
										rel="noreferrer noopener"
										className={`text-2xl text-black dark:text-white brand-icon-anchor cursor-pointer`}
									>
										{
											// @see '../css/brand-icons.css'
										}
										<span
											key={`icon-${i}`}
											className={`brand-icon-${name.toLowerCase()} ${
												name === 'email' &&
												`hover:text-red-500`
											}`}
										>
											{icon}
										</span>
										&nbsp;&nbsp;
										<span key={`name-${i}`}>
											{name === 'email'
												? currentEmail
												: name}
										</span>
									</a>
								</li>
								{i !== arr.length - 1 && (
									<li
										key={`divider-${i}`}
										className={`my-4 mx-4 text-2xl text-black dark:text-white hidden sm:inline`}
									>
										|
									</li>
								)}
							</Fragment>
						);
					})}
				</ul>
			</div>
		</Layout>
	);
};

export default Contact;
