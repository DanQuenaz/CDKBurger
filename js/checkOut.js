var name = document.getElementById('inputName');
var email = document.getElementById('inputEmail');
var tel = document.getElementById('inputTel');
var address = document.getElementById('inputAddress');
var number = document.getElementById('inputNumber');
var bairro = document.getElementById('inputBairro');
var complemento = document.getElementById('inputComplemento');
var ref = document.getElementById('inputRef');
var zip = document.getElementById('inputZipp');
var pay = document.getElementById('inputPay');
var btnCheck = document.getElementById('checkkOut');
var form1 = document.getElementById('form1');
var block = false;


$("#form1").submit(function() {
    if($("#inputName").val()== null || $("#inputName").val() ==""){
        alert('Preencha o campo Nome!');      
        return false;
    }
    else if($("#inputAddress").val()== null || $("#inputAddress").val() ==""){
        alert('Preencha o campo Endereço!');      
        return false;
    }
    else if($("#inputNumber").val()== null || $("#inputNumber").val() ==""){
        alert('Preencha o campo Número!');      
        return false;
    }
    else if($("#inputBairro").val()== null || $("#inputBairro").val() ==""){
        alert('Preencha o campo Bairro!');      
        return false;
    }
    else if($("#inputRef").val()== null || $("#inputRef").val() ==""){
        alert('Preencha o campo Ponro de Referência!');      
        return false;
    }
    else if($("#inputComplemento").val()== null || $("#inputComplemento").val() ==""){
        alert('Preencha o campo Complemento!');      
        return false;
    }
    else if($("#inputZip").val()== null || $("#inputZip").val() ==""){
        alert('Preencha o campo CEP!');      
        return false;
    }
    else if($("#inputPay").val()== "Escolha..."){
        alert('Escolha uma forma de pagamento!');      
        return false;
    }
    else{
        alert("Pedido realizado com sucesso!");
        window.location.href="index.html";
    }
});

btnCheck.addEventListener('click', e=>{
    
});