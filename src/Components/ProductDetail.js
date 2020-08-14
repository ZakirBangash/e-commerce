import React,{useContext} from 'react';
import { Container, Row} from 'reactstrap';
import { useParams } from 'react-router-dom'
import {GlobalContext} from '../Context'
import { Col } from 'reactstrap';

export const ProductDetail = () => {
    const {storeProducts} = useContext(GlobalContext);
    const {slug} = useParams();
    const {img} = storeProducts[slug];
    console.log(img)
    
    return (
    
            <Container className="py-5">
            <Row>
            <Col className="my-5 mx-auto">
                <h1>Image</h1>
            <img src={img} className='img-fluid' alt="Image portion" />
            </Col>
            <Col className="my-5 mx-auto">
                <h1>{slug}</h1>

            </Col>

            </Row>
            </Container>
        
    )
}
