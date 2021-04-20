// const app = require("express")();
// const http = require("http").createServer(app);
// const cors = require("cors");
// app.use(cors());
// const io = require("socket.io")(http, {
//   cors: {
//     origin: "http://localhost:3000",
//   },
// });

// app.use(cors());

// io.on("connection", (socket) => {
//
//   socket.on("test", () => {
//     console.log(21111111111111);
//     socket.emit("test2", {
//       msg: "hi",
//     });
//   });
//   console.log("연결");
// });

// app.listen(80, () => {
//   console.log("server on 80 port");
// });

const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
    // transports: ["websocket", "polling"],
    methods: ["GET", "POST"],
  },
  //   allowEIO3: true,
});

io.on("connection", (socket) => {
  console.log("connection");
  socket.on("init", (payload) => {
    console.log(payload);
  });
});

httpServer.listen(80);
