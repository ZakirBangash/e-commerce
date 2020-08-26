import React ,{useContext, useState } from 'react'
import { Title } from '../Title'
import { CarColumns } from './CarColumns'
import { CartList } from './CartList'
import { CartTotal } from './CartTotal'
import { GlobalContext } from "../../Context";
import { EmptyCart } from './EmptyCart'

export const Cart = () => {
    const { Cart } = useContext(GlobalContext);
    if(Cart.length){
    return (
        <>
            <Title name="Your" title="Cart" />
             <CarColumns />
             <CartList /> 
             <CartTotal />            

        </>
    )}else {
        return (
        <EmptyCart />
        )
    }
}
