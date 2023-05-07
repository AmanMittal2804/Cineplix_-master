import styled from "styled-components";

export const PImage = styled.div`
   height: 600px;    
`

export const PImagedetail = styled.img`
    margin: auto;
    display: block;
    width: 100%;
`

export const PImageOverlay = styled.div`
position: absolute;
    padding: 5rem;
    bottom: 0px;
    height: 70%;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-end;
    align-items: flex-start;
    background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1));
    opacity: 1;
    transition: opacity .3s;

    &:hover {
    opacity: 1;
  }
`

export const PImageTitle = styled.div`
font-weight: 900;
    font-size: 4rem;
    margin-bottom: 0.4rem;
    text-align: left;
`

export const PImageRuntime = styled.div`
  font-size: 2rem;
    margin-bottom: 1rem;
`

export const PImageRating = styled.span`
  font-size: 2rem;
    margin-bottom: 1rem;
`

export const PImageDesc = styled.div`
  font-size: 2rem;
    margin-bottom: 1rem;
`