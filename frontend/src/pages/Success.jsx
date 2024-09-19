import React from 'react'
import { SuccessImage } from '../assets/export'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-y-2'>
      <img src={SuccessImage} alt="" />
      <h1 className='text-2xl font-bold'>Thank you for shopping</h1>
      <p className="text-base font-medium">Your order has been successfully placed and is now being processed.</p>
      <Link to="/products" className={`px-5 py-3 bg-yellow-500 text-sm font-medium hover:text-white transition-all duration-300`}>Buy More Products</Link>
    </div>
  )
}

export default Success
