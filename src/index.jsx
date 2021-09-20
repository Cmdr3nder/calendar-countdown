import React from 'react';
import ReactDOM from 'react-dom';

import WelcomeMessage from './welcome';

function App() {
	return (
		<WelcomeMessage />
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
