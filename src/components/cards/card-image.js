import React from 'react';

const CardImage = ({ image, alt }) => {
	return (
		<div className={`mt-4 border flex max-w-full rounded overflow-hidden`}>
			<img src={image} alt={alt} />
		</div>
	);
};

export default CardImage;
