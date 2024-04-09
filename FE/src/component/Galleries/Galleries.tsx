// import React from 'react'
import { Container } from "component/common"
import "./Galleries.scss"
const Galleries = () => {
  return (
    <>
    <section className="section">
        <Container>
          <div className="section__heading">
            <h2 className="section__title section__title--typo">Shop</h2>
          </div>
          <div className="section__body">
            <div className="shop">
              <div className="shop__item">
                <a href="#" className="shop__link">
                  <img
                    src="https://picsum.photos/600/470"
                    
                    className="shop__image"
                  />
                </a>
              </div>
              <div className="shop__item">
                <a href="#" className="shop__link">
                  <img
                    src="https://picsum.photos/600/470"
                    
                    className="shop__image"
                  />
                </a>
              </div>
              <div className="shop__item">
                <a href="#" className="shop__link">
                  <img
                    src="https://picsum.photos/600/470"
                    
                    className="shop__image"
                  />
                </a>
              </div>
              <div className="shop__item">
                <a href="#" className="shop__link">
                  <img
                    src="https://picsum.photos/600/470"
                    
                    className="shop__image"
                  />
                </a>
              </div>
            </div>
          </div>
          </Container>
      </section>
    </>
  )
}

export default Galleries