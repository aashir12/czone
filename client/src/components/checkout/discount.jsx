import React,{useEffect,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Discount = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000);
  }, []);


  return (
    <>
        <div className='cart' style={{maxWidth:'500px',border:'1px solid #dadada'}}>
        <h1>Shopping Cart</h1>
        <div className='innerCart'>
           <div className='table' style={{background:'#EBEDEF'}}>
            <h5 className='productDetails'>Product</h5>
            <h5>Price</h5>
            <h5>Quantity</h5>
            <h5>Total</h5>
           </div>
         
            
     <div className='table'>
            <div className='productDetails'>
                <h5>Sony PlayStation 5 Slim Disc Edition 2023 1TB Gaming Console - PS5 8K 4K @ 120Hz HDR - Japan Region CFI-2000 - New Model</h5>
            </div>
            <h5>$70</h5>
            <h5>2</h5>
            <h5>$150</h5>
           </div>
         <div className='table' style={{borderBottom:'none'}}>
          <h5>Sub total</h5>
          <h5 style={{color:'red'}}>RS 75000</h5>
         </div>
         <div className='table' style={{borderBottom:'none'}}>
          <h5>Shipping</h5>
          <h5 style={{color:'red'}}>Free</h5>
         </div>
         <div className='table' style={{borderBottom:'none'}}>
          <h5>Total</h5>
          <h5 style={{color:'red'}}>RS 75000</h5>
         </div>
            
        </div>
        </div>
    </>
  )
}

export default Discount