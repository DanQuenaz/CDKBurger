export var User = function(uid, nome, email, endereco){
    this.uid = uid;
    this.nome = nome;
    this.email = email;
    this.endereco = endereco;
}

export var userLoged = [];

export function getNome(){
    return userLoged[0].nome;
}
export function getUid(){
    return userLoged[0].uid;
}

export function getEmail(){
    return userLoged[0].email;
}
export function getEndereco(){
    return userLoged[0].endereco;
}

export function saveUser(){
    sessionStorage.setItem("lOged",  JSON.stringify( userLoged ) );
}

export function loadUser(){
    userLoged = JSON.parse( sessionStorage.getItem("lOged") );
}

export function addUser(uid, nome, email, enderco){
    var auxUser = new User(uid, nome, email, enderco);
    userLoged.push(auxUser);
    saveUser();
}
