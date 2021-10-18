import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFileCode,
	faMailBulk,
	faDesktop,
	faEnvelope,
	faAngleDown,
	faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faReact,
	faJs,
	faPhp,
	faCss3,
	faWordpress,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Icons = ({ iconName, classnames }) => {
	switch (iconName) {
		case 'faWordpress':
			return (
				<FontAwesomeIcon icon={faWordpress} className={classnames} />
			);
		case 'faGithub':
			return <FontAwesomeIcon icon={faGithub} className={classnames} />;
		case 'faReact':
			return <FontAwesomeIcon icon={faReact} className={classnames} />;
		case 'faJs':
			return <FontAwesomeIcon icon={faJs} className={classnames} />;
		case 'faPhp':
			return <FontAwesomeIcon icon={faPhp} className={classnames} />;
		case 'faCss3':
			return <FontAwesomeIcon icon={faCss3} className={classnames} />;
		case 'faFileCode':
			return <FontAwesomeIcon icon={faFileCode} className={classnames} />;
		case 'faMailBulk':
			return <FontAwesomeIcon icon={faMailBulk} className={classnames} />;
		case 'faDesktop':
			return <FontAwesomeIcon icon={faDesktop} className={classnames} />;
		case 'faLinkedin':
			return <FontAwesomeIcon icon={faLinkedin} className={classnames} />;
		case 'faTwitter':
			return <FontAwesomeIcon icon={faTwitter} className={classnames} />;
		case 'faEnvelope':
			return <FontAwesomeIcon icon={faEnvelope} className={classnames} />;
		case 'faAngleDown':
			return <FontAwesomeIcon icon={faAngleDown} className={classnames} />;
		case 'faFileAlt':
			return <FontAwesomeIcon icon={faFileAlt} className={classnames} />;
		default:
			return null;
	}
};

export default Icons;