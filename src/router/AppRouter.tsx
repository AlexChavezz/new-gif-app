import { useState, useReducer, createContext, useEffect } from 'react'
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes
} from 'react-router-dom'
import { Auth } from '../context/authContext'
import { authState } from '../interfases/authContext.interfaces'
import { AuthScreen, HomeScreen } from '../pages'
import { authReducer } from '../reducers/authReducer'


const stateModel: authState = {
    user: {
        userName: '',
        email: '',
        uid: '',
    },
    token: '',
}

export default () => {
    const [isAuthentificated, setIsAuthentificated] = useState(false)
    const [state, dispatch] = useReducer(authReducer, stateModel)
    console.log(state)
    useEffect(() => {

        // dispatch({
        //     type: "login", payload: {
        //         user: {
        //             userName: "alexis",
        //             email: "alexis@email.com",
        //             uid: "61eb5080f3e46b3e43642452"
        //         },
        //         token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWViNTA4MGYzZTQ2YjNlNDM2NDI0NTIiLCJpYXQiOjE2NDI4MTE1MjAsImV4cCI6MTY0MjgxODcyMH0.YL7UD_p7Cz5epIoqLT3LfXCBRKYbBQMyIn5zpkci4Bw"
        //     }
        // })
    }, [])
    return (
        <Auth.Provider value={{
            state,
            dispatch
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