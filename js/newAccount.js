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



$('#register-submit').on('click', function(event){
    event.preventDefault();
    var _name = document.getElementById('cadNome').value;
    var _email = document.getElementById('cadEmail').value;
    var _address = document.getElementById('cadEndereco').value;
    var _password = document.getElementById('cadSenha').value;
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    firebase.auth().createUserWithEmailAndPassword(_email, _password)
    .then(function(user){
        firebase.database().ref('Cliente/' + user.uid).set({
            Nome: _name,
            Email: _email,
            Endereco : _address
        });
        
        USER.addUser(user.uid, _name, _email, _address);
        window.open("./index.html", "_self");
    //Here if you want you can sign in the user
    }).catch(function(error) {
        //Handle error
    });
});