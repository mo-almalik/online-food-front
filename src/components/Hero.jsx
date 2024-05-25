import React from 'react'
import hero from '../assets/hero.png'
import delivery from '../assets/delivery.png'
export default function Hero() {
  return <>
    <div className='justify-center items-center py-[30px] w-full  h-full   sm:h-screen md:h-screen  px-10 flex-col sm:flex  md:flex-row lg:flex-row mt-24 sm:mt-0  '>

        <div className=' w-full sm:w-1/2 '>
            <div className='text-[#EB5757] bg-[#FEE9DE] rounded-full px-5 h-12 py-3  w-fit flex justify-between gap-x-10 items-center'>
            <span>
            More than Faster
            </span>
             <img src={delivery} alt='' className='bg-[#f1f1f1] rounded-full z-10 w-10 animate-bounce' />
             </div>
            <h1 className='my-5 font-bold text-[30px] sm:text-[50px]  sm:leading-[30px] md:leading-[60px] '>
            Be The Fastest <br /> In Delivering <br /> Your <span className='text-main '>Food</span>
            </h1>
            <p className='w-full'>
            Our mission is to satisfy your cravings with delicious <br /> food and ultra-fast, free delivery.
            </p>
            <button className='btn'>Get Start</button>
        </div>
        <div className=' w-full sm:w-1/2 flex justify-end'>
            <img src={hero} alt='hero' className='w-full object-cover'/>
        </div>
    </div>
  </>
}
