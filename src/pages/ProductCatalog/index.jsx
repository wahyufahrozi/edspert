import React from "react";
import Cards from "../../components/cards";
import Hero from "../../components/hero";

const ProductCatalog = () => {
  return (
    <>
      <Hero />
      <div className="px-11 min-h-screen mb-10">
        <Cards />
      </div>
    </>
  );
};

export default ProductCatalog;
