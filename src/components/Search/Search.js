import React,{useState} from 'react'
// import './Search.css'
var stylingObject={
  search:{
    backgroundColor: "transparent",
    border: "2px solid var(--primary-color)",
    padding: "0.5rem 1rem",
    borderRadius: "50px",
    fontSize: "1rem",
    color: "white",
  }
}
export default function Search({setData}) {    
        const API_KEY = 'api_key=20a0f69b95b0b10f62ad40120429fea6';
    const BASE_URL = 'https://api.themoviedb.org/3';
   
    const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY;
    const [searchTerm, setSearchTerm] = useState('')
    
    
    const searchMovies = async (e) => {
        console.log(`${SEARCH_URL}+ &query=${searchTerm}`)
        e.preventDefault()
        const resp = await fetch(`${SEARCH_URL}&query=${searchTerm}`)
        const data = await resp.json()
        setData(data.results)
          }
  return (
    <div>
        <input type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} onKeyPress={searchMovies} id="search" style={stylingObject.search} />
                <button style={{ display: "none" }} type="submit" onClick={searchMovies} ></button>
    </div>
  )
}
