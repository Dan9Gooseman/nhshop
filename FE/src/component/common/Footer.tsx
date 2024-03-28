// import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__list">
            <div className="footer__left">
              <a href="#" className="home__link">
                <img src="assets/logo.svg"  className="home__logo" />
              </a>
              <p className="footer__address text--color-5">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div className="footer__middle">
              <ul className="nav__list nav__list--column">
                <p className="footer__title text--color-5">Links</p>
                <li className="nav__item"><a href="#" className="nav__link nav__link--weight p0">Home</a></li>
                <li className="nav__item"><a href="#" className="nav__link nav__link--weight p0">Shop</a></li>
                <li className="nav__item"><a href="#" className="nav__link nav__link--weight p0">About</a></li>
                <li className="nav__item"><a href="#" className="nav__link nav__link--weight p0">Contact</a></li>
              </ul>
              <ul className="nav__list nav__list--column">
                <p className="footer__title text--color-5">Help</p>
                <li className="nav__item"><a href="#" className="nav__link nav__link--weight p0">Payment Options</a></li>
                <li className="nav__item"><a href="#" className="nav__link nav__link--weight p0">Returns</a></li>
                <li className="nav__item"><a href="#" className="nav__link nav__link--weight p0">Privacy Policies</a></li>
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
  )
}

export default Footer