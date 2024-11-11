import React from 'react';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Achievements from './components/Achievements';
import Vision from './components/Vision';
import Footer from './components/Footer';
import TrackRecord from './components/TrackRecord';

function App() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <Profile />
      <Achievements />
      <TrackRecord />
      <Vision />
      <Footer />
    </div>
  );
}

export default App;