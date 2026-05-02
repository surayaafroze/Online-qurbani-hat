import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalsCard = ({cows}) => {
  const {name,type,breed,price,weight,age,location,description,image,category}=cows
  return (
    <div className='shadow  bg-[#458b45] rounded-2xl transition-all duration-700 hover:-translate-y-3 hover:shadow-xl'>
      <div className='p-5 space-y-5 '>
       <div className='flex justify-center items-center relative w-full aspect-square p-10  py-8'>
         <Chip className='absolute  -top-9 px-2 bg-[#004d00] text-white'>{type}</Chip>
         <Image
         className='rounded-2xl w-full'
        src={image}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={name}
        
        >

        </Image>
        
       </div>
        <div>
          <h2 className='font-light'>{name}</h2>
  
    <div className='flex items-center gap-2'>
   
      <p >{breed}</p>
    </div>
 
  
   <div className='flex gap-2  items-center '>
   
     <p >{weight}</p>
   </div>
   <Link href={`/allPhotos/${cows.id}`}><Button variant='outline' className={'w-full bg-[#ccffcc] text-black mt-4'}>view details</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalsCard;