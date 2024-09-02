// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post('/api/auth/login', { email, password });
         localStorage.setItem('token', response.data.token);
         navigate('/');
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div>
         <h1 className="text-2xl font-bold mb-4">Login</h1>
         <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
         />
      </div>
   );
}

export default Login;
