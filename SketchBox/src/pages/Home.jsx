import React from 'react'
import Hero from '../components/Hero'
import NewItems from '../components/NewItems'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <NewItems></NewItems> 
      <BestSeller />
    </div>
  )
}

export default Home
