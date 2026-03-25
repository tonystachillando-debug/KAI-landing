import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { trackPageView } from './lib/analytics';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThankYou from './components/ThankYou';
import TrustBanner from './components/TrustBanner';
import CinematicDashboard from './components/CinematicDashboard';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Integrations from './components/Integrations';
import Membership from './components/Membership';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

import BookCallModal from './components/BookCallModal';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <main className="min-h-screen relative w-full overflow-hidden bg-black text-white">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero />
      <TrustBanner />
      <Integrations />
      <CinematicDashboard />
      <Features />
      <Philosophy />
      <Protocol />
      <Membership />
      <Footer onOpenModal={() => setIsModalOpen(true)} />
      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

function RouteTracker() {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  return null;
}

function App() {
  return (
    <Routes>
      <Route path="/*" element={<RouteTracker />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default App;
