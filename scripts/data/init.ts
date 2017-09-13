import * as Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import 'firebase/storage';
// import 'firebase/messaging';

const config = {
	apiKey: "AIzaSyAkdxDzXDgArAKi-m198G5lY--8CkfjPbU",
    authDomain: "lalala-a2c99.firebaseapp.com",
    databaseURL: "https://lalala-a2c99.firebaseio.com",
    projectId: "lalala-a2c99",
    storageBucket: "lalala-a2c99.appspot.com",
    messagingSenderId: "181002740940"
};

Firebase.initializeApp( config );
