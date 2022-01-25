import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCyFTsrW2dOv7Ax7IYwTguiR8y1F0tuQpE",
    authDomain: "gif-app-89297.firebaseapp.com",
    projectId: "gif-app-89297",
    storageBucket: "gif-app-89297.appspot.com",
    messagingSenderId: "677803113629",
    appId: "1:677803113629:web:ecc183262f383a76dfa874"
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);