//Cart Itens
Item = function(id, nome, descricao, preco, quant){
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.quant = quant;
}

var shoppingCart = [];


//Funções do Carrinho

function saveCart(){
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

function loadCart(){
    shoppingCart = JSON.parse( localStorage.getItem("shoppingCart") );
}

function addItem(id, nome, descricao, preco, quant){
    var auxItem = new Item(id, nome, descricao, preco, quant);
    for(var i in shoppingCart){
        if(shoppingCart[i].id == id){
            shoppingCart[i].quant += quant;
            return;
        }
        shoppingCart.push(auxItem);
    }
}
