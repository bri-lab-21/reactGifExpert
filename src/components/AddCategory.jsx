import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setinputValue] = useState('')

    const inputOnChangue = ({target}) => {
        setinputValue(target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault()

        if( inputValue.trim().length <= 1) {
            return
        }
        onNewCategory( inputValue.trim() )
        setinputValue('')
        // if (categories.find( c => c.trim() === inputValue.trim())) return console.log("esta categoria ya existe");
        // setCategories(c => [...c, inputValue])
        }
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={ event => inputOnChangue(event) }
            />
        </form>
  )
}
