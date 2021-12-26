import React from 'react';

export default function Photo(props) {

	const displayPhoto = props.photo ? props.photo.url : "https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image.jpg";

	return (
		<div>
			<img src={displayPhoto} className="city-photo"/>
		</div>
	);
}
