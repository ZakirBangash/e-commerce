import React,{useContext} from 'react'
import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from 'react-router-dom';
import {GlobalContext} from '../../Context'

export const CartTotal = () => {
 const {cartSubTotal,cartTax,cartTotal} = useContext(GlobalContext);
    
    

    return (
        <Container>
        <Row>
            <Col xs='10' sm='8' className='mt-2 ml-sm-5 ml-md-auto  text-capitalize  text-right'>
              <Link to="/"> 
            <Button outline color="danger" className="px-5  mb-3 text-uppercase">
              Clear Cart
            </Button>
            </Link>  
            <h5>
                <span className="text-title"> Subtotal: </span>
    <strong>$ {cartSubTotal}</strong>
            </h5>

            <h5>
                <span className="text-title"> tax: </span>
    <strong>${cartTax}</strong>
            </h5>

            <h5>
                <span className="text-title"> total: </span>
                <strong>${cartTotal}</strong>
            </h5>
            </Col>
        </Row>
        </Container>
    
        
    )
}
