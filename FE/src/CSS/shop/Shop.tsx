// import React from 'react'
import "./CSS/shop/Shop.scss";
import Services from "../../component/common/Services/Services";
import Footer from "../../component/common/Footer/Footer";
import Header from "../../component/common/Header/Header";
import Banner from "../../component/common/Banner/Banner";
import Filter from "../../component/Filter/Filter";
import Product from "../../component/Product/ProductList/ProductList";
// import PageComponent from "./component/Shop/product_page/PageComponent";
// import ProductCard from "./component/Shop/ProductCard/ProductCard";

const Shop = () => {
  return (
    <>
      <Header/>
      <Banner title={'Shop'}/>
      <Filter/>
      {/* <section className="section">
        <div className="container">
          <div className="section__heading">
            <h2 className="section__title section__title--typo">Product</h2>
          </div>
          <div className="section__body">
            <div className="product__list">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <PageComponent/>
          </div>
        </div>
      </section> */}
      <Product />
      <Services/>
      <Footer/>
    </>
  );
};

export default Shop;