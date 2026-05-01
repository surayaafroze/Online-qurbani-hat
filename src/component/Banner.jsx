
const Banner = () => {
  return (
    <div className=' bg-[#ccffcc]  md:pt-20 pt-5 pb-20'>
  <div className=' justify-between items-center max-w-7xl mx-auto pt-10 md:px-3 px-3'>
    <div className='space-y-6'>
      <h1 className='md:text-4xl text-2xl font-bold text-[#004d00] text-center'>We provide a variety of healthy and well-raised Qurbani animals that are safe, pure, and carefully selected for sacrifice.</h1>

    <p className='text-[#11101080] text-center'>From small goats to large cows, choose the best animal with confidence.</p>

   <div className='flex justify-center items-center gap-4'>
     <button className='btn bg-[#ff66a3] text-white font-bold rounded'>Oredr Now</button>
    <button className='btn'>Learn More</button>
   </div>
    </div>
    
  </div>
    </div>
  );
};

export default Banner;