var btnAddCart = document.getElementById('addCart');



btnAddCart.addEventListener('click', e=>{
    var table = document.getElementById("cart");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    cell1.innerHTML = "Produto 1";
    cell2.innerHTML = "R$1.99";
    cell3.innerHTML = "<input type="+"number" +"class="+"form-control text-center" +"value="+"1" +"min="+"1" +"max="+"99"+">";
    cell4.innerHTML = "R$1.99";
});