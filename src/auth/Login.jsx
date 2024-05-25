
import React from 'react'

export default function Login() {
  return (
    <div className='text-start w-[90%] mx-auto my-3 '>
      <form>
        <div className='flex flex-col gap-y-2'>
        <label htmlFor="email" className='text-gray-500 mt-3 '>  Email</label>
          <input type="email" name="Email" id="email" className='border h-12 rounded-md px-2 border-gray-100 focus:outline-none' placeholder='email' />
          <label htmlFor="password" className='text-gray-500 mt-3'>Password</label>
          <input type="password" name="password" id="password" className='border h-12 rounded-md px-2 border-gray-100 focus:outline-none' placeholder='password' />
          <button className='w-full sm:w-full mx-auto  mt-5 bg-main hover:bg-red-400 h-10 rounded-md text-white'>Login</button>
        </div>
      </form>
    </div>
  )
}
