import React from 'react';
import ReactDOM from 'react-dom';
import {DateTime} from 'luxon';

import useTimePoll from './hooks/time-poll';
import {nextHalloween} from './holidays';
import Countdown from './countdown';

function App() {
	const halloween = useTimePoll(() => nextHalloween(DateTime.now()), 1000 * 60 * 60);
	const now = useTimePoll(() => DateTime.now(), 100);

	return (
		<>
			<Countdown
				greeting="Happy Halloween!"
				holiday={halloween}
				now={now}
				title="Halloween"
				/>
			<a href="https://www.peppercarrot.com/" className="bg-source-link">
				Pepper & Carrot Episode-1 by David Revoy (CC BY 4.0)
			</a>
		</>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
