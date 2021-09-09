import React from 'react';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';

import Nav from '../components/nav';
import Seo from '../components/seo';

const Contact = ({
	data: {
		allWpPage: { edges },
	},
}) => {
	const {
		node: { content },
	} = edges[0];
	return (
		<div>
			<Nav location="/contact" />
			<Seo title="Contact" />
			{parse(content)}
		</div>
	);
};

export default Contact;

export const pageQuery = graphql`
	{
		allWpPage(filter: { databaseId: { eq: 24 } }) {
			edges {
				node {
					content
				}
			}
		}
	}
`;
