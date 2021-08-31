import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import '../NavComponents/Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <h1 style={{ fontSize: '20px' }}>@ 2020 Copyright MDAryaan.com</h1>
      <p className='neon'>
        <FaFacebook /> <FaGithub /> <FaTwitter /> <FaInstagram />
      </p>
    </div>
  )
}

export default Footer
