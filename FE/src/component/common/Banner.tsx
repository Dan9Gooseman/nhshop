// import React from 'react'
type props = {
  title:String
}

const Banner = ({title}:props) => {

  return (
    <>
    <div className="banner">
        <img className="banner__image" src="https://picsum.photos/1440/500" alt="#"></img>
        <div className="banner__cover">
          <h1 className="banner__title">{title}</h1>
        </div>
      </div>
    </>
  )
}

export default Banner