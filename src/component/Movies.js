import React from 'react';
import Search from './Search';
import { useGlobalContext } from './context'
import {NavLink, Outlet} from 'react-router-dom'

const Movies = () => {

  const { movie, isLoading, isError, query } = useGlobalContext();

  const transcasString=(str, num)=>{
    if(str.length > num){
      return str.slice(0, num) + "...";
    }else{
      return str;
    }
  }

  return (
    <>
    <Outlet></Outlet>
      <section className='' >
      <Search></Search>
          <h2>{isLoading ? `Loading for ${query} ...` : ''}</h2>
        <div className='grid grid-4-col'>
          {
            movie.map((curMovie) => {
              const {imdbID, Title, Poster} = curMovie;
              const movieName = Title.substring(0,15)
              return <NavLink to={`/movies/${imdbID}`} key={imdbID}>
                  <div className='card'>
                    <div className='card-info'>
                      {/* <h2>{transcasString(Title, 20)}</h2> */}
                      <h2>{movieName.length >= 15 ? `${movieName} ...`: movieName}</h2>
                      
                      <img src={Poster}></img>
                    </div>
                  </div>
              </NavLink>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Movies