import React from 'react';
import HomeNav from './components/HomeNav';
import HomeHeroSection from './components/HomeHeroSection';
import HomeFeatures from './components/HomeFeatures';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <HomeNav />
      <HomeHeroSection />
      <HomeFeatures />
      <Footer />
    </div>
    </>
  );
}

export default App;