import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { Movie1, MovieDetail, MovieDetailRight, MovieDetailRightBottom, MovieDetailRightTop, MovieGenre, MovieGenres, MovieHeading, MovieHomeButton, MovieImdbButton, MovieIntro, MovieLinks, MovieName, MovieVoteCount, SynopsisText } from "./Movie.styled"

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=20a0f69b95b0b10f62ad40120429fea6&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    return (
        <>
        
        <Movie1>
            <MovieIntro>
                <img style={{width: "100%", height: "500px" ,objectFit:"cover",objectPosition: "0 35%"}} src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </MovieIntro>
            
            
            <MovieDetail>
                <div>
                    <div>
                        <img style={{width:"300px" , borderRadius:"10px",boxShadow:" rgba(0, 0, 0, 0.86) 0px 22px 40px 6px"}}src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <MovieDetailRight>
                <MovieDetailRightTop>
                        <MovieName>{currentMovieDetail ? currentMovieDetail.original_title : ""}</MovieName>
                        <div>{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div>
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <MovieVoteCount>{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</MovieVoteCount>
                        </div>  
                        <div>{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div>{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <MovieGenres>
                        
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    
                                    <><MovieGenre><span id={genre.id}>{genre.name}</span></MovieGenre></>
                                )) 
                                : 
                                ""
                            }
                        </MovieGenres>
                    
                    </MovieDetailRightTop>
                    <MovieDetailRightBottom>
                        <SynopsisText>Synopsis</SynopsisText>
                       
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </MovieDetailRightBottom>
                    
                </MovieDetailRight>
            
                </MovieDetail>

                <MovieLinks>
                    <MovieHeading>Useful Links</MovieHeading>
               
                {
                    // currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><MovieHomeButton>Homepage <i className="newTab fas fa-external-link-alt"></i></MovieHomeButton></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><MovieImdbButton>IMDBHomepage <i className="newTab fas fa-external-link-alt"></i></MovieImdbButton></p></a>
                }
            </MovieLinks>
            
        
            </Movie1>
        </>
    )
}

export default Movie