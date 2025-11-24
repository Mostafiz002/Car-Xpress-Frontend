import { PrivateRoute } from "@/provider/PrivateRoute";
import React from "react";
import Image from "next/image";
import { SlCloudUpload } from "react-icons/sl";

const Page = () => {
  return (
    <PrivateRoute>
      <div className="min-h-screen bg-black pt-20">
        {/* Hero Section */}
        <div className="relative w-full h-60 md:h-72 lg:h-80">
          <Image
            src="https://i.pinimg.com/1200x/cf/5c/91/cf5c91b5beef1b2517276f4ea9237bd6.jpg"
            alt="Banner"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
              Add Your Car for Rent
            </h1>
            <p className="text-gray-300 text-sm md:text-base mt-2 max-w-xl">
              Fill up the form below to publish your car rental listing.
            </p>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="max-w-4xl mx-auto px-4 -mt-20 pb-20">
          <div className="bg-transparent border border-white/10 rounded-xl shadow-xl p-8 md:p-10 w-full backdrop-blur-lg">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="col-span-2">
                <label className="text-sm font-medium text-gray-300">
                  Car Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Toyota Axio 2017"
                  className="input_field w-full mt-2"
                />
              </div>

              {/* Image Upload */}
              <div className="col-span-2">
                <label className="text-sm font-medium text-gray-300">
                  Car Image
                </label>

                <label className="mt-2 flex items-center gap-3 w-full p-4 py-7 border-2 border-dashed border-white/20 bg-[#0a0a0a] rounded-lg cursor-pointer hover:border-white/50 duration-200">
                  <SlCloudUpload size={35} />
                  <span className="text-gray-400 text-sm">
                    Upload car photo (JPG, PNG)
                  </span>

                  <input type="file" accept="image/*" className="hidden" />
                </label>
              </div>

              {/* Short description */}
              <div className="col-span-2">
                <label className="text-sm font-medium text-gray-300">
                  Short Description
                </label>
                <input
                  type="text"
                  placeholder="Short overview of the car"
                  className="input_field w-full mt-2"
                />
              </div>

              {/* Long description */}
              <div className="col-span-2">
                <label className="text-sm font-medium text-gray-300">
                  Detailed Description
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe condition, mileage, features..."
                  className="input_field w-full mt-2"
                ></textarea>
              </div>

              {/* Price */}
              <div>
                <label className="text-sm font-medium text-gray-300">
                  Price (৳)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 3000"
                  className="input_field w-full mt-2"
                />
              </div>

              {/* Brand */}
              <div>
                <label className="text-sm font-medium text-gray-300">
                  Fuel
                </label>
                <input
                  type="text"
                  placeholder="Fuel type"
                  className="input_field w-full mt-2"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-gray-300">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="e.g. 017xxxxxxxx"
                  className="input_field w-full mt-2"
                />
              </div>

              {/* Fuel type */}
              <div>
                <label className="text-sm font-medium text-gray-300">
                  Fuel Type
                </label>
                <select defaultValue="Pick a Brand" className="select mt-2 w-full h-12.5 rounded-lg border-white/10 bg-[#0a0a0a]">
                  <option disabled={true}>Pick a Brand</option>
                  <option>Crimson</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>
              </div>

              {/* Engine */}
              <div>
                <label className="text-sm font-medium text-gray-300">
                  Engine Capacity
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1500cc"
                  className="input_field w-full mt-2"
                />
              </div>

              {/* Location */}
              <div>
                <label className="text-sm font-medium text-gray-300">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Uttara, Dhaka"
                  className="input_field w-full mt-2"
                />
              </div>

              {/* Submit */}
              <div className="col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full bg-[#ededed] text-black font-medium cursor-pointer py-3 rounded-lg 
          hover:bg-gray-300 transition "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Page;
