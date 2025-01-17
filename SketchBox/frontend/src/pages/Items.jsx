import React, { useContext, useEffect } from 'react'
import {ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { useState } from 'react';
import { products } from '../assets/assets';


const Items = () => {

  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true)
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavent')

  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }else{
      setCategory(prev => [...prev, e.target.value])
    }
  }


  const toggleSubCategory = (e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = ()=>{
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length>0){
      productsCopy = productsCopy.filter(item=>category.includes(item.category))
    }

    if(subCategory.length>0){
      productsCopy = productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () =>{
    let fpCopy = filterProducts.slice();
    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)))
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
        break;

      default:
        applyFilter();
        break;
    }
  }


  useEffect(()=>{
    sortProduct();
  },[sortType])


  useEffect(()=>{
    setFilterProducts(products)
  },[products])

  useEffect(()=>{
    applyFilter();
  },[category, subCategory, search, showSearch])




 

  return (


<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-10 border-t">
{/* Sidebar: Filters */}
<div className="w-full sm:w-1/4 lg:w-1/5 flex flex-col gap-6">
  {/* Category Filter */}
  <div
    className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"}`}
  >
    <p
      onClick={() => setShowFilter(!showFilter)}
      className="my-2 text-xl flex items-center cursor-pointer gap-2"
    >
      FILTERS
      <img
        src={assets.dropdown_icon}
        className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
        alt=""
      />
    </p>
    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
      <p className="flex gap-2">
        <input
          type="checkbox"
          className="w-3"
          value="Office"
          onChange={toggleCategory}
        />
        Office
      </p>
      <p className="flex gap-2">
        <input
          type="checkbox"
          className="w-3"
          value="School"
          onChange={toggleCategory}
        />
        School
      </p>
      <p className="flex gap-2">
        <input
          type="checkbox"
          className="w-3"
          value="Art"
          onChange={toggleCategory}
        />
        Art & Craft
      </p>
    </div>
  </div>

  {/* Subcategory Filter */}
  <div
    className={`border border-gray-300 pl-5 py-3 ${showFilter ? "" : "hidden"}`}
  >
    <p className="mb-3 text-sm font-medium">TYPE</p>
    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
      <p className="flex gap-2">
        <input
          type="checkbox"
          className="w-3"
          value="Stationery"
          onChange={toggleSubCategory}
        />
        Stationery
      </p>
      <p className="flex gap-2">
        <input
          type="checkbox"
          className="w-3"
          value="Accessories"
          onChange={toggleSubCategory}
        />
        Accessories
      </p>
      <p className="flex gap-2">
        <input
          type="checkbox"
          className="w-3"
          value="Art Supplies"
          onChange={toggleSubCategory}
        />
        Art Supplies
      </p>
    </div>
  </div>
</div>

{/* Main Content: Products */}
<div className="flex-1">
  <div className="flex justify-between text-base sm:text-2xl mb-4">
    <Title text1="ALL" text2="ITEMS" />

    {/* Product Sort */}
    <select
      name=""
      onChange={(e) => setSortType(e.target.value)}
      id=""
      className="border-2 border-gray-300 text-sm px-2"
    >
      <option value="relavent">Sort by: Relevant</option>
      <option value="low-high">Sort by: Low to High</option>
      <option value="high-low">Sort by: High to Low</option>
    </select>
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
    {filterProducts.map((item, index) => (
      <ProductItem
        key={index}
        id={item._id}
        name={item.name}
        image={item.image}
        price={item.price}
      />
    ))}
  </div>
</div>
</div>
  )
}

export default Items

