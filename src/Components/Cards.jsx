import React from 'react'
import Card from './Card'

export default function Cards({data}) {
  return (
    <div className='flex gap-10 m-10 flex-wrap m-4'>
      {data.map((ele,index)=>(
        <Card data={ele}/>
      ))}
    </div>
  )
}
