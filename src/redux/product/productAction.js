import axios from "axios";
const fetchRequest = () => {
    return {type: "FETCH_REQUEST"}
}
const fetchSuccess = (product) => {
    return {type: "FETCH_SUCCESS", payload: product}
}
const fetchFailure = (error) => {
    return {type: "FETCH_FAILURE", payload: error}
}

export const fetchProduct = () => {
    return (dispatch) => {
        dispatch(fetchRequest());
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                const product = response.data;
                dispatch(fetchSuccess(product))
            })
            .catch(error => {
                const errorMsg = error;
                dispatch(fetchFailure(errorMsg))
            })
    }
}
