import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='nav' light expand="md">
        <NavbarBrand > <Link className='glow' to="/" >Store</Link></NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        {/* <Collapse isOpen={isOpen} navbar> */}

          <Nav className="mr-auto" navbar>
            <Link className='link' to="/" >Product</Link>
            <Link className='link' to="/about" >About</Link>
          </Nav>

          <Link className="ml-auto mr-5" to='/Cart'>
            <Button className='btn' color="primary"><i className="fa fa-shopping-cart align-middle">
            </i><span className='align-middle'> My Cart</span></Button>
          </Link>

        {/* </Collapse> */}
      </Navbar>
    </div>
  );
}

export default NavBar;