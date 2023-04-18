import React from 'react'
import './MovieCard.css'
import { Link } from "react-router-dom"
function MovieCard({ movie }) {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const API_KEY = 'api_key=20a0f69b95b0b10f62ad40120429fea6';
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
              {/* <div className="overview">
                {movie.overview}
              </div> */}
              
            </div>
              </Link>

              <div >
            <div style={{}}>
                 <a href ={`https://api.themoviedb.org/3/movie/${movie.id}/videos?${API_KEY}&language=en-US`} target="_blank">
                    <button className="video">Watch now</button>
                    
                 </a>
                 </div>
              </div>
              </div>
        </>
    )
}

export default MovieCard