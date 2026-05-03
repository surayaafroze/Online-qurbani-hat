"use client";

import React, { useState } from "react";
import AnimalsCard from "@/component/AnimalsCard";
import ButtonPage from "@/component/ButtonPage";

const AllAnimalsClient = ({ animals }) => {
  const [sorting, setSorting] = useState("");

  const sortedAnimals = [...animals];

  if (sorting === "low") {
    sortedAnimals.sort((a, b) => a.price - b.price);
  }

  if (sorting === "high") {
    sortedAnimals.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="pt-5 p-5">
      <ButtonPage setSorting={setSorting} />

      <div className="grid md:grid-cols-4 gap-5 max-w-7xl mx-auto pt-5 pb-8">
        {sortedAnimals.map((item) => (
          <AnimalsCard key={item.id} cows={item} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalsClient;