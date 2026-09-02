import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import ModularKitchens from './pages/ModularKitchens';
import ModularWardrobes from './pages/ModularWardrobes';
import BookConsultation from './pages/BookConsultation';
import About from './pages/About';
import Contact from './pages/Contact';
import FranchiseEnquiry from './pages/FranchiseEnquiry';
import FranchiseOpportunities from './pages/FranchiseOpportunities';

import { CinematicPageTransition } from './components/common/CinematicPageTransition';
import { LenisProvider } from './providers/LenisProvider';
import { CustomCursor } from './components/common/CustomCursor';


export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(() => {
    return typeof window !== 'undefined' ? window.location.pathname : '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    const interval = setInterval(() => {
      if (window.location.pathname !== currentPath) {
        setCurrentPath(window.location.pathname);
      }
    }, 100);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      clearInterval(interval);
    };
  }, [currentPath]);

  const renderPage = () => {
    if (currentPath === '/modular-kitchens') {
      return <ModularKitchens />;
    }

    if (currentPath === '/modular-wardrobes') {
      return <ModularWardrobes />;
    }

    if (currentPath === '/about') {
      return <About />;
    }

    if (currentPath === '/contact') {
      return <Contact />;
    }

    if (currentPath === '/franchise-enquiry') {
      return <FranchiseEnquiry />;
    }

    if (currentPath === '/franchise-opportunities') {
      return <FranchiseOpportunities />;
    }

    if (currentPath === '/talk-to-us') {
      return <BookConsultation />;
    }

    return <Home />;
  };

  return (
    <LenisProvider>
      <CustomCursor />
      <CinematicPageTransition>
        {renderPage()}
      </CinematicPageTransition>
    </LenisProvider>
  );
};

export default App;
