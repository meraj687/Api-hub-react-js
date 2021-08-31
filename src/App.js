import React from 'react'
import Footer from './NavComponents/Footer'
import NavbarTab from './NavTab/NavbarTab'
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
// import './NavTab/Tab.css'

function App() {
  return (
    // <div>
    //   <Navbar bg='dark' variant='dark'>
    //     <Container>
    //       <Navbar.Brand href='#home' className='neon'>
    //         Navbar
    //       </Navbar.Brand>
    //       <Nav className='me-auto'>
    //         <Nav.Link href='#home'>Home</Nav.Link>
    //         <Nav.Link href='#features'>Features</Nav.Link>
    //         <Nav.Link href='#pricing'>Pricing</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
    // </div>
    <>
      <NavbarTab />
      <Footer />
    </>
  )
}

export default App
