import { getImage } from 'gatsby-plugin-image';

export const getImgSrc = (featuredImage) => {
	return getImage(featuredImage.node.localFile).images.fallback.src;
}