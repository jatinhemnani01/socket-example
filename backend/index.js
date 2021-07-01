const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());
app.use(cors());
require("dotenv").config();

io.on("connection", (socket) => {
  console.log("Socekt:", socket);
  console.log("Socket is active");

  socket.on("chat", (payload) => {
    console.log("Payload:", payload);
    io.emit("chat", payload);
  });
});

server.listen(5000, () => console.log("Server Running..."));
