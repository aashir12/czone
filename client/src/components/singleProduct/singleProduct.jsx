import React from 'react'
import Stock from '../stock'
import Desc from '../desc'
import Gallery from '../gallery'
import { useParams } from 'react-router-dom'
import cardData from '../data'
import { useCart,useDispatchCart } from '../contextReducer'

const SingleProduct = () => {
    var {id}=useParams();
    
  return (
    <>
         <div className='single' style={{display:'flex',padding:'5%'}}>
    <Gallery image={cardData[id-1].image}/>
    <Desc title={cardData[id-1].title} description={cardData[id-1].description} feature={cardData[id-1].features}/>
    <Stock price={cardData[id-1].price} title={cardData[id-1].title} description={cardData[id-1].description} image={cardData[id-1].image} id={id}/>
    </div>
    </>
  )
}

export default SingleProduct