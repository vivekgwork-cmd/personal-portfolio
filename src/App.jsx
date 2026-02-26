import React, { useState, useEffect } from 'react';
import Portfolio from './pages/Portfolio';

function App() {
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        const handleLocationChange = () => {
            setPath(window.location.pathname);
        };
        window.addEventListener('popstate', handleLocationChange);
        return () => window.removeEventListener('popstate', handleLocationChange);
    }, []);

    // Simple routing for the personal dashboard
    const renderPage = () => {
        return <Portfolio />;
    };

    return (
        <div className="app-container">
            {renderPage()}
        </div>
    );
}

export default App;
