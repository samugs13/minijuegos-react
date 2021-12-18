import React from 'react';

export default function Header(props) {
	return (
		<div
			className="card"
			style={{
				width: '18rem',
				margin: '0 auto',
			}}
		>
			<div className="card-body">
				<div className="card-title">
				Turn
				</div>
				<div className="card-text">
					{props.text}
				</div>
			</div>
		</div>
	);
}
