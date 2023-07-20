import './App.css';
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleMovie from './component/SingleMovie';
import { AppProvider } from './component/context';
import Movies from './component/Movies';
import "./component/MoviesStyle.css";
function App() {
  return (
    <>
    <section className='container'>
   
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path='/' element={<Home></Home>}>
            <Route path='/movies' element={<Movies></Movies>}></Route>
            <Route path='movies/:id' element={<SingleMovie></SingleMovie>}></Route>
            <Route path='*' element={<h2>Page not found</h2>}></Route>
            </Route>
          </Routes>
        </AppProvider>
      </BrowserRouter>
      </section>
    </>
  );
}

export default App;
