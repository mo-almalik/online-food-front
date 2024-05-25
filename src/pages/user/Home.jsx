import React from 'react'
import Hero from '../../components/Hero.jsx'
import Services from '../../components/Services.jsx'
import Products from '../../components/Products.jsx'
import { Helmet } from 'react-helmet'
import CallToAction from '../../components/CallToAction.jsx'

export default function Home() {
  return (<>
  <Helmet>
    <title>Home</title>
  </Helmet>

    <div className='container'>
       <Hero />
       <Services />
       <Products />
       <CallToAction />
    </div>
  </>
    
  )
}
