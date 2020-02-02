//Niveau1
let nb1 = document.getElementById('nb1');
let nb2 = document.getElementById('nb2');
let equals = document.getElementById('equals');
let rep = document.getElementById('rep');
// let noel = "bg"
// noel==true

let op = () => {
    if (document.getElementById('plus').selected) {
        rep.innerHTML = Number(nb1.value)+ Number(nb2.value);
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

tabNum.forEach(elem => {
    elem.addEventListener('click',()=>{
        history.value += elem.innerHTML;
    })
});

for (let i=0;i<tabOp.length;i++){
    tabOp[i].addEventListener('click', ()=> {
        history.value += tabOp[i].innerHTML;
    })
}

egal.addEventListener('click', ()=> {
    result.innerHTML = eval(history.value);
    history.value="";
})

clear.addEventListener('click',()=>{
    history.value ="";
    result.innerHTML=""
})






