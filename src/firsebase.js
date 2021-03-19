import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

//firebase services
//auth services
//real-time services
//firebase services

const firebaseConfig = {
  apiKey: 'AIzaSyDIPa4x8rF_GAgqifA0DQOOIH5HsucQfYg',
  authDomain: 'spotify-clone-ae133.firebaseapp.com',
  projectId: 'spotify-clone-ae133',
  storageBucket: 'spotify-clone-ae133.appspot.com',
  messagingSenderId: '53710429719',
  appId: '1:53710429719:web:aaa55d557efe13be178652',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
