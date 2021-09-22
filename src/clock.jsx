import React from 'react';
import PropTypes from 'prop-types';

import {zeroPadNum} from './helpers';

function ClockSegment(props) {
	const {
		highlightValue,
		label,
		optional,
		pad,
		value,
	} = props;

	const flooredValue = Math.floor(value);

	if (optional && flooredValue <= 0) {
		return null;
	}

	const pluralizedLabel = flooredValue === 1
		? label
		: `${label}s`;
	const paddedValue = zeroPadNum(flooredValue, pad || 1);

	const valueClasses = ['value'];

	if (highlightValue) {
		valueClasses.push('highlighted');
	}

	return (
		<div className="clock-segment">
			<div className={valueClasses.join(' ')}>
				{paddedValue}
			</div>
			<div className="label">
				{pluralizedLabel}
			</div>
		</div>
	);
}

ClockSegment.propTypes = {
	highlightValue: PropTypes.bool,
	label: PropTypes.string.isRequired,
	optional: PropTypes.bool,
	pad: PropTypes.number,
	value: PropTypes.number.isRequired,
};

export default function Clock(props) {
	const {
		duration,
	} = props;

	return (
		<div className="clock">
			<ClockSegment
				label="month"
				optional={true}
				value={duration.months}
				/>
			<ClockSegment
				label="week"
				optional={true}
				value={duration.weeks}
				/>
			<ClockSegment
				label="day"
				pad={2}
				value={duration.days}
				/>
			<ClockSegment
				label="hour"
				pad={2}
				value={duration.hours}
				/>
			<ClockSegment
				label="minute"
				pad={2}
				value={duration.minutes}
				/>
			<ClockSegment
				highlightValue={true}
				label="second"
				pad={2}
				value={duration.seconds}
				/>
		</div>
	);
}

Clock.propTypes = {
	duration: PropTypes.object.isRequired, // type: luxon Interval
};
