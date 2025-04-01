import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import './i18n';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ObjectivesPage from './pages/ObjectivesPage';
import TargetGroupsPage from './pages/TargetGroupsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ResultsPage from './pages/ResultsPage';
import PartnersPage from './pages/PartnersPage';
import NewsPage from './pages/NewsPage';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => {
        // Start with zero initial velocity using cubic bezier
        const t2 = t * t;
        const t3 = t2 * t;
        return 3 * t2 - 2 * t3;
      },
      orientation: 'vertical',
      smoothWheel: true,
      smoothTouch: true,
      lerp: 0.1  // Lower value = smoother start
    });

    // Make lenis available globally
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.lenis = null;
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/objectives" element={<ObjectivesPage />} />
            <Route path="/target-groups" element={<TargetGroupsPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
