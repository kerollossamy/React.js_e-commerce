import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import RegistrationForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import ProductList from "./pages/ProductList";
import ProductsDetails from "./pages/ProductDetails";
import FavoritesList from './pages/FavoritesList';
import CartList from "./pages/CartList";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/products/:productID" element={<ProductsDetails />} />
          <Route path="/cart" element={<CartList />} />
          <Route path="/signup" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
