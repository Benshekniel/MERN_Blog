import React from 'react';

function RegisterForm({ name, setName, email, setEmail, password, setPassword, handleSubmit }) {
   return (
      <form onSubmit={handleSubmit}>
         <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
               type="text"
               className="w-full p-2 border rounded"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
         </div>
         <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
               type="email"
               className="w-full p-2 border rounded"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
         </div>
         <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
               type="password"
               className="w-full p-2 border rounded"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
         </div>
         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
   );
}

export default RegisterForm;
