import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1' }}>
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage