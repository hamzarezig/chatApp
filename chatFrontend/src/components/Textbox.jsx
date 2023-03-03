import "./Textbox.css";
import { io } from  'socket.io-client'
import { useRef,useEffect } from "react";

const Textbox = () => {
  const socket = useRef();
  //let socketio = io("ws://localhost:9013");
  useEffect(() => {
    socket.current = io("ws://192.168.1.6:9013");
    socket.current.on("message", (socket) => {
      let chat = document.querySelector(".content");
      chat.innerHTML+= `<div class='recMsg'>${socket}</div>`;
      var xH = chat.scrollHeight;
      chat.scrollTo(0, xH);
    }) 
  }, []);
  const sendMsg = () => {
    let msg = document.querySelector("input").value;
    if (msg) {
      socket.current.emit("messaged", msg);
      let chat = document.querySelector(".content");
      chat.innerHTML += `<div class='msg'>${msg}</div>`;
      document.querySelector("input").value = "";
      var xH = chat.scrollHeight;
      chat.scrollTo(0, xH);
    }
  };
  return (
    <div className="testbox">
      <input onKeyDown={ e =>{ 
        if(e.key==='Enter'){
            return sendMsg()
        }
        }} type="text" placeholder="type what you love " />
      <button onClick={sendMsg}>send !</button>
    </div>
  );
};

export default Textbox;
