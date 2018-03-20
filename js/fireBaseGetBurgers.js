
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

var dataRef = firebase.database().ref().child("Produto");

dataRef.on('value', function(snapshot) {
  var outPut = "";
  snapshot.forEach(function(childSnapshot) {
    var id = childSnapshot.key
    var nome = childSnapshot.child("Nome").val();
    var descricao = childSnapshot.child("Descricao").val();
    var preco = childSnapshot.child("Preco").val();
    
    outPut += 
      "<div class=\"col-lg-4 col-md-6 mb-4\">" +
        "<div class=\"card h-100\">"+
            "<a href=\"#\"><img class=\"card-img-top\" src=\"http://placehold.it/700x400\" style=\"height: 50%; width:50% \" alt=\"\"></a>"+
            "<div class=\"card-body\">"+
            "<h4 class=\"card-title\">"+
                "<a href=\"#\">"+ nome +"</a>"+
            "</h4>"+
            "<h5>"+ preco +"</h5>"+
            "<p class=\"card-text\">"+ descricao +"</p>"+
            "</div>"+
            "<div class=\"card-footer\" >"+
                "<button type=\"button\" class=\"btn btn-success-cart\" data-id=\"" + id + "\" data-nome=\"" + nome + "\" data-descricao=\"" + descricao + "\" data-preco=\"" + preco + "\">+ Carrinho</button>"+
            "</div>"+
        "</div>"+
      "</div>";
  });
  $("#divCards").html(outPut);
});
