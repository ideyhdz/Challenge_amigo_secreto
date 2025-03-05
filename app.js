// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let Nombres = [];
 let ulListaAmigos = document.getElementById("listaAmigos")
let inputAmigo = document.getElementById("amigo")

let ulResultado = document.getElementById("resultado")


function agregarAmigo(){
if(!inputAmigo.value){
    alert("Debes ingresar un nombre");
}else 

if (Nombres.includes(inputAmigo.value)){
    alert("El nombre ingresado ya se encuentra en la lista");
}else {
    Nombres.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
}console.log(Nombres);
  limpiarCaja();
  inputAmigo.focus();
  //crearLista();
}

//function crearLista(){
   
    ulListaAmigos.innerHTML = "";

   // for(let i = 0; i < Nombres.length; i++){
    //    let item = document.createElement("li");
      //  item.textContent = inputAmigo[i];
        //ulListaAmigos.appendChild(item);
  //  }
//}


function sortearAmigo(){
    if (Nombres < 3){
        alert("Para realizar el sorteo,agrega alemno 3 nombres")
    }
    let random = Math.floor(Math.random()*Nombres.length);
    let amigoSecreto = Nombres[random];
    ulResultado.innerHTML = `<h2> tu amigo secreto es ${amigoSecreto}</h2>`


}



function limpiarCaja() {
    document.querySelector('#amigo').value = '';

    
}