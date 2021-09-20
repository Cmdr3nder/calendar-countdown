import React from 'react';
import ReactDOM from 'react-dom';
import {
	DateTime,
	Interval,
} from 'luxon';

import WelcomeMessage from './welcome';

function findHaloweenForYear(year) {
	const start = DateTime.local(year, 10, 31).startOf('day');

	return Interval.fromDateTimes(
		start,
		start.endOf('day')
	);
}

function nextHoliday(from, findHolidayForYear) {
	const year = from.toLocal().year;
	let holiday = findHolidayForYear(year);

   // If holiday is occurring during 'from' or is after 'from'
	if (!holiday.isBefore(from)) {
		return holiday;
	}

	return findHolidayForYear(year + 1);
}

function App() {
	const nextHaloween = React.useMemo(() => nextHoliday(DateTime.now(), findHaloweenForYear), []);
	const [ currently, setCurrently ] = React.useState(DateTime.now());

	React.useEffect(() => {
		const intervalID = setInterval(() => {
			setCurrently(DateTime.now());
		}, 0.5);

		return () => clearInterval(intervalID);
	}, []);

	return (
		<>
			<WelcomeMessage />
			<div>{currently.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)}</div>
			<div>{nextHaloween.toLocaleString()}</div>
		</>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
