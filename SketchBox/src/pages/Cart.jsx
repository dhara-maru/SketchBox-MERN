import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import Title from "../components/Title";
import Product from "./Product";
import { assets, products } from '../assets/assets'
import CartTotal from "../components/CartTotal";


const Cart = () => {
  const { products, currency, cartItems, updateQty, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"}></Title>
      </div>
      <div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            if (!productData) return null; // Prevent rendering if no product is found

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 "
              >
                <div className="flex items-start gap-6">
                  <img
                    src={productData.image[0]}
                    className="w-16 sm:w-20"
                    alt={productData.name}
                  />
                  
                  <div>
                    <p className="text-xs sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Type: {item.size}
                    </p>
                    <p className="text-sm font-medium">{currency}{productData.price}</p>
                
                  </div>

                   </div>
                   <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQty(item._id, item.size, Number(e.target.value))} type="number" className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 " min={1} defaultValue={item.quantity} />
               
                <img onClick={()=>updateQty(item._id, item.size, 0)} src={assets.bin_icon} className="w-4 cursor-pointer mr-4 sm:w-5" alt="" />
              </div>
            );
          })
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>


      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal/>
          <div className="w-full text-end">
            <button onClick={()=>{
              navigate('/PlaceOrder')
            }} className="bg-black text-white text-sm my-8 px-8 py-3 ">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Cart;
