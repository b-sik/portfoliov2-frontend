import React from 'react';
import Layout from '../components/layout/layout';
import ContactSection from '../components/sections/contact-section';

const Contact = (props) => {

	return (
		<Layout {...props}>
			<ContactSection />
		</Layout>
	);
};

export default Contact;
