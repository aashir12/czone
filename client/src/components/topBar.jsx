import React from 'react'

const TopBar = () => {
  return (
   <>
    <div className='TopBar'>
      <div className='TopBar-lftWala'>
        <h4>About Computer Zone</h4>
        <h4>Feedbacks & Suggestions</h4>
        <h4>Contact Us</h4>
        <h4>FAQ's</h4>
        <h4>Policies</h4>
      </div>
      <div className='TopBar-rftWala'>
        <h4>My Account</h4>
        <h4>My Account</h4>
        <h4>Create Account</h4>
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