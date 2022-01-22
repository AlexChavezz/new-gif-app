import { Route, Routes } from 'react-router-dom'
import styles from '.././styles/homeStyles.module.css'
import { FavoriteComponent } from '../components/home/sections/favorites/FavoriteComponent'
import { Header } from '../components/home/Header'

export const HomeScreen = () => {
    return (
        <>
            <section className={styles.container} >
                <Header />
                <Routes>
                    <Route path="/" element={<h2>Home</h2>} />
                    <Route path="/favorites" element={<FavoriteComponent />} />
                    <Route path="/history" element={<h2>History</h2>} />
                </Routes>
            </section>
        </>
    )
}