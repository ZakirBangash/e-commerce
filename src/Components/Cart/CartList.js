import React,{useContext} from 'react'
import { Container, Row, Col } from "reactstrap";
import {GlobalContext} from "../../Context";
import { CartItem } from './CartItem';

export const CartList = () => {
    const {Cart} = useContext(GlobalContext);
    
    return (
      <Container>
          {Cart.map(product => <CartItem product={product} />) } 
      </Container>
    );
}
