import styled from "styled-components";

export const Movie1 = styled.div`
width: 100%;
    position: relative;
    display: flex;
    flex-direction:column;
    align-items: center;
`

export const MovieIntro = styled.div`
width: 80%;
`
export const MovieDetail = styled.div`
align-items: center;
    width: 75%;
    display: flex;
    position: relative;
    bottom: 225px;
`

export const MovieDetailLeft = styled.div`
margin-right: 30px;
`

export const MovieDetailRight = styled.div`
 color: white;
    display: flex;
    flex-direction: column;
    height: 450px;
    justify-content:space-between ;
`
export const MovieDetailRightTop = styled.div`
text-shadow: 0px 0px 5px #000000;
    margin-bottom: .5rem;
`
export const MovieName = styled.div`
 font-weight: 600;
    font-size: 3rem;
`
export const MovieTagline = styled.div`

`
export const MovieRating = styled.div`

`
export const MovieVoteCount = styled.span`
margin-left: 1rem;
`

export const MovieGenres = styled.div`
margin: 1.25rem 0;
`
export const MovieGenre = styled.span`
padding: .5rem;
    border: 2px solid white;
    border-radius: 20px;
    margin-right: 1rem;
`
export const MovieDetailRightBottom = styled.div`
margin: 2rem 0;
    flex: 0.8;
`
export const SynopsisText = styled.div`
font-size: 1.5rem;
    margin-bottom: 1.25rem;
    font-weight: 600;
    display: flex;
    position: relative;
    align-items: center;
`
export const MovieLinks = styled.div`
position: relative;
    bottom: 120px;
    display: flex;
    justify-content: space-between;
    width: 75%;
`
export const MovieHeading = styled.div`
font-size: 2.2rem;
`
export const MovieHomeButton = styled.span`
display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 2rem;
    border-radius: 20px;
    cursor: pointer;
    width: 150px;
    color: black;
    font-weight: bold;
background-color:rgb(255, 0, 0);
`
export const MovieImdbButton = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 2rem;
    border-radius: 20px;
    cursor: pointer;
    width: 150px;
    color: black;
    font-weight: bold;
background-color:#f3ce13;
`