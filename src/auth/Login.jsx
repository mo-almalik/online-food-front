
import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import axios from 'axios'
import { AuthContext } from '../context/AuthContext.js'

export default function Login() {
  const [lodaing,setLoading] = useState(true)
  const [error ,setError] = useState('')
  const { isAuthenticated, saveAuthData, user } = useContext(AuthContext)

  let schema = Yup.object({
    email: Yup.string().email('Email required ').required('Email required '),
    password: Yup.string().required('password required').matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, 'The first letter is uppercase, then lowercase, then numbers'),
  })
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

let navigate = useNavigate() 





  const Login =  async (data) => {
    try{
      const res = await axios.post('http://localhost:3001/v1/auth/login', data)
      const token = res.data?.token

      saveAuthData(token)
      if(isAuthenticated()){
        const Role = user()
        if(Role.role === 'admin') {
          return navigate('/dashboard')
        }else{
          return navigate('/')
        }
      }

    }catch(err){
     setError(err.response?.data?.message)

    }
  
  }
  const onSubmit = Login 
  return (
    <div className='text-start w-[90%] mx-auto my-3 '>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-y-2'>
        <label htmlFor="email" className='text-gray-500 mt-3 '>  Email</label>
          <input type="email" {...register('email')} name="email" id="email" className='border h-12 rounded-md px-2 border-gray-100 focus:outline-none' placeholder='Email' />
          <span className="text-red-400">{errors.email?.message}</span>
          <label htmlFor="password" className='text-gray-500 mt-3'>Password</label>
          <input type="password" {...register('password')} name="password" id="password" className='border h-12 rounded-md px-2 border-gray-100 focus:outline-none' placeholder='password' />
          <span className="text-red-400">{errors.password?.message}</span>


          <button className='w-full sm:w-full mx-auto  mt-5 bg-main hover:bg-red-400 h-10 rounded-md text-white'>Login</button>
          <span className="text-red-400 font-bold">{error}</span>
        </div>
      </form>
    </div>
  )
}
