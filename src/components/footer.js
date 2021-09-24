import React from 'react';
import { spaceParams } from '../utilities/particles-params';
import Particles from 'react-particles-js';
import { contactConfig } from '../utilities/contact-config';

const Footer = () => {
	return (
		<footer className="py-2 bg-black overflow-hidden relative">
			<Particles params={spaceParams} className="absolute -my-2 z-0" />
			<div className="flex place-content-center z-50">
				<span className="text-sm text-white leading-none my-auto">{`© ${new Date().getFullYear()} Brian Siklinski. Created with React, Gatsby, Wordpress and Tailwind.`}</span>
				<span className={`text-lg text-white ml-2`}> | </span>
				<ul className="inline flex">
					{contactConfig.map((link, i) => {
						const { url, icon } = link;

						return (
							<li key={i} className="mx-2">
								<a
									href={url}
									target="_blank"
									rel="noreferrer noopener"
									className={`text-lg text-white`}
								>
									{icon}
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
