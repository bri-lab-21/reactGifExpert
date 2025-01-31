import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["One Punch"])

  const onAddCategory = ( value ) => {
    if (categories.includes(value)) 
      return console.log("esta categoria ya existe");
    setCategories( [...categories, value] )
  }

  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={ value => onAddCategory(value) }/>

      
      {categories.map(category=> (
        <GifGrid 
          key={category} 
          category={category}
        />
      ))}
      
      
    </>
  )
}


