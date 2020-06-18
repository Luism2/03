// declaracion de variables apara la bincualacioon de objeos//
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario= document.getElementById('formlogin');

formulario.addEventListener('submit', login);
function login(e){
    e.preventDefault();

    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal== '' || passwordVal == ''){
        crearmensage('verifica tus datos','danger');
        return;
    }
    if(localStorage.getItem('usuario')){
        let objeto=JSON.parse(localStorage.getItem('usuario'));
        if(usuarioVal== objeto.user && passwordVal== objeto.pass){
            crearmensage('usuario correcto','success');
            localStorage.setItem('sesion','activa');
            setTimeout(function(){
                window.open('./inicio.html', '_self');
            },2000);
        }else{
            crearmensage('Usuario o contraseña incorrecta','danger');
        } 
    }else{
        crearmensage('El usuario y contraseña no existen','danger');
    }

}