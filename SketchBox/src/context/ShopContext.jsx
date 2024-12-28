import { createContext } from "react";
import { products } from "../assets/assets";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    console.log('Products in ShopContextProvider:', products); 
    const currency = '₹';
    const delivery_fee = 40;


    const value = {
        products, currency, delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;