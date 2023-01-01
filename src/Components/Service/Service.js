import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

const Service = (props) => {
  const { _id, name, img, price, size } = props.realService
  const { handleDeleteService } = props
  return (
    <>
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price} Taka Only</Card.Text>
          <Card.Text> Size: {size}</Card.Text>

          <Button
            onClick={() => handleDeleteService(_id)}
            variant="primary"
            className="ms-4"
          >
            Delete
          </Button>
          <Link to={`/updateService/${_id}`}>
            <Button variant="primary" className="ms-4">
              Update
            </Button>
          </Link>
        </Card.Body>
      </Card>



      
    </div>
    <Footer></Footer>
    </>
  )
}

export default Service
