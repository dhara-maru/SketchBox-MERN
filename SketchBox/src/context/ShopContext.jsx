import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 40;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})


    const addToCart = async (itemId, size) =>{

        if(!size){
            toast.error('Select Product Type')
            return;
        }
        let cartData = structuredClone(cartItems)
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData)
    }

const getCartCount = () =>{
    let totalCount =0;
    for(const items in cartItems){
        for(const item in cartItems[items]){
            try {
                if(cartItems[items][item] > 0){
                    totalCount += cartItems[items][item];
                }
            } catch (error) {
                
            }
        }
    }
    return totalCount;
}

const updateQty = async (itemId, size, quantity) =>{
    let cartData = structuredClone(cartItems)

    cartData[itemId][size] = quantity;

    setCartItems(cartData)
}

const getCartAmount =() =>{
    let totalAmt = 0;
    for(const items in cartItems){
        let itemInfo = products.find((product) => product._id === items);

        if (!itemInfo) continue;


        for(const item in cartItems[items]){
            try{
                if(cartItems[items][item] > 0){
                    totalAmt += itemInfo.price * cartItems[items][item];
                }
            }catch (error){
                console.error("Error calculating cart amount:", error);
            }
        }
    }
    return totalAmt;
} 

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCartCount, updateQty, getCartAmount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;

