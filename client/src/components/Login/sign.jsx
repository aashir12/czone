import React from 'react'

const Sign = () => {
  return (
   <>
    <div className='formCover'>
       <h1>Create an Account</h1>
       <div className='singleInput'>
       <label for='fullName'>Full Name</label>
       <input placeholder='Full Name' name='fullName'></input>
       </div>
       <div className='singleInput'>
       <label for='email'>Email</label>
       <input placeholder='abc@email.com' name='email'></input>
       </div>
       <div className='singleInput'>
       <label for='Password'>Password</label>
       <input placeholder='Password' name='Password'></input>
       </div>
       <div className='singleInput'>
       <label for='fullName'>Confirm Password</label>
       <input placeholder='Condirm Password'></input>
       </div>
       <div className='singleInput'>
       <label for='phone'>Phone/Mobile</label>
       <input placeholder='03xxxxxxxxx' name='phone'></input>
       </div>
    </div>
   </>
  )
}

export default Sign