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
  ),
  
  create_user: (first_name, last_name) => {
    let user = {
      first_name: first_name,
      last_name: last_name
    };
    firebase.database().ref('users').push(user, (err) => 
      {if (err) console.log(err)}
    );
  }
}

export default FirebaseApi;