import React from 'react'

const Search = () => {
  return (
    <div className='search'>
    <input type='text' placeholder='Search the entire store here...'/>
    <select>
        <option>Categories</option>
        <option>Laptop</option>
        <option>Graphic Cards</option>
        <option>Hard Drive</option>
    </select>
    <button><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  )
}

export default Search