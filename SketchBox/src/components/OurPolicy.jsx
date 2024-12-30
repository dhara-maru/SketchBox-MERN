import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" />
        <p className="font-semibold">Wide Product Range</p>
        <p className="text-gray-400">
          Discover a diverse range of quality stationery to meet all your
          creative and professional needs!
        </p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" />
        <p className="font-semibold">Premium Quality Guaranteed</p>
        <p className="text-gray-400">
          Our products are crafted to deliver the best performance and
          durability, ensuring customer satisfaction.
        </p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" />
        <p className="font-semibold">Customer-Centric Support</p>
        <p className="text-gray-400">
          We’re here to assist you with all your stationery-related queries,
          anytime!
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
