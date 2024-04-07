import React from "react"
import "./ProductCard.scss"
import { TProduct } from "../../../types/TProduct"
type props = {
  product:TProduct
}

const ProductCard:React.FC<props> = ({product}) => {

  return (
    <div className="product__item product__item--shadow">
        <div className="product__thumbnail">
                    <img className="product__image" src={product.image} alt="#"></img>
                    <span className="product__sale product__sale--text product__sale--bg">-{product.discount}%</span>
        </div>
        <div className="product__info product__info--bg">
                    <h3 className="product__name">
                        <a className="product__link product__link--text" href="">{product.name}</a>
                    </h3>
                    <a href="" className="product__category product__category--text">{product.category}</a>
                    <div className="product__price">
                        <span className="product__price product__price--text">{product.price_old - product.price_old * product.discount / 100 }.000VND</span>
                        <span className="product__price-old product__price-old--text">{product.price_old}.000VND</span>
                    </div>
        </div>
        <div className="product__action product__action--bg product__action--text">
                    <button className="product__quickview product__button">Xem thêm</button>
                    <button className="product__add-to-cart product__button">Thêm vào giỏ hàng</button>
                    <div className="product__more">
                        <span className="product__share"></span>
                        <span className="product__compare"></span>
                        <span className="product__like"></span>
                    </div>
        </div>
    </div>
  )
}

export default ProductCard