import * as Data from './dataCart';

//Funções página

Data.loadCart();
Data.updateCart();

$('#listProducts').on('click', '#btnAddCart', function(event){
    event.preventDefault();
    var _id = $(this).attr("data-id");
    var _nome = $(this).attr("data-nome");
    var _descricao = $(this).attr("data-descricao");
    var _preco = Number( $(this).attr("data-preco") );
    
    Data.addItem(_id, _nome, _descricao, _preco, 1);

    Data.updateCart();
});

$('#simpleCart_empty').on('click', function(event){
    event.preventDefault();
    Data.clearCart();
    Data.updateCart();
});



