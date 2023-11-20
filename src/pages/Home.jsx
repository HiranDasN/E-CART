import React from 'react'
import { Row , Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../slices/wishlistSlice';
import { addToCart } from '../slices/cartSlice';

function Home() {

const data = useFetch('https://fakestoreapi.com/products')
console.log(data);

const dispatch = useDispatch()

  return (
   <>
    <br />
    <br />
    <br />
    <br />
      <Row className='m-5' style={{marginTop:'150px'}}>
  
         {data?.length>0?
         data.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3} >
         <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src={item.image} style={{height:"200px"}} />
           <Card.Body>
             <Card.Title className='fw-bolder'>{item.title.slice(0,17)}..</Card.Title>
             <Card.Text>
               <p>{item.description.slice(0,40)}..</p>
               <p className='fw-bolder'>Price: $ {item.price}</p>
             </Card.Text>
             <div className='d-flex align-items-center justify-content-between'>
               <Button onClick={() =>dispatch(addToWishlist(item))} variant="outline-danger btn rounded"><i class="fa-solid fa-heart me-2"></i></Button>
               <Button onClick={()=> dispatch(addToCart(item))} variant="outline-success btn rounded"><i class="fa-solid fa-cart-plus me-2" ></i></Button>
             </div>
           </Card.Body>
         </Card>
     </Col>))
  
        :
        <p>Nothing to Display !!</p> 
          }
       
      </Row>
   </>
  )
}

export default Home