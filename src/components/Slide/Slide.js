import React, { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

var stylingObject = {
    posterImage:{
        height: "600px",
    } ,
    
     img : {
        margin: "auto",
        display: "block",
        width: "100%",
    } ,
    
    posterImage__overlay : {
        position: "absolute",
        padding: "5rem",
        bottom: "0px",
        height: "70%",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        backgroundImage: "linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1))",
        opacity: "1",
        transition: "opacity .3s",
    } ,
    
    // .posterImage__overlay:hover {
    //     opacity: 1;
    // }
    
    posterImage__title : {
        fontWeight: "900",
        fontSize: "4rem",
        marginBottom: "0.4rem",
        textAlign: "left",
    } ,
    
    posterImage__runtime : {
        fontSize: "2rem",
        marginBottom: "1rem",
    } ,
    
    posterImage__rating : {
        marginLeft: "3rem",
    } ,
    
    posterImage__description : {
        fontStyle: "italic",
        fontSize: "1rem",
        marginBottom: "0.25rem",
        display: "flex",
        texAlign: "left",
        width: "50%"
    }
}

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div style={stylingObject.poster}>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div style={stylingObject.posterImage}>
                                    <img style={stylingObject.img} src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div style={stylingObject.posterImage__overlay}>
                                    <div style={stylingObject.posterImage__title}>{movie ? movie.original_title: ""}</div>
                                    <div style={stylingObject.posterImage__runtime}>
                                        {movie ? movie.release_date : ""}
                                        <span style={stylingObject.posterImage__rating}>
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div style={stylingObject.posterImage__description}>{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                
            </div>
        </>
    )
}

export default Home