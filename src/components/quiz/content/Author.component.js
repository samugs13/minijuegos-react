import React, { useContext } from 'react';
import { LangContext } from "../../lang/LangContext.component";

export default function Author(props) {

	const lang = useContext(LangContext);
	const author = props.author;
	const displayName = author ? author.profileName || author.username || "Unknown" : "Unknown";
	const displayPhoto = author ? author.photo.url || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y" : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y";

	return (
		<div>
			<div>
				<img src={displayPhoto} className="profile-photo" alt="profile" />
				<h5>{lang.dictionary["author"]} {displayName}</h5>
			</div>
		</div>
	);
}
