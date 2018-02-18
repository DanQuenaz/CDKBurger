//Elementos da página
const rdXsalada = document.getElementById('xSalada');
const rdXburger = document.getElementById('xBurger');
const rdXfrango = document.getElementById('xFrango');
const rdXbacon = document.getElementById('xBacon');
const rdXtudo = document.getElementById('xTudo');
const rdGergelim = document.getElementById('gergelim');
const vlMussarela = document.getElementById('mussarela');
const vlAlface = document.getElementById('alface');
const vlTomate = document.getElementById('tomate');
const vlMilho = document.getElementById('milho');
const vlBatataPalha = document.getElementById('batataPalha');
const vlHambuguer = document.getElementById('hamburguer');
const vlFrangoDesf = document.getElementById('desfFrango');
const vlBacon = document.getElementById('bacon');
const vlPresunto = document.getElementById('presunto');
const vlOvo = document.getElementById('ovo');
const vlPicles = document.getElementById('picles');
const vlFrangoFile = document.getElementById('filFrango');
const vlPicanha = document.getElementById("picanha");
const vlPrato = document.getElementById('prato');
const vlCheddar = document.getElementById('cheddar');
const vlAzeitona = document.getElementById('azeitona');
const vlCebola = document.getElementById('cebola');


rdXsalada.addEventListener('click', e => {
    rdGergelim.checked = true;
    vlMussarela.value = "1";
    vlTomate.value = "1";
    vlAlface.value = "1";
    vlMilho.value = "1";
    vlBatataPalha.value = "1";

    vlHambuguer.value = "0";
    vlFrangoDesf.value = "0";
    vlFrangoFile.value = "0";
    vlPicanha.value = "0";
    vlPrato.value = "0";
    vlCheddar.value = "0";
    vlOvo.value = "0";
    vlAzeitona.value = "0";
    vlCebola.value = "0";
    vlPicles.value = "0";
    vlBacon.value = "0";
    vlPresunto.value = "0";
});

rdXburger.addEventListener('click', e => {
    rdGergelim.checked = true;
    vlMussarela.value = "1";
    vlTomate.value = "1";
    vlAlface.value = "1";
    vlMilho.value = "1";
    vlBatataPalha.value = "1";
    vlHambuguer.value = "1";

    vlFrangoDesf.value = "0";
    vlFrangoFile.value = "0";
    vlPicanha.value = "0";
    vlPrato.value = "0";
    vlCheddar.value = "0";
    vlOvo.value = "0";
    vlAzeitona.value = "0";
    vlCebola.value = "0";
    vlPicles.value = "0";
    vlBacon.value = "0";
    vlPresunto.value = "0";
});

rdXfrango.addEventListener('click', e => {
    rdGergelim.checked = true;
    vlMussarela.value = "1";
    vlTomate.value = "1";
    vlAlface.value = "1";
    vlMilho.value = "1";
    vlBatataPalha.value = "1";
    vlFrangoDesf.value = "1";

    vlHambuguer.value = "0";
    vlFrangoFile.value = "0";
    vlPicanha.value = "0";
    vlPrato.value = "0";
    vlCheddar.value = "0";
    vlOvo.value = "0";
    vlAzeitona.value = "0";
    vlCebola.value = "0";
    vlPicles.value = "0";
    vlBacon.value = "0";
    vlPresunto.value = "0";
});

rdXbacon.addEventListener('click', e => {
    rdGergelim.checked = true;
    vlMussarela.value = "1";
    vlTomate.value = "1";
    vlAlface.value = "1";
    vlMilho.value = "1";
    vlBatataPalha.value = "1";
    vlBacon.value = "1";
    vlHambuguer.value = "1";

    vlFrangoDesf.value = "0";
    vlFrangoFile.value = "0";
    vlPicanha.value = "0";
    vlPrato.value = "0";
    vlCheddar.value = "0";
    vlOvo.value = "0";
    vlAzeitona.value = "0";
    vlCebola.value = "0";
    vlPicles.value = "0";
    vlPresunto.value = "0";
});

rdXtudo.addEventListener('click', e => {
    rdGergelim.checked = true;
    vlMussarela.value = "1";
    vlTomate.value = "1";
    vlAlface.value = "1";
    vlMilho.value = "1";
    vlBatataPalha.value = "1";
    vlBacon.value = "1";
    vlPresunto.value = "1";
    vlOvo.value = "1"
    vlHambuguer.value = "1";

    vlFrangoDesf.value = "0";
    vlFrangoFile.value = "0";
    vlPicanha.value = "0";
    vlPrato.value = "0";
    vlCheddar.value = "0";
    vlAzeitona.value = "0";
    vlCebola.value = "0";
    vlPicles.value = "0";

});

