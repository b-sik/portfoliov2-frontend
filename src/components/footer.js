import React from 'react';
import { spaceParams } from '../utilities/particles-params';
import Particles from 'react-particles-js';

const Footer = () => {
	return (
		<footer className="text-center py-2 bg-black overflow-hidden relative">
			<Particles params={spaceParams} className="absolute -my-2" />
			<span className="text-sm text-white">{`© ${new Date().getFullYear()} Brian Siklinski. Created with React, Gatsby, Wordpress and Tailwind.`}</span>
		</footer>
	);
};

export default Footer;
