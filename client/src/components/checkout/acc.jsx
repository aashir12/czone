import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Acc = () => {


 

  return (
   <>
    <div className='formCover'>
       <h4 style={{borderBottom:'2px solid #dadada',paddingBottom:'2%'}}>Payment</h4>
     <form>
     <div className='singleInput'>
       <label for='shipping'>Bank Name</label>
       <select placeholder='Full Name' name='shipping' type='shipping'  required>
        <option>Bank Islamic</option>
        <option>Askari</option>
        <option>Al - Baraka</option>
        <option>HBL</option>
        <option>Habib Metro</option>
        <option>Allied</option>
        <option>Al Falah</option>
        <option>Dubai Islamic</option>
        <option>National Bank</option>
        <option>BOP</option>
        <option>BOK</option>
        <option>Sonehri Bank</option>
       </select>
       </div>
       <div className='singleInput'>
       <label for='fName'>Account Title</label>
       <input placeholder='Jhon Hamza' name='fName' type='text'   required/>
       </div>
       <div className='singleInput'>
       <label for='cnic'>CNIC</label>
       <input placeholder='XXXX-XXXX-XXXX-XXXX' name='cnic' type='tel'   required/>
       </div>
       <div className='singleInput'>
       <label for='card'>Credit/Debit Cart Number</label>
       <input placeholder='XXXX-XXXX-XXXX-XXXX' name='card' type='tel'   required/>
       </div>

     </form>
    <p style={{paddingTop:'3%'}}>Please make sure that you have added correct Information</p>
    </div>
   </>
  )
}

export default Acc