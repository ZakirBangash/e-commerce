import React,{useContext} from 'react'
import {GlobalContext} from '../../Context'

export const CartItem = ({product}) => {
    const {storeProducts} =  useContext(GlobalContext);
    const {price} = storeProducts[product];

    return (
        <div>
            {console.log(price)}
        </div>
    )
}
