import React, { useContext, useReducer } from "react";
import { GlobalContext } from "../../Context";
import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";

const initialState = 1;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
};

export const CartItem = ({ product }) => {
  const { removeFromCart } = useContext(GlobalContext);
  const [count, dispatch] = useReducer(reducer, initialState);
  const { img, company, title, price, total } = product;
  return (
    <>
      <Row className="text-center my-1">
        <Col xs="10" lg="2" className="mx-auto">
          <img src={img} className="img-fluid" />
        </Col>
        <Col xs="10" lg="2" className="mx-auto ">
          {company}
        </Col>
        <Col xs="10" lg="2" className="mx-auto">
          {price}
        </Col>

        <Col xs="10" lg="2" className="mx-auto">
          <div className="btnQ">
            <Button
              outline
              disabled={count === 0 ? true : false}
              className="mx-1"
              onClick={() => dispatch("decrement")}
            >
              -
            </Button>
            <Button outline className="mx-1 ">
              {count}
            </Button>
            <Button
              outline
              className="mx-1"
              onClick={() => dispatch("increment")}
            >
              +
            </Button>
          </div>
        </Col>

        <Col xs="10" lg="2" className="mx-auto">
          <div
            className="cart-icon"
            onClick={() => removeFromCart(product)}
          
          >
            <i className="fas fa-trash"></i>
          </div>
        </Col>
        <Col xs="10" lg="2" className="mx-auto">
          {price*count}
        </Col>
      </Row>
    </>
  );
};
