// import React from 'react'

import MobileMenu from "./MobileMenu"

const Header = () => {
  return (
    <>
    <header className="header">
        <div className="container">
          <div className="header__inner">
            <a href="#" className="home__link">
              <img className="home__logo" src="./src/assets/logo.svg" alt="#"></img>
            </a>
            <div className="nav__container">
              <ul className="nav__list">
                <li className="nav__item"><a href="#" className="nav__link nav__link--hover nav__link--typo">Home</a></li>
                <li className="nav__item"><a href="#" className="nav__link nav__link--hover nav__link--typo">Shop</a></li>
                <li className="nav__item"><a href="#" className="nav__link nav__link--hover nav__link--typo">About</a></li>
                <li className="nav__item"><a href="#" className="nav__link nav__link--hover nav__link--typo">Contact</a></li>
              </ul>
            </div>
            <div className="header__user">
              <div className="header__user-btn"><a href="#"><img src="src/assets/mdi_account-alert-outline.svg" alt="#"></img></a></div>
              <div className="header__user-btn"><a href="#"><img src="src/assets/akar-icons_search.svg" alt="#"></img></a></div>
              <div className="header__user-btn"><a href="#"><img src="src/assets/akar-icons_heart.svg" alt="#"></img></a></div>
              <div className="header__user-btn"><a href="#"><img src="src/assets/ant-design_shopping-cart-outlined.svg" alt="#"></img></a></div>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header