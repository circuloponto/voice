import React from 'react';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import './i18n';
import './App.css';
import Navbar from './components/Navbar';
import Objectives from './components/Objectives';
import Grid from './components/Grid';
import Activities from './components/Activities';
import Partners from './components/Partners';
import Footer from './components/Footer';
import HeadlineObjectives from './components/HeadlineObjectives';
import HeadlineTargetGroups from './components/HeadlineTargetGroups';
import TargetGroups from './components/TargetGroups';
import HeadlineResults from './components/HeadlineResults';
import Results from './components/Results';
import News from './components/News';
import Disclaimer from './components/Disclaimer';

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
    <div className="app">
     {/*  <Disclaimer /> */}
      <Grid />
      <Navbar />
      <HeadlineObjectives />
      <Objectives />
      <HeadlineTargetGroups />
      <TargetGroups />

     {/*  <HeadlineTargetGroups /> */}
      <Activities />
      <HeadlineResults />
      <Results />
      <Partners />
      <News />
      <Footer />
     
     
    </div>
  );
}

export default App;
