import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDMCVT2pMnUiunrFPvwhMahFUWAbQCSIFQ",
  authDomain: "glossreads.firebaseapp.com",
  databaseURL: "https://glossreads.firebaseio.com",
  projectId: "glossreads",
  storageBucket: "glossreads.appspot.com",
  messagingSenderId: "1081692950270",
  appId: "1:1081692950270:web:c87bf130e6db0f4ba61faf",
  measurementId: "G-1MPMEJVT1S"
};

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;