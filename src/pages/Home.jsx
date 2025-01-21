import React from "react";
import Carousel from "../components/Carousel/Carousel";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductCard1 from "../components/ProductCard1/ProductCard1";
const Home = () => {
  return (
    <div>
      <Carousel />
      <ProductCard />
      <ProductCard1 />
    </div>

    //    <Router>
    //    <Routes>
    //    <Route path="/" element={<ProductCard1 />} />
    //    <Route path="/card" element={<CardPage />} />
    //    </Routes>
    //  </Router>
  );
};

export default Home;
