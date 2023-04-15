import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyABUvJKpeCtA-uHLaiRPSU8eqmY8lTkcc0',
  authDomain: 'instagram-d0dd5.firebaseapp.com',
  projectId: 'instagram-d0dd5',
  storageBucket: 'instagram-d0dd5.appspot.com',
  messagingSenderId: '467535042187',
  appId: '1:467535042187:web:6d857097c32e4c5fd1e68e'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
