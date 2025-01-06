import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {

 
  
  return (<>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div>
        <img src={assets.logo} className="mb-5 w-32" alt="" />
        <p className="w-full md:w-2/3 text-gray-600">
          Bringing creativity and organization to your fingertips with SketchBox
          - your one-stop stationery destination.
        </p>
      </div>

      <div> 
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+91 45889 43576</li>
          <li>sketchbox@shop.com</li>
        </ul>
      </div>


      </div>



      <div className="text-center">
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024 | Created by Dhara M. </p>
      </div>
 </>
  );
};

export default Footer;
