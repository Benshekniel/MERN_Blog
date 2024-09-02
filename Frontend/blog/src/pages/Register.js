import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

function Register() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await axios.post('/api/auth/register', { name, email, password });
         navigate('/login');  // Redirect to login page after successful registration
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div>
         <h1 className="text-2xl font-bold mb-4">Register</h1>
         <RegisterForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
         />
      </div>
   );
}

export default Register;
