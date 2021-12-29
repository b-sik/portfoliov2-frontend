import React from 'react';

const CardDescription = ({ description, center = false }) => {
	return <p className={`mt-2 ${center ? 'text-center px-10' : '' }`}>{description}</p>;
};

export default CardDescription;
