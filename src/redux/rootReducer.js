import { combineReducers } from "redux";
import productsReducer from "./product/productReducer";
import CartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
    productsState: productsReducer,
    cartState : CartReducer
})

export default rootReducer;