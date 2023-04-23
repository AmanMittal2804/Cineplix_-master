import React from 'react'
import Log from './Log';
import Search from './Search'
import Button from './Button'
import './Header.css'
import { Link } from "react-router-dom"
function Header({setData}) {
    return (
        <>
            <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png " /></Link>
                <Link to="/aman/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/aman/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/aman/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <span><Search setData={setData}/></span>
                <span style={{marginLeft: "175px" }}><Log/></span>
                {/* <span style={{marginLeft: "175px" }}><Button/></span> */}
                
            </div>
        
        </div>
        
        </>
    )
}

export default Header