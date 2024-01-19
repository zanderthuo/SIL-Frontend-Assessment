import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ViewAlbum from '../components/ViewAlbum'

const ViewAlbumPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1' }}>
        <ViewAlbum />
      </div>
      <Footer />
    </div>
  )
}

export default ViewAlbumPage