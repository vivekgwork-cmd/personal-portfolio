import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Cursor from './components/Cursor.jsx';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import Photography from './pages/Photography.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll on route change unless hash present
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <Cursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
