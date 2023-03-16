import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <div>
        <Card className='my-3 p-3 rounded ' style={{ width: '17rem' }}>
        <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top'></Card.Img>
        </Link>
        <Card.Body>
        <Link to={`/product/${product._id}`}>
        <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
        </Link>
        </Card.Body>
        <Card.Text as='div'>
            <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
        </Card.Text>
        <Card.Text as='h3'>
            {product.price}€
        </Card.Text>
        </Card>
    </div>
  )
}

export default Product