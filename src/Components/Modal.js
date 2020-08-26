import React, { useState, useContext } from "react";
import { useParams,Link } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  propTypes,
} from "reactstrap";
import { GlobalContext } from "../Context";
const ProductModal = ({ modal, toggle, state }) => {
  console.log(state);
  const { storeProducts } = useContext(GlobalContext);

  const { company, img, price } = storeProducts[state];

  return (
    <Modal isOpen={modal} centered className='container text-center d-flex justify-content-center'>
      <h1 className="text-center py-4">Item added to Cart Successfully</h1>
      <ModalBody>
        <img src={img} className="img-fluid" alt="" />
        <h2 className="text-center">{state} </h2>
        <h3 className="text-muted text-center">Price:{price}</h3>

        <div className="modal-btn">
        <Link className="link" to='/ProductHome'>
         
        <Button  className=' w-50 font-weight-normal ' onClick={toggle}>
          Go to Shopping
        </Button>
        </Link>
        <Link className="link" to='/Cart'>
        <Button className='font-weight-normal  ' onClick={toggle}>
          Go to Cart
        </Button>
       
        </Link>
        </div>
      </ModalBody>
     
    </Modal>
  );
};

export default ProductModal;
