import { ButtonTemplate } from '../Components'

export default function SearchBar({ handleSearch, handleSearchLocation, handleSearchFullTime,}) {
  const search = 'Search'

  return (
    <div className='searchBar'>
      <div className="topnav">
        <div className="search-container">
          <form action="positions.json?">
            <input type="text" placeholder="Filter by title, companies, expertise..." name="description" onChange={(event) => handleSearch(event)} />
          </form>
        </div>
      </div>
      <div className="midnav">
        <div className="search-container">
          <form action="filter">
            <input type="text" placeholder="Filter by location..." name="locationsearch" onChange={(event) => handleSearchLocation(event)} />
          </form>
        </div>
      </div>
      <div className="endnav">
        <div className="search-container">
          <input type="checkbox" onChange={(event) => handleSearchFullTime(event)}/>
        <label className="container">Full-Time Only
          <span className="checkmark"></span>
        </label>
        </div>
      </div>
      <ButtonTemplate name={search}/>
    </div>
  )
}
