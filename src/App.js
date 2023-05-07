import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Genres from './components/Genres/Genres';
import Movies from './components/Movies/Movies';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Movie from './components/Movie/Movie';
import Home from './components/Home/Home';
import Slide from './components/Slide/Slide'


function App() {
  const [data, setData] = useState([])
  return (
    <>
      <Router>
      <Navbar setData={setData}/>
      <Genres setData={setData} data= {data}/>
      <Slide/>
      
        <Routes> 
          <Route index element={<Home data={data} setData={setData}/>}></Route>

          <Route path="movie/:id" element={<Movie />}></Route>
          
          <Route path="aman/:type" element={<Movies data={data} setData={setData}/>}></Route>
          
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
