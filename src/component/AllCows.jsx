import React from 'react';
import AnimalsCard from './AnimalsCard';

const AllCows =async () => {
  const res =await fetch ('https://online-qurbani-hat.vercel.app/data.json', {
    next: { revalidate: 5 }
  })
  const animals =await res.json()
  const topAnimals= animals.slice(0,4)
  console.log(topAnimals)
  return (
    <div>
    <h1 className='text-2xl'>Qurbani Hat</h1>
    <div className='grid grid-cols-4'>
      {animals.map(cows=><AnimalsCard key={cows.id} cows={cows}>

      </AnimalsCard>)}
    </div>
    </div>
  );
};

export default AllCows;