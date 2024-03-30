import React, { useEffect } from 'react'
import { useCart, useDispatchCart } from './contextReducer';



const Stock = ({price,image,title,description,id}) => {
  var insideCart=useCart();
  var changeCart=useDispatchCart();

  var handleToCart = async (item) => {

    await changeCart({ type: 'ADD', id:id,title:title,singleTotal:item.price,singlePrice:price,image:image});
    console.log("Cart:", insideCart);
   
 

}
  
  
  return (
    <>
        <div className='Stock' style={{width:'400px',padding:'1%'}}>
          <h3 style={{color:"green"}}>Out of Stock</h3>
          <h5 style={{color:"#085EB9"}}>Warranty : <strong>International Warrenty</strong></h5>  
         <h3 style={{background:'#003B64',color:'white',width:'99%',paddingLeft:'2%'}}>Additional </h3>
         <div>
         <option>International Warrenty (0)</option>
          <option>One Year Local Warrenty (18500)</option>
         </div>
         <button style={{width:'50%',background:'#FFF200'}} onClick={handleToCart}>Add To Cart</button>
          <h1>{`Rs. ${price}`}</h1>
        </div>
    </>
  )
}

export default Stock