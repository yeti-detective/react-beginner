import React from 'react';
import {render} from 'react-dom';
import MyApp from './MyApp.jsx';

class App extends React.Component {
	render() {
		return (
			<MyApp />
		);
	}
}

render(<App/>, document.getElementById('app'));