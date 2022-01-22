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



export default () => {
    const [isAuthentificated, setIsAuthentificated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [auth, setAuth] = useState<AuthState>({ sesion: null })

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
                   if ( res.error ){
                       console.log( 'error' )
                   }
                   setAuth( { sesion: {
                            ...res, 
                            token: jwt
                        } })
                        setIsAuthentificated(true)
                        setIsLoading(false)
                })
                .catch( console.log )
        //    logInWhitToken( jwt )
        } else {
            setIsLoading( false )
        }
    }, [])
    if (isLoading) {
        return <>Loading</>
    }
    return (
        <Auth.Provider value={{
            auth,
            setAuth,
            setIsAuthentificated,
            isAuthentificated, 
            setIsLoading
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
        </Auth.Provider>
    )
}