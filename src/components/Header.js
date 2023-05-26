import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://www.pngmart.com/files/1/Spoon-And-Fork-PNG-File.png"
          width="60"
          height="60"
          className="d-inline-block align-top"
        />{' '}
        <h1>Amigo Cafe</h1>
      </Navbar.Brand>
    </Container>
  </Navbar>
  </>
  )
}

export default Header