
import React, {useEffect, useState} from "react";
import generateProfile from "../services/generateProfile";
import '../css/Post.css'

function PostCard ({title, id, url}) {

	const [user, setUser] = useState("User info not available");

	useEffect(function () {
		generateProfile().then(p => setUser(p))
	}, []);

	return (
		<div className="post">
			<div className="post__content">
				<img alt={title} src={url} id={id} key={id}/>
			</div>
			<footer className="post__footer">
				<div className="post-info">
					<h4 className="post-info__title">{title.toUpperCase()}</h4>
					<div className="post-info__username">{`${user.first_name} ${user.last_name}`}</div>
				</div>
				<picture>
					<img className="user-profile" alt="App user" src={user.avatar} id={id} key={id}/>
				</picture>
			</footer>
		</div>
	)
}

export default PostCard;