import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/layout/layout';
import AboutSection from './../components/sections/about-section';
import SkillsSection from './../components/sections/skills-section';
import Seo from '../components/seo';

const About = (props) => {
	/**
	 * Navigate to '/home' if pathname is '/'
	 */
	useEffect(() => {
		if ('/' === props.location.pathname) {
			navigate('/about');
			return <Seo />;
		}
		// 	eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout {...props}>
			<AboutSection />
			<SkillsSection />
		</Layout>
	);
};

export default About;
