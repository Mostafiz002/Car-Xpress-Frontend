"use client";
import React from "react";
import CarCard from "../shared/CarCard";
import { useQuery } from "@tanstack/react-query";
import useAuth from "@/hooks/useAuth";
import useAxios from "@/hooks/useAxios";

const TopRated = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const { data: cars = [] } = useQuery({
    queryKey: ["limited-cars", user?.email],
    queryFn: async () => {
      const res = await axios(`/cars?limit=6`);
      return res.data;
    },
  });

  console.log(cars);

  return (
    <div className="flex items-center flex-col pt-20 pb-24 max-w-[1332] mx-auto px-4">
      <h2 className="section_heading text-center">Top Rated Rented Car</h2>
      <p className="section_paragraph mt-4 mb-8 text-center">
        Explore our top-rated and most popular cars, handpicked to give you a
        premium rental experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cars.map((car,i) => (
          <CarCard key={car._id} car={car} index={i} />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
