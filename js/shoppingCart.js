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

$('#listProducts').on('click', '#btnAddCart', function(event){
    event.preventDefault();
    var _id = $(this).attr("data-id");
    var _nome = $(this).attr("data-nome");
    var _descricao = $(this).attr("data-descricao");
    var _preco = Number( $(this).attr("data-preco") );
    
    addItem(_id, _nome, _descricao, _preco, 1);

    updateCart();
});

$('#simpleCart_empty').on('click', function(event){
    event.preventDefault();
    clearCart();
    updateCart();
});



function updateCart(){
    document.getElementById("simpleCart_quantity").innerHTML = getTotalItens();
    document.getElementById("simpleCart_total").innerHTML = "R$" + getTotalPrice();
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
            saveCart();
            return;
        }
    }
    shoppingCart.push(auxItem);
    saveCart();
}

function getTotalPrice(){
    var totalPrice = 0;
    if(shoppingCart.length <= 0) return 0;
    for(var i in shoppingCart){
        totalPrice += shoppingCart[i].preco*shoppingCart[i].quant;
    }

    return Number(totalPrice);
}

function getTotalItens(){
    var totalItens=0;
    for(var i in shoppingCart){
        totalItens += shoppingCart[i].quant;
    }

    return Number(totalItens);
}

function clearCart(){
    shoppingCart = [];
    saveCart();
}
