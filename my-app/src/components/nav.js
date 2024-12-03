import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

export default function App() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Lingua Connect</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Find Tutor</MDBNavbarLink>
            </MDBNavbarItem>            

            <MDBNavbarItem>
              <MDBNavbarLink href='/login'>Login</MDBNavbarLink>
            </MDBNavbarItem> 
            <MDBNavbarItem>
              <MDBNavbarLink href='/RegisterS'>Register as Student</MDBNavbarLink>
            </MDBNavbarItem> 

            <MDBNavbarItem>
              <MDBNavbarLink href='/RegisterT'>Become a Tutor</MDBNavbarLink>
            </MDBNavbarItem> 

          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='find tutor' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}