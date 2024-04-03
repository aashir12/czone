import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Shipping = () => {


 

  return (
   <>
    <div className='formCover'>
       <h4 style={{borderBottom:'2px solid grey',paddingBottom:'2%'}}>Shipping (Delivery)</h4>
     <form>
     <div className='singleInput'>
       <label for='shipping'>shipping</label>
       <select placeholder='Full Name' name='shipping' type='shipping'  required>
        <option>Free Delivery</option>
       </select>
       </div>

     </form>
    <p style={{paddingTop:'3%'}}>Please select a delivery method. Respective shipping charges will be added to your order amount</p>
    </div>
   </>
  )
}

export default Shipping