import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Submit = () => {


 

  return (
   <>
    <div className='formCover'>
       <h4 style={{borderBottom:'2px solid grey',paddingBottom:'2%'}}>Shipping (Delivery)</h4>
     <form>
     <div className='singleInput'>
       <label for='shipping'>Comments</label>
       <textarea placeholder='Full Name' name='comment' type='text'  required/>
      

       </div>
       <div className='table' style={{borderBottom:'none'}}>

          <button style={{background:'#345B92',color:'#fff',padding:'3%',fontWeight:'bold',borderRadius:'5px',border:'none'}}>Confirm</button>
         </div>

     </form>

    </div>
   </>
  )
}

export default Submit