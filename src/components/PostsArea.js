
import React, {useEffect, useState} from "react";
import PostCard from './PostCard.js';
import generateGifs from '../services/generateGifs.js';

function PostsArea({keyword, quantity}) {

	const [gifs, setGifs] = useState([]);

	useEffect(function() {

		generateGifs({search: keyword, num: quantity})
		.then(info => setGifs(info));

	}, [keyword, quantity]);

	return (
		<div className="search-results">
			{
				(gifs).map((gif, i) => {
					return <PostCard title={gif.title.toUpperCase()} key={gif.id} url={gif.url}/>
				})
			}
		</div>
	);
}

export default PostsArea;