import React from "react";
import { useNavigate } from "react-router-dom";

const ProductProps = ({ img, productName, price, id }) => {
  const navigate = useNavigate()
  return (
    <div className="pro-card" onClick={()=>navigate('/products/newproduct/' + id)}>
      <img src={img} alt="" />
      <div className="text">
        <h4>{productName}</h4>
        <h4>&#8358;{price}</h4>
      </div>
    </div>
  );
};

export default ProductProps;
