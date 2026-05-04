
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimalsCard = ({ cows }) => {
  const { name, type, breed, price, weight, age, location, description, image } = cows;

  return (
    <div className="group bg-white text-black  rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

  {/* Image */}
  <div
   
  className="relative w-full h-56 bg-white">
    <Chip className="absolute -top-1 right-3 bg-[#458b45] text-white z-10">
      {type}
    </Chip>

    <Image
      src={image}
      alt={name}
      fill
      className="object-cover"
    />
  </div>

  {/* Content */}
  <div className="p-4 space-y-2 text-black">

    <h2 className="text-lg font-semibold">{name}</h2>

    <div className="flex justify-between text-sm text-black/80">
      <p>{breed}</p>
      <p>{weight} kg</p>
    </div>

    <div className="text-blackfont-bold">
     <span className="font-bold"> Price:</span> {price}
    </div>
{/* `/allAnimals/${cows.id}` */}
  <Link href={`/allAnimals/${cows.id}`}>
      <Button className="w-full mt-2 bg-[#ccffcc] text-black">
        View Details
      </Button>
    </Link>

  </div>
</div>
  );
};

export default AnimalsCard;