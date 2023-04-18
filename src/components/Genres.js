import React, { useState } from 'react'
import './Genres.css'
function Genres({ setData }) {
    const [selectedGenre, setSelectedGenre] = useState([]);

    const API_KEY = 'api_key=20a0f69b95b0b10f62ad40120429fea6';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
    
    const genres = [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ];
    const selectGenre = async (id) => {
        if (selectedGenre.includes(id)) {
            const index = selectedGenre.indexOf(id);
            if (index > -1) { // only splice array when item is found
                selectedGenre.splice(index, 1); // 2nd parameter means remove one item only
            }
        } else {
            selectedGenre.push(id)
            setSelectedGenre(selectedGenre);
        }
        const resp = await fetch(`${API_URL}&with_genres=${encodeURI(selectedGenre.join(','))}`)
        const data = await resp.json()
        setData(data.results)
    }
    const handleClearGenre = () => {
        setSelectedGenre([])
    }
    return (
        <>

            <div id="tags">
                {genres?.map((gen) => {
                    return <div key={gen.id} className={`tag ${selectedGenre.includes(gen.id) ? "highlight" : ""}`} onClick={() => selectGenre(gen.id)} >{gen.name}</div>
                })}
                {selectedGenre.length > 0 ? <><div className="tag" style={{ background: "red" }} onClick={handleClearGenre}>Clear X</div></> : null}
            </div>

        </>
    )
}

export default Genres