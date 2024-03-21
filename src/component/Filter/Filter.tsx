// import React from 'react'
import "./Filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <div className="container__fluid">
        <div className="filter__list filter__list--bg">
          <div className="filter__setting">
            <div className="filter__options">
              <button className="filter__btn filter__btn--style">
                <img className="filter__logo" src="../../../src/assets/filtering.svg" alt="filter logo"></img>
                <p>Filter</p>
              </button>
              <button className="filter__btn filter__btn--style">
                <img className="filter__logo" src="../../../src/assets/grid-big-round.svg" alt="filter logo"></img>
              </button>
              <button className="filter__btn filter__btn--style">
                <img className="filter__logo" src="../../../src/assets/view-list.svg" alt="filter logo"></img>
              </button>
            </div>
            <div className="filter__result">
              <p>Showing 1-16 of 32 results</p>
            </div>
          </div>
          <div className="filter__sort">
            <label>Show
              <input type="number" placeholder="16"></input>
            </label>
            <label>Sort by
              <select>
                <option value="#">Default</option>
                <option value="1">Price low to high</option>
                <option value="2">Price high to low</option>
                <option value="3">New</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
