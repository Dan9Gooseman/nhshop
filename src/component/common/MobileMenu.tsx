import React, { useState } from 'react'


const MobileMenu:React.FC = () => {
  const menuItems = [
    { label: 'Home', url: '#', isImage: false },
    { label: 'Shop', url: '#', isImage: false },
    { label: 'About', url: '#', isImage: false },
    { label: 'Contact', url: '#', isImage: false },
    { imageSrc: 'assets/mdi_account-alert-outline.svg', url: '#', isImage: true, altText: 'User Account' },
    { imageSrc: 'assets/akar-icons_search.svg', url: '#', isImage: true, altText: 'Search' },
    { imageSrc: 'assets/akar-icons_heart.svg', url: '#', isImage: true, altText: 'Favorites' },
    { imageSrc: 'assets/ant-design_shopping-cart-outlined.svg', url: '#', isImage: true, altText: 'Shopping Cart' }
  ];
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
            {menuItems.map((item, index) => (
              <li key={index} className="nav__item">
                <a href={item.url} className={`nav__link ${item.isImage ? 'nav__link--image' : 'nav__link--weight p0'}`}>
                  {item.isImage ? <img src={item.imageSrc} alt={item.altText} /> : item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  

export default MobileMenu