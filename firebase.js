import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCo1u4E9_kR_iTNnU8FMqVCfXnInejBUyE",
  authDomain: "project-signal-tiwi.firebaseapp.com",
  projectId: "project-signal-tiwi",
  storageBucket: "project-signal-tiwi.appspot.com",
  messagingSenderId: "83088015155",
  appId: "1:83088015155:web:c867cb54d222578d990846"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth}
