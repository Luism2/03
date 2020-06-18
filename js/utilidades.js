function crearmensage(texto,tipo){
    const nuevoElemento = document.createElement('div');
    nuevoElemento.innerText= texto;
    nuevoElemento.classList.add('alert','alert-'+tipo);
    const divmesage = document.getElementById('mensaje');
    divmesage.appendChild(nuevoElemento);
    setTimeout(function(){
        nuevoElemento.remove();
    },2000);
}