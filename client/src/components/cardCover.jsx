import React from 'react'
import Card from './card'
import cardData from './data'

const CardCover = () => {

  return (
        <>
            <div className='cardCover' style={{width:'85%',margin:'5% auto'}}>
            <div className='featured' style={{background:'#E7E7E7',display:'flex',alignItems:'center',padding:'10px'}}><h3 style={{padding:'0.2% 0'}}>Featured Products</h3></div>
            <div style={{display:'flex',flexWrap:'wrap'}}>
            {
                cardData.map(
                    (item)=>(
                        <>
                        <Card id={item.id} title={item.title} image={item.image} description={item.description} price={item.price}/>
                        </>
                    )
                )
               }
            </div>
       
            
            </div>
        </>
    )
}

export default CardCover