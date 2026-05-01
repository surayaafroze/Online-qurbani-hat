import React from 'react';
import AnimalsCard from './AnimalsCard';

const AllCows =async () => {
  const res =await fetch ('https://online-qurbani-hat.vercel.app/data.json', {
    next: { revalidate: 5 }
  })
  const animals =await res.json()
  const topAnimals= animals.slice(0,6)
  console.log(topAnimals)
  return (
    <div className='bg-[#99ff99] pb-10'>
    <div className='max-w-7xl mx-auto pt-10 '>
      <h1 className='text-2xl'>Qurbani Hat</h1>
    <div className='grid md:grid-cols-4 grid-cols-1 gap-7 md:px-3 px-5'>
      {topAnimals.map(cows=><AnimalsCard key={cows.id} cows={cows}>

      </AnimalsCard>)}
    </div>
    </div>
    </div>
  );
};

export default AllCows;