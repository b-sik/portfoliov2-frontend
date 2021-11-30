import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/layout/layout';
import HomeSection from './../components/sections/home-section';
import SkillsSection from './../components/sections/skills-section';
import ProjectsSection from './../components/sections/projects-section';
import ContactSection from './../components/sections/contact-section';
import Seo from '../components/seo';

const Home = (props) => {
	/**
	 * Navigate to '/home' if pathname is '/'
	 */
	useEffect(() => {
		if ('/' === props.location.pathname) {
			navigate('/home');
			return <Seo />;
		}
		// 	eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout {...props}>
			<HomeSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
		</Layout>
	);
};

export default Home;
