import React from 'react'
import {IndexLink, Link} from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import logo from './logo.png'
export const Header = (props) => (
  <div>
    <Navbar collapseOnSelect fixedTop className={props.hclass}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home" onClick={() => props.gotoanchorfn('home')}><img src={logo} width="75"  /></a>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem active={'home' === props.active} eventKey={1} href="#home" onClick={() => props.gotoanchorfn('home')}>Home</NavItem>
          <NavItem active={'about' === props.active} eventKey={2} href="#about" onClick={() => props.gotoanchorfn('about')}>About me</NavItem>
          <NavItem active={'whatido' === props.active} eventKey={3} href="#" onClick={() => props.gotoanchorfn('whatido')}>What i do.</NavItem>
          <NavItem active={'experience' === props.active} eventKey={4} href="#" onClick={() => props.gotoanchorfn('experience')}>Experience</NavItem>
          <NavItem active={'contact' === props.active} eventKey={5} href="#" onClick={() => props.gotoanchorfn('contact')}>Contact</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Header
