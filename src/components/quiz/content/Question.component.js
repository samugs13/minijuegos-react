import React from 'react';

export default function Question(props) {

	const photo = props.photo
	const displayPhoto = photo ? photo.url || "[NO IMAGE]" : "[NO IMAGE]";

	return (
		<div>
			<h3>{props.question}</h3>
			<img src={displayPhoto} className="city-photo"/>
		</div>
	);
}
