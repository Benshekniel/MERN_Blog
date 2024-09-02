// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';

function Home() {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      axios.get('/api/posts')
         .then(response => setPosts(response.data))
         .catch(error => console.error(error));
   }, []);

   return (
      <div>
         <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
         <PostList posts={posts} />
      </div>
   );
}

export default Home;
