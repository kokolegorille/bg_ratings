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
  
  // USERS
  create_user: (first_name, last_name) => {
    const user = {
      first_name: first_name,
      last_name: last_name
    };
    
    return firebase.database().ref('/users/').push(user);
  },
  
  load_users: () => (
    firebase.database().ref('/users/')
      .once('value')
  ),
  
  delete_user: (id) => (
    firebase.database().ref('/users/')
      .child(id).remove()
  ),
  
  update_user: (id, first_name, last_name) => {
    const user = {
      first_name: first_name,
      last_name: last_name
    };
    return firebase.database().ref('/users/')
      .child(id).update(user);
  }
}

export default FirebaseApi;