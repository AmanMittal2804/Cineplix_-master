import React, { useEffect, useState }  from 'react'
import Movies from './Movies'

export default function Home({data,setData}) {
    
  return (
   <>
   <Movies data={data} setData={setData}/>
   </>
  )
}
