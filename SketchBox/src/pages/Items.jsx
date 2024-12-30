import React, { useContext, useEffect } from 'react'
import {ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { useState } from 'react';
import { products } from '../assets/assets';

const Items = () => {

  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true)
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])

  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  useEffect(()=>{
    console.log(category)
  },[products])

  useEffect(()=>{
    setFilterProducts(products)
  },[products])

  return (
    <div className='flex flex-col sm:felx-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter option  */}
<div className="min-w-60">
  <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
    <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : '' }` } alt="" />
  </p>
  {/* category filter  */}
  <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
   <p className="mb-3 text-sm font-medium">CATEGORIES</p>
    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
    <p className="flex gap-2">
      <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory}/> School
    </p>
    <p className="flex gap-2">
      <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} /> Office
    </p>
    <p className="flex gap-2">
      <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} /> Art & Craft
    </p>
  </div>
  </div>
</div>

{/* sub categories  */}

<div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'}`}>
   <p className="mb-3 text-sm font-medium">TYPE</p>
    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
    <p className="flex gap-2">
      <input type="checkbox" className='w-3' value={'Accessories'} /> Accessories
    </p>
    <p className="flex gap-2">
      <input type="checkbox" className='w-3' value={'Art Supplies'} /> Art Supplies
    </p>
    <p className="flex gap-2">
      <input type="checkbox" className='w-3' value={'Stationery'} /> Stationery
    </p>
  </div>
  </div>



{/* right side  */}

<div className='flex-1'>
  <div className="flex justify-between text-base sm:text-2xl mb-4">
    <Title text1={'ALL'} text2={'ITEMS'}/>

    {/* product sort  */}
    <select name="" id="" className='border-2 border-gray-300 text-sm px-2'>
      <option value="relavent">Sort by : Relavent</option>
      <option value="low-high">Sort by : Low to High</option>
      <option value="high-low">Sort by : High to Low</option>
    </select>
  </div>

  {/* map products  */}
  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
    {
      filterProducts.map((item, index)=>(
        <ProductItem
        key={index}
        id={item._id}
        name={item.name}
        image={item.image}
        price={item.price}
      />
      ))
    }
  </div>

</div>




    </div>
  )
}

export default Items

// 2:14:41 