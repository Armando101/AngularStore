// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: 'AIzaSyCAyVRnioqUpiXQ-NVZLD0pyjq0wG3EJlg',
    authDomain: 'store-d894e.firebaseapp.com',
    databaseURL: 'https://store-d894e.firebaseio.com',
    projectId: 'store-d894e',
    storageBucket: 'store-d894e.appspot.com',
    messagingSenderId: '277373435044',
    appId: '1:277373435044:web:8ab56487b0cf1693403a31',
    measurementId: 'G-78DC8ZJLM7'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();