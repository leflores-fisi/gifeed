
import React, {useEffect, useState} from "react";
import Masonry from "masonry-layout";
import PostCard from './PostCard.js';
import generateGifs from '../services/generateGifs.js';

function PostsArea({keyword, quantity}) {

	const [gifs, setGifs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(function() {

		setLoading(true);
		generateGifs({search: keyword, num: quantity})
		.then(info => {
			setGifs(info);
			setLoading(false);
		});
	}, [keyword, quantity]);

	if (loading) {
		return (
			<div>
				CARGANDO MI REY 🧰🐒
			</div>
		)
	}
	var elem = document.querySelector(".search-results");
	var msnry = new Masonry(elem, {
		// options
		itemSelector: ".post",
		columnWidth: 250,
		gutter: 20,
		isFitWidth: true
	});

	return (
		<>
			{
				(gifs).map((gif, i) => {
					return <PostCard title={gif.title.toUpperCase()} key={gif.id} url={gif.url}/>
				})
			}
		</>
	);
}

export default PostsArea;