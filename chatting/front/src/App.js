import React from "react";
import "./App.css";
import io from "socket.io-client";
const socket = io.connect("http://localhost:80");
socket.emit("init", { name: "jaehoon" });
function App() {
  return (
    <div>
      <input></input>
    </div>
  );
}

export default App;
