
import firebase from "firebase";
import Rebase from "re-base";
  
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBEx5i35SyJ2dmtCQYmfZh1TNYwG55zUO4",
    authDomain: "tagda-singh.firebaseapp.com",
    databaseURL: "https://tagda-singh-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tagda-singh",
    storageBucket: "tagda-singh.appspot.com",
    messagingSenderId: "258320175816",
    appId: "1:258320175816:web:761a448b9fdf477cfccbfd",
    measurementId: "G-HQFPM4QG99"
});
const base=Rebase.createClass(firebaseApp.database());
 export {firebaseApp} 
export default base;