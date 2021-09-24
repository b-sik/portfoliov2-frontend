import React from 'react';
import Layout from '../components/layout';
import { getBgColor, getBgGradientClass } from '../utilities/background';
import { contactConfig } from '../utilities/contact-config';

const Contact = () => {
	const bgColor = getBgColor();
	const bgGradient = getBgGradientClass(bgColor, 'b');

	return (
		<Layout location="/contact" bgColor={bgColor}>
			<div
				id="contact"
				className={`${bgGradient} w-full h-screen overflow-hidden grid grid-cols-12 grid-rows-3 place-items-center col-span-full`}
			>
				<h2 className="row-start-1 row-end-2 col-span-full">Contact</h2>
				<ul className="row-start-2 row-end-3 text-white flex justify-center content-center col-span-full">
					{contactConfig.map((link, i, arr) => {
						const { name, url, icon } = link;

						return (
							<li key={i} className={`my-4`}>
								<a
									href={url}
									target="_blank"
									rel="noreferrer noopener"
									className={`text-2xl text-black dark:text-white`}
								>
									{icon}&nbsp;{name}
								</a>
								{i !== arr.length - 1 && (
									<span
										className={`mx-4 text-2xl text-black dark:text-white`}
									>
										|
									</span>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</Layout>
	);
};

export default Contact;
