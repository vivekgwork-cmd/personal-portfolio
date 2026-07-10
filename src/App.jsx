import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Photography from './pages/Photography';
import BlogPage from './pages/BlogPage';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div id="root-inner">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/photography" element={<Photography />} />
                    <Route path="/blog/:id" element={<BlogPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
