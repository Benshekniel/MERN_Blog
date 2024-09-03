import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
   const [formData, setFormData] = useState({
      title: '',
      content: '',
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
      const token = localStorage.getItem('token');
      try {
         const response = await axios.post('/api/posts', formData, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         console.log('Post created', response.data);
         // Redirect to post list or show success message
      } catch (err) {
         setError('Failed to create post');
      }
   };

   return (
      <div className="flex justify-center items-center h-screen">
         <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
            <h2 className="text-xl mb-4">Create Post</h2>
            {error && <p className="text-red-500">{error}</p>}
            <input
               type="text"
               name="title"
               value={formData.title}
               onChange={handleChange}
               placeholder="Title"
               className="mb-2 p-2 border rounded w-full"
               required
            />
            <textarea
               name="content"
               value={formData.content}
               onChange={handleChange}
               placeholder="Content"
               className="mb-4 p-2 border rounded w-full"
               required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
               Create Post
            </button>
         </form>
      </div>
   );
};

export default CreatePost;
