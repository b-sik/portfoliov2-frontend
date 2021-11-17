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
	grow = false,
}) => {
	const defaultClasses =
		'p-4 bg-gray-200 hover:bg-gray-300 text-black rounded';

	const darkModeClasses =
		'border dark:border-gray-200 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700';

	const growClasses = 'flex-grow text-center m-6 md:m-10';

	return link ? (
		<Link
			to={url}
			className={`${defaultClasses} ${darkModeClasses} ${
				grow ? growClasses : ''
			} ${classnames}`}
		>
			{label}&nbsp;
			{iconName && (
				<Icons iconName={iconName} iconClassnames={iconClassnames} />
			)}
		</Link>
	) : (
		<a
			href={url}
			className={`${defaultClasses} ${darkModeClasses} ${classnames}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			{label}&nbsp;{iconName && <Icons iconName={iconName} />}
		</a>
	);
};

export default Button;
