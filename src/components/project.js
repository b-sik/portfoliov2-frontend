import React from 'react';
import { __ } from '@wordpress/i18n';

const Project = ({ title, content }) => {
	return (
		<div className="inline-block h-80 w-80 bg-green-500 border rounded-2xl flex items-center justify-center">
			{title}
			<br />
			{content}
		</div>
	);
};

export default Project;
