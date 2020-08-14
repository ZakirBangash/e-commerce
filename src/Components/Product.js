import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import {GlobalContext} from '../Context'

export const Product = ({product}) => {
    const {storeProducts} = useContext(GlobalContext);
          const {img,price} = storeProducts[product];
    return (

        <Col className="my-5 mx-auto">
            <Card className="card">
                <CardBody className="py-5 img-container">
                    <Link to={product}>
                    <img src={img} className='img-fluid' alt="" />
                    </Link>
                    <button className='card-btn' onClick={() => console.log('U clicked on button')}>
                        <i className="fa fa-shopping-cart align-middle">
                        </i>
                    </button>
                </CardBody>
                <CardFooter className="footer d-flex justify-content-between">
                    <p className='align-self-center mb-0'>{product}</p>
                    <h5 className='align-self-center mb-0'>{price}</h5>

                </CardFooter>
            </Card>

        </Col>



    )
}


