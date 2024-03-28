import React, { useState } from 'react';


const MobileMenu:React.FC = () => {
  
    const [isToggle, setToggle] = useState<boolean>(false)
    const toggleMenu = () => {
      setToggle(!isToggle)
    }
    return (
      <div className="menu__toggle">
        <button className="menu__button" onClick={toggleMenu}>
          <img className="menu__icon" src="assets/menu.svg" alt="Menu" />
        </button>
        <div className={`menu__window ${isToggle ? 'open' : ''}`}>
          <ul className="nav__list nav__list--column">
            <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Shop</a></li>
            <li className="nav__item"><a href="#" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
            <li className="nav__item"><a href="#" className="nav__link"><img src="assets/mdi_account-alert-outline.svg" alt="User Account"></img></a></li>
            <li className="nav__item"><a href="#" className="nav__link"><img src="assets/akar-icons_search.svg" alt="Search"></img></a></li>
            <li className="nav__item"><a href="#" className="nav__link"><img src="assets/akar-icons_heart.svg" alt="Favorites"></img></a></li>
            <li className="nav__item"><a href="#" className="nav__link"><img src="assets/ant-design_shopping-cart-outlined.svg" alt="Shopping Cart"></img></a></li>
          </ul>
        </div>
      </div>
    );
  };
  

export default MobileMenu