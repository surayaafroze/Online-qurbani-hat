import AnimalsCard from '@/component/AnimalsCard';
import React from 'react';

const AllAnimals =async () => {
  const res =await fetch ('https://online-qurbani-hat.vercel.app/data.json')
  const animals =await res.json()
  return (
   <div className='bg-[#ccffcc] pb-10'>
    <div className='max-w-7xl mx-auto pt-10 '>
      <h1 className='text-3xl font-bold px-2'>Qurbani Hat</h1>
    <div className='grid md:grid-cols-4 grid-cols-1 gap-7 md:px-3 px-5 mt-6'>
      {animals.map(cows=><AnimalsCard key={cows.id} cows={cows}>

      </AnimalsCard>)}
    </div>
    </div>
    </div>
  );
};

export default AllAnimals;