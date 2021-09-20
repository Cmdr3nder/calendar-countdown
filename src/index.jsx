import React from 'react';
import ReactDOM from 'react-dom';
import {DateTime} from 'luxon';

import WelcomeMessage from './welcome';
import useTimePoll from './hooks/time-poll';
import {nextHalloween} from './holidays';

function App() {
	const halloween = useTimePoll(() => nextHalloween(DateTime.now()), 1000 * 60 * 60);
	const currently = useTimePoll(() => DateTime.now(), 500);

	return (
		<>
			<WelcomeMessage />
			<div>{currently.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)}</div>
			<div>{halloween.toLocaleString()}</div>
		</>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
