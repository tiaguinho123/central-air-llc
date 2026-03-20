import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyFooter from './components/MobileStickyFooter';

// Pages
import HomePage from './pages/HomePage';
import HeatingPage from './pages/HeatingPage';
import CoolingPage from './pages/CoolingPage';
import IndoorAirQualityPage from './pages/IndoorAirQualityPage';
import HeatPumpsPage from './pages/HeatPumpsPage';
import MiniSplitsPage from './pages/MiniSplitsPage';
import ServiceAgreementsPage from './pages/ServiceAgreementsPage';
import FinancingPage from './pages/FinancingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-red-700 focus:rounded-lg focus:shadow-lg focus:font-bold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* HVAC Services */}
          <Route path="/heating" element={<HeatingPage />} />
          <Route path="/cooling" element={<CoolingPage />} />
          <Route path="/heat-pumps" element={<HeatPumpsPage />} />
          <Route path="/mini-splits" element={<MiniSplitsPage />} />
          <Route path="/indoor-air-quality" element={<IndoorAirQualityPage />} />
          <Route path="/service-agreements" element={<ServiceAgreementsPage />} />

          {/* Company */}
          <Route path="/financing" element={<FinancingPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />

          {/* Legacy routes — redirect to best match */}
          <Route path="/comfort-controls" element={<MiniSplitsPage />} />
          <Route path="/hvac-service-agreements" element={<ServiceAgreementsPage />} />
          <Route path="/hvac-services/heating" element={<HeatingPage />} />
          <Route path="/hvac-services/cooling" element={<CoolingPage />} />
          <Route path="/hvac-services/heat-pumps" element={<HeatPumpsPage />} />
          <Route path="/hvac-services/indoor-air-quality" element={<IndoorAirQualityPage />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
      <MobileStickyFooter />
    </BrowserRouter>
  );
}
