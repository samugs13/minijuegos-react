import React from 'react';

export default function Author(props) {
	const author = props.author;
	const displayName = author ? author.profileName || author.username || "Unknown" : "Unknown";
	const displayPhoto = author ? author.photo.url || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y" : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y";

	return (
		<div>
			<div>
				<img src={displayPhoto} className="profile-photo" alt="profile" />
				<h5>Created by: {displayName}</h5>
			</div>
		</div>
	);
}
