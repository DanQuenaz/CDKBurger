
import * as Data from './dataCart';

Data.loadCart();
Data.updateCart();

updateCartCheck();


function updateCartCheck(){
    document.getElementById('total1Check').innerHTML = Data.getTotalPrice();
    document.getElementById('total2Check').innerHTML = Data.getTotalPrice();
}

var value = "";

for(var i in Data.shoppingCart){
    value +=
    "<script>$(document).ready(function(c) {"+
       " $('.close1').on('click', function(c){"+
            "$('.cart-header').fadeOut('slow', function(c){"+
                "$('.cart-header').remove();"+
            "});"+
            "});"+	  
        "});"+
    "</script>"+
    "<div class=\"cart-header\">"+
        "<div class=\"close1\"> </div>"+
        "<div class=\"cart-sec simpleCart_shelfItem\">"+
                "<div class=\"cart-item cyc\">"+
                    "<img src=\"images/hamb4.jpg\" class=\"img-responsive\" alt=\"\"/>"+
                "</div>"+
            "<div class=\"cart-item-info\">"+ 
                    "<h3><a href=\"single.html\">"+ Data.shoppingCart[i].nome +"</a><span>"+ Data.shoppingCart[i].descricao +"</span></h3>"+
                    "<ul class=\"qty\">"+
                        "<li><p>Quantidade:" + Data.shoppingCart[i].quant + "</p></li><br>"+
                        "<li><p>Prç. unitário: R$" + Data.shoppingCart[i].preco + "</p></li><br>"+
                    "</ul>"+
                    "<div class=\"delivery\">"+
                        "<p><b>Total : R$" + Data.totalPriceItem(Data.shoppingCart[i].id) + "</b></p>"+
                        "<span>Delivered in 2-3 bussiness days</span>"+
                        "<div class=\"clearfix\"></div>"+
                    "</div>"+								
            "</div>"+
            "<div class=\"clearfix\"></div>"+                       
        "</div>"+
    "</div>";

    $("#productsCheckout").html(value);
}




