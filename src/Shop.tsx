// import React from 'react'
import "./CSS/shop/Shop.scss";
import Services from "./component/common/Services";
import Footer from "./component/common/Footer";
import Header from "./component/common/Header";
// import Banner from "./component/common/Banner";
import Filter from "./component/Filter/Filter";
import PageComponent from "./component/Shop/product_page/PageComponent";

const Shop = () => {
  return (
    <>
      <Header/>
      <div className="banner">
        <img className="banner__image" src="https://picsum.photos/1440/500" alt="#"></img>
        <div className="banner__cover">
          <h1 className="banner__title">Shop</h1>
        </div>
      </div>
      <Filter/>
      <section className="section">
        <div className="container">
          <div className="section__heading">
            <h2 className="section__title section__title--typo">Product</h2>
          </div>
          <div className="section__body">
            <div className="product__list">
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>              
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>              
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>              
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>              
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>              
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>              
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>              
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    
                   alt="#"></img>
                  <span className="product__sale product__sale--text product__sale--bg">
                    -30%
                  </span>
                </div>
                <div className="product__info product__info--bg">
                  <h3 className="product__name">
                    <a className="product__link product__link--text" href="">
                      Syltherine
                    </a>
                  </h3>
                  <a
                    href=""
                    className="product__category product__category--text"
                  >
                    Stylish cafe chair
                  </a>
                  <div className="product__price">
                    <span className="product__price product__price--text">
                      500.000VND
                    </span>
                    <span className="product__price-old product__price-old--text">
                      888.000VND
                    </span>
                  </div>
                </div>
                <div className="product__action product__action--bg product__action--text">
                  <button className="product__quickview product__button">
                    Xem thêm
                  </button>
                  <button className="product__add-to-cart product__button">
                    Thêm vào giỏ hàng
                  </button>
                  <div className="product__more">
                    <span className="product__share"></span>
                    <span className="product__compare"></span>
                    <span className="product__like"></span>
                  </div>
                </div>
              </div>
            </div>
            <PageComponent/>
          </div>
        </div>
      </section>
      <Services/>
      <Footer/>
    </>
  );
};

export default Shop;