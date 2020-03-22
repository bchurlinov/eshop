import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAFQo5RUsvdBC1HUeB5rsBNSMJnhUpkxuA",
    authDomain: "e-shop-5d6ea.firebaseapp.com",
    databaseURL: "https://e-shop-5d6ea.firebaseio.com",
    projectId: "e-shop-5d6ea",
    storageBucket: "e-shop-5d6ea.appspot.com",
    messagingSenderId: "318204468464",
    appId: "1:318204468464:web:33e02f3c1e0695258d3635",
    measurementId: "G-QJPFNMWPBE"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.log("Error creating user", err.message);
        }
    }

    return userRef;
}


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;