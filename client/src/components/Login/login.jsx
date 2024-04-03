import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <>
        <div className='formCover'>
       <h2>Login</h2>

       <div className='singleInput'>
       <label for='email'>Email</label>
       <input placeholder='abc@email.com' name='email' type='email'></input>
       </div>
       <div className='singleInput'>
       <label for='Password'>Password</label>
       <input placeholder='Password' name='Password' type='password'></input>
       </div>
  
       <div style={{width:'100%',textAlign:'center',margin:'5% auto 0% auto'}}><button style={{color:"white",background:'#2B3E5E',border:'none',width:'60%',padding:'1.2%',borderRadius:'5px'}}><h4>Login</h4></button></div>
       <div style={{width:'100%',textAlign:'center',margin:'5% auto 0% auto'}}><Link to='/sign' style={{color:'#34495E'}}>Don't Have an Account</Link></div>
    </div>
   </>
     )
}

export default Login