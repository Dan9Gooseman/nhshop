// import React from 'react'
import "./Header.scss";
import { MobileMenu } from "../index";
import { Container } from "react-bootstrap";


const Header = () => {
  // let {username} = userInfo
  return (
    <>
      <header className="header">
        <Container>
          <div className="header__inner">
            <a href="/" className="home__link">
              <img className="home__logo" src="assets/logo.svg" alt="#"></img>
            </a>
            <div className="nav__container">
              <ul className="nav__list">
                <li className="nav__item">
                  <a
                    href="/"
                    className="nav__link nav__link--hover nav__link--typo"
                  >
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="/shop"
                    className="nav__link nav__link--hover nav__link--typo"
                  >
                    Shop
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#"
                    className="nav__link nav__link--hover nav__link--typo"
                  >
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#"
                    className="nav__link nav__link--hover nav__link--typo"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="header__user">
              <div className="header__user-btn">
                <a href="/login">
                  {/* Check if myname exist if logged in  */}
                <img src="assets/mdi_account-alert-outline.svg" alt="#" />
                  {/* Check if myname exist if logged in  */}
                </a>
              </div>
              <div className="header__user-btn">
                <a href="#">
                  <img src="assets/akar-icons_search.svg" alt="#"></img>
                </a>
              </div>
              <div className="header__user-btn">
                <a href="#">
                  <img src="assets/akar-icons_heart.svg" alt="#"></img>
                </a>
              </div>
              <div className="header__user-btn">
                <a href="#">
                  <img
                    src="assets/ant-design_shopping-cart-outlined.svg"
                    alt="#"
                  ></img>
                </a>
              </div>
            </div>
            <MobileMenu />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
