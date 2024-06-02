import { useState } from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    setUsername(event.target.elements.username_input.value);
  };

  return (
    <div id="container">
      <header>
        <h1 className='logo'>Monolog</h1>
      </header>
      <p>Your private echo chamber.</p>
      <form onSubmit={handleLogin}>
        <input type="text" id="username_input" placeholder='Pick an username' required />
        <Link id='link' to={{ pathname: "/chat", state: { username: username } }}>
          <button id="btn-login">Login</button>
        </Link>
      </form>
    </div>
  );
}