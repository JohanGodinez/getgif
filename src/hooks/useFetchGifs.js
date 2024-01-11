import { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs'

export const useFetechGifs = category => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    getGif(category).then(imgs => setState({ data: imgs, loading: false }))
  }, [])

  return state
}
