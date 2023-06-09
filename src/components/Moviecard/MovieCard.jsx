import React,{useEffect,useState} from 'react'
import './MovieCard.css'
import { Link , useParams} from "react-router-dom"
function MovieCard({ movie }) {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const API_KEY = 'api_key=20a0f69b95b0b10f62ad40120429fea6';
    const [look, setlook] = useState()
    const { id } = useParams()
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=20a0f69b95b0b10f62ad40120429fea6&language=en-US`)
        .then(res => res.json())
        .then(data => setlook(data))
    }, [])
    
    
    function getColor(vote) {
        if (vote >= 8) {
            return 'green'
        }
        else if (vote >= 5) {
            return 'orange'
        }
        else {
            return 'red'
        }
    }
    return (
        <>
            <div>
            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="movie" key={movie.id}>
              <img src={IMG_URL + movie.backdrop_path} alt="pic" />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <span className={getColor(movie.vote_average)}>{movie.vote_average}</span>
              </div>
              
              
            </div>
              </Link>
              <Link to={`/looks/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
              <div >
            <div style={{}}>
                 <a href ={`https://api.themoviedb.org/3/movie/${movie.id}/videos?${API_KEY}&language=en-US`} target="_blank">
                 
                    <button className="video">Watch now</button>
                    
                 </a>
                 </div>
              </div>
              </Link>
              </div>
        </>
    )
}

export default MovieCard