import React, { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import { PImage, PImageDesc, PImageOverlay, PImageRating, PImageRuntime, PImageTitle } from "./Slide.styled";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div >
                
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
                                <PImage>
                                <div>
                                    <img style ={{ margin: "auto"  , display: "block" ,  width: "100%"}}src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                </PImage>
                                <PImageOverlay><div>
                                    <PImageTitle><div>{movie ? movie.original_title: ""}</div></PImageTitle>
                                    <PImageRuntime><div>
                                        {movie ? movie.release_date : ""}
                                        <PImageRating><span>
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span></PImageRating>
                                    </div>
                                    </PImageRuntime>
                                    <PImageDesc><div>{movie ? movie.overview : ""}</div></PImageDesc>
                                </div>
                                </PImageOverlay>
                            </Link>
                        ))
                    }
                </Carousel>
                
            </div>
        </>
    )
}

export default Home