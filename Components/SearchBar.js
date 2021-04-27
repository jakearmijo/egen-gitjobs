import React from 'react'

export default function SearchBar() {
  return (
    <div>
      <div className="topnav">
        <div className="search-container">
          <form action="filter">
            <input type="text" placeholder="Filter by title, companies, expertise..." name="search"/>
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
      </div>
      <div className="midnav">
        <div className="search-container">
          <form action="filter">
            <input type="text" placeholder="Filter by location..." name="search"/>
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
      </div>
      <div className="endnav">
        <div className="search-container">
          <input type="checkbox" />
        <label className="container">Full-Time Only
          <span className="checkmark"></span>
        </label>
        </div>
      </div>
    </div>
  )
}
