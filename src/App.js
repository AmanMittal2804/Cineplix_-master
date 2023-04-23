import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Genres from './components/Genres';
import Movies from './components/Movies';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import Home from './components/Home';
import Slide from './components/Slide'
import Login from './components/Login';
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
          {/* <Route path="anon/:log" element={<Login/>}></Route> */}
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="aman/:type" element={<Movies data={data} setData={setData}/>}></Route>
          
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
