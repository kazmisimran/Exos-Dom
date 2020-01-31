//Niveau1
let nb1 = document.getElementById('nb1');
let nb2 = document.getElementById('nb2');
let equals = document.getElementById('equals');
let rep = document.getElementById('rep');
// let noel = "bg"
// noel==true

let op = () => {
    if (document.getElementById('plus').selected) {
        rep.innerHTML = Number(nb1.value + nb2.value);
    } else if (document.getElementById('multiply').selected) {
        rep.innerHTML = Number(nb1.value * nb2.value);
    } else if (document.getElementById('divide').selected) {
        rep.innerHTML = Number(nb1.value / nb2.value);
    } else {
        rep.innerHTML = Number(nb1.value - nb2.value);
    }
}

equals.addEventListener('click', op);

//Niveau 2

let result = document.getElementById('result');
let history = document.getElementById('history');
let egal = document.getElementById('egal');
let clear = document.getElementById('clear');
let tabNum = document.querySelectorAll('.number');
let tabOp = document.querySelectorAll('.operator');
let plus = document.getElementsByClassName('operator')[0];
let moins = document.getElementsByClassName('operator')[1];
let fois = document.getElementsByClassName('operator')[2];
let divise = document.getElementsByClassName('operator')[4];

tabNum.forEach(elem => {
    elem.addEventListener('click',()=>{
        history.value += elem.innerText;
    })
});

for (let i=0;i<tabOp.length;i++){
    tabOp[i].addEventListener('click', ()=> {
        history.value += tabOp[i].innerText;
    })
}

egal.addEventListener('click', ()=> {
    result.innerText = eval(history.value);
    history.value="";
})

clear.addEventListener('click',()=>{
    history.value ="";
    result.innerText=""
})






