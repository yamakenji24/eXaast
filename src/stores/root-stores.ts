import { createStore, combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyDXPMZF_5HRmKgTo1TfzJAM9PERsORQNuc",
  authDomain: "exaast.firebaseapp.com",
  databaseURL: "https://exaast.firebaseio.com",
  projectId: "exaast",
  storageBucket: "exaast.appspot.com",
  messagingSenderId: "981992867341",
  appId: "1:981992867341:web:c50c2983ba029662547744"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
})

const initialState = {}
export const rootStore = createStore(rootReducer, initialState);
export type RootState = ReturnType<typeof rootReducer>

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}
export const rrfProps = {
  firebase, 
  config: rrfConfig,
  dispatch: rootStore.dispatch,
  createFirestoreInstance
}