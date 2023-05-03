import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

var stylingObject={
    movie1:{
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection:"column",
        alignItems: "center"
    } ,
    
    movie__intro : {
        width: "80%",
    } , 
    
    movie__backdrop : {
        width: "100%",
        height: "500px",
        objectFit:"cover",
        objectPosition: "0 35%",
    } ,
    
    movie__detail : {
        alignItems: "center",
        width: "75%",
        display: "flex",
        position: "relative",
        bottom: "225px",
    } ,
    
    movie__detailLeft : {
        marginRight: "30px",
    } , 
    
    movie__poster : {
        width:"300px",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.86) 0px 22px 40px 6px"
    } ,
    
    movie__detailRight : {
        color: "white",
        display: "flex",
        flexDirection: "column",
        height: "450px",
        justifyContent:"space-between" ,
    } ,
    
    // .movie__detailRightTop > div{
    //     text-shadow: 0px 0px 5px #000000;
    //     margin-bottom: .5rem;
    // }
    
    movie__name : {
        fontWeight: "600",
        fontSize: "3rem",
    } ,
    
    movie__voteCount : {
        marginLeft: "1rem",
    } ,
    
    movie__genres : {
        margin: "1.25rem 0",
    } ,
    
    movie__genre : {
        padding: ".5rem",
        border: "2px solid white",
        borderRadius: "20px",
        marginRight: "1rem",
    } ,
    
    
    movie__detailRightBottom : {
        margin: "2rem 0",
        flex: "0.8",
    } ,
    
    synopsisText : {
        fontSize: "1.5rem",
        marginBottom: "1.25rem",
        fontWeight: "600",
        display: "flex",
        position: "relative",
        alignItems: "center",
    } ,
    // .synopsisText > div:last-of-type {
    //     margin-left: auto;
    // }
    
    movie__links : {
        position: "relative",
        bottom: "120px",
        display: "flex",
        justifyContent: "space-between",
        width: "75%",
    } ,
    
    movie__heading : {
        fontSize: "2.2rem",
    } ,
    
    movie__HButton :  {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.8rem 2rem",
        borderRadius: "20px",
        cursor: "pointer",
        width: "150px",
        color: "black",
        fontWeight: "bold",
        backgroundColor:"rgb(255, 0, 0)",
    } ,
    
    movie__IButton :  {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.8rem 2rem",
        borderRadius: "20px",
        cursor: "pointer",
        width: "150px",
        color: "black",
        fontWeight: "bold",
        backgroundColor:"#f3ce13",
    } ,
   
    
    newTab : {
        marginLeft: "1.4rem",
    }
}

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
        <div style={stylingObject.movie1}>
            <div style={stylingObject.movie__intro}>
                <img style={stylingObject.movie__backdrop} src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div style={stylingObject.movie__detail}>
                <div style={stylingObject.movie__detailLeft}>
                    <div style={stylingObject.movie__posterBox}>
                        <img style={stylingObject.movie__poster} src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div style={stylingObject.movie__detailRight}>
                    <div style={stylingObject.movie__detailRightTop}>
                        <div style={stylingObject.movie__name}>{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div style={stylingObject.movie__tagline}>{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div style={stylingObject.movie__rating}>
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span style={stylingObject.movie__voteCount}>{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div style={stylingObject.movie__runtime}>{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div style={stylingObject.movie__releaseDate}>{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div style={stylingObject.movie__genres}>
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span style={stylingObject.movie__genre} id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div style={stylingObject.movie__detailRightBottom}>
                        <div style={stylingObject.synopsisText}>Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div style={stylingObject.movie__links}>
                <div style={stylingObject.movie__heading}>Useful Links</div>
                {
                    // currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span style={stylingObject.movie__HButton}>Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span style={stylingObject.movie__IButton}>IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            
        </div>
    )
}

export default Movie