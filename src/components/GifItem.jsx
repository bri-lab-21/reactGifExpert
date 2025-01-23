
export const GifItem = ({title, url}) => {
  return (
    <div className='card'>
      <img src={ url } alt={title} />
      <h1>{title}</h1>
    </div>
  )
}

