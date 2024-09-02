import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
   return (
      <nav className="bg-blue-500 p-4">
         <div className="container mx-auto flex justify-between">
            <Link to="/" className="text-white font-bold">My Blog</Link>
            <div>
               <Link to="/create-post" className="text-white mx-2">Create Post</Link>
               <Link to="/login" className="text-white mx-2">Login</Link>
               <Link to="/register" className="text-white mx-2">Register</Link>  {/* Add this line */}
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
