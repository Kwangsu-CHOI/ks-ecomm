import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyB3fG351oy4zKPV2vNylbdJ_k2238IJ7-c",
  authDomain: "ks-ecomm.firebaseapp.com",
  projectId: "ks-ecomm",
  storageBucket: "ks-ecomm.appspot.com",
  messagingSenderId: "281213632659",
  appId: "1:281213632659:web:468b994e9793d96c15cd66"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;