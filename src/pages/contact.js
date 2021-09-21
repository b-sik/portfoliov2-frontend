import React from 'react';
import Layout from '../components/layout';
import { getBgColor, getBgGradientClass } from '../utilities/background';

const config = [
	{ name: 'LinkedIn', url: 'https://linkedin.com' },
	{ name: 'Twitter', url: 'https://twitter.com' },
	{ name: 'GitHub', url: 'https://github.com' },
	{ name: 'bszyk.codes@gmail.com', url: 'mailto:bszyk.codes@gmail.com' },
];

const Contact = () => {
	const bgColor = getBgColor();
	const bgGradient = getBgGradientClass(bgColor);

	return (
		<Layout location="/contact" bgColor={bgColor}>
			<div
				id="contact"
				className={`${bgGradient} w-full h-screen overflow-hidden grid grid-cols-12 grid-rows-3 place-items-center col-span-full`}
			>
				<h2 className="row-start-1 row-end-2 col-span-full">Contact</h2>
				<ul className="row-start-2 row-end-3 text-white flex flex-col justify-center content-center col-span-full">
					{config.map((link, i) => {
						const { name, url } = link;

						return (
							<li className="my-4">
								<a
									key={i}
									href={url}
									target="_blank"
									rel="noreferrer noopener"
								>
									{name}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</Layout>
	);
};

export default Contact;
