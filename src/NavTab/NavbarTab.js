import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import Accenture from '../NavComponents/Accenture'
import CoronavirusApi from '../NavComponents/CoronavirusApi'
import CryptoCurr from '../NavComponents/CryptoCurr'
import Date_time from '../NavComponents/Date_time'
import Search from '../NavComponents/Search'
import Weather from '../NavComponents/Weather'
import '../NavTab/Tab.css'

function NavbarTab() {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Navbar.Brand href='#home' className='neon'>
              ACCENTURE
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Link to='/weather' className='header__link'>
                <Nav.Link href='#features' style={{ textDecoration: 'none' }}>
                  WEATHER
                </Nav.Link>
              </Link>
              <Link to='/Search' className='header__link'>
                <Nav.Link href='#pricing'>PICSUM PIC</Nav.Link>
              </Link>
              <Link to='/covid' className='header__link'>
                <Nav.Link href='#covid' style={{ textDecoration: 'none' }}>
                  CORONAVIRUS
                </Nav.Link>
              </Link>
              <Link to='/crypto' className='header__link'>
                <Nav.Link href='#crypt' style={{ textDecoration: 'none' }}>
                  CRYPTOCURRENCY
                </Nav.Link>
              </Link>
              <Link to='/date' className='header__link'>
                <Nav.Link href='#dt' style={{ textDecoration: 'none' }}>
                  DATE TIME
                </Nav.Link>
              </Link>
              {/* <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Nav>
              <Nav.Link href='#deets'>More deets</Nav.Link>
              <Nav.Link eventKey={2} href='#memes'>
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Route path='/weather' component={Weather} exact />
      <Route path='/Search' component={Search} exact />
      <Route path='/covid' component={CoronavirusApi} exact />
      <Route path='/crypto' component={CryptoCurr} exact />
      <Route path='/' component={Accenture} exact />
      <Route path='/date' component={Date_time} exact />

      <Redirect path='/' />
    </div>
  )
}

export default NavbarTab
