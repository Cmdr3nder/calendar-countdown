import _isFunction from 'lodash/isFunction';

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

