import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAYh7FyH7icDavx3GvZym6w4HIGWt8W-zA",
    authDomain: "blog-mern-682db.firebaseapp.com",
    projectId: "blog-mern-682db",
    storageBucket: "blog-mern-682db.appspot.com",
    messagingSenderId: "353988959961",
    appId: "1:353988959961:web:614be133afd7f3b56c68c8",
};

const app = initializeApp(firebaseConfig);

//** google auth */

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
    let user = null;

    await signInWithPopup(auth, provider)
        .then((result) => {
            user = result.user;
        })
        .catch((err) => {
            console.log(err);
        });

    return user;
};
