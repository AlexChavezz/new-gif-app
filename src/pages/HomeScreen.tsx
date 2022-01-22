import { Route, Routes } from 'react-router-dom'
import styles from '.././styles/homeStyles.module.css'
import { FavoriteComponent } from '../components/home/sections/favorites/FavoriteComponent'
import { Header } from '../components/home/Header'
import { HomeComponent } from '../components/home/sections/home/HomeComponent'

export const HomeScreen = () => {
    return (
        <>
            <section className={styles.container} >
                <Header />
                <Routes>
                    <Route path="/" element={< HomeComponent />} />
                    <Route path="/favorites" element={<FavoriteComponent />} />
                    <Route path="/history" element={<h2>History</h2>} />
                </Routes>
            </section>
        </>
    )
}