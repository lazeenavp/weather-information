import Container from 'react-bootstrap/Container';
import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Formnavbar.css'

function Formnavbar() {
  return (
    <Navbar className='nav' >
      <Container >
        <Navbar.Brand href="#home" className='home'>Weather Infomation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="link">
          <Link to="/home" className='link1'>Latest News</Link>
            <Link to="/" className='link1'>Weather Info</Link>
            
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Formnavbar;