import { collection, getDocs } from "firebase/firestore"
import { useContext } from "react"
import { Auth } from "../context/authContext"
import { FavoriteGifs } from "../context/favoriteGifs"
import { db } from "../firebase/config"
import { State } from "../interfases/gifs.interfaces"

export const useFavoriteGifs = () => {
    const { favoriteGifs , setFavoriteGifs } = useContext( FavoriteGifs )

    const loadFavoritesGifs = async (uid:string) => {
        let  gifs: {}[] = []
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
        setFavoriteGifs
    }
}