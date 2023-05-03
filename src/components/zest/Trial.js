import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom"
export default function Trial() {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const API_KEY = 'api_key=20a0f69b95b0b10f62ad40120429fea6';
    const [look, setlook] = useState()
    const { it } = useParams()
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${it}?api_key=20a0f69b95b0b10f62ad40120429fea6&language=en-US`)
        .then(res => res.json())
        .then(data => setlook(data))
    }, [])
  return (
    <div>
        <a href={"https://www.imdb.com/title/" + look.imdb_id} target="_blank"></a>
    </div>
  )
}
