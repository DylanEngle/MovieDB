import React from 'react'

function Search({handleInput, search}) {
  return (
    <section className='searchbox-wrap'>
        <input type='text' className='searchbox' placeholder='Search for a movie...' onChange={handleInput}
        onKeyDown={search}></input>
    </section>
  )
}

export default Search
