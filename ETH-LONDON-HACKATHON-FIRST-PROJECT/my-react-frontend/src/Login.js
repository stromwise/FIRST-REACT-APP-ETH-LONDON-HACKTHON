import React, { useRef } from 'react';
import { useAuth } from './AuthContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const { value } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // await login(emailRef.current.value, passwordRef.current.value);
      // Handle successful login
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" ref={emailRef} placeholder="Email" required />
      <input type="password" ref={passwordRef} placeholder="Password" required />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
