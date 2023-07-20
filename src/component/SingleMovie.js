import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from './context';
import './SingleStyle.css'


const SingleMovie = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [singleMovie, setSingleMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const Single_Url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

  const getMovies = async (url) => {
    try {

      const res = await fetch(url);
      const data = await res.json();
      setSingleMovie([data]);
      console.log([data]);
      setIsLoading(false);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getMovies(`${Single_Url}&i=${id}`);
    }, 200);
  }, [])

if(isLoading){
  return(
    <h2>Loading...</h2>
  )
}
  return (
    <>
    <Outlet></Outlet>
      <section className='movieDetails'>
        {
          
          singleMovie.map((movie) => {
            const { Poster, imdbID, Title, Type, Runtime, Writer, imdbRating } = movie;
            return <div key={imdbID} className='movieContent'>
              <div className='moviePoster'><img src={Poster}></img></div>
              <div className='movieDetail'>
                <h2>Name: {Title}</h2>
                <p>Writer: {Writer}</p>
                <h4>imDB rating: {imdbRating}</h4>
                <p>Run Time: {Runtime}</p>
                <p>Type: {Type}</p>
                <button onClick={()=>navigate(-1)}>Go Back</button>
              </div>
            </div>
          })
        }
        
      </section>
    </>
  )
}

export default SingleMovie