import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import './Movies.css'
import { useParams } from "react-router-dom"
function Movies({data,setData}) {
    const API_KEY = 'api_key=20a0f69b95b0b10f62ad40120429fea6';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
    // const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const {type} = useParams()
    const [nextPage, setNextPage] = useState(2)
    const [prevPage, setPrevPage] = useState(nextPage - 1)

    // useEffect(() => {
    //     const getMovies = async () => {
          
    //         const resp = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=20a0f69b95b0b10f62ad40120429fea6`)
    //         const data = await resp.json();
    //         setData(data.results)
    //     }
    //     getMovies()
    // }, [setData])

    useEffect(() => { 
        const getMovies = async () => {
           
            const resp = await fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=20a0f69b95b0b10f62ad40120429fea6`)
            const data = await resp.json();
            setData(data.results)
            console.log(data.results)
        }
        console.log(type)
        getMovies()
    }, [type])
     
    return (
        <>
            <main id="main">
                {data?.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie}/>
                })}
            </main>
            <Pagination nextPage={nextPage} prevPage={prevPage} setData={setData} setNextPage={setNextPage} setPrevPage={setPrevPage}/>
            <div className="video">
                <div className="play" id="vid"></div>
            </div>
        </>
    )
}

export default Movies