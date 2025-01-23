import React, { useEffect, useState } from 'react'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({ category }) => {
  
  const { images, isLoading} = useFetchGifs(category)
  console.log({isLoading})
  return (
    <>
        <h3>{category}</h3>
        {isLoading && <h1>cargando..</h1>}
        <div className='card-grid'>
          
          {images.map( (img) => ( 
            <GifItem key={img.id} {...img} /> // el "{...img}" es para pasar todas las propiedades en vez de hacerlas por uno hacia el componente
          ))}
        
        </div>
    </>
  )
}
