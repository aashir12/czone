import React from 'react'
import Search from './search';
import {Link} from 'react-router-dom'


const MidBar = () => {
  return (
    <>
        <div className='MidBar'>
            <div className='MidBar-lftWala'>
             <Link to='/'>   <img src='https://www.czone.com.pk/images/logo/computerzone-logo-1540160816084000.png'></img> <i class="fa-solid fa-cart-shopping cartIcon"></i></Link>
            </div>
            <div className='MidBar-rftWala'>
                <div className='searchCover'><Search/></div>
                <div><i class="fa-solid fa-cart-shopping cartIcon"></i></div>
            </div>

        </div>
    </>
  )
}

export default MidBar;