import React, { useState } from 'react'
import Order  from '../assets/Order food-bro.svg'
import delivery  from '../assets/fooddelivery.svg'
import cok from '../assets/Cooking-cuate.svg'
export default function Services() {
    const [services] = useState([
        {title: 'Easy Ordering' ,desc : 'Just a few simple steps to order food.', icon: Order},
        {title: 'Fastest Delivery' ,desc : 'Always on time, even faster.' ,icon: delivery},
        {title: 'Top Quality' ,desc : 'Not just fast; our quality is also top-notch.' ,icon: cok},
    ])
  return (<>
<div className='relative '>
<div className='w-full h-full bg-gray-200 absolute box opacity-10'></div>
<div className='text-center py-5 z-10'>

    <h6 className='text-sm text-main '>   WHAT WE SERVE </h6>
    <h2 className='font-bold text-[30px] sm:text-[45px] w-full sm:w-1/3 md:w-full mx-auto'> Your Preferred Food Delivery Partner</h2>
  </div>
 
 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  text-center my-10 z-10'>

 {services.map((item,index)=>(<div className='h-[320px]' key={index}>
        <img src={item.icon}  alt={item.title} className='w-1/2 h-[140px] mx-auto z-5 mt-5' />
        <h2 className='font-bold text-2xl my-4'>{item.title}</h2>
        <p className='w-1/2 mx-auto text-gray-500'> {item.desc}</p>
    </div>)
 )}
 </div>
</div>
    
  </>
   
  )
}
