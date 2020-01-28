let title = document.getElementById('titreExo1');
title.innerHTML ='Le titre modifié';
title.style.color = "white";
title.classList.add("bg-pink");

//Changer de panel
let zap = () =>{
    let btn1 = document.getElementById('btn2');
    
    document.getElementById('exo1').classList.remove('d-none');
    document.getElementById('exo2').classList.add('d-none');
    document.getElementById('exo3').classList.add('d-none');    
}
btn1.addEventListener('click',zap);