var app = require('http').createServer(handler);
var io = require('socket.io')(app)

app.listen(7777);

function handler (req, res) {
	
}

io.on('connection', function (socket) {
	socket.on('message', function(message) {
		//console.log(message);
		io.emit('message', message);
	})
});