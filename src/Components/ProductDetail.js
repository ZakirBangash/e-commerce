import React,{useContext} from 'react';
import { Container, Row} from 'reactstrap';
import { useParams } from 'react-router-dom'
import {GlobalContext} from '../Context'
import { Col } from 'reactstrap';

export const ProductDetail = () => {
    const {storeProducts} = useContext(GlobalContext);
    const {slug} = useParams();
    
    const {price,img,company,info} = storeProducts[slug];
    console.log(slug)
    
    return (
    
            <Container className="py-5">
            <Row>
            <Col className="my-5 mx-auto">
                <h1>Image</h1>
            <img src={img} className='img-fluid' alt="Image portion" />
            </Col>
            <Col className="my-5 mx-auto">
                <h1>{slug}</h1>
           <h3>Made by: {company}</h3>
             <h2>Price: {price}</h2>
             <h2>Some info about product</h2>
             {info}

            </Col>

            </Row>
            </Container>
        
    )
}
