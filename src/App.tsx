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
      // Explicit `behavior: 'auto'` rather than a bare `window.scrollTo(0, 0)`.
      // `html` in global.css deliberately does NOT set a global
      // `scroll-behavior: smooth` (see the comment there) precisely because
      // that used to make this reset silently animate too — landing on a
      // new page while scrolled far down (e.g. clicking Previous/Next at
      // the bottom of a case study) visibly scrolled up from the old
      // position instead of just starting at the top. Spelling out `auto`
      // here keeps this jump instant regardless of any scroll-behavior
      // set elsewhere in the future, without relying on the CSS staying a
      // particular way. Smooth scrolling for hash anchors stays local to
      // the branch above, via `scrollIntoView({ behavior: 'smooth' })`.
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
