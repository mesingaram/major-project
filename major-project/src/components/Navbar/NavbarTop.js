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
                <NavLinks to='/find-location'>
                  Find a Location
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/appointment'>
                  Request Appointment
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/insurance'>
                  Insurance
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/FAQ'>
                  FAQ
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/contact'>
                  Contact
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/pay-my-bill'>
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
