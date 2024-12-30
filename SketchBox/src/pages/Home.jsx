import React from 'react'
import Hero from '../components/Hero'
import NewItems from '../components/NewItems'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <NewItems></NewItems> 
      <BestSeller />
      <OurPolicy></OurPolicy>
      <NewsLetter></NewsLetter>
    </div>
  )
}

export default Home
