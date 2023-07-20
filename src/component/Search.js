import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
    const { query, setQuery, isError } = useGlobalContext();
    return (
        <section className='search'>
            <h2>Search Your Movie</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder='Search here' onChange={(e) => setQuery(e.target.value)} value={query}></input>
                <button>Search</button>
            </form>
            <div>
                <p>{isError.show && isError.msg}</p>
            </div>
        </section>
    )
}

export default Search