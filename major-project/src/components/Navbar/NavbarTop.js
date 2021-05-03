import React from 'react'
import {
    Nav,
    NavbarContainer,  
    NavMenu,
    NavItem,  
    NavLinks,
  } from './NavbarTop.elements';

function NavbarTop() {
    return (
        <div>
            <Nav>
          <NavbarContainer>            
            <NavMenu >
              <NavItem>
                <NavLinks to='/'>
                  Find a Location
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services'>
                  Request Appointment
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products'>
                  Insurance
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/'>
                  FAQ
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services'>
                  Contact
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products'>
                  Pay my bill
                </NavLinks>
              </NavItem>                           
            </NavMenu>
          </NavbarContainer>
        </Nav>
            
        </div>
    )
}

export default NavbarTop
