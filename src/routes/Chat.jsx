import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Chat.css';

export default function Chat() {
  const location = useLocation();
  const username = location.state ? location.state.username : 'You';

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

      const chatScreen = document.getElementById('chat-screen');
  chatScreen.scrollTop = chatScreen.scrollHeight;
    }
  }

  return (
    <div>
      <header>
        <h2>Monolog</h2>
      </header>
      <div id="chat-screen">
        <div ref={messageList}></div>
      </div>
      <form onSubmit={sendMessage}>
        <input type="text" ref={messageInput} placeholder="What is on your mind?" />
        <button type="submit">➤</button>
      </form>
    </div>
  );

        // <div id="chat-screen">
        //     <header>
        //         <h2>Technical Support</h2>
        //     </header>
        //     <div className="messages-list">
        //         <div className="message-item message-user">
        //             <div className="msg-user"><strong>You</strong></div>
        //             <div className="msg-chat">Hi, my order ID is 2234570.</div>
        //         </div>
        //         <div className="message-item message-user">
        //             <div className="msg-user"><strong>You</strong></div>
        //             <div className="msg-chat">Why is it taking so long for it to be delivered?</div>
        //         </div>
        //         <div className="message-item">
        //             <div className="msg-user"><strong>Support</strong></div>
        //             <div className="msg-chat">Hello, Mr. Morry, we are currently dealing with a high demand.</div>
        //         </div>
        //         <div className="message-item">
        //             <div className="msg-user"><strong>Support</strong></div>
        //             <div className="msg-chat">We thank you for choosing our service, and you shall not receive any shipping fees.</div>
        //         </div>
        //         <div className="message-item message-user">
        //             <div className="msg-user"><strong>You</strong></div>
        //             <div className="msg-chat">All right, that sounds good.</div>
        //         </div>
        //         <div className="message-item">
        //             <div className="msg-user"><strong>Support</strong></div>
        //             <div className="msg-chat">We are glad to hear that. Have a nice day!</div>
        //         </div>
        //     </div>
        //     <form id="form-chat-send" action="index.html" method="post">
        //         <input type="text" id="message" name="message" placeholder="Message" />
        //         <button type="submit">➤</button>
        //     </form>
        // </div>
    // );
}