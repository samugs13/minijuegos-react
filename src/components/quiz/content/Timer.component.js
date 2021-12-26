import React, {useState, useEffect} from 'react';

export default function Timer(props) {
	const {initialMinute = 0,initialSeconds = 0} = props;
	const [ minutes, setMinutes ] = useState(initialMinute);
	const [ seconds, setSeconds ] =  useState(initialSeconds);
	const [ timeOut, setTimeOut ] = useState(false);

	useEffect(()=>{
		let myInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes == 0) {
					if (props.onTimeOut) {
						props.onTimeOut();
					}
					setTimeOut(true);
					clearInterval(myInterval)
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
		}, 1000)
		return ()=> {
			clearInterval(myInterval);
		};
	});

	return (
		<div>
			{ minutes === 0 && seconds === 0
			? null
			: <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1>
			}
		</div>
	);
}
