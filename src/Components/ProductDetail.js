import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import {GlobalContext} from '../Context'

export const ProductDetail = () => {
    const {storeProducts} = useContext(GlobalContext);
    const {slug} = useParams();
    // const array = Object.entries(storeProducts);
    // const array1 = array.map(product => product[1])
    // console.log(array1[slug])
    
    return (
        <div>
            <h1>Welcome to slug portion</h1>
        </div>
    )
}
