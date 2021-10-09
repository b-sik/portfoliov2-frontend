import React from 'react';
import Icons from '../../components/icons';
import { Link } from 'gatsby';

const Button = ({ url, label, iconName = null, link = false }) => {
	const defaultClasses =
		'p-4 mt-4 bg-gray-200 hover:bg-gray-300 text-black rounded';

	return link ? (
		<Link href={url} className={`${defaultClasses} flex-grow text-center m-6 md:m-10`}>
			{label}&nbsp;{iconName && <Icons iconName={iconName} />}
		</Link>
	) : (
		<a
			href={url}
			className={defaultClasses}
			target="_blank"
			rel="noopener noreferrer"
		>
			{label}&nbsp;{iconName && <Icons iconName={iconName} />}
		</a>
	);
};

export default Button;
