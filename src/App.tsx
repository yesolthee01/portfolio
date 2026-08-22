import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';
import { About } from './pages/About';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return null;
}

export function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
