import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from '.././styles/homeStyles.module.css'
import { Header } from '../components/home/Header'
import { Auth } from '../context/authContext'

export const HomeScreen = () => {
    return (
        <>
            <section className={styles.container} >
                <Header />
                <Routes>
                    <Route path="/" element={<h2>Home</h2>} />
                    <Route path="/favorites" element={<Favorite />} />
                    <Route path="/history" element={<h2>History</h2>} />
                </Routes>
            </section>
        </>
    )
}

const Favorite  = () => {
    
     const { state } = useContext( Auth );
    console.log(state)
    return (
        <>
        <h2>favorite</h2>
        </>
    )
}