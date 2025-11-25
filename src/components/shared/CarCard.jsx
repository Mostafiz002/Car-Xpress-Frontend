"use client";
import Image from "next/image";
import React from "react";

const brandLogos = {
  Audi: "https://toppng.com/uploads/preview/audi-car-logo-11530962094iugeww1llh.png",
  BMW: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  "Mercedes-Benz":
    "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
  Nissan:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Nissan_Logo_%281990-1992%29.jpg/640px-Nissan_Logo_%281990-1992%29.jpg",
  Mitsubishi:
    "https://upload.wikimedia.org/wikipedia/commons/5/5a/Mitsubishi_logo.svg",
};

const CarCard = ({ car }) => {
  return (
    <div
      // initial={{ opacity: 0, }}
      // whileInView={{ opacity: 1, }}
      // transition={{ duration: 0.6,ease:'easeInOut', delay: index * 0.1 }}
      className="bg-[#0a0a0a] text-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col w-full border border-white/10 hover:-translate-y-1 hover:scale-101 duration-300"
    >
      {/* Car Image */}
      <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
        <Image
          src={car.image}
          alt={car.title}
          fill
          className="object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title & Brand */}
      <div className="p-4">
        <div className="flex items-center justify-between mt-2">
          {/* Brand Image */}

          <img
            src={brandLogos[car.brand]}
            alt={car.brand}
            className="w-14 h-14 p-3 border rounded-full border-white/10 object-contain"
          />

          {/* Title & Brand Name */}
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-bold text-white">{car.title}</h3>
            <p className="text-gray-300 text-sm mt-1">{car.brand}</p>
          </div>
        </div>

        {/* Short Description */}
        <div className="mt-3">
          <p className="text-gray-400 text-sm">{car.shortDescription}</p>
        </div>

        {/* Engine */}
        <div className="flex justify-between mt-6">
          <span className="text-gray-300 text-sm font-medium">Engine</span>
          <span className="text-white text-sm font-semibold">{car.engine}</span>
        </div>

        {/* Location */}
        <div className="mt-3 flex justify-between">
          <span className="text-gray-300 text-sm font-medium">Location</span>
          <span className="text-white text-sm font-semibold">
            {car.location}
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex justify-between items-center ">
          <span className="text-gray-300 text-sm font-medium">Price</span>
          <span className=" font-bold text-lg">৳{car.price}</span>
        </div>
        {/* Button */}
        <button className="button_primary w-full mt-6 py-3! ">Details</button>
      </div>
    </div>
  );
};

export default CarCard;
