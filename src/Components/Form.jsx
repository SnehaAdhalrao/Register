import React from 'react'
// import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Form({formchadata}) {
    const {register,handleSubmit,reset}=useForm();
    const handleclk=(data)=>{
        
        reset();
    }
  return (
    <div className='h-40 w-40 bg-red-200'>
        <form onSubmit={handleSubmit((data)=>formchadata(data))}>
            <h1 >ADD Yourself here!!</h1>
      <input type="text" {...register('name')} placeholder='Enter name here' />
      <input type="text" {...register('email')} placeholder='Enter your email' />
      <input type="text" {...register('prodession')} placeholder='Enter profession here!' />
      <input type="text" {...register('image')} placeholder='imageaddress here' />
      {/* <input type="Submit" /> both submits are allowed here*/} 
      <button >Submit</button>
      </form>
    </div>
  )
}
