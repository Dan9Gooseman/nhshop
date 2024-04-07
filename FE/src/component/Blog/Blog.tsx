// import React from 'react'
import './Blog.scss'
const Blog = () => {
  return (
    <>
        <section className="section">
        <div className="container">
          <div className="section__heading">
            <h2 className="section__title section__title--typo">Blog</h2>
          </div>
          <div className="section__body">
            <div className="blog__list">
              <div className="blog__item">
                <div className="blog__thumbnail">
                  <a href="#" className="blog__link">
                    <img src="https://picsum.photos/600/250"  className="blog__image" />
                  </a>
                </div>
                <div className="blog__info">
                  <h3 className="blog__title blog__title--typo">A BEDROOM MUST HAVE SOME THING LIKE THIS</h3>
                  <p className="blog__description blog__description--typo">Your level of comfort when geting into and
                   out of bed can be greatly influenced by the bed frame you choose. It may
                    significantly affect how  want your bedroom to feet and look</p>
                  <a href="#" className="blog__btn blog__btn--typo">see more</a>
                </div>
              </div>
              <div className="blog__item">
                <div className="blog__thumbnail">
                  <a href="#" className="blog__link">
                    <img src="https://picsum.photos/600/250"  className="blog__image" />
                  </a>
                </div>
                <div className="blog__info">
                  <h3 className="blog__title blog__title--typo">A BEDROOM MUST HAVE SOME THING LIKE THIS</h3>
                  <p className="blog__description blog__description--typo">Your level of comfort when geting into and
                   out of bed can be greatly influenced by the bed frame you choose. It may
                    significantly affect how  want your bedroom to feet and look</p>
                  <a href="#" className="blog__btn blog__btn--typo">see more</a>
                </div>
              </div>
              <div className="blog__item">
                <div className="blog__thumbnail">
                  <a href="#" className="blog__link">
                    <img src="https://picsum.photos/600/250"  className="blog__image" />
                  </a>
                </div>
                <div className="blog__info">
                  <h3 className="blog__title blog__title--typo">A BEDROOM MUST HAVE SOME THING LIKE THIS</h3>
                  <p className="blog__description blog__description--typo">Your level of comfort when geting into and
                   out of bed can be greatly influenced by the bed frame you choose. It may
                    significantly affect how  want your bedroom to feet and look</p>
                  <a href="#" className="blog__btn blog__btn--typo">see more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog