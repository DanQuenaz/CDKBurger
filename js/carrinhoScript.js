var btnAddCart = document.getElementById('addCart');
var btnBuildOther = document.getElementById('buildOther');
var btnCheckout = document.getElementById('checkout'); 


var count = 0;
var blockOther = false;


$('table').on('click','.delete',function(){
    $(this).parents('tr').remove();
    count-=1;
});

btnAddCart.addEventListener('click', e=>{
    if(count <= 5 && !blockOther){
        count += 1;
        var table = document.getElementById("cart");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        
        cell1.innerHTML = "Produto "+count;
        cell2.innerHTML = "R$1.99";
        cell3.innerHTML = "<input type="+"\"number\"" +"class="+"\"form-control text-center\"" +"value="+"\"1\"" +"min="+"\"1\"" +"max="+"\"99\""+">";
        cell4.innerHTML = "R$1.99";
        cell5.innerHTML = "<button  class="+"\"btn btn-danger delete\""+"id="+"\"deleteOrder\""+">Remover</button>"

        
        blockOther = true;
    }
});

btnBuildOther.addEventListener('click', e=>{
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    blockOther = false;
});

btnCheckout.addEventListener('click', e=>{
    if(!count){
        alert("Insira produtos no carrinho!");
    }
    else{
        window.location.href="checkout.html";
    }

});