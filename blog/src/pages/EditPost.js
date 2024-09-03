import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
   const { id } = useParams();
   const [formData, setFormData] = useState({
      title: '',
      content: '',
   });
   const [error, setError] = useState('');
   const navigate = useNavigate();

   useEffect(() => {
      const fetchPost = async () => {
         try {
            const response = await axios.get(`/api/posts/${id}`);
            setFormData({
               title: response.data.title,
               content: response.data.content,
            });
         } catch (err) {
            setError('Failed to fetch post');
         }
      };

      fetchPost();
   }, [id]);

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
         await axios.put(`/api/posts/${id}`, formData, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         navigate('/');
      } catch (err) {
         setError('Failed to update post');
      }
   };

   return (
      <div className="flex justify-center items-center h-screen">
         <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
            <h2 className="text-xl mb-4">Edit Post</h2>
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
               Update Post
            </button>
         </form>
      </div>
   );
};

export default EditPost;
