import { useEffect } from 'react';
import { Routes, Route, useLocation, useParams } from 'react-router-dom';
import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';
import { About } from './pages/About';
import { useCursorSpotlight } from './hooks/useCursorSpotlight';

/** Keys `CaseStudy` by `slug` so navigating Previous/Next between
 * `/work/:slug` routes remounts it instead of reusing the same instance.
 * React Router alone doesn't remount on a param-only change, which left
 * `useInView`-based reveals (e.g. the Learning Loop section) stuck at
 * whatever in-view state they'd already settled into for the PREVIOUS
 * project — a fresh mount gives every observer a clean start. */
function CaseStudyRoute() {
  const { slug } = useParams<{ slug: string }>();
  return <CaseStudy key={slug} />;
}

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      // `behavior: 'auto'` here is load-bearing, not decorative: `html` in
      // global.css sets `scroll-behavior: smooth` site-wide (for the hash
      // case above), and a bare `window.scrollTo(0, 0)` silently inherits
      // that — so landing on a new page while scrolled far down (e.g.
      // clicking Previous/Next at the bottom of a case study) animated a
      // fast, disorienting scroll-up instead of just starting at the top.
      // This forces an instant jump for page-to-page navigation while
      // leaving the intentional smooth scroll-to-anchor above untouched.
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  return null;
}

export function App() {
  useCursorSpotlight();

  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/:slug" element={<CaseStudyRoute />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
