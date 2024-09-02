// src/components/PostForm.js
import React from 'react';

function PostForm({ title, setTitle, content, setContent, handleSubmit }) {
   return (
      <form onSubmit={handleSubmit}>
         <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
               type="text"
               className="w-full p-2 border rounded"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
         </div>
         <div className="mb-4">
            <label className="block text-gray-700">Content</label>
            <textarea
               className="w-full p-2 border rounded"
               value={content}
               onChange={(e) => setContent(e.target.value)}
            ></textarea>
         </div>
         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
   );
}

export default PostForm;
