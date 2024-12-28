import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { useState } from 'react';

const NewItems = () => {

    const { products } = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        console.log('Products from context:', products);
        if (products && products.length) {
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]);


  return (
    <div className='my-10'>
      <div className="text-center py-8 text-3x1">
        <Title text1={'EXCLUSIVE'} text2={'ADDITIONS'}></Title>
        <p className="w-3/4 m-auto text-x5 sm:text-sm md:text-base text-gray-600">Discover the freshest designs and must-have stationery essentials!</p>
      </div>

{/* rendering products  */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
{
  latestProducts.map((item, index) => {
    console.log(item);
    return (
      <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
    );
  })
}
</div>





    </div>
  )
}

export default NewItems
