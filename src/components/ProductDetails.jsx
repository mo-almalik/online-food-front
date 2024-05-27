import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../context/ProductsContext.js'

export default function ProductDetails() {
  const {id} = useParams()

  const {fetchSingleProduct ,products} = useContext(ProductsContext)

  useEffect(()=>{
    fetchSingleProduct(id)
  },[])
  return (
    <div>
      ProductDetails
    </div>
  )
}
