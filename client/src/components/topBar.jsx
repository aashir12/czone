import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TopBar = () => {
 var [credentials,setCredentials]=useState({});

  useEffect(
    ()=>{
     
        var data=localStorage.getItem('credentials')
        setCredentials(JSON.parse(data))
      
    }
  )
  


 


  

var navigate=useNavigate();
  return (
   <>
    <div className='TopBar'>
      <div className='TopBar-lftWala'>
        <h6>About Computer Zone</h6>
        <h6>Feedbacks & Suggestions</h6>
        <h6>Contact Us</h6>
        <h6>FAQ's</h6>
        <h6>Policies</h6>
      </div>
      <div className='TopBar-rftWala'>
        
        {
          credentials?<><h6>{credentials.fullName}</h6>
        <h6 onClick={()=> localStorage.removeItem('credentials')} style={{cursor:'pointer'}}>Logout</h6></>:<><h6 style={{cursor:'pointer'}} onClick={()=> navigate('/Login')}>login</h6>
        <h6 style={{cursor:'pointer'}} onClick={()=> navigate('/sign')}>Create Account</h6></>
        }
        <select>
            <option>pkr</option>
            <option>usd</option>
            <option>aed</option>
            <option>euro</option>
        </select>
      </div>
    </div>
   </>
  )
}

export default TopBar