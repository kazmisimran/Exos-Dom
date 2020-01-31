//l'exo en soi:
let inconnu = document.getElementById('inconnu');
let inputNom = document.getElementById('inputNom');
let btnGo = document.getElementById('btnGo');

let change = () => {
    inconnu.innerText= inputNom.value;
    inputNom.value =' ';
}

btnGo.addEventListener('click',change);


