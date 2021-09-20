import {
	DateTime,
	Interval,
} from 'luxon';

import {
	findHalloweenForYear,
	nextHalloween,
	nextHoliday,
} from '../holidays';

const START_OF_DAY = [0, 0, 0, 0];
const MIDDLE_OF_DAY = [12, 0, 0, 0];
const END_OF_DAY = [23, 59, 59, 999];

describe('holidays helper', () => {
	describe('nextHoliday', () => {
		function findHolidayForYear(year) {
			return Interval.fromDateTimes(
				DateTime.local(year, 10, 31, ...START_OF_DAY),
				DateTime.local(year, 10, 31, ...END_OF_DAY),
			);
		}

		it('should find a holiday that has not yet started this year', () => {
			let from = DateTime.local(2021, 9, 19, ...MIDDLE_OF_DAY);

			expect(nextHoliday(from, findHolidayForYear)).toEqual(Interval.fromDateTimes(
				DateTime.local(2021, 10, 31, ...START_OF_DAY),
				DateTime.local(2021, 10, 31, ...END_OF_DAY),
			));
		});

		it('should find a holiday that is currently in progress', () => {
			let from = DateTime.local(2021, 10, 31, ...MIDDLE_OF_DAY);

			expect(nextHoliday(from, findHolidayForYear)).toEqual(Interval.fromDateTimes(
				DateTime.local(2021, 10, 31, ...START_OF_DAY),
				DateTime.local(2021, 10, 31, ...END_OF_DAY),
			));
		});

		it('should find the next holiday if holiday is over ', () => {
			let from = DateTime.local(2021, 11, 1, ...MIDDLE_OF_DAY);

			expect(nextHoliday(from, findHolidayForYear)).toEqual(Interval.fromDateTimes(
				DateTime.local(2022, 10, 31, ...START_OF_DAY),
				DateTime.local(2022, 10, 31, ...END_OF_DAY),
			));
		});
	});

	describe('findHalloweenForYear', () => {
		it('should find halloween 1981', () => {
			expect(findHalloweenForYear(1981)).toEqual(Interval.fromDateTimes(
				DateTime.local(1981, 10, 31, ...START_OF_DAY),
				DateTime.local(1981, 10, 31, ...END_OF_DAY),
			));
		});
	});

	describe('nextHalloween', () => {
		it('should find current year\'s halloween if earlier in the year', () => {
			expect(nextHalloween(
				DateTime.local(2021, 1, 1, ...MIDDLE_OF_DAY)
			)).toEqual(Interval.fromDateTimes(
				DateTime.local(2021, 10, 31, ...START_OF_DAY),
				DateTime.local(2021, 10, 31, ...END_OF_DAY),
			));
		});

		it('should find current year\'s halloween if same day', () => {
			expect(nextHalloween(
				DateTime.local(2021, 10, 31, ...MIDDLE_OF_DAY)
			)).toEqual(Interval.fromDateTimes(
				DateTime.local(2021, 10, 31, ...START_OF_DAY),
				DateTime.local(2021, 10, 31, ...END_OF_DAY),
			));
		});

		it('should find next year\'s halloween if later in the year', () => {
			expect(nextHalloween(
				DateTime.local(2021, 11, 15, ...MIDDLE_OF_DAY)
			)).toEqual(Interval.fromDateTimes(
				DateTime.local(2022, 10, 31, ...START_OF_DAY),
				DateTime.local(2022, 10, 31, ...END_OF_DAY),
			));
		});
	});
});
