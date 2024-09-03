import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
   const [formData, setFormData] = useState({
      email: '',
      password: '',
   });
   const [error, setError] = useState('');

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post('/api/auth/login', formData);
         localStorage.setItem('token', response.data.token);
         console.log('Login successful', response.data);
         // Redirect to dashboard
      } catch (err) {
         setError(err.response.data.message);
      }
   };

   return (
      <div className="flex justify-center items-center h-screen">
         <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
            <h2 className="text-xl mb-4">Login</h2>
            {error && <p className="text-red-500">{error}</p>}
            <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               placeholder="Email"
               className="mb-2 p-2 border rounded w-full"
               required
            />
            <input
               type="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               placeholder="Password"
               className="mb-4 p-2 border rounded w-full"
               required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
               Login
            </button>
         </form>
      </div>
   );
};

export default Login;
