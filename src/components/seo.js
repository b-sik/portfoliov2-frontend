import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useGeneralSettingsData } from '../hooks/use-general-settings-data';

const Seo = ({ lang, meta }) => {
	const { title, description, creatorFullName } = useGeneralSettingsData();

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			meta={[
				{
					name: `description`,
					content: description,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: description,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: creatorFullName || '',
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: description,
				},
			].concat(meta)}
		/>
	);
};

Seo.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
};

Seo.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
};

export default Seo;
