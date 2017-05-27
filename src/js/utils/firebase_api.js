import firebase from 'firebase';

import defaultConfig from '../config/firebase_config';

const FirebaseApi = {
  initialize: () => (
    firebase.initializeApp(defaultConfig)
  ),
  
  sign_in: (email, password) => (
    firebase.auth().signInWithEmailAndPassword(email, password)
  ),
  
  sign_up: (email, password) => (
    firebase.auth().createUserWithEmailAndPassword(email, password)
  ),
  
  sign_out: () => (
    firebase.auth().signOut()
  )
}

export default FirebaseApi;