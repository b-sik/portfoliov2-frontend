import React from 'react';
import Layout from '../components/layout';
import { getBgColor, getBgGradientClass } from '../utilities/background';
import { contactConfig } from '../config/contact-config';
import { lightSpaceParams, darkSpaceParams } from '../config/particles-params';
import Particles from 'react-particles-js';
import { useDarkMode } from '../hooks/use-dark-mode';

const Contact = () => {
	const [darkMode] = useDarkMode();

	const bgColor = getBgColor();
	const bgGradient = getBgGradientClass(bgColor, 'b');

	const currentEmail = 'bszyk.codes@gmail.com';

	return (
		<Layout location="/contact" bgColor={bgColor}>
			<div
				id="contact"
				className={`${bgGradient} w-full h-screen overflow-hidden grid grid-cols-12 grid-rows-3 place-items-center col-span-full relative`}
			>
				<Particles
					params={darkMode ? darkSpaceParams : lightSpaceParams}
					className="absolute"
				/>
				<h2 className="row-start-1 row-end-2 col-span-full">Contact</h2>
				<ul className="z-50 row-start-2 row-end-3 text-white flex flex-col sm:flex-row justify-center text-center content-center col-span-full">
					{contactConfig.map((link, i, arr) => {
						const { name, url, icon } = link;

						return (
							<>
								<li
									key={i}
									className={`my-4 hover:animate-hover-grow`}
								>
									<a
										href={
											name === 'email'
												? `mailto:${currentEmail}`
												: url
										}
										target="_blank"
										rel="noreferrer noopener"
										className={`z-50 text-2xl text-black dark:text-white brand-icon-anchor cursor-pointer`}
									>
										{
											// @see '../css/brand-icons.css'
										}
										<span
											className={`brand-icon-${name.toLowerCase()} ${
												name === 'email' &&
												`hover:text-${bgColor}-500`
											}`}
										>
											{icon}
										</span>
										&nbsp;&nbsp;
										<span>
											{name === 'email'
												? currentEmail
												: name}
										</span>
									</a>
								</li>
								{i !== arr.length - 1 && (
									<li
										className={`my-4 mx-4 text-2xl text-black dark:text-white hidden sm:inline`}
									>
										|
									</li>
								)}
							</>
						);
					})}
				</ul>
			</div>
		</Layout>
	);
};

export default Contact;
