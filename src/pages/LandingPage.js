import React from 'react';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1' }}>
        <Landing />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
