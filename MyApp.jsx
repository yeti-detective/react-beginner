import React from 'react';
var nurse = "world";

class MyApp extends React.Component {
	render(){
		return (
			<div className="hi-there">
				<h2>Hellooooooooo, {nurse}</h2>
			</div>
		);
	}
}

export default MyApp;