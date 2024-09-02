// src/pages/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';

function CreatePost() {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await axios.post('/api/posts', { title, content }, {
            headers: {
               'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
         });
         navigate('/');
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div>
         <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
         <PostForm
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            handleSubmit={handleSubmit}
         />
      </div>
   );
}

export default CreatePost;
