import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Product.module.css"
import {isInCart, quantityCount, shorten} from "../../helper/function";
import {useSelector, useDispatch} from "react-redux";
import trash from "../../assets/trash.svg"
import {addItem, decrease, increase, removeItem} from "../../redux/cart/cartAction";

const Product = ({productData}) => {
    const {id, image, title, price} = productData;
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={image} alt=""/>
            <h3>{shorten(title)}</h3>
            <p>{price} $</p>
            <div className={styles.linkContainer}>
                <Link to={`/Products/${id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, id) === 1 &&
                    <button className={styles.smallButton} onClick={() => dispatch(removeItem(productData))}><img alt="trash" src={trash}
                                                                                 width={"20px"}/></button>}
                    {quantityCount(state, id) > 1 &&
                    <button className={styles.smallButton} onClick={() => dispatch(decrease(productData))}>-</button>}
                    {quantityCount(state, id) > 0 && <span>{quantityCount(state, id)}</span>}
                    {isInCart(state, id) ?
                        <button className={styles.smallButton} onClick={() => dispatch(increase(productData))}>+</button> :
                        <button onClick={() => dispatch(addItem(productData))}>Add to card</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;
