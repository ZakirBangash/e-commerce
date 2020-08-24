import React,{useContext} from 'react'
import { Container, Row, Col } from "reactstrap";
import {GlobalContext} from "../../Context";
import { CartItem } from './CartItem';

export const CartList = () => {
    const {storeProducts} = useContext(GlobalContext);
    return (
      <Container>
        {Object.keys(storeProducts).map(product => <CartItem product={product} />) }
      </Container>
    );
}
