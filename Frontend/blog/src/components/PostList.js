// src/components/PostList.js
import React from 'react';

function PostList({ posts }) {
   return (
      <div>
         {posts.map(post => (
            <div key={post._id} className="bg-gray-100 p-4 mb-4 rounded shadow">
               <h2 className="text-xl font-bold">{post.title}</h2>
               <p>{post.content}</p>
               <p className="text-sm text-gray-600">By {post.author.name}</p>
            </div>
         ))}
      </div>
   );
}

export default PostList;
