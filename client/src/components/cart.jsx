import React,{useEffect,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Cart = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000);
  }, []);


  return (
    <>
        <div className='cart'>
        <h1>Shopping Cart</h1>
        <div className='innerCart'>
           <div className='table' style={{background:'#EBEDEF'}}>
            <h5 className='numbering'>#</h5>
            <h5 className='productDetails'>Product</h5>
            <h5>Price</h5>
            <h5>Quantity</h5>
            <h5>Total</h5>
           </div>
         
            
                    <div className='table'>
            <h5 className='numbering'>1</h5>
            <div className='productDetails'>
                <img src='https://www.czone.com.pk/Images/Thumbnails/1-czone.com.pk-1540-15551-041223104806.jpg' style={{height:'80px'}}></img>
                <h5>Sony PlayStation 5 Slim Disc Edition 2023 1TB Gaming Console - PS5 8K 4K @ 120Hz HDR - Japan Region CFI-2000 - New Model</h5>
            </div>
            <h5>$70</h5>
            <h5>2</h5>
            <h5>$150</h5>
           </div>
         <div className='table' style={{borderBottom:'none'}}>
          <h5><strong>Total</strong></h5>
          <h5 style={{color:'red'}}>RS 75000</h5>
         </div>
         <div className='table' style={{background:'#EBEDEF'}}>
           <button  style={{background:'#BDC3C7',color:'#fff',padding:'1%',fontWeight:'bold',borderRadius:'8px',border:'none'}} onClick={()=>navigate('/')}>Continue Shopping</button>
          <button style={{background:'#345B92',color:'#fff',padding:'1%',fontWeight:'bold',borderRadius:'8px',border:'none'}}>Proceed to Checkout</button>
         </div>
            
        </div>
        </div>
    </>
  )
}

export default Cart