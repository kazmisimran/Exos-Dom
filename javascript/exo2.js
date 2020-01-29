let exo1 = document.getElementById('exo1');
let exo2 = document.getElementById('exo2');
let exo3 = document.getElementById('exo3');
let exo4 = document.getElementById('exo4');
let exo5 = document.getElementById('exo5');
let exo6 = document.getElementById('exo6');
let exo7 = document.getElementById('exo7');

//zap1
let zap1 = () =>{
    let btn1 = document.getElementById('btn1');
    exo1.classList.remove('d-none');
    exo2.classList.add('d-none');
    exo3.classList.add('d-none');
    exo4.classList.add('d-none');
    exo5.classList.add('d-none');
    exo6.classList.add('d-none');
    exo7.classList.add('d-none');
}

btn1.addEventListener('click',zap1);

//zap2
let zap2 = () =>{
    let btn2 = document.getElementById('btn2');
    exo2.classList.remove('d-none');
    exo1.classList.add('d-none');
    exo3.classList.add('d-none');
    exo4.classList.add('d-none');
    exo5.classList.add('d-none');
    exo6.classList.add('d-none');
    exo7.classList.add('d-none');
}

btn2.addEventListener('click',zap2);

//zap3
let zap3 = () =>{
    let btn3 = document.getElementById('btn3');
    exo3.classList.remove('d-none');
    exo1.classList.add('d-none');
    exo2.classList.add('d-none');
    exo4.classList.add('d-none');
    exo5.classList.add('d-none');
    exo6.classList.add('d-none');
    exo7.classList.add('d-none');

}

btn3.addEventListener('click',zap3);

//zap4
let zap4 = () =>{
    let btn4 = document.getElementById('btn4');
    exo4.classList.remove('d-none');
    exo1.classList.add('d-none');
    exo2.classList.add('d-none');
    exo3.classList.add('d-none');
    exo5.classList.add('d-none');
    exo6.classList.add('d-none');
    exo7.classList.add('d-none');
}

btn4.addEventListener('click',zap4);

//zap5
let zap5 = () =>{
    let btn5 = document.getElementById('btn5');
    exo5.classList.remove('d-none');
    exo1.classList.add('d-none');
    exo2.classList.add('d-none');
    exo3.classList.add('d-none');
    exo4.classList.add('d-none');
    exo6.classList.add('d-none');
    exo7.classList.add('d-none');
}

btn5.addEventListener('click',zap5);

//zap6
let zap6 = () =>{
    let btn6 = document.getElementById('btn6');
    exo6.classList.remove('d-none');
    exo1.classList.add('d-none');
    exo2.classList.add('d-none');
    exo3.classList.add('d-none');
    exo4.classList.add('d-none');
    exo5.classList.add('d-none');
    exo7.classList.add('d-none');
}

btn6.addEventListener('click',zap6);

//zap7
let zap7 = () =>{
    let btn7 = document.getElementById('btn7');
    exo7.classList.remove('d-none');
    exo1.classList.add('d-none');
    exo2.classList.add('d-none');
    exo3.classList.add('d-none');
    exo4.classList.add('d-none');
    exo5.classList.add('d-none');
    exo6.classList.add('d-none');
}

btn7.addEventListener('click',zap7);