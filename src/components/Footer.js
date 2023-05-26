import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Footer() {
  return (
    <div>  <Card className="text-center">
    <Card.Header>Featured</Card.Header>
    <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary">Contact Us..</Button>
    </Card.Body>
    <Card.Footer className="text-muted">@amigocafe.gmail.com</Card.Footer>
  </Card></div>
  )
}

export default Footer