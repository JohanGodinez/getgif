import { useFetechGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetechGifs(category)

  return (
    <>
      <h3 className='font-bold pb-4'>{category}</h3>
      {loading && <p>Cragando...</p>}
      <ol className='flex'>
        {images.map(({ id, title, url }) => (
          <GifGridItem key={id} title={title} url={url} />
        ))}
      </ol>
    </>
  )
}
