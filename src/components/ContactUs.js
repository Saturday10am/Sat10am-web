import React from 'react';
import styled from 'styled-components';

function ContactUs() {
  return (
    <div>
        <Container>
            <h1>Contact us</h1>
        </Container>
    </div>
  )
}

export default ContactUs

const Container = styled.div`
    margin-top: 100px;
    text-align: center;
    height: 50vh;
`