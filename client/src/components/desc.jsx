import React from 'react'

const Desc = ({title,description,feature}) => {
  return (
    <>
        <div className='desc'>
            <h2>{title}</h2>
            <div>
                <div>Rating</div>
                <div style={{color:"#085EB9"}}>Be the first to write a review.</div>

            </div>
            <h6>Product : <span>197192366912</span></h6>
            <h6>Brand : <span>HP</span></h6>
            <h6>Price Upadted On : <span>26 March,2024</span></h6>
            <div className='desc'>
            <h4>
            {description}
            </h4>
            <ul>
                {
                  feature.map(
                    (item,index)=> <li >{item}</li>
                  )
                }
              
            </ul>
            </div>
        </div>
    </>
  )
}

export default Desc