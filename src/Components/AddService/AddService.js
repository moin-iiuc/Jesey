import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import Footer from '../Footer'
import  './AddService.css'

const AddService = () => {
  const nameRef = useRef()
  const priceRef = useRef()
  const sizeRef = useRef()
  const imgRef = useRef()

  const handleAddService = (e) => {
    const name = nameRef.current.value
    const price = priceRef.current.value
    const size = sizeRef.current.value
    const img = imgRef.current.value

    const newService = { name, price, size, img }

    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Data is Successfully added in database')
        }
      })

    e.preventDefault()
  }

  return (
    <>
    <div class="body">
      <div class="b1">
        <img src="https://iauditoria.com/wp-content/uploads/2021/02/portada-1024x538.jpg"></img>
      </div>
      <div class="b2">
        <h3>Add Jersey</h3>
      <Form onSubmit={handleAddService}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>Enter Team Name</b></Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Service Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>Enter Jersey Price</b></Form.Label>
          <Form.Control
            ref={priceRef}
            type="text"
            placeholder="Enter Service Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>Enter Jersey size</b></Form.Label>
          <Form.Control
            ref={sizeRef}
            type="text"
            placeholder="Enter Jersey size"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>Enter Jersey Image Link</b></Form.Label>
          <Form.Control
            ref={imgRef}
            type="text"
            placeholder="Enter Jersey Image Link"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default AddService
