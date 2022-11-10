import React from 'react'
import ProductProps from './ProductProps'
import productlist from './productlist'

const NewProducts = () => {
  return (
    <div>
        <h1>New Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor amet commodi consectetur eveniet dolorum a nesciunt quisquam sit dolores temporibus.</p>

        <div className="pro-wrap">
        {productlist.map((el, id) => (
          <ProductProps
          id={id}
            key={el.productName}
            img={el.img}
            productName={el.productName}
            price={el.price}
          />
        ))}
      </div>
   
    </div>
  )
}

export default NewProducts