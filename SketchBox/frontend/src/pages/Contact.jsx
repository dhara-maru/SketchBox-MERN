import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-4xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}></Title>
      </div>


      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl'>Our Store</p>
          <p className='text-gray-500'>406, Hill Road, Bandra West, <br /> Mumbai, 400050.</p>
          <p className='text-gray-500'>Tel : (+91) 57863 59683</p>
          <p className='text-gray-500'>Email : sketchbox@shop.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our Teams & Job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

<NewsLetter></NewsLetter>







    </div>
  )
}

export default Contact
