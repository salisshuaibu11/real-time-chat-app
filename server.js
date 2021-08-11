let http = require("http"),
  express = require("express"),
  app = express(),
  socketIO = require("socket.io"),
  fs = require("fs"),
  server,
  io;

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

server = http.Server(app);
server.listen(5000);

io = socketIO(server);

io.on("connection", (socket) => {
  socket.emit("greeting-from-server", {
    greeting: "Hello Client",
  });

  socket.on("greeting-from-client", (message) => {
    console.log(message);
  });
});
