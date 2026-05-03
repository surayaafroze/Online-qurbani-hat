import AllAnimalsClient from "@/component/AllAnimalsClient";

const AllAnimals = async () => {
  const res = await fetch("https://online-qurbani-hat.vercel.app/data.json");
  const animals = await res.json();

  return <AllAnimalsClient animals={animals} />;
};

export default AllAnimals;