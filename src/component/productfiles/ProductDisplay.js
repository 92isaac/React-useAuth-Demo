import React from 'react'
import '../styles/productdisplay.css'
import { useParams } from 'react-router-dom'
import productlist from './productlist'

const ProductDisplay = () => {
    const { id } =useParams()
    const displayitems = productlist[id]
  return (
    <div className='dp-wrapper'>
        <div className="display-product">
            <div className="display-image">
                <img src={displayitems.img} alt="" />
                <div className="text">
                    <h3>{displayitems.productName}</h3>
                    <h4>Price: {displayitems.price}</h4>
                </div>
            </div>
                <div className="description">
                    <p>{displayitems.desc}</p>
                </div>

        <button style={{width:'90%', height:'40px', fontWeight:'bolder', fontSize:'19px', marginBottom:"10px", borderRadius:"10px", border:"none"}} onClick={()=>{}
        }>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductDisplay