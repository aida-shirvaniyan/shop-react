import React from 'react';
import styles from "./ShopCart.module.css";
import {useSelector , useDispatch} from "react-redux";
import Cart from "./shared/Cart";
import {clear ,checkout} from "../redux/cart/cartAction";
import {Link} from "react-router-dom";

const ShopCart = () => {
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} CartData={item}/>)}
            </div>
            {
                state.itemsCounter > 0 &&
                <div className={styles.payments}>
                    <p><span>Total Items:</span>{state.itemsCounter}</p>
                    <p><span>Total Payments:</span>{state.total} $</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={()=> dispatch(clear())}>Clear</button>
                        <button className={styles.checkout} onClick={()=> dispatch(checkout())}>Checkout</button>
                    </div>
                </div>
            }
            {
                state.itemsCounter === 0 && !state.checkout && <div className={styles.complete}>
                    <h3>Want to buy?</h3>
                    <Link to="/products">Go to shop</Link>
                </div>
            }

            {
                state.checkout && <div className={styles.complete}>
                    <h3>Checked out successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }

        </div>
    );
};

export default ShopCart;
