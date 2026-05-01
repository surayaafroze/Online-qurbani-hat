import React from 'react';

const AllCows =async () => {
  const res =await fetch ('https://online-qurbani-hat.vercel.app/data.json')
  const animals =await res.json()
  const topAnimals= animals.slice(0,4)
  console.log(topAnimals)
  return (
    <div>
      
    </div>
  );
};

export default AllCows;