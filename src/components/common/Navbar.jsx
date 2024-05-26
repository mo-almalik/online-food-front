import { CircleUser, Menu, ShoppingBag } from 'lucide-react';
import React, { useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { AuthContext } from '../../context/AuthContext.js';
 
 

export default function Navbar() {
  const headerRef = useRef();
 
const {user ,isAuthenticated ,logout} =  useContext(AuthContext)
const userInfo = user()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = '#f1f1f1';
        headerRef.current.style.padding = '20px 0';
      } else {
        headerRef.current.style.background = '#fff';
        headerRef.current.style.padding = '30px 0';
      } 
    };

    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header ref={headerRef} className='w-full bg-white fixed left-0 right-0 top-0 z-50 py-[30px] transition-all duration-300 text-gray-700'>
      <div className='container'>
        <div className='flex justify-between items-center sm:mx-0 mx-5'>
          <div>
            <img src={logo} className='' alt='food-logo' />
          </div>
          <div className='hidden sm:block'>
            <NavLink className='mx-3' to={'/'}>Home</NavLink>
            <NavLink className='mx-3' to={'/menu'}>Menu</NavLink>
            <NavLink className='mx-3' to={'/service'}>Service</NavLink>
            <NavLink className='mx-3' to={'/shop'}>Shop</NavLink>
          </div>
          <div className='flex items-center gap-x-3'>
            <div className='block sm:hidden'>
              <Menu size={18} />
            </div>
            <div className='flex justify-center items-center gap-x-2'>
         <div className='flex items-center gap-x-2'>
         {isAuthenticated() ?  <>
          <span>{userInfo.name}</span>
          <button onClick={()=>logout()} >خ</button>
         </> : <> </> }
        
         </div>
            <ShoppingBag size={18} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
