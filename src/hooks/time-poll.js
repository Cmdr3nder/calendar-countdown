import React from 'react';

export default function useTimePoll(func, delay, deps = []) {
	// We pass useState a method to utilize for initial value setting, this way our potentially
	// complex func doesn't get called every render.
	// See: https://reactjs.org/docs/hooks-reference.html "Lazy initial state"
	const [value, setValue] = React.useState(() => func());

	React.useEffect(() => {
		const intervalID = setInterval(() => {
			setValue(func());
		}, delay);

		return () => clearInterval(intervalID);
	}, deps);

	return value;
}
