import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({id,title,description,price,image}) => {
  var navigate=useNavigate();
  function clicker(){
     navigate(`/single/${id}`)
  }
  return (
    <>
        <div className='card' style={{margin:'20px'}}>
            <img src={image}/>
            <h3 className='title'>{title}</h3>
            <p className='text-4xl'>
         { description}
            </p>
            <hr style={{color:"grey",height:"0.1px"}}/>
            <h3>Price : {price}</h3>
            <button onClick={clicker}><i class="fa-solid fa-link"></i> View Detail</button>
        </div>
    </>
  )
}

export default Card