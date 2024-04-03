import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Shipping from './shipping';
import Acc from './acc';
import Discount from './discount';
import Submit from './submit';

const Checkout = () => {

   const [detail,setDetail]=useState({
    fullName:'',
    email:'',
    password:'',
    newPassword:'',
    phone:''
   })
   var navigate=useNavigate();

   function changer(e){
    var {value,name}=e.target;
    setDetail(
      (prev)=> ({...prev,[name]:value})
    )
   }
    function clicker(e){
    e.preventDefault();
    if(detail.password === detail.newPassword){
      localStorage.setItem('credentials',JSON.stringify(detail))
      console.log(localStorage.getItem('credentials'))
      navigate('/')
    }
    else{
      alert('you dont remember the password')
    }
   
   }


 

  return (
   <>
    <div className='formCover'>
       <h4 style={{borderBottom:'2px solid #dadada',paddingBottom:'2%'}}>Your Information</h4>
     <form onSubmit={clicker}>
     <div className='singleInput'>
       <label for='fullName'>Full Name</label>
       <input placeholder='Full Name' name='fullName' type='text'  onChange={changer} required/>
       </div>
       <div className='singleInput'>
       <label for='email'>Email</label>
       <input placeholder='abc@email.com' name='email' type='email'  onChange={changer} required/>
       </div>
       <div className='singleInput'>
       <label for='Password'>Password</label>
       <input placeholder='Password' name='password' type='password'  onChange={changer} required/>
       </div>
       <div className='singleInput'>
       <label for='fullName'>Confirm Password</label>
       <input placeholder='Confirm Password' name='newPassword' type='password'  onChange={changer} required/>
       </div>
       <div className='singleInput'>
       <label for='phone'>Phone/Mobile</label>
       <input placeholder='03xxxxxxxxx' name='phone' type='tel'  onChange={changer} required/>
       </div>

     </form>

    </div>
    <Shipping/>
    <Acc/>
    <Discount/>
    <Submit/>
   </>
  )
}

export default Checkout