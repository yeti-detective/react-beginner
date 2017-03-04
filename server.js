const express = require('express'); // this is just so easy. Read up on it later
const app = express(); // now 'app' is an express application

const path = require('path'); // this will help you tell Node where your files are

// when the app 'gets' a request, it will send the index.html file
app.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/script', (req, res)=>{
	res.sendFile(path.join(__dirname + '/bundle.js'));
});

// the app will listen for requests on port 3000
app.listen(3000, ()=>{
	console.log('listening on http://localhost:3000');
});