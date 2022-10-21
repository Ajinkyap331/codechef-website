import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbXohf0YEa6bBi4Xi68F8eHYb75ONI8Eo",
  authDomain: "pccoe-codechef-chapter.firebaseapp.com",
  projectId: "pccoe-codechef-chapter",
  storageBucket: "pccoe-codechef-chapter.appspot.com",
  messagingSenderId: "648270158934",
  appId: "1:648270158934:web:524a1b6d38cbee1baaeff7",
  measurementId: "G-5QX59XY2X7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ajinkya.patil20@pccoepune.org
// codechef#78

// export const login = async (email, password, sl) => {
//   await firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then(() => {
//       sl("loggedin");
//     })
//     .catch((error) => {
//       sl("error");
//     });
// };

export const login = (email, password, sl) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      sl("loggedin");
      // ...
    })
    .catch((error) => {
      sl("error");
    });
};

export const logoutG = async (sl) => {
  await signOut(auth)
    .then(() => {
      // Sign-out successful.
      sl("logout");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};

// export const logout = async (sl) => {
//   await firebase
//     .auth()
//     .signOut()
//     .then(() => {
//       sl("loggedout");
//     });
//   localStorage.removeItem("user");
// };

export const logout = async (sl) => {
  await signOut(auth)
    .then(() => {
      // Sign-out successful.
      sl("loggedout");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
  localStorage.removeItem("user");
};

const provider = new GoogleAuthProvider();

// export const loginG = async (setuser) => {
//   await firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       setuser(result.user);
//       document.cookie = `email=${result.user.email}`;
//       document.cookie = `photoURL=${result.user.photoURL}`;
//       document.cookie = `displayName=${result.user.displayName}`;
//     });
// };

export const loginG = (setuser) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      console.log(result.user);
      setuser(result.user);
      document.cookie = `email=${result.user.email}`;
      document.cookie = `photoURL=${result.user.photoURL}`;
      document.cookie = `displayName=${result.user.displayName}`;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export { app, db, auth };

//  firebase deploy --only hosting:codechefpccoe
