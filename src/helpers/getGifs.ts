import { Gif } from "../interfases/gifs.interfaces"

export const getGifs = async ( category: string ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&lImit=20&api_key=1ywURhrBl5cdf1Eqb0nCB2PLVy7Yme9o`
    let gif
    try {
        window.fetch( url )
        .then( res=> res.json())
        .then( ({data}) => {
            gif = {
                id: data.id,
                title: data.title,
                // url: data.images.downsized_medium.url
            }
        })
        
        
        // gif = {
        //         id: data.id, 
        //         title: data.title,
        //         url: data.images.downsized_medium.url
        //     }
    }catch(error){

    }
    console.log( gif )
    return gif;
}