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

USER.loadUser();
    
document.getElementById('btnLogin').innerHTML = USER.getNome();
document.getElementById('userName').innerHTML = USER.getNome();
document.getElementById('userEmail').innerHTML = USER.getEmail();
document.getElementById('userAddress').innerHTML = USER.getEndereco();


firebase.auth().onAuthStateChanged(firebaseUser => {
    var userName;
    var userEmail;
    var userAddress;
    if(firebaseUser){
        
    }else{
        sessionStorage.removeItem("lOged");
        window.open("./index.html", "_self");
    }
});

$('#btnLogout').on('click', function(event){
    firebase.auth().signOut();
});


