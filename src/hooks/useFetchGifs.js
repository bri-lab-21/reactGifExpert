import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsloading] = useState(true)
    
      useEffect( () => {
    
        const getImages = async () =>{
          const newImages = await getGifs(category)
          setImages(newImages)
        }
    
        getImages();
        setIsloading(false)
      }, [])


  return {
    images,
    isLoading
  }
}


