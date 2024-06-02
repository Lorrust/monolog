import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Chat.css';

export default function Chat() {
  const location = useLocation();
  const username = location.state ? location.state.username : "You";

  const messageInput = useRef();
  const messageList = useRef();

  const sendMessage = (event) => {
    event.preventDefault();

    if (messageInput.current.value.trim() !== "") {
      const message = document.createElement("div");
      message.classList.add("message-item", "message-user");
      message.innerHTML = `<div class="msg-user"><strong>${username}</strong></div>
      <div class="msg-chat">${messageInput.current.value}</div>`;

      messageList.current.appendChild(message);
      messageInput.current.value = "";
      messageInput.current.focus();

      const chatScreen = document.getElementById("chat-screen");
      chatScreen.scrollTop = chatScreen.scrollHeight;
    }
  };

  return (
    <div>
      <header>
        <h1 className="logo">Monolog</h1>
      </header>
      <div id="chat-screen">
        <div ref={messageList}></div>
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          ref={messageInput}
          placeholder="What is on your mind?"
        />
        <button type="submit">➤</button>
      </form>
    </div>
  );
}
