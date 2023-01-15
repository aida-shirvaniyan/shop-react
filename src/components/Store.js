import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Product from "./shared/Product";
import {fetchProduct} from "../redux/product/productAction";
import styles from "./Store.module.css"

const Store = () => {
    const productsData = useSelector(state => state.productsState)
    const dispatch = useDispatch();

    useEffect(() => {
        if(!productsData.products.length){
            dispatch(fetchProduct())
        }
    },[])

    return (
        <div className={styles.container}>
            {
                productsData.loading ?
                    <h2>Loading...</h2> :
                    productsData.error ?
                        <p>Something Goes Wrong</p> :
                        productsData.products.map(product => <Product key={product.id} productData={product}/>)
            }
        </div>
    );
};

export default Store;
