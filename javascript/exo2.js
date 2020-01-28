let zap = () =>{
    let btn2 = document.getElementById('btn2');
    document.getElementById('exo1').classList.add('d-none');
    document.getElementById('exo3').classList.add('d-none');
    document.getElementById('exo2').classList.remove('d-none');
    
}
btn2.addEventListener('click',zap);
