import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
function Restcard({restaurant}) {
  return (
    <Col sm={12} md={6} lg={4} xl={3}>
      <Link to={`Viewrest/${restaurant.id}`} style={{textDecoration:"none",color:""}}>
      <Card className='mt-3' >
    <Card.Img className='' variant="top" src={restaurant.photograph} />
    <Card.Body>
      <Card.Title>{restaurant.name}</Card.Title>
      <Card.Text>
        {restaurant.neighborhood}
      </Card.Text>
      <Card.Text>
        {restaurant.address}
      </Card.Text>
      <Button variant="primary">View details</Button>
    </Card.Body>
  </Card>
      </Link>
      
  </Col>
  )
}

export default Restcard