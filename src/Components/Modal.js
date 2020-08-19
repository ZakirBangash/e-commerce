import React, { useState,useContext } from 'react';
import { useParams } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,propTypes } from 'reactstrap';
import {GlobalContext} from '../Context'
const ProductModal = ({modal,toggle,state}) => {
         console.log(state)
  const {storeProducts} = useContext(GlobalContext);
  if (state !== undefined) {
    const {company} = storeProducts[state];
  }
   
  
  
  
  return (
    
      <Modal isOpen={modal} centered >
        <h1 className="justify py-4">Item added to Cart Successfully</h1>
        <ModalBody>
         <h2>CompanY: </h2>
        </ModalBody>
        <ModalFooter>
          <Button  color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

  );
}




export default ProductModal;