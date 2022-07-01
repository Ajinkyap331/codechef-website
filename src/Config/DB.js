import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAbXohf0YEa6bBi4Xi68F8eHYb75ONI8Eo",
    authDomain: "pccoe-codechef-chapter.firebaseapp.com",
    projectId: "pccoe-codechef-chapter",
    storageBucket: "pccoe-codechef-chapter.appspot.com",
    messagingSenderId: "648270158934",
    appId: "1:648270158934:web:524a1b6d38cbee1baaeff7",
    measurementId: "G-5QX59XY2X7"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app();
}

// ajinkya.patil20@pccoepune.org
// codechef#78

export const login = async (email, password, sl) => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            sl("loggedin")
        })
        .catch((error) => {
            sl("error")
        });
}

export const logout = async (sl) => {
    await firebase.auth().signOut().then(() => {
        sl("loggedout")
    })
}

const provider = new firebase.auth.GoogleAuthProvider();

export const loginG = async (setuser) => {
    await firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            setuser(result.user)
        })
}

export const db = firebase.firestore();
