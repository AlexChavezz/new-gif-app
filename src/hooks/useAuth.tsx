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
            })
    }

    // -> Pendings 

    // -> Function to change loading setIsLoading

    // -> Function to create a new user 'RegisterForm.tsx'

    return {
        auth,
        isAuthentificated,
        setAuth,
        logout,
        // logInWhitToken,
        logInWithOutToken,
    }
}