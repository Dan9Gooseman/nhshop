// import React from 'react'

const Header = () => {
  return (
    <>
    <header>
        <div className="container">
          <a href="">Logo</a>
          <div className="main-menu">
            <ul className="main-menu__list">
              <li className="main-menu__item">
                <a href="" className="main-menu__link">Home</a>
              </li>
              <li className="main-menu__item">
                <a href="" className="main-menu__link">Shop</a>
              </li>
              <li className="main-menu__item">
                <a href="" className="main-menu__link">About</a>
              </li>
              <li className="main-menu__item">
                <a href="" className="main-menu__link">Contact</a>
              </li>
            </ul>
          </div>
          <div className="header-user-menu">
            <ul className="user-menu__list">
              <li className="user-menu__item">User</li>
              <li className="user-menu__item">Search</li>
              <li className="user-menu__item">Favourite</li>
              <li className="user-menu__item">Cart</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header