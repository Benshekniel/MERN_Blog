import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/HomeOne';
import CreatePost from './pages/CreatePostOne';
import Login from './pages/LoginOne';
import Register from './pages/Register';  // Import Register component

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />  {/* Add this line */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
