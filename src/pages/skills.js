import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import Seo from '../components/seo';

const FrontPage = () => {
	useEffect(() => {
		navigate('/home#skills-wrapper');
	}, []);

	return <Seo />;
};

export default FrontPage;
