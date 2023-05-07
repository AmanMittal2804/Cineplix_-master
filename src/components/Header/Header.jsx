import React,{useState} from 'react'
import Log from '../Log/Log';
import Search from '../Search/Search'
import { Link } from "react-router-dom"
import { Headers, HeaderL, LoginF, SearchF } from './Header.styled';


function Header({setData}) {
  
    const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };

   var stylingObject={
    header: {
        margin: "0 2.5rem",
        padding: ".5rem 0",
        alignItems: "center",
        display: "flex",
        justifyContent:"space-between",
        backgroundColor: "#c73d59"
    } ,
    
    headerLeft:{
        display: "flex",
        alignItems: "center"
    
    } ,

    header__icon :{
        width: "80px",
        cursor: "pointer"
    } ,

    search:{
        margin: "0 125px",
        fontSize: "1.3rem",
        cursor: "pointer",
        color: "white", 
    } ,

    login:{
        margin: "0 125px",
        fontSize: "1.3rem",
        cursor: "pointer",
        color: "white", 
        marginLeft: "175px" 
    },

    tag:{
        margin: "0 30px",
        fontSize: "1.3rem",
        cursor: "pointer",
        color: isHover ? 'black' : 'white',
    }

    
}

    return (
        <>
            <div style={stylingObject.header}>
            <div style={stylingObject.headerLeft}>
                <Link to="/"><img style={stylingObject.header__icon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png " /></Link>
                <Link to="/aman/popular" style={{textDecoration: "none"}}><span style={stylingObject.tag} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>Popular</span></Link>
                <Link to="/aman/top_rated" style={{textDecoration: "none"}}><span style={stylingObject.tag} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>Top Rated</span></Link>
                <Link to="/aman/upcoming" style={{textDecoration: "none"}}><span style={stylingObject.tag} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>Upcoming</span></Link>
                <span style={stylingObject.search}><Search setData={setData}/></span>
                <span style={stylingObject.login}><Log/></span>
                
                
            </div>
        
        </div>
        
        </>
    )
}

export default Header