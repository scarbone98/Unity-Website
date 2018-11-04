import firebase from 'firebase';
const settings = {timestampsInSnapshots: true};
let config = {
    apiKey: "AIzaSyBlHhwLl9QplDO5mA6j1ngvoqNVoUE0ORQ",
    authDomain: "mint-25b49.firebaseapp.com",
    databaseURL: "https://mint-25b49.firebaseio.com",
    projectId: "mint-25b49",
    storageBucket: "mint-25b49.appspot.com",
    messagingSenderId: "960262784061"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;