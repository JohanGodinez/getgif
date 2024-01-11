export const getGif = async category => {
  const { data } = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=OOyShwaBEMK1L4GxE752gOHnrojXK0Iz&limit=5`
  ).then(response => response.json())
  const gifs = data.map(img => {
    return { id: img.id, title: img.title, url: img.images.downsized_medium.url }
  })
  return gifs
}
