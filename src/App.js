import React from "react";
import { Provider } from 'react-redux';
import {Routes , Route , Navigate} from "react-router-dom"
import store from "./redux/store";
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

const App = () => {
    return (
       <Provider store={store}>
           <Navbar/>
           <Routes>
               <Route path={"/Products/:id"} element={<ProductDetails/>}/>
               <Route path={"/Shop"} element={<ShopCart/>}/>
               <Route path={"/Products"} element={<Store/>}/>
               <Route path={"/"} element={<Navigate to="/Products"/>} />
           </Routes>
       </Provider>
    );
}

export default App;
