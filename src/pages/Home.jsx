import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-light d-flex align-items-center justify-content-center vh-100 p-4">
      <div>
        <h1 className="text-info">Welcome to Our Online Store</h1>
        <p>
          Explore a wide range of products from our e-commerce platform. From
          electronics to fashion, find the best deals and quality items here.
        </p>
        <p>Start your shopping experience now!</p>
        <Link to="/products" className="btn btn-outline-info btn-lg mt-3">
          <b>Browse Products</b>
        </Link>
      </div>
    </div>
  );
}

export default Home;
