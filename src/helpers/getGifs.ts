
export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&lImit=20&api_key=1ywURhrBl5cdf1Eqb0nCB2PLVy7Yme9o`

    const response = await window.fetch(url)
    const { data } = await response.json()
    return data.map( (gif:any) => ({
        id: gif.id, 
        title: gif.title, 
        url: gif.images.downsized_medium.url,
        height: gif.images.downsized_medium.height,
        width: gif.images.downsized_medium.width
    }))
}