import React from 'react'
import Title from '../Title/Title'
import Header from '../Header/Header'
function Navbar({setData}) {
    return (
        <>
            <Title name="CINEPLIX"/>
            <Header setData={setData}/>
        </>
    )
}

export default Navbar