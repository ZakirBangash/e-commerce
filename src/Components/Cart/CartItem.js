import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context";
import { Row, Col } from "reactstrap";
import { Button } from "reactstrap";

export const CartItem = ({ product }) => {
  const { removeFromCart, Increment, addTotal,decrement } = useContext(GlobalContext);
  // const [countt, dispatch] = useReducer(reducer,Cart);
  let { img, company, title, price, total, count } = product;
  let [ccount, setcount] = useState(1);

  
  return (
    <>
    
      <Row className="text-center my-1">
        <Col xs="10" lg="2" className="mx-auto">
          <img src={img} className="img-fluid" />
        </Col>
        <Col xs="10" lg="2" className="mx-auto  mb-sm-3">
         <span className="d-lg-none font-weight-bold mb-4">Product: </span>
          {company}
        </Col>
        <Col xs="10" lg="2" className="mx-auto  mb-sm-3">
        <span className="d-lg-none font-weight-bold mb-4">Price: </span>
          {price}
        </Col>

        <Col xs="10" lg="2" className="mx-auto  mb-sm-3">
          <div className="btnQ">
            <Button
              outline
              disabled={ccount === 0 ? true : false}
              className="mx-1"
              onClick={() => { 
                setcount(ccount - 1);
                decrement(product);}}
          
            >
              -
            </Button>

            <Button outline >
              {count > 1 ? count : ccount}
            </Button>
            <Button
              outline
              className="mx-1"
              onClick={() => {
                setcount(++ccount);
                Increment(product);
              }}
            >
              +
            </Button>
            {/* i am placing addTotal() below this line instead of
               onClick increment b\c it was skipping first attempt */}
            {addTotal()}
          </div>
        </Col>

        <Col xs="10" lg="2" className="mx-auto  mb-sm-3">
          <div className="cart-icon" onClick={() => removeFromCart(product)}>
            <i className="fa fa-trash-o"></i>
          </div>
        </Col> 
        <Col xs="10" lg="2" className="mx-auto  mb-sm-3">
          <span className="d-lg-none font-weight-bold">Total: </span>
          {price * count}
        </Col>
      </Row>
    </>
  );
};


