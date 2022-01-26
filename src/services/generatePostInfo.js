
import generateProfile from "./generateProfile.js";
import generateGifs from './generateGifs.js';

async function generatePostInfo(keyword, quantity) {
	
	return generateProfile(quantity)
	.then(profile => generateGifs({search: keyword, num: quantity})
	.then(gifs => {return [profile, gifs]}));
}

export default generatePostInfo;
