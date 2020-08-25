import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { Card, CardFooter, CardBody } from "reactstrap";

import { GlobalContext } from "../Context";
import Modall from "./Modal";
import ProductModal from "./Modal";

export const Product = ({ product }) => {
  const { storeProducts,addToCart,addTotal } = useContext(GlobalContext);
  const { img, price, inCart } = storeProducts[product];

  const [modal, setModal] = useState(false);
  const [state, setstate] = useState();

  const toggle = () => setModal(!modal);
  const getItem = (prod)=> prod;

  return (
    <Col className="my-5 mx-auto">
      <Card className="card">
        <CardBody className="py-5 img-container">
          <Link to={product}>
            <img src={img} className="img-fluid" alt="" />
           </Link> 
           
           
          <button
            className="card-btn"
            disabled={inCart ? true : false}
            onClick={()=> {
                 toggle();
                  setstate(product);
                  addToCart(storeProducts[product]);
                 
            }}
          >
            {inCart ? (
              <p className=" mb-0">Added</p>
            ) : (
              <i className="fa fa-shopping-cart align-middle"></i>
            )}
            
          </button>
             {/* i am placing addTotal() below this line instead of
               onClick addToCart b\c it was skipping first attempt */}
               { addTotal()}


  {state === undefined ? '' : <ProductModal modal={modal} state={state} toggle={toggle} />}
          
      
          
           
          

          
 

        </CardBody>
        <CardFooter className="footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{product}</p>
          <h5 className="align-self-center mb-0">{price}</h5>
        </CardFooter>
      </Card>
    </Col>
  );
};
