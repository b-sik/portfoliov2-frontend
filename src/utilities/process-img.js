import { getImage } from 'gatsby-plugin-image';

export const processFeaturedImg = (featuredImage) => {
	return getImage(featuredImage.node.localFile).images.fallback.src;
}