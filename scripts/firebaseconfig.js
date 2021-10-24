(function (window) {
  'use strict';
  var App = window.App || {};

  var FirebaseConfig = {
    apiKey: "AIzaSyCcQbAbIx6pwcfAZjLf0H2BkcXDg-_jWWc",
    authDomain: "coffeerun-93913.firebaseapp.com",
    projectId: "coffeerun-93913",
    storageBucket: "coffeerun-93913.appspot.com",
    messagingSenderId: "458514149681",
    appId: "1:458514149681:web:21df7c25828a7768cf0010",
    measurementId: "G-71MZQWXXN8"
  };

  // Initialize Firebase
  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);
  window.App = App;

})(window);
  
  