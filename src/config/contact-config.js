import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faLinkedin,
	faTwitter,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';

export const contactConfig = [
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com',
		icon: <FontAwesomeIcon icon={faLinkedin} />,
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com',
		icon: <FontAwesomeIcon icon={faTwitter} />,
	},
	{
		name: 'GitHub',
		url: 'https://github.com',
		icon: <FontAwesomeIcon icon={faGithub} />,
	},
	{
		name: 'email',
		url: null,
		icon: <FontAwesomeIcon icon={faEnvelope} />,
	},
];
