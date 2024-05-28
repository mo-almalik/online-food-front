import React, { useContext, useEffect, useState } from 'react';

import { ShoppingBag, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProductsContext } from '../context/ProductsContext.js';
import { Link } from 'react-router-dom';

export default function Products() {
 const {products ,loading ,fetchProducts} = useContext(ProductsContext)
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleCart = (index) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 1000); // Reset animation after 1 second
  };

  const iconVariants = {
    initial: { y: 0 },
    animate: { y: [0, 50, -50, 0] }, // Moves down 50px, then up to -50px, and back to 0
  };

  useEffect(() => {
    fetchProducts();
},[]);



  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 text-center gap-3 mx-5 sm:mx-10 md:mx-0 lg:mx-0 xl:mx-0 xxl:mx-0 my-20'>
      {loading ? <>loooo</> : <>
      {products.map((item, index) => (
        <div className='bg-white shadow-lg shadow-gray-100 rounded-lg h-auto' key={index}>
          <div className='h-[200px] w-full mx-auto'>
          <Link to={`/product/${item._id}`}>
          <img src={item.image.path} className='w-full h-full object-cover mx-auto rounded-lg' alt={item.name} />
          </Link>
          </div>
          <div className='flex flex-col justify-center items-center p-5 w-full'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='font-bold text-gray-600'>{item.name}</h3>
              <div className='flex items-center gap-x-1 text-sm'>
                <span>5.3</span> <Star size={15} className='text-yellow-500' />
              </div>
            </div>
            <div className='flex justify-between items-center gap-x-1 text-sm w-full mt-5'>
              <button 
                className='cart overflow-hidden'
                onClick={() => handleCart(index)}
              >
                <motion.div 
                  variants={iconVariants}
                  initial="initial"
                  animate={clickedIndex === index ? "animate" : "initial"}
                  transition={{ duration: 0.8 }}
                >
                  <ShoppingBag size={15} />
                </motion.div>
              </button>
              <h4 className='text-md text-gray-800 font-bold'>$ {item.price}</h4>
            </div>
          </div>
        </div>
      ))}
      </>}
    </div>
  );
}
