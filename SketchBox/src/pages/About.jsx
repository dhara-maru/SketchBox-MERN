import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetter'
import OurPolicy from '../components/OurPolicy'

const About = () => {
  return (
    <div>
      <div className="text-5xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}></Title>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Welcome to SketchBox, your one-stop destination for all things creative! At SketchBox, we believe that great ideas deserve equally great tools, which is why we offer an extensive collection of premium stationery. From sleek notebooks and vibrant markers to high-quality pens and art supplies, we cater to everyone—from students and professionals to artists and hobbyists. Whether you're sketching your next masterpiece, organizing your thoughts, or adding a touch of personality to your workspace, SketchBox has everything you need to bring your creativity to life.</p>
          <p>Our user-friendly website makes it easy to explore and shop, with detailed product descriptions and secure payment options for a seamless experience. Plus, with regular deals and exclusive collections, you'll always find something exciting at SketchBox. Step into a world where stationery meets imagination, and let SketchBox be the perfect companion on your creative journey!</p></div>
     {/* <b className='text-gray-800'>Our Mission</b>
     <p>Our mission at SketchBox is to inspire creativity and empower individuals to bring their ideas to life by providing a diverse range of high-quality, thoughtfully curated stationery. </p>
      */}

</div>

<div className="text-4xl py-4">
  <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
</div>

<div className="flex flex-col md:flex-row text-md mb-20">
  <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>Quality Assurance:</b>
    <p className='text-gray-600'>We guarantee top-quality stationery, handpicked to meet your creative needs with excellence.</p>
  </div>
  <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>Convenience:</b>
    <p className='text-gray-600'>We ensure a seamless shopping experience with easy navigation, secure payments, and fast delivery.</p>
  </div>
  <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>Exceptional Customer Service:</b>
    <p className='text-gray-600'>Our dedicated team is here to provide personalized support, ensuring your satisfaction with every order.</p>
  </div>
</div>

{/* newsletter  */}
<NewsLetterBox></NewsLetterBox>













    </div>
  )
}

export default About
