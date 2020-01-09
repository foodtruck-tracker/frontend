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
  DropdownItem  
} from 'reactstrap';


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Food Truck Tracker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink href="/components/">My Trucks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/becomeadiner/">Become A Diner</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Reviews</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Food Menu</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/components/">Add Truck</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Profile
                </DropdownItem>
                <DropdownItem>
                  Account
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;