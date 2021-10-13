import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"
import "firebase/compat/auth"


const firebaseConfig = {

    apiKey: "AIzaSyBJEMra5NYhRLplmxwtdmT6NuZYPFyUIsI",
  
    authDomain: "crud-react-1e45c.firebaseapp.com",
  
    projectId: "crud-react-1e45c",
  
    storageBucket: "crud-react-1e45c.appspot.com",
  
    messagingSenderId: "973753448018",
  
    appId: "1:973753448018:web:f376b177962ed0cc75518b"
  
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

 
  const db = firebase.firestore()
  const auth = firebase.auth();
  export {db,auth}