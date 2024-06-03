import { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Chat.css';

export default function Chat() {
  const location = useLocation();
  const [ messages, setMessages ] = useState([]);
  const username = location.state ? location.state?.username : "You";

  const messageInput = useRef();

  const chatScreenRef = useRef();

  useEffect(() => {
    messageInput.current.focus();
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (messageInput.current.value.trim() !== "") {
      // mantendo as mensagens atuais e adicionamos a nova mensagem...
      // cada mensagem é estruturada em "quem escreveu" e "o que escreveu"
      setMessages([
        ...messages,
        {
          username: username,
          message: messageInput.current.value,
        },
      ]);

      messageInput.current.value = "";
      messageInput.current.focus();

      const chatScreen = document.getElementById("chat-screen");
      chatScreen.scrollTop = chatScreen.scrollHeight;
    }
  }

  useEffect(() => {
    const chatScreen = chatScreenRef.current;
    chatScreen.scrollTop = chatScreen.scrollHeight;
  }, [messages]);

  return (
    <div>
      <header>
        <h1 className="logo">Monolog</h1>
      </header>
      <div id="chat-screen" ref={chatScreenRef}>
        <div>
          {messages.map((item) => {
            return (
              <div className="message-item message-user" key={item.message}>
                <div className="msg-user">
                  <strong>{item.username}</strong>
                </div>
                <div className="msg-chat">{item.message}</div>
              </div>  
            );
          })}
        </div>
      </div>
      <form id='chat-form' onSubmit={sendMessage}>
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