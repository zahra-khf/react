import React , {useEffect}from 'react'
import {useSelector , useDispatch} from 'react-redux'
import products from '../products';
import Product from '../components/Product'
import {Row , Col} from 'react-bootstrap'
import { listProducts } from '../actions/productAction'
import Message from '../components/Message'
import Loader from '../components/Loader'

import { BASE_URL } from '../consts/api';

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, product } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  
  return (
    <>
    <h1>latest products </h1>
    {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
        ):
        (<Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>)}
      
    
    </>
  )
}

export default HomeScreen