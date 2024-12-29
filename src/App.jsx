import React, { useState } from 'react'
import Form from './Components/Form'
import Cards from './Components/Cards'
import Card from './Components/Card'

export default function App() {
  const data=[{name:"Sneha",email:"sneha@gmail.com",profession:"Coder",image:"https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps="},
    {name:"Ram",email:"ram@gmail.com",profession:"Teacher",image:"https://media.istockphoto.com/id/1483752333/photo/businessman-in-black-suit-posing-confidently-on-isolated-background-fervent.jpg?s=612x612&w=0&k=20&c=69RagMW6nl8z0WRCwqir2KZmwhB4ZBndb4z3WkX1jm8="},
    {name:"Vamika",email:"vamikam@gmail.com",profession:"Student",image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"},
    {name:"Siya",email:"isya@gmail.com",profession:"Professor",image:"https://images.unsplash.com/photo-1517630800677-932d836ab680?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  ]
  const [val,setVal]=useState(data);
  const formchadata=(data)=>{
  setVal([...val,data]);
  }
  return (
    <>
    <div className=' w-full h-auto mr-20 bg-zinc-900 rounded-lg' >
      <Cards data={val}/>
    </div>
    <div>
      <Form formchadata={formchadata}/>
    </div>
    </>
  )
}
