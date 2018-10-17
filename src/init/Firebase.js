import firebase from 'firebase';
const settings = {timestampsInSnapshots: true};
let config = {
    apiKey: "AIzaSyBQ8kPM354F75ENZLDcjmiVDw7dskkRNQI",
    authDomain: "unity-database-dd9f8.firebaseapp.com",
    databaseURL: "https://unity-database-dd9f8.firebaseio.com",
    projectId: "unity-database-dd9f8",
    storageBucket: "unity-database-dd9f8.appspot.com",
    messagingSenderId: "322222006808"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;