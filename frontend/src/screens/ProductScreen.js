import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productAction'


const  ProductScreen=({match})=> {
  
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
 
  useEffect(()=>{
    dispatch(listProductDetails(match.params.id))
  },[dispatch , match])
  return (
    <>
   <Link className='btn btn-light my-3' to='/'>Go Back</Link>
   {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : ( 
      <Row>
        <Col md={5}>
                   <Image src={product.image} alt={product.name} width="400" height="300" fluid />
                 </Col>
                 <Col md={4}>
                   <ListGroup variant='flush'>
                     <ListGroup.Item>
                       <h3>{product.name}</h3>
                     </ListGroup.Item>
                     <ListGroup.Item>
                       <Rating
                         value={product.rating}
                         text={`${product.numReviews} reviews`}
                       />
                     </ListGroup.Item>
             <ListGroup.Item>
               Price : {product.price} €
             </ListGroup.Item>
             <ListGroup.Item>
               Descrption : {product.description} 
             </ListGroup.Item>
           </ListGroup>
           </Col>
           <Col md={3}>
             <Card>
               <ListGroup variant='flush'>
                 <ListGroup.Item>
                   <Row>
                     <Col>
                     Price : 
                     </Col>
                     <Col>
                     <strong>{product.price}</strong>
                     </Col>
                   </Row>
                 </ListGroup.Item>
                 <ListGroup>
                   <ListGroup.Item>
                   <Row>
                     <Col>Status : </Col>
                     <Col >
                     {product.countInStock >0 ? 'In Stock':'Out Of Stock'}
                     </Col>
                   </Row>
                   </ListGroup.Item>
                   <ListGroup.Item>
                     <Button className='btn-block' type='button' disabled={product.countInStock ===0}>
                       Add to cart
                     </Button>
                   </ListGroup.Item>
                   
                 </ListGroup>
               </ListGroup>
             </Card>
           </Col>
     
         
        </Row>
        )}
   
   
    
    </>
  )
}

export default ProductScreen