import * as USER from './dataUser';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB-SsGK82vDGFUsD1EW6V__diVOF6Zyslg",
    authDomain: "cdk-burger.firebaseapp.com",
    databaseURL: "https://cdk-burger.firebaseio.com",
    projectId: "cdk-burger",
    storageBucket: "cdk-burger.appspot.com",
    messagingSenderId: "213254671420"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(firebaseUser => {
    var userName;
    var userEmail;
    var userAddress;
    if(firebaseUser){
        var dataRef = firebase.database().ref().child("Cliente").child(firebaseUser.uid);
        dataRef.on('value', function(datasnapshot){
        userName = datasnapshot.child("Nome").val();
        userEmail = datasnapshot.child("Email").val();
        userAddress = datasnapshot.child("Endereco").val();
        USER.addUser(firebaseUser.uid, userName, userEmail, userAddress);
        window.open("./index.html", "_self");
        });
    }else{
        sessionStorage.removeItem("lOged");
    }
});



$('#btnEnter').on('click', function(event){
    event.preventDefault();
    var email = document.getElementById("inptUser").value;
    var password = document.getElementById("inptPassword").value;
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function() {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
    });
});

