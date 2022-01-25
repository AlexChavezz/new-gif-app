import { collection, getDocs } from "firebase/firestore"
import { useContext } from "react"
import { Gif } from "../context/gifsContext"
import { db } from "../firebase/config"
import { State } from "../interfases/gifs.interfaces"

export const useFavoriteGifs = () => {
    const { favoriteGifs , setFavoriteGifs } = useContext( Gif )

    const loadFavoritesGifs = async (uid:string) => {
        let  gifs: {}[] = []
        console.log(uid);
        const query = await getDocs(collection (db, `${uid}`) )
        query.forEach( doc => {
            gifs = [...gifs, {
                ...doc.data(), 
                id: doc.id
            }]
        })
        return gifs
    }

    return {
        favoriteGifs,
        loadFavoritesGifs, 
    }
}