import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import CinematicDashboard from './components/CinematicDashboard';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Integrations from './components/Integrations';
import Membership from './components/Membership';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

const LandingPage = () => (
  <main className="min-h-screen relative w-full overflow-hidden bg-black text-white">
    <Navbar />
    <Hero />
    <TrustBanner />
    <Integrations />
    <CinematicDashboard />
    <Features />
    <Philosophy />
    <Protocol />
    <Membership />
    <Footer />
  </main>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
