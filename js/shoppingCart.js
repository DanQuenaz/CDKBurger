//Cart Itens
Item = function(id, nome, descricao, preco, quant){
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.quant = quant;
}

var shoppingCart = [];


//Funções página

loadCart();
updateCart();

$('#divCards').on('click', '.btn-success-cart', function(event){
    event.preventDefault();
    var _id = $(this).attr("data-id");
    var _nome = $(this).attr("data-nome");
    var _descricao = $(this).attr("data-descricao");
    var _preco = Number( $(this).attr("data-preco") );
    
    addItem(_id, _nome, _descricao, _preco, 1);

    updateCart();
 });

 $('#buttons-cart').on('click', '.btn-warning', function(event){
    event.preventDefault();
    console.log("FOI");
    clearCart();
    updateCart();
 });

function updateCart(){
    document.getElementById("shopping-cart-icon").innerHTML = shoppingCart.length;
    var value="";
    for(var i in shoppingCart){
        value += 
        "<span class=\"item\">" +
            "<span class=\"item-left\">"+
                "<span class=\"item-info\">"+
                    "<span>"+ shoppingCart[i].nome +"</span>"+
                    "<span>"+ shoppingCart[i].preco +"</span>"+
                "</span>"+
            "</span>"+
            "<span class=\"item-right\">"+
                "<button class=\"btn btn-xs btn-danger pull-right\">x</button>"+
            "</span>"+
        "</span>";
    }
    value += 
    "<span>"+
        "<div class=\"dropdown-divider\"></div>"+
        "<div id=\"buttons-cart\">"+
            "<button type=\"button\" class=\"btn btn-success\" style=\"margin-left:18px\">Finalizar</button>"+
            "<button type=\"button\" class=\"btn btn-warning\">Limpar</button>"+
        "</div>"+
    "</span>";

    $("#cart-menu").html(value);
}

//Funções do Carrinho

function saveCart(){
    sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

function loadCart(){
   if(JSON.parse( sessionStorage.getItem("shoppingCart") ) != null){
       shoppingCart = JSON.parse( sessionStorage.getItem("shoppingCart") );
   }
}

function addItem(id, nome, descricao, preco, quant){
    var auxItem = new Item(id, nome, descricao, preco, quant);
    for(var i in shoppingCart){
        if(shoppingCart[i].id === auxItem.id){
            shoppingCart[i].quant += quant;
            return;
        }
    }
    shoppingCart.push(auxItem);
    saveCart();
}

function clearCart(){
    shoppingCart = [];
    saveCart();
}
