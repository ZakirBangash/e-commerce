import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context";
import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";




export const CartItem = ({ product }) => {
  const { removeFromCart,Increment } = useContext(GlobalContext);
  // const [countt, dispatch] = useReducer(reducer,Cart);
  let { img, company, title, price, total,count } = product;
  let [ccount, setcount] = useState(1);
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
              onClick={() => console.log("This is my good")}
            >
              -
            </Button>
            <Button outline className="mx-1 ">
              {count>1?count:ccount}
            </Button>
            <Button
              outline
              className="mx-1"
              onClick={() => {
                setcount(++ccount);
                Increment(product); }}
            >
              +
            </Button>
          </div>
        </Col>

        <Col xs="10" lg="2" className="mx-auto">
          <div className="cart-icon" onClick={() => removeFromCart(product)}>
            <i className="fa fa-trash-o"></i>
          </div>
        </Col>
        <Col xs="10" lg="2" className="mx-auto">
          {price * count}
        </Col>
      </Row>
    </>
  );
};


// const reducer = (state, action) => {
//   console.log(state)
//   switch (action) {
//     case "increment":

//     //   return state + 1;
//     // case "decrement":
//     //   return state - 1;

//     default:
//       return state;
//   }
// };