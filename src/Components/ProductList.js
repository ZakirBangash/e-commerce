import React from 'react'
import { Container, Row } from 'reactstrap';
import { Title } from './Title'
import { useContext } from 'react';
import { GlobalContext } from '../Context'
import { Product } from './Product';


export const ProductList = () => {
        const {storeProducts} = useContext(GlobalContext);
        // Object.keys(storeProducts).map(el=>console.log(storeProducts[el]))
        
    return (
        <div>
            <Title name="Our" title="Products" />
            <Container className="py-5">
            <Row xs="1" sm="2" md="3">
                {
                     Object.keys(storeProducts).map(product => <Product product={product}/>)
                }

            </Row>
            </Container>

        </div>
    )
}
