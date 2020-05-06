import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color='secondary' light expand='md'>
        <NavbarBrand className='text-light' href='/'>
          CityGuide
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink className='ml-5 text-light' href='/components/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='ml-5 text-light' href='#'>
                News
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='ml-5 text-light' href='#'>
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
          <form class='form-inline my-2 my-lg-0'>
            <input
              class='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button class='btn btn-outline-success my-2 my-sm-0 ' type='submit'>
              Search
            </button>
          </form>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
