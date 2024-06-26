import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Sign = () => {

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
       <h2>Create an Account</h2>
     <form onSubmit={clicker}>
     <div className='singleInput'>
       <label for='fullName'>Full Name</label>
       <input placeholder='Full Name' name='fullName' type='text'  onChange={changer} required></input>
       </div>
       <div className='singleInput'>
       <label for='email'>Email</label>
       <input placeholder='abc@email.com' name='email' type='email'  onChange={changer} required></input>
       </div>
       <div className='singleInput'>
       <label for='Password'>Password</label>
       <input placeholder='Password' name='password' type='password'  onChange={changer} required></input>
       </div>
       <div className='singleInput'>
       <label for='fullName'>Confirm Password</label>
       <input placeholder='Confirm Password' name='newPassword' type='password'  onChange={changer} required></input>
       </div>
       <div className='singleInput'>
       <label for='phone'>Phone/Mobile</label>
       <input placeholder='03xxxxxxxxx' name='phone' type='tel'  onChange={changer} required></input>
       </div>
       <div className=''>
       <input type='checkbox'  required></input>
      <h6>Yes I want to Subscribe NewsLetter</h6>
       </div>
       <div style={{width:'100%',textAlign:'center',margin:'5% auto 0% auto'}}>
       <button style={{color:"white",background:'#2B3E5E',border:'none',width:'60%',padding:'1.2%',borderRadius:'5px'}}><h4>Sign Up</h4></button>
       </div>
       <div style={{width:'100%',textAlign:'center',margin:'5% auto 0% auto'}}><Link to='/Login' style={{color:'#34495E'}}>Already Have an Account</Link></div>
     </form>

    </div>
   </>
  )
}

export default Sign