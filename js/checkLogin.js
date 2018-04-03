import * as USER from './dataUser';

USER.loadUser();

if(USER.userLoged != null){
    document.getElementById('btnLogin').innerHTML = USER.getNome();
}else{
    document.getElementById('btnLogin').innerHTML = "LOGIN";
}

$('#btnLogin').on('click', function(event){
    event.preventDefault();
    var status = sessionStorage.getItem("lOged");
    if(status!= null){
        window.open("./loged.html", "_self");
    }else{
        window.open("./login.html", "_self");
    }
    
});