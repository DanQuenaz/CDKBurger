//Cart Itens
export var Item = function(id, nome, descricao, preco, quant){
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.quant = quant;
}

export var shoppingCart = [];


//Funções do Carrinho

export function saveCart(){
    sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

export function loadCart(){
   if(JSON.parse( sessionStorage.getItem("shoppingCart") ) != null){
       shoppingCart = JSON.parse( sessionStorage.getItem("shoppingCart") );
   }
}

export function addItem(id, nome, descricao, preco, quant){
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

export function getTotalPrice(){
    var totalPrice = 0;
    if(shoppingCart.length <= 0) return 0;
    for(var i in shoppingCart){
        totalPrice += shoppingCart[i].preco*shoppingCart[i].quant;
    }

    return parseFloat(totalPrice).toFixed(2);
}

export function getTotalItens(){
    var totalItens=0;
    for(var i in shoppingCart){
        totalItens += shoppingCart[i].quant;
    }

    return Number(totalItens);
}

export function clearCart(){
    shoppingCart = [];
    saveCart();
}

export function totalPriceItem(id){
    var total = 0;
    for(var i in shoppingCart){
        if(id === shoppingCart[i].id){
            total = shoppingCart[i].preco * shoppingCart[i].quant;
            return parseFloat(total).toFixed(2);
        }
    }
}

export function updateCart(){
    document.getElementById("simpleCart_quantity").innerHTML = getTotalItens();
    document.getElementById("simpleCart_total").innerHTML = "R$" + getTotalPrice();
}


