//Niveau1
let nb1 = document.getElementById('nb1');
let nb2 = document.getElementById('nb2');
let equals = document.getElementById('equals');
let rep = document.getElementById('rep');
// let noel = "bg"
// noel==true

let op = () =>{
    if(document.getElementById('plus').selected){
        rep.innerHTML = Number(nb1.value + nb2.value);
    } else if (document.getElementById('multiply').selected){
        rep.innerHTML = Number(nb1.value*nb2.value);
    } else if (document.getElementById('divide').selected){
        rep.innerHTML = Number(nb1.value/nb2.value);
    }else{
        rep.innerHTML = Number(nb1.value-nb2.value);
    }
}

equals.addEventListener('click',op);

//Niveau 2
