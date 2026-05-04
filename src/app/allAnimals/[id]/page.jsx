
import { DetailsLogin } from '@/component/DetailsLogin';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalsDetails =async ({params}) => {
  const {id} = await params;
 const res =await fetch ('https://online-qurbani-hat.vercel.app/data.json')
  const animals =await res.json()
  const animal=animals.find(a=>a.id==id)
  console.log(animal)
  return (
    <div className='min-h-screen  bg-[#458b45] flex md:flex-row flex-col justify-center items-center'>

      <div className='max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-5'>
       <div
       
       className='flex justify-center items-center px-6 pt-6'>
        
         <Image
         className='rounded-2xl '
        src={animal.image}
    width={500}
    height={400}
        
        alt={animal.name}
        
        >

        </Image>
        
       </div>
        <div  classname='px-6'>
          <h2 className='md:text-5xl text-3xl font-bold px-6'>{animal.name}</h2>
  
    
   
   <div 
   
   className='px-4'>   <p className='bg-[#ccffcc] p-6 rounded-xl mt-6 text-xl '>{animal.description}</p></div>
      {/* category,location,age,weight,price,breed,type */}
   <div className='flex flex-col bg-[#ccffcc] p-8 mt-10 rounded-xl space-y-3 mb-5 mx-4'>
    <div className='flex justify-around items-center'>
  <p className='font-bold text-xl'>Type:</p>
  <p className='font-bold'>{animal.type}</p>

</div>

<div className='flex justify-around items-center'>
  <p className='font-bold text-xl'>Weight:</p>
  <p className='font-bold'>{animal.weight}</p>
</div>

<div className='flex justify-around items-center'>
  <p className='font-bold text-xl'>Price:</p>
  <p className='font-bold'>{animal.price}</p>
</div>

<div className='flex justify-around items-center'>
  <p className='font-bold text-xl'>Location:</p>
  <p className='font-bold'>{animal.location}</p>

</div>
<div className='flex justify-around items-center'>
  <p className='font-bold text-xl'>Breed:</p>
  <p className='font-bold'>{animal.breed}</p>

</div>
<div className='flex justify-around items-center'>
  <p className='font-bold text-xl'>Category:</p>
  <p className='font-bold'>{animal.category}</p>

</div>

   
   </div>
 
  <div className='flex justify-center items-center px-4 pb-10'><DetailsLogin></DetailsLogin></div>
  
        </div>
      </div>

    </div>
  );
};

export default AnimalsDetails;