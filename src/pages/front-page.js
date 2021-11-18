import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import Seo from '../components/seo';

const FrontPage = () => {
	useEffect(() => {
		navigate('/about');
	}, []);

	return <Seo />;
};

export default FrontPage;
