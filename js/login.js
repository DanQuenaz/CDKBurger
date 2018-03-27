

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

function saveLoged(userLoged){
  sessionStorage.setItem("lOged", userLoged);
}

function validateForm(){
  var email = document.getElementById("emailLogin").value;
  var password = document.getElementById("passwordLogin").value;
  var auth = firebase.auth();
  var promise = auth.signInWithEmailAndPassword(email, password).catch(function(error) {

  });

}

firebase.auth().onAuthStateChanged(firebaseUser => {
  var value = "";
  var userName;
  if(firebaseUser){
    var dataRef = firebase.database().ref().child("Cliente").child(firebaseUser.uid);
    dataRef.on('value', function(datasnapshot){
      userName = datasnapshot.child("Nome").val();
      value = 

      "<div class=\"row\" id=\"loginBox\">" +
          "<div class=\"col-md-6\">" +
              "<h3>Olá " + userName + "</h3><br>"+
          "</div>"+
          "<div class=\"col-md-4\">" +
            "<button type=\"button\" class=\"btn btn-success\">Minha Conta</button><br><br><br>"+
          "</div>"+
          "<div class=\"bottom\" style=\"height:50px\">"+
            "<button type=\"button\" class=\"btn btn-info\"  style=\"position:absolute; bottom:1px; left:1px\">Meus Pedidos</button>"+
            "<button type=\"button\" class=\"btn btn-warning\" id=\"btnLogout\" style=\"position:absolute; bottom:1px; right:1px\">Sair</button>"+
          "</div>"+
      "</div>";

      document.getElementById("loginBox").innerHTML = value;
    });
  }else{
    value = 

    "<div class=\"row\" id=\"loginBox\">" +
        "<div class=\"col-md-12\">" +
            "Login via" +
            "<div class=\"social-buttons\">" +
                "<a href=\"#\" class=\"btn btn-fb\"><i class=\"fa fa-facebook\"></i> Facebook</a>" +
                "<a href=\"#\" class=\"btn btn-tw\"><i class=\"fa fa-twitter\"></i> Twitter</a>" +
            "</div>" +
            "ou"+ 
              "<form class=\"form\" role=\"form\" method=\"post\" action=\"\" accept-charset=\"UTF-8\" id=\"login-nav\" onsubmit=\"return validateForm()\">" +
                    "<div class=\"form-group\">" +
                          "<label class=\"sr-only\" for=\"exampleInputEmail2\">Email</label>" +
                          "<input type=\"email\" class=\"form-control\" id=\"emailLogin\" placeholder=\"Email\" required>"+
                    "</div>"+
                    "<div class=\"form-group\">"+
                          "<label class=\"sr-only\" for=\"exampleInputPassword2\">Senha</label>" +
                          "<input type=\"password\" class=\"form-control\" id=\"passwordLogin\" placeholder=\"Senha\" required>" +
                          "<div class=\"help-block text-right\"><a href=\"\">Esqueci minha senha.</a></div>"+
                    "</div>"+
                    "<div class=\"form-group\">"+
                          "<button type=\"submit\" class=\"btn btn-primary btn-block\" id=\"btnEntrar\">Entrar</button>"+
                    "</div>"+
                    "<div class=\"checkbox\">"+
                          "<label>"+
                          "<input type=\"checkbox\">Mantenha-me logado"+
                          "</label>"+
                    "</div>"+
              "</form>"+
        "</div>"+
        "<div class=\"bottom text-center\">"+
            "Novo aqui? <a href=\"#\"><b>Crie sua conta</b></a>"+
        "</div>"+
    "</div>";

    document.getElementById("loginBox").innerHTML = value;
  }
});

$('#btnLogout').on('click', function(event){
  event.preventDefault();
  console.log("FOI");
});
