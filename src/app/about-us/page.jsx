import WhyChooseUs from "@/components/about_us/WhyChooseUs";
import ClientLogo from "@/components/home/ClientLogo";
import Testimonial from "@/components/home/Testimonial";
import React from "react";

const page = () => {
  return (
    <div className="pb-24">
      <div className="flex flex-col bg-[#0a0a0a] items-center mb-12 pt-24 mt-20 pb-24">
        <h2 className="section_heading text-center">About Us</h2>
       
      </div>
      {/* add a section here */}
      <Testimonial />
      <ClientLogo direction={"right"} />
      <WhyChooseUs />
    </div>
  );
};

export default page;
