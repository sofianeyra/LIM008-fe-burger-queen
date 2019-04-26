import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBd95MQtxM0qjsqcAb1b-JEXmmPnJ6Plh4',
  authDomain: 'burgerqueen-d1101.firebaseapp.com',
  databaseURL: 'https://burgerqueen-d1101.firebaseio.com',
  projectId: 'burgerqueen-d1101',
  storageBucket: 'burgerqueen-d1101.appspot.com',
  messagingSenderId: '775031170392',
};
firebase.initializeApp(config);
export default firebase;