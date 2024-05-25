import React from 'react'

export default function Register() {
  return (
    <div className='text-start w-[90%] mx-auto my-3 '>
    <form>
      <div className='flex flex-col gap-y-2'>
        <input type="email" name="email" id="" className='border h-12 rounded-md px-2 border-gray-100 focus:outline-none' placeholder='email' />
        <input type="password" name="password" id="" className='border h-12 rounded-md px-2 border-gray-100 focus:outline-none' placeholder='password' />
        <button className='w-full sm:w-full mx-auto  mt-5 bg-main hover:bg-red-400 h-10 rounded-md text-white'>Register</button>
      </div>
    </form>
  </div>
  )
}
