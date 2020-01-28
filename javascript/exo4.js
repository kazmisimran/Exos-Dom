//zap
let zap = () => {
    let btn4 = document.getElementById('btn3');
    document.getElementById('exo1').classList.add('d-none');
    document.getElementById('exo2').classList.add('d-none');
    document.getElementById('exo3').classList.add('d-none');
    document.getElementById('exo4').classList.remove('d-none');

}

btn4.addEventListener('click', zap);

//exo
let square1 = document.getElementById('square1');
let square2 = document.getElementById('square2');
let btnPlace = document.getElementById('btnPlace');
let clickNumber = document.getElementById('clickNumber');
let compt = 0;


let changePlace = () => {
    if (square1.classList.contains('d-none')) {
        square1.classList.remove('d-none');
        square2.classList.add('d-none');
    } else if (square2.classList.contains('d-none')) {
        square1.classList.add('d-none');
        square2.classList.remove('d-none');
    }
    if(compt <10){
        compt++;
        clickNumber.innerHTML = `Nombre de clicks : ${compt}`;
    }else{
        compt = 0;
        clickNumber.innerHTML = `Nombre de clicks : ${compt}`;
    }
}

btnPlace.addEventListener('click', changePlace);
