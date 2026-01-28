// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getFirestore,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  doc,
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT488_TRveR9D6fzUGDgVpfS4Wy3QIZAk",
  authDomain: "sovera-6c8c7.firebaseapp.com",
  projectId: "sovera-6c8c7",
  storageBucket: "sovera-6c8c7.firebasestorage.app",
  messagingSenderId: "663773581685",
  appId: "1:663773581685:web:f57a8fff7aae764b43833c",
  measurementId: "G-19REQ7SS28",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

async function getAllData(collection) {
  const q = query(collection(db, collection));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data(), doc);
  });
}

function getUsersDetails() {
  if (user !== null) {
    const user = auth.currentUser;

    // The user object has basic properties such as display name, email, etc.

    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }
}

function getLogedinUsers() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // console.log(user);
      // ...
      if (window.location.pathname !== "/2/main/index.html") window.location = "../main/index.html";
    } else {
      // User is signed out
      // ...
      if (window.location.pathname !== "/2/auth/loginSignup.html") window.location = "../auth/loginSignup.html";
    }
  });
}

async function getSingleData(collection, userID) {
  const docRef = doc(db, collection, userID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function userSignUpFoo(email, password, userName) {
  // let userInfo;
   try {
     const userCredential  =  await createUserWithEmailAndPassword(auth, email, password)
      // Signed up
      const user = userCredential.user;
      // console.log("signUp sucessfuly", user);
      // console.log('running')
    try {
       await setDoc(doc(db, "Users", user.uid), {
        name: userName,
        email: email,
        password: password,
      })
          // console.log("Data is sucessfully stored");

    } catch (error) {
          // console.log("Somethig is fishy");
      
    }
   } catch (error) {
    const errorCode = error.code;
      const errorMessage = error.message;
      // console.log("error eccored", error.code);
      // console.log("error eccored", error.message);
    return { success: false};
   }

  // console.log(userInfo)
  // return userInfo
}

function signoutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

async function userLoginFoo(email, password) {
 try {
   const userCredential = await signInWithEmailAndPassword(auth, email, password)
    
      // Signed in
      const user = userCredential.user;
      // console.log("signUp sucessfuly");
    return { success: true, user: userCredential.user };
    
 } catch (error) {
        const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error eccored", error.code);
      console.log("error eccored", error.message);
    return { success: false, errorCode: error.code };
 }

 
}
export {
  userSignUpFoo,
  userLoginFoo,
  getAllData,
  getSingleData,
  getUsersDetails,
  getLogedinUsers,
  signoutUser,
};
