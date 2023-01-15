import React from 'react';
import styles from "./Navbar.module.css"
import {Link} from "react-router-dom";
import shop from "../../assets/shop.svg"
import {useSelector} from "react-redux";

const Navbar = () => {
    const itemsCounter = useSelector(state => state.cartState.itemsCounter)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to={"/Products"}>Products</Link>
                <div className={styles.iconContainer}>
                    <Link to={"/Shop"}>
                        <img style={{width: "50px"}} src={shop} alt="shop"/>
                    </Link>
                    <span>{itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
