import React from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div>
      <Container>
     
      
      <div className="logo">
      <Link to="/" ><img src={Logo}  width="150px" height="40px" alt="" /></Link>
      </div>
    <div className="nav">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li> <Link to="/">Donation</Link></li>
                    <li> <Link to="/events">Events </Link></li>
                    <li> <Link to="/">Blog </Link></li>
                    <li> <Link to="/login"><Button className="regBtn">Register</Button></Link> </li>
                    <li><Link to="/admin"><Button className="regBtn" variant="dark">Admin</Button> </Link></li>
                </ul>
            </div>
  
      </Container>
    </div>
  );
};

export default Header;