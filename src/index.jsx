import React from 'react';
import ReactDOM from 'react-dom';
import {DateTime} from 'luxon';

import useTimePoll from './hooks/time-poll';
import {nextHalloween} from './holidays';
import Countdown from './countdown';

function App() {
	const halloween = useTimePoll(() => nextHalloween(DateTime.now()), 1000 * 60 * 60);
	const now = useTimePoll(() => DateTime.now(), 500);
	// const now = DateTime.local(2021, 10, 31, 12, 0, 0); // Day-of testing
	// const now = DateTime.local(2021, 6, 20, 12, 0, 0); // Months ahead testing

	return (
		<>
			<Countdown
				greeting="Happy Halloween!"
				holiday={halloween}
				now={now}
				title="Halloween"
				/>
		</>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
