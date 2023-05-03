import React, { useState } from 'react'
import './Pagination.css'
function Pagination({setData ,setNextPage,setPrevPage , nextPage, prevPage }) {
    const [pageCnt, setPageCnt] = useState(1)
    const API_KEY = 'api_key=20a0f69b95b0b10f62ad40120429fea6';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
    async function nextPageCall(page) {
        const resp = await fetch(`${API_URL}&page=${page}`)
        const data = await resp.json();
        setData(data.results)
        setNextPage(nextPage + 1);
        setPageCnt(pageCnt+1)
    }
    async function prevPageCall(page) {
        const resp = await fetch(`${API_URL}&page=${page}`)
        const data = await resp.json();
        setData(data.results)
        if (page >= 1) {
            setPrevPage(prevPage - 1);
        }
        setPageCnt(pageCnt-1)
    }
    return (
        <>
            <div className="pagination">
                <div className={`page ${!(nextPage >= 2) ? "disabled" : "page"}`} id="prev" onClick={() => prevPageCall(prevPage)} >Previous Page</div>
                <div className="current" id="current">{pageCnt}</div>
                <div className="page" id="next" onClick={() => nextPageCall(nextPage)}>Next Page</div>
            </div>
        </>
    )
}

export default Pagination