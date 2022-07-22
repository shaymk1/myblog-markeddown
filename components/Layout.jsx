import React from 'react'
import Footer from '../pages/Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
    <Navbar/>
    {children}
    <Footer/>
    
    </div>
  )
}

export default Layout