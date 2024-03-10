// import React from 'react'

const News = () => {
  return (
    <section className="section">
      <div className="section-heading">
        <h2 className="section-heading__title">News</h2>
      </div>
      <div className="section-body">
        <div className="products">
          <div className="product-item">
            <div className="product__thumbnail">
              <img src="" alt=""></img>
            </div>
            <div className="product__content">
              <h3 className="product-name">
                <a className="product-link" href="">Product A</a>
              </h3>
              <a href="" className="product__cate">Cafe chair</a>
              <div className="product-price">
                <span className="product-price__new">500000</span>
                <span className="product-price__old">888000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News