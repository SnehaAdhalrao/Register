import React from 'react'

export default function Card({data}) {
  return (
    <div className='h-44 w-44 bg-zinc-300 rounded-md flex-col items-center justify-center translate-x-[50%]'>
      <div className="imgdiv h-20 w-20 rounded-full bg-red-200 m-3">
        <img className='h-full w-full object-cover rounded-full overflow-hidden' src={data.image} alt="" />
      </div>
      <div className="content m-3 ">
      <h1 className='font-bold text-[15px] whitespace-nowrap'>{data.name}</h1>
      <p className='font-md text-[13px] opacity-40 whitespace-nowrap'>{data.email}</p>
      <p className='font-bold text-[15px] whitespace-nowrap'>{data.profession}</p>
      </div>

      
    </div>
  )
}
