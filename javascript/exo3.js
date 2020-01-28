let zap = () => {
    let btn3 = document.getElementById('btn3');
    document.getElementById('exo1').classList.add('d-none');
    document.getElementById('exo2').classList.add('d-none');
    document.getElementById('exo3').classList.remove('d-none');

}

btn3.addEventListener('click',zap); 

//l'exo en soi:
let inconnu = document.getElementById('inconnu');
let inputNom = document.getElementById('inputNom');
let btnGo = document.getElementById('btnGo');

let change = () => {
    inconnu.innerText= inputNom.value;
    inputNom.value =' ';
}

btnGo.addEventListener('click',change);
