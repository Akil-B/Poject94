var firebaseConfig = {
    apiKey: "AIzaSyCBzv_tvVn1OVvpA30Wt0mqwPjB2H-szp8",
    authDomain: "let-s-chat-app-3681e.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-3681e-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-3681e",
    storageBucket: "let-s-chat-app-3681e.appspot.com",
    messagingSenderId: "45552302269",
    appId: "1:45552302269:web:aeb6561be55efa7e4cdfd4",
    measurementId: "G-THW7W7JZTT"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


document.getElementById("User_name").innerHTML="Welcome "+user_name+" !";