
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
      var preco = parseFloat( Number( childSnapshot.child("Preco").val() ) ).toFixed(2);
      
      outPut += 
        "<div class=\"product-grid\">"+
        "<a href=\"single.html\">"+
        "<div class=\"more-product\"><span> </span></div>"+						
        "<div class=\"product-img b-link-stripe b-animate-go  thickbox\">"+
            "<img src=\"images/hamb4.jpg\" class=\"img-responsive\" alt=\"\">"+
            "<div class=\"b-wrapper\">"+
            "<h4 class=\"b-animate b-from-left  b-delay03\">"+							
            "<button><span class=\"glyphicon glyphicon-zoom-in\" aria-hidden=\"true\"></span>Quick View</button>"+
            "</h4>"+
            "</div>"+
        "</div></a>"+			
        "<div class=\"product-info simpleCart_shelfItem\">"+
            "<div class=\"product-info-cust prt_name\">"+
                "<h4>"+ nome +"</h4>"+								
                "<span class=\"item_price\">R$"+ preco +"</span>"+
                "<div class=\"ofr\">"+
                "<p class=\"pric1\">"+ descricao +"</p>"+
                "</div>"+
                "<input type=\"text\" class=\"item_quantity\" value=\"1\" />"+
                "<input type=\"button\" class=\"item_add items\" value=\"ADD\" id=\"btnAddCart\" data-id=\"" + id + "\" data-nome=\"" + nome + "\" data-descricao=\"" + descricao + "\" data-preco=\"" + preco + "\">"+
                "<div class=\"clearfix\"> </div>"+
            "</div>"+												
        "</div>"+
        "</div>";
    });
    $("#listProducts").html(outPut);
  });
  