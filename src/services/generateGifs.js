
const api_key = 'Sk0NzMoIzISxZbl4vp1loBoWHAJN6Adi';

// From giphy developer API
async function generateGifs({search, num = 5} = {/*Default empty object*/}) {

	const api_url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}&limit=${num}&offset=0&rating=g&lang=es`;

	return fetch(api_url)
		.then(res => res.json())
		.then(json => {

			const {data} = json;
			const gifs = data.map(gif => {
				let {title, id} = gif;
				let url = gif.images.downsized_medium.url;
				return {title, id, url};
			});
			return gifs;
		})
		.catch("Error catched at generateGif()");
	// fetch end
}

export default generateGifs;