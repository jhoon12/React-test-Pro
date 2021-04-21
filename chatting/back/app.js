const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("connection");
  socket.on("init", (payload) => {
    console.log(payload);
  });
  socket.on("send message", (item) => {
    console.log(item.name + " : " + item.message);
    io.emit("receive message", { name: item.name, message: item.message });
  });
});

httpServer.listen(80);
