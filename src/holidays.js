import {
	DateTime,
	Interval,
} from 'luxon';

export function findHalloweenForYear(year) {
	const start = DateTime.local(year, 10, 31).startOf('day');

	return Interval.fromDateTimes(
		start,
		start.endOf('day')
	);
}

export function nextHoliday(from, findHolidayForYear) {
	const year = from.toLocal().year;
	let holiday = findHolidayForYear(year);

   // If holiday is occurring during 'from' or is after 'from'
	if (!holiday.isBefore(from)) {
		return holiday;
	}

	return findHolidayForYear(year + 1);
}

export const nextHalloween = (from) => nextHoliday(from, findHalloweenForYear);
