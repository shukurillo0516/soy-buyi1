import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAEmy4tAcU5bgSSBn8vvuB3GpNbFUzBPTw",
  authDomain: "space-man-accountancy.firebaseapp.com",
  projectId: "space-man-accountancy",
  storageBucket: "space-man-accountancy.appspot.com",
  messagingSenderId: "143263605481",
  appId: "1:143263605481:web:d787cba691bdcfa2e80678",
  measurementId: "G-RFXE49XESJ"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const st = firebase.storage();
const db = fb.firestore();
const auth = fb.auth()

db.settings({ timestampsInSnapshots: true })

const AUTHORIZATION = "Authorization"

export {db, st, auth, AUTHORIZATION}
