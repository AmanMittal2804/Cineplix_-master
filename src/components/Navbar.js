import React from 'react'
import Title from './Title'
import Header from './Header'

function Navbar({setData}) {
    return (
        <>
            <Title />
            <Header setData={setData}/>
        </>
    )
}

export default Navbar