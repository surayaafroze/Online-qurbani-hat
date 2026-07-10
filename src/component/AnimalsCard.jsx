
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimalsCard = ({ cows }) => {
  const { name, type, breed, price, weight, age, location, description, image } = cows;

  return (
    <div className="group bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 text-black dark:text-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">

      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden bg-gray-50 dark:bg-zinc-950">
        <Chip className="absolute top-3 right-3 bg-[#004d00] text-white font-semibold z-10 border-none shadow-sm">
          {type}
        </Chip>

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-750 ease-out group-hover:scale-106"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3.5">
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 tracking-tight line-clamp-1">{name}</h2>

        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500 dark:text-gray-400 font-medium">{breed}</span>
          <span className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-md font-semibold text-xs">{weight} kg</span>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-gray-100 dark:border-zinc-800/80">
          <span className="text-xs text-gray-400 font-medium">Price</span>
          <span className="text-[#004d00] dark:text-emerald-400 font-extrabold text-lg">Tk {price}</span>
        </div>

        <Link href={`/allAnimals/${cows.id}`} className="block w-full pt-1">
          <Button className="w-full bg-[#ccffcc] hover:bg-[#004d00] text-black hover:text-white font-semibold rounded-xl py-2.5 transition-all duration-300">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AnimalsCard;