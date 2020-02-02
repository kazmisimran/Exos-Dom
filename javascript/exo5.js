//Liste d'oeufs 

let divOeuf = document.getElementById('divOeuf');
let btnAdd = document.getElementById('btnAdd');
let btnRem = document.getElementById('btnRem');
let btnRemAll = document.getElementById('btnRemAll');
let compteur = document.getElementById('compteur');
let compt = 0;
// let listOeuf = docuument.getElementById('listOeuf');

let add = () =>{
    let img = document.createElement('img');
    img.src = "../public/img/adjini.jpg";
    divOeuf.appendChild(img);
    compt++;
    compteur.innerHTML = `${compt}`;

}

let remove = () =>{
    divOeuf.removeChild(divOeuf.lastChild);
    compt--;
    compteur.innerHTML = `${compt}`;

}

let removeAll = () =>{
    divOeuf.innerHTML ="";
    compt =0;
    compteur.innerHTML = `${compt}`;

}

btnAdd.addEventListener('click',add);
btnRem.addEventListener('click',remove);
btnRemAll.addEventListener('click',removeAll);
