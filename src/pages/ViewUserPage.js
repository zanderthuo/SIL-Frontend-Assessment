import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ViewUser from '../components/ViewUser'

const ViewUserPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1' }}>
        <ViewUser />
      </div>
      <Footer />
    </div>
  )
}

export default ViewUserPage