import React from 'react';

export default function Message(props) {
	return (
		<div className="position-fixed top-0 end-0 p-3">
			<div id="toast-answer" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
				<div className="toast-header">
					<strong className="me-auto">Minijuegos</strong>
					<button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
				</div>
				<div className="toast-body">
					{props.isCorrect ? '¡Correcto!' : '¡Incorrecto '}
				</div>
			</div>
		</div>
	);
}
