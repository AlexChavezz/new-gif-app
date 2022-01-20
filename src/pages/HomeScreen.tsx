import { Link } from "react-router-dom"



export const HomeScreen = () => {
    return (
    <>
        <h1>Home Screen</h1>
        <Link to="/auth">go auth screen</Link>
    </>
    );
}