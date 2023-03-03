const express = require('express')
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
					transports: ["polling"],
                                	cors: {
                                		origin: "*",
                                	},
                        	});
const cors = require("cors");

app.use(cors());
app.get('/',(req,res)=>{
    res.send('hello here')
})

io.on('connection', (socket) => {
	console.log("someone connected ")
	socket.on("messaged",(msg)=>{
		console.log("msg :",msg )
		socket.broadcast.emit("message",msg )
	})
})

server.listen(9013,()=>{
    console.log('server is running on http://localhost:9013')
})
