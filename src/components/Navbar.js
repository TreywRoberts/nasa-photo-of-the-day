import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
background-color: black;
display: flex;
align-items: center;
justify-content: space-evenly;

margin-bottom: 2%;
    h1{
    
        color: red;
    }
    a{
        color: white;
    }
`

function Navbar(){
  
    return (
    <StyledNav>
        <h1>NASA PHOTO OF THE DAY</h1>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>

  
    </StyledNav>
  );
  }

export default Navbar