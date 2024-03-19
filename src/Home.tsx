import "./CSS/Home.scss";
import MobileMenu from "./component/common/MobileMenu";
//datlt2306/nhshop-react
function Home() {

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <a href="" className="home__link">
              <img className="home__logo" src="./src/assets/logo.svg" alt=""></img>
            </a>
            <div className="nav__container">
              <ul className="nav__list">
                <li className="nav__item"><a href="" className="nav__link nav__link--hover nav__link--typo">Home</a></li>
                <li className="nav__item"><a href="" className="nav__link nav__link--hover nav__link--typo">Shop</a></li>
                <li className="nav__item"><a href="" className="nav__link nav__link--hover nav__link--typo">About</a></li>
                <li className="nav__item"><a href="" className="nav__link nav__link--hover nav__link--typo">Contact</a></li>
              </ul>
            </div>
            <div className="header__user">
              <div className="header__user-btn"><a href=""><img src="src/assets/mdi_account-alert-outline.svg"></img></a></div>
              <div className="header__user-btn"><a href=""><img src="src/assets/akar-icons_search.svg"></img></a></div>
              <div className="header__user-btn"><a href=""><img src="src/assets/akar-icons_heart.svg"></img></a></div>
              <div className="header__user-btn"><a href=""><img src="src/assets/ant-design_shopping-cart-outlined.svg"></img></a></div>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>
      <div className="banner">
        <img className="banner__image" src="https://picsum.photos/1440/500" alt=""></img>
        <div className="banner__cover">
          <h1 className="banner__title">trang chủ</h1>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="section__heading">
            <h2 className="section__title section__title--typo">New</h2>
          </div>
          <div className="section__body">
            <div className="product__list">
              <div className="product__item product__item--shadow">
                <div className="product__thumbnail">
                  <img
                    className="product__image"
                    src="https://picsum.photos/300/300"
                    alt=""
                  ></img>
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
                    alt=""
                  ></img>
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
                    alt=""
                  ></img>
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
                    alt=""
                  ></img>
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
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section__heading">
            <h2 className="section__title section__title--typo">Shop</h2>
          </div>
          <div className="section__body">
            <div className="shop">
              <div className="shop__item">
                <a href="" className="shop__link">
                  <img
                    src="https://picsum.photos/600/470"
                    alt=""
                    className="shop__image"
                  />
                </a>
              </div>
              <div className="shop__item">
                <a href="" className="shop__link">
                  <img
                    src="https://picsum.photos/600/470"
                    alt=""
                    className="shop__image"
                  />
                </a>
              </div>
              <div className="shop__item">
                <a href="" className="shop__link">
                  <img
                    src="https://picsum.photos/600/470"
                    alt=""
                    className="shop__image"
                  />
                </a>
              </div>
              <div className="shop__item">
                <a href="" className="shop__link">
                  <img
                    src="https://picsum.photos/600/470"
                    alt=""
                    className="shop__image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section__heading">
            <h2 className="section__title section__title--typo">Blog</h2>
          </div>
          <div className="section__body">
            <div className="blog__list">
              <div className="blog__item">
                <div className="blog__thumbnail">
                  <a href="" className="blog__link">
                    <img src="https://picsum.photos/600/250" alt="" className="blog__image" />
                  </a>
                </div>
                <div className="blog__info">
                  <h3 className="blog__title blog__title--typo">A BEDROOM MUST HAVE SOME THING LIKE THIS</h3>
                  <p className="blog__description blog__description--typo">Your level of comfort when geting into and
                   out of bed can be greatly influenced by the bed frame you choose. It may
                    significantly affect how  want your bedroom to feet and look</p>
                  <a href="" className="blog__btn blog__btn--typo">see more</a>
                </div>
              </div>
              <div className="blog__item">
                <div className="blog__thumbnail">
                  <a href="" className="blog__link">
                    <img src="https://picsum.photos/600/250" alt="" className="blog__image" />
                  </a>
                </div>
                <div className="blog__info">
                  <h3 className="blog__title blog__title--typo">A BEDROOM MUST HAVE SOME THING LIKE THIS</h3>
                  <p className="blog__description blog__description--typo">Your level of comfort when geting into and
                   out of bed can be greatly influenced by the bed frame you choose. It may
                    significantly affect how  want your bedroom to feet and look</p>
                  <a href="" className="blog__btn blog__btn--typo">see more</a>
                </div>
              </div>
              <div className="blog__item">
                <div className="blog__thumbnail">
                  <a href="" className="blog__link">
                    <img src="https://picsum.photos/600/250" alt="" className="blog__image" />
                  </a>
                </div>
                <div className="blog__info">
                  <h3 className="blog__title blog__title--typo">A BEDROOM MUST HAVE SOME THING LIKE THIS</h3>
                  <p className="blog__description blog__description--typo">Your level of comfort when geting into and
                   out of bed can be greatly influenced by the bed frame you choose. It may
                    significantly affect how  want your bedroom to feet and look</p>
                  <a href="" className="blog__btn blog__btn--typo">see more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
            <div className="container__fluid">
                <div className="service__list service__list--bg">
                    <div className="service__item">
                        <img src="../src/assets/trophy.svg" className="service__image" />
                        <div className="service__info">
                            <h4 className="service__name service__name--typo">High Quality</h4>
                            <p className="service__description service__description--typo">crafted from top materials</p>
                        </div>
                    </div>
                    <div className="service__item">
                        <img src="../src/assets/guarantee.svg" className="service__image" />
                        <div className="service__info">
                            <h4 className="service__name service__name--typo">High Quality</h4>
                            <p className="service__description service__description--typo">crafted from top materials</p>
                        </div>
                    </div>
                    <div className="service__item">
                        <img src="../src/assets/shipping.svg" className="service__image" />
                        <div className="service__info">
                            <h4 className="service__name service__name--typo">High Quality</h4>
                            <p className="service__description service__description--typo">crafted from top materials</p>
                        </div>
                    </div>
                    <div className="service__item">
                        <img src="../src/assets/customer-support.svg" className="service__image" />
                        <div className="service__info">
                            <h4 className="service__name service__name--typo">High Quality</h4>
                            <p className="service__description service__description--typo">crafted from top materials</p>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer__list">
            <div className="footer__left">
              <a href="" className="home__link">
                <img src="../src/assets/logo.svg" alt="" className="home__logo" />
              </a>
              <p className="footer__address text--color-5">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div className="footer__middle">
              <ul className="nav__list nav__list--column">
                <p className="footer__title text--color-5">Links</p>
                <li className="nav__item"><a href="" className="nav__link nav__link--weight p0">Home</a></li>
                <li className="nav__item"><a href="" className="nav__link nav__link--weight p0">Shop</a></li>
                <li className="nav__item"><a href="" className="nav__link nav__link--weight p0">About</a></li>
                <li className="nav__item"><a href="" className="nav__link nav__link--weight p0">Contact</a></li>
              </ul>
              <ul className="nav__list nav__list--column">
                <p className="footer__title text--color-5">Help</p>
                <li className="nav__item"><a href="" className="nav__link nav__link--weight p0">Payment Options</a></li>
                <li className="nav__item"><a href="" className="nav__link nav__link--weight p0">Returns</a></li>
                <li className="nav__item"><a href="" className="nav__link nav__link--weight p0">Privacy Policies</a></li>
              </ul>
            </div>
            <div className="footer__right">
              <p className="footer__title text--color-5">Newsletter</p>
              <form className="newsletter">
                <input type="email" className="newsletter__input newsletter--border" placeholder="Enter Your Email Address"></input>
                <button className="newsletter__button newsletter--border">SUBSCRIBE</button>
              </form>
            </div>
          </div>
          <div className="footer__bottom">
            <p>2023 furino. All rights reverved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
