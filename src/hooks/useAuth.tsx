import { useContext, useState } from "react"
import { Auth } from "../context/authContext";


export const useAuth = () => {
    const { auth, setAuth, setIsAuthentificated, isAuthentificated, setIsLoading } = useContext(Auth)
    const logout = () => {
        window.localStorage.removeItem('token')
        setAuth({ sesion: null })
        setIsAuthentificated(false)
    }
    const logInWithOutToken = (email: string, password: string) => {
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
            .then(res => res.json())
            .then(res => {
                setIsAuthentificated(true)
                setAuth({
                    sesion: {
                        email: res.user.email,
                        name: res.user.name,
                        uid: res.user.uid,
                        token: res.token
                    }
                })
                localStorage.setItem('token', JSON.stringify(res.token))
                setIsLoading( false )
            })
    }

    const createNewUser = async (name:string, email:string, password: string ) => {
        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            const data = await response.json()
            if (data.user) {
                window.localStorage.setItem('token', JSON.stringify(data.token))
                setAuth({
                    sesion: {
                        email: data.user.email,
                        name: data.user.name,
                        uid: data.user.uid,
                        token: data.token
                    }
                })
                setIsAuthentificated(true)
                setIsLoading(false)
            }
        }catch( error ){
            throw new Error("Error try again")
        }
    }
    // -> Pendings 

    // -> Function to change loading setIsLoading

    return {
        auth,
        isAuthentificated,
        setAuth,
        logout,
        // logInWhitToken,
        logInWithOutToken,
        createNewUser, 
        setIsLoading
    }
}