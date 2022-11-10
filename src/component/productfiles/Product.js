import React from "react";
import { Link, Outlet } from "react-router-dom";
// import ProductProps from './ProductProps'
// import productlist from './productlist'
import "../styles/product.css";
import { useAuth } from "../utililies/auth";

const Product = () => {
  const auth = useAuth()
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Featured Products</h1>
      <div
        className="featured-story"
        style={{ padding: "10px 40px", textAlign: "justify" }}
      >
        <h1>Welcome: {auth.user1}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          architecto provident doloribus repudiandae, sapiente enim culpa dicta,
          eum ex sed commodi corporis explicabo? Unde dolorum, tempore ex
          tempora optio assumenda natus deserunt dolorem commodi quidem error
          nesciunt molestiae ut sunt. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Debitis porro magni earum fugit maxime magnam,
          praesentium recusandae asperiores minima, reiciendis iste in nemo quis
          dolorum. Dignissimos quidem sequi ex, excepturi ullam vel fuga
          delectus distinctio tempora veniam qui corrupti facilis rem et odit
          exercitationem modi consequatur laudantium optio reiciendis quia.
        </p>
      </div>
      <div className="featured-nav">
        <ul
          className="links"
          style={{
            display: "flex",
            gap: "30px",
            marginLeft: "30px",
            listStyle: "none",
            fontWeight: "900",
          }}
        >
          <li>
            <Link to="newproduct">New Products</Link>
          </li>
          <li>
            <Link to="popular">Populars Products</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default Product;
