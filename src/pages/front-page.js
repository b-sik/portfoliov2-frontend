import React from 'react';
import { graphql } from 'gatsby';
import parse from 'react-html-parser';

import Layout from '../components/layout';
import Seo from '../components/seo';

const FrontPage = ({
	data: {
		wpPage: { content },
	},
}) => {
	// const siteTitle = data.site.siteMetadata.title;

	return parse(content);
	// <Layout location={location} title={siteTitle}>
	// 	<Seo title="404: Not Found" />
	// 	<h1>404: Not Found</h1>
	// 	<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	// </Layout>
};

export default FrontPage;

export const pageQuery = graphql`
	{
		wpPage {
			id
			content
			databaseId
			title
			uri
			isFrontPage
		}
	}
`;
