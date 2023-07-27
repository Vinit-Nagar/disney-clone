import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCe0CEcS8Bpo0vhj6wwiPLTy0jNOzELBaA",
  authDomain: "disneyplus-clone-b190a.firebaseapp.com",
  projectId: "disneyplus-clone-b190a",
  storageBucket: "disneyplus-clone-b190a.appspot.com",
  messagingSenderId: "729514308732",
  appId: "1:729514308732:web:12f2b93e36fdf41a9a05f9",
  measurementId: "G-VVRK8ESKWY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };

export default db;
