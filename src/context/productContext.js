import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { reducer } from "../reducers/reducer";

const ProductContext = createContext();

const initialState = {
    products: [],
    cart: [],
    search: ''
}

const ProductProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await axios.get("https://fakestoreapi.com/products");
                    if (response.status === 200) {
                        dispatch({
                            type: 'SET_PRODUCTS',
                            payload: response.data
                        })
                    }
                }
                catch (err) {
                    console.log(err)
                }
            }
        )();

    }, [])


    return (
        <ProductContext.Provider value={{ state, dispatch, cart, setCart }} >{children}</ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider }