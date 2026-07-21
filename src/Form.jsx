import React from 'react'
import { useState } from 'react'



const Form = () => {


    
    const[userName,setUsername] =  useState("");
  return (
    <div>




       <input type="text"  value = {userName} />


    </div>
  )
}

export default Form
