import { useContext } from "react"
import { Auth } from "../context/authContext";


export const useAuth = () => {
    const { state, setState, setIsAuthentificated, isAuthentificated } = useContext(Auth)
    
    return {
        state,
        setState,
        setIsAuthentificated,
        isAuthentificated
    }
}