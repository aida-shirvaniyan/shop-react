import React from 'react';
import styles from "./Cart.module.css"
import {useDispatch} from "react-redux";
import {shorten} from "../../helper/function";
import {decrease, increase, removeItem} from "../../redux/cart/cartAction";
import trash from "../../assets/trash.svg"

const Cart = ({CartData}) => {
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={CartData.image} alt="image"/>
            <div className={styles.data}>
                <h3>{shorten(CartData.title)}</h3>
                <p>{CartData.price} $</p>
            </div>
            <div className={styles.quantity}>
                <span>{CartData.quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {CartData.quantity > 1 ?
                    <button onClick={() => dispatch(decrease(CartData))}>-</button> :
                    <button onClick={() => dispatch(removeItem(CartData))}>
                        <img src={trash} alt="trash"/>
                    </button>

                }
                <button onClick={() => dispatch(increase(CartData))}>+</button>
            </div>
        </div>
    );
};

export default Cart;
