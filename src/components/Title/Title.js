import React from 'react' 
// import './Title.css'

var stylingObject ={
 h1:{
    fontsize: "2em",
      fontfamily: "serif",
      backgroundcolor: "black",
      color:"white",
      textalign: "center",
      margin: "25px 690px",
      animation: "animate 1.5s linear infinite"
 }
 
}
function Title() {
    return (
        <>
            <h1 style={stylingObject.h1}>CINEPLIX</h1>
        </>
    )
}

export default Title