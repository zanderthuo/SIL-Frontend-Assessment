import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ViewPhoto from '../components/ViewPhoto'

const ViewPhotoPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1' }}>
        <ViewPhoto />
      </div>
      <Footer />
    </div>
  )
}

export default ViewPhotoPage