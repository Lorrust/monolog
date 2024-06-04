import { useRef, useEffect } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const usernameInput = useRef();

  useEffect(() => {
    usernameInput.current.focus();
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/chat', { state: { username: usernameInput.current.value } });
  };

  return (
    <div id="container">
      <header>
        <h1 className='logo'>Monolog</h1>
      </header>
      <p>Your private echo chamber.</p>
      <form onSubmit={handleLogin}>
        <input type="text" ref={usernameInput} placeholder='Pick an username' />
          <button id="btn-login">Login</button>
      </form>
    </div>
  );
}