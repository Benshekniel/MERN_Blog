import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostList = () => {
   const [posts, setPosts] = useState([]);
   const [error, setError] = useState('');
   const navigate = useNavigate();

   useEffect(() => {
      const fetchPosts = async () => {
         try {
            const response = await axios.get('/api/posts');
            setPosts(response.data);
         } catch (err) {
            setError('Failed to fetch posts');
         }
      };

      fetchPosts();
   }, []);

   const handleDelete = async (postId) => {
      const token = localStorage.getItem('token');
      try {
         await axios.delete(`/api/posts/${postId}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         setPosts(posts.filter((post) => post._id !== postId));
      } catch (err) {
         setError('Failed to delete post');
      }
   };

   const handleEdit = (postId) => {
      navigate(`/edit-post/${postId}`);
   };

   return (
      <div className="p-6">
         <h1 className="text-2xl mb-4">Posts</h1>
         {error && <p className="text-red-500">{error}</p>}
         <ul>
            {posts.map((post) => (
               <li key={post._id} className="mb-2 p-4 border rounded">
                  <h2 className="text-xl">{post.title}</h2>
                  <p>{post.content}</p>
                  <small>by {post.author.name}</small>
                  <div className="flex mt-2">
                     <button
                        className="bg-yellow-500 text-white p-1 rounded mr-2"
                        onClick={() => handleEdit(post._id)}
                     >
                        Edit
                     </button>
                     <button
                        className="bg-red-500 text-white p-1 rounded"
                        onClick={() => handleDelete(post._id)}
                     >
                        Delete
                     </button>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default PostList;
