import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../context/ProductsContext.js'

export default function ProductDetails() {
  const {id} = useParams()

  const {fetchSingleProduct ,products} = useContext(ProductsContext)

  console.log('detals page' ,products);
  useEffect(()=>{
    fetchSingleProduct(id)
  },[])
  return (
    <div>
      ProductDetails
    </div>
  )
}
