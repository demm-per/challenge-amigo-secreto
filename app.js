// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoSorteado = ''

let amigo = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');
const resultadoAmigoSecreto = document.querySelector('#resultado');
let btnReiniciar = document.querySelector('#reiniciar');
let btnSortearAmigo = document.querySelector('#btnSortearAmigo');



const limpiarInput = ( etiqueta ) =>{
    etiqueta.value = '';
}

const limpiarLista = ( etiqueta ) =>{
    etiqueta.innerHTML = '';
}

const validarInput = (etiqueta) => {
    if(etiqueta.value.length == 0){
        alert('Es necesario agregar el nombre de un amigo');
        return;
    }
}

const desabilitarBtn = ( boton ) => {
    boton.classList.add('button-disabled');
    boton.disabled = true;
}

const habilitarBtn = ( boton ) => {
    boton.classList.remove('button-disabled');
    boton.disabled = false;
}

const agregarAmigo = () => {
    validarInput(amigo);
    amigos.push(amigo.value);
    listaAmigos.innerHTML += `<li> ${amigo.value}</li>`
    limpiarInput(amigo);

    if(amigos.length > 1){
        habilitarBtn(btnSortearAmigo);
    }
}

const sortearAmigo = () => {
    amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultadoAmigoSecreto.innerHTML = `<li> Tu amigo secreto es: ${amigoSorteado} </li>`;
    btnReiniciar.disabled = false;
    btnSortearAmigo.disabled = true;
    desabilitarBtn(btnSortearAmigo)
}

const reiniciarJuego = () =>{
    amigos=[];
    amigoSorteado = '';
    limpiarInput(amigo);
    limpiarLista(listaAmigos);
    limpiarLista(resultadoAmigoSecreto);   
    desabilitarBtn(btnSortearAmigo)
}

desabilitarBtn(btnSortearAmigo)