import React, {useEffect, useState} from 'react';
import styles from "./ProductDetails.module.css"
import {useSelector} from "react-redux";
import {useParams, Link} from "react-router-dom"
import {fetchProduct} from "../redux/product/productAction";


const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const Products = useSelector(state => state.productsState.products);
    const param = useParams();
    useEffect(() => {
        setProduct(fetchProduct)
    })
    const Product = Products[param.id - 1];
    console.log(Products[param.id - 1], 'aida')
    const {image, title, price, description, category} = Product;

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product"/>
            <div className={styles.textContainer}>
                <h2>{title}</h2>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}>Category: <span>{category}</span></p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to={"/Products"}>Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
