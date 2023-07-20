import React, { useContext } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import { useGlobalContext } from './context'

const Home = () => {
  return (
    <div>
      <Outlet></Outlet>
       <Link to='/movies'><button>Get All Movies</button></Link>
    </div>
  )
}

export default Home