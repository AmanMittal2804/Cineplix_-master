import React from 'react'
import Movies from '../Movies/Movies'

export default function Home({data,setData}) {
    
  return (
   <>
   <Movies data={data} setData={setData}/>
   </>
  )
}
