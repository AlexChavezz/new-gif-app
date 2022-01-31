import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { AuthState } from "../interfases/authContext.interfaces";
import { State } from "../interfases/gifs.interfaces";

export const sendGifToFirebase = async (auth:AuthState | null, element:State) => {
    try {
        await setDoc(doc(db, `${auth?.sesion?.uid}`, `${element.id}`), element);
    } catch (error) {
        console.log(error)
    }
}