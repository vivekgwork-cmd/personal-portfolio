import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import BlogPage from './pages/BlogPage';

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/blog/:id" element={<BlogPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

