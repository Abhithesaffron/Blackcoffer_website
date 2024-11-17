import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import BlackcofferInfo from './components/Blackcofferinfo';
import Features from './components/Features';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';
import CallBackRequest from './components/CallBackrequest';
import v from './assets/v.jpg';
import './App.css';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${v})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '700px', // Restrict height to 800px
        width: '102vw', // Full screen width
      }}
    >
      <Header />
      <HeroSection />
      <Services />
      <BlackcofferInfo />
      <Features />
      <SuccessStories />
      <CallBackRequest />
      <Footer />
    </div>
  );
}

export default App;
