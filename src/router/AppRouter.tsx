import { useState, useEffect, } from 'react'
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes
} from 'react-router-dom'
import { Auth } from '../context/authContext'
import { AuthState } from '../interfases/authContext.interfaces'
import { AuthScreen, HomeScreen } from '../pages'
import { Gif } from '../context/gifsContext'
import { FavoriteGifs, State } from '../interfases/gifs.interfaces'
// import { useAuth } from '../hooks/useAuth'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useFetchGif } from '../hooks/useFetchGif'
import { useFavoriteGifs } from '../hooks/useFavoriteGifs'



export default () => {
    const [isAuthentificated, setIsAuthentificated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [auth, setAuth] = useState<AuthState>({ sesion: null })
    const [categories, setCategories] = useState<string[]>([])
    const [ favoriteGifs, setFavoriteGifs ] = useState<FavoriteGifs>([{}])

    const {  loadFavoritesGifs }  = useFavoriteGifs()


    useEffect(() => {
        let token: any = window.localStorage.getItem('token')
        const jwt = JSON.parse(token)
        if (token) {

            fetch("http://localhost:8080/api/auth/validate", {
                method: "GET",
                headers: {
                    'x-token': jwt,
                }
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) {
                        console.log('error')
                    }else {
                        setAuth({
                            sesion: {
                                ...res,
                                token: jwt
                            }
                        })
                    loadFavoritesGifs(res.uid).then( (res:any):void => setFavoriteGifs( res ))
                }
                    setIsAuthentificated(true)
                    setIsLoading(false)
                })
                .catch(console.log)
            //    logInWhitToken( jwt )
        } else {
            setIsLoading(false)
        }
    }, [])
    if (isLoading) {
        return (
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        )
    }
    return (
        <Auth.Provider value={{
            auth,
            setAuth,
            setIsAuthentificated,
            isAuthentificated,
            setIsLoading
        }}>
            <Gif.Provider value={{
                categories,
                setCategories, 
                favoriteGifs, 
                setFavoriteGifs
            }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<HomeScreen />} />
                        <Route path="/auth/*" element={
                            !isAuthentificated ?
                                <AuthScreen />
                                :
                                <Navigate to="/" />
                        } />
                        <Route path="*" element={<p>Not found</p>} />
                    </Routes>
                </BrowserRouter>
            </Gif.Provider>
        </Auth.Provider>
    )
}