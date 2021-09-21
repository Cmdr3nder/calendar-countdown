import _isFunction from 'lodash/isFunction';
import _padStart from 'lodash/padStart';

export function loggy(msg, stmt) {
	if (_isFunction(stmt)) {
		return (...args) => {
			console.log(msg, stmt, args);

			return stmt(...args);
		};
	}

	console.log(msg, stmt);

	return stmt;
}

export const zeroPadNum = (num, length) => _padStart(num.toString(), length, '0');

