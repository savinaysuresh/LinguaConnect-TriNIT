import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,  
  MDBIcon,
  MDBTextArea 
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function App() {
  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        

        <MDBCol md='12'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>
            <MDBRow>
            <MDBCol md='6'>
            
              <MDBRow>
                <MDBCol col='6'>
                  
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                </MDBCol>
              </MDBRow>
              <MDBInput wrapperClass='mb-4' label='Language you Teach' id='form1' type='language'/>
              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
              
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

              <p>Already regeistered? <Link to="/">Login</Link></p>
              
              </MDBCol>
              <MDBCol md='6'>
              <MDBTextArea label='Please give us your description' id='textAreaExample' rows={8} type='description' />
              </MDBCol>
              </MDBRow>
              <div className='text-center'>
              <MDBBtn className='mb-4 text-center' size='md'>    sign up    </MDBBtn>
              </div>
              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>
                
              </div>
              
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;