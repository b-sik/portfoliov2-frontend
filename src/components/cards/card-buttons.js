import React from 'react';
import Button from '../ui/button';

const CardButtons = ({ gitHubLink = null, liveDemoLink = null }) => {
	return (
		<div className={`w-full flex justify-between mt-4`}>
			{gitHubLink ? (
				<Button
					url={gitHubLink}
					label={'GitHub'}
					iconName={'faGithub'}
				/>
			) : null}
			{liveDemoLink ? (
				<Button
					url={liveDemoLink}
					label={'Live Demo'}
					iconName={'faDesktop'}
				/>
			) : null}
		</div>
	);
};

export default CardButtons;
