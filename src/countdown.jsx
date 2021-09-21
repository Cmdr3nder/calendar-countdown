import React from 'react';
import PropTypes from 'prop-types';

import CountdownClock from './countdown-clock';

export default function Countdown(props) {
	const {
		greeting,
		holiday,
		now,
		title,
	} = props;

	// use .isAfter instead of .contains to include the potential overlap time of the Halloween
	// instance not having been updated just after the end of the Halloween period
	if (!holiday.isAfter(now)) {
		// Celebration Mode
		return (
			<div className="countdown">
				<h1>{greeting}</h1>
			</div>
		);
	}

	const nowToHoliday = now.until(holiday.start);

	// Requirement from primary user: if < 100 days, drop months
	let timeToHoliday = nowToHoliday.toDuration(['days', 'hours', 'minutes', 'seconds']);

	if (timeToHoliday.days > 99) {
		timeToHoliday = nowToHoliday.toDuration(['weeks', 'days', 'hours', 'minutes', 'seconds']);

		if (timeToHoliday.weeks > 6) {
			timeToHoliday = nowToHoliday.toDuration(['months', 'days', 'hours', 'minutes', 'seconds']);
		}
	}

	return (
		<div className="countdown">
			<h1>{title} Countdown</h1>
			<CountdownClock
				duration={timeToHoliday}
				/>
		</div>
	);
}

Countdown.propTypes = {
	greeting: PropTypes.string.isRequired,
	holiday: PropTypes.object.isRequired, // type: luxon Interval
	now: PropTypes.object.isRequired, // type: luxon DateTime
	title: PropTypes.string.isRequired,
};
