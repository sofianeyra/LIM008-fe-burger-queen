import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDwB3qJRB-XpVaJIqAysxlPjL0bNpsKgd4',
  authDomain: 'burger-queen-45463.firebaseapp.com',
  projectId: 'burger-queen-45463',
};

firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
