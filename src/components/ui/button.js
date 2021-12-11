import React from 'react';
import Icons from '../../components/icons';
import { Link } from 'gatsby';

const Button = ({
	url,
	label,
	iconName = null,
	classnames = '',
	iconClassnames = '',
	link = false,
}) => {
	const defaultClasses = 'border border-gray-500 font-bold py-2 px-4 rounded bg-opacity-90 bg-indigo-500 text-white';

	return link ? (
		<Link to={url} className={`${defaultClasses} ${classnames}`}>
			{label}&nbsp;&nbsp;
			{iconName && (
				<Icons iconName={iconName} iconClassnames={iconClassnames} />
			)}
		</Link>
	) : (
		<a
			href={url}
			className={`${defaultClasses} ${classnames}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			{label}&nbsp;&nbsp;{iconName && <Icons iconName={iconName} />}
		</a>
	);
};

export default Button;
