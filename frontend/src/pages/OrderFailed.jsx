import React from 'react'
import { Link } from 'react-router-dom'
import { FailedImage } from '../assets/export'
import { TiArrowRight } from "react-icons/ti";

const OrderFailed = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-y-2'>
    <img src={FailedImage} alt="" />
    <h1 className='text-2xl font-bold'>Oops! There was an issue</h1>
    <p className="text-base font-medium">Oops! There was a problem processing your order. Please review the details and try again.</p>
    <Link to="/products" className={`px-6 py-3 bg-black text-white text-sm font-medium flex items-center justify-center`}>Reorder <TiArrowRight className='text-2xl'/></Link>
  </div>
  )
}

export default OrderFailed
