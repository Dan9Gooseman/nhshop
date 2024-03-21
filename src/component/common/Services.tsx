// import React from 'react'

const Services = () => {
  return (
    <>
        <section className="services">
            <div className="container__fluid">
                <div className="service__list service__list--bg">
                    <div className="service__item">
                        <img src="../src/assets/trophy.svg" className="service__image" />
                        <div className="service__info">
                            <h4 className="service__name service__name--typo">High Quality</h4>
                            <p className="service__description service__description--typo">crafted from top materials</p>
                        </div>
                    </div>
                    <div className="service__item">
                        <img src="../src/assets/guarantee.svg" className="service__image" />
                        <div className="service__info">
                            <h4 className="service__name service__name--typo">High Quality</h4>
                            <p className="service__description service__description--typo">crafted from top materials</p>
                        </div>
                    </div>
                    <div className="service__item">
                        <img src="../src/assets/shipping.svg" className="service__image" />
                        <div className="service__info">
                            <h4 className="service__name service__name--typo">High Quality</h4>
                            <p className="service__description service__description--typo">crafted from top materials</p>
                        </div>
                    </div>
                    <div className="service__item">
                        <img src="../src/assets/customer-support.svg" className="service__image" />
                        <div className="service__info">
                            <h4 className="service__name service__name--typo">High Quality</h4>
                            <p className="service__description service__description--typo">crafted from top materials</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Services