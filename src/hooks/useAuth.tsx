import { useContext, useState } from "react"
import { Auth } from "../context/authContext";


export const useAuth = () => {
    const { state, setState, setIsAuthentificated, isAuthentificated } = useContext(Auth)
    const [ isLoading, setIsLoading ] = useState(true)
    const logOut = () => {
        window.localStorage.removeItem('token')
        setState({ sesion: null })
        setIsAuthentificated(false)
    }

    const logInWhitToken = ( token: string  ) => {
        fetch("http://localhost:8080/api/auth/validate", {
            method: "GET",
            headers: {
                'x-token': token,
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.unAuthorized) {
                    setIsAuthentificated(false)
                    setIsLoading(false)
                } else {
                    setState({ ...res, token })
                    setIsAuthentificated(true)
                    setIsLoading(false)
                }
            })
    }
    const logInWithOutToken = ( email: string , password: string) => {
        fetch("http://localhost:8080/api/auth/login", {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                email, 
                password,
            })
        })
        .then( res=> res.json() )
        .then( res => {
            setIsAuthentificated(true)
            setState( res )
            localStorage.setItem( 'token', JSON.stringify( res.token ))
        })
    }

    return {
        state,
        isAuthentificated,
        isLoading,
        setState,
        setIsAuthentificated,
        logOut,
        logInWhitToken,
        logInWithOutToken
    }
}