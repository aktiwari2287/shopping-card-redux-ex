import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';
const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch(err => {
            console.error("error ", err);
        });
        console.log(response.data);
        dispatch(setProducts(response.data));
    }

    useEffect(()=> {
        fetchProducts();
    },[]);
    return (
        <div className="ui grid" style={{marginTop:10}}>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing
