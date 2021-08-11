let http = require("http"),
      socketIO = require("socket.io"),
      fs = require("fs"),
      server,
      io;

server = http.createServer((req, res) => {
  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    res.writeHead(200);
    res.end(data);
  });
});

server.listen(5000);
io = socketIO(server);

io.on("connection", (socket) => {
  socket.emit("greeting-from-server", {
    greeting: "Hello Client"
  });

  socket.on("greeting-from-Client", (message) => {
    console.log(message);
  });
});
