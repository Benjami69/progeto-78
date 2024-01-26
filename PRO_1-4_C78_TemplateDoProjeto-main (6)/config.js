import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {

    apiKey: "AIzaSyCbq6UBtj5AcytX-MtMhABjldAB3vcdfWM",
  
    authDomain: "porgeto-c78.firebaseapp.com",
  
    projectId: "porgeto-c78",
  
    storageBucket: "porgeto-c78.appspot.com",
  
    messagingSenderId: "432551713982",
  
    appId: "1:432551713982:web:4377b9fc231cb7c1e212ef"
  
  };
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
