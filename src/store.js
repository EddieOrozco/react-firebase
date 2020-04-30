import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAIEqrs6E7I0j9_4com7tJTH9Nj2X6hfq0',
  authDomain: 'reactclientpanel-ff316.firebaseapp.com',
  databaseURL: 'https://reactclientpanel-ff316.firebaseio.com',
  projectId: 'reactclientpanel-ff316',
  storageBucket: 'reactclientpanel-ff316.appspot.com',
  messagingSenderId: '246975775965',
  appId: '1:246975775965:web:51da3ae58086fa36dfc734',
  measurementId: 'G-VXV1J4X3C5',
};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
// const firestore = firebase.firestore();

// Add reduxFirestore store enhancer to store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
});

// Create Initial State
const initialState = {};
// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
