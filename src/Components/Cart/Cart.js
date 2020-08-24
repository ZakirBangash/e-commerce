import React from 'react'
import { Title } from '../Title'
import { CarColumns } from './CarColumns'
import { CartList } from './CartList'

export const Cart = () => {
    return (
        <>
            <Title name="Your" title="Cart" />
             <CarColumns />
             <CartList />             

        </>
    )
}
