import React from 'react';
import HomeAnimalsClient from './HomeAnimalsClient';

const AllCows = async () => {
  const res = await fetch('https://online-qurbani-hat.vercel.app/data.json')
  const animals = await res.json()
  const topAnimals = animals.slice(0, 4)
  
  return <HomeAnimalsClient topAnimals={topAnimals} />;
};

export default AllCows;