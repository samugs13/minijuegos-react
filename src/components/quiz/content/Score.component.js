import React from 'react';

export default function Score(props) {

	return (
		<h1>
            <span className="badge bg-success" style={{marginLeft: "10px",}}>
                {props.score}
            </span>
		</h1>
	);
}
