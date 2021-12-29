import React from 'react';
import Button from '../ui/button';

const CardButtons = ({
	gitHubLink = null,
	liveDemoLink = null,
	center = false,
}) => {
	return (
		<div
			className={`w-full flex ${
				center ? 'justify-center' : 'justify-between'
			} mt-4`}
		>
			{gitHubLink ? (
				<Button
					url={gitHubLink}
					label={'GitHub'}
					iconName={'faGithub'}
				/>
			) : null}

			{liveDemoLink ? (
				<Button
					classnames="ml-4"
					url={liveDemoLink}
					label={'Live Demo'}
					iconName={'faDesktop'}
				/>
			) : null}
		</div>
	);
};

export default CardButtons;
