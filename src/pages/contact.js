import React from 'react';
import Layout from '../components/layout';
import { useContactPageData } from '../hooks/use-contact-page-data';
import { __ } from '@wordpress/i18n';
import ContactForm from '../components/contact-form';
import Icons from '../components/icons';
import Button from '../components/ui/button';
import { useResumePdf } from '../hooks/local-files/use-resume-pdf';

const Contact = () => {
	const { socialLinks } = useContactPageData();
	const resumeUrl = useResumePdf();

	/**
	 * Gradient.
	 */
	const bgGradient =
		'bg-gradient-to-b from-indigo-300 to-white dark:from-indigo-500 dark:to-black';

	return (
		<Layout location="/contact">
			<div
				id="contact"
				className={`${bgGradient} w-full h-auto overflow-hidden grid grid-cols-12 grid-rows-auto items-start justify-items-center col-span-full pb-4 `}
			>
				<div className="row-start-1 row-end-2 col-span-full my-4 md:my-0 self-center">
					<h3 className="text-center">
						{__('Contact', 'bszyk-portfolio')}
					</h3>
					<p className="text-center">
						{__("Let's work together!", 'bszyk-portfolio')}
					</p>
				</div>
				<div className="col-start-2 col-end-12 row-start-2 row-end-3 col-span-full md:col-start-3 md:col-end-6 w-full">
					<ContactForm />
				</div>
				<ul className="mt-8 md:mt-0 row-start-3 row-end-4 md:row-start-2 md:row-end-3 text-gray-200 flex flex-col justify-center text-center content-center col-span-full md:col-start-8 md:col-end-11 w-full">
					{Object.entries(socialLinks).map((link, i) => {
						const { name, url, icon } = link[1];

						return (
							<li
								key={i}
								className={`brand-icon-list-item my-4 hover:animate-hover-grow border rounded-xl p-2 mx-4 md:mx-0 bg-white bg-opacity-50 dark:border-indigo-500 dark:text-gray-200 dark:bg-black dark:hover:bg-gray-800`}
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
											link[0] === 'email' &&
											`hover:text-red-500`
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
				<div className="row-start-4 row-end-5 col-span-full text-center my-6 md:mt-0">
					<Button
						url={resumeUrl}
						label={__('View Resume', 'bszyk-portfolio')}
						classnames="py-2"
						iconName="faFileAlt"
					/>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
