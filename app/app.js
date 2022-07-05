const btnEncriptador1 = document.querySelector(".botones__encriptador .btn1");
const btnEncriptador2 = document.querySelector(".botones__encriptador .btn2");
const btnAhorcado1 = document.querySelector(".botones__ahorcado .btn1");
const btnAhorcado2 = document.querySelector(".botones__ahorcado .btn2");
const btnFormulario = document.querySelector(".btn3");
const form = document.querySelector(".desktop__contenedor");
const nombreForm = document.getElementById("nombre");
const emailForm = document.getElementById("email");
const asuntoForm = document.getElementById("asunto");
const mensajeForm = document.getElementById("mensaje");

const datos = {
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
}

btnEncriptador1.addEventListener("click", () => {
    window.open("https://github.com/jezeelam/Challenge-Alura-01", "_blank");
});
btnEncriptador2.addEventListener("click", () => {
    window.open("https://jezeelam.github.io/Challenge-Alura-01/", "_blank");
});

btnAhorcado1.addEventListener("click", () => {
    window.open("https://github.com/jezeelam/Challenge-Alura-02---Juego-de-Ahorcado", "_blank");
});
btnAhorcado2.addEventListener("click", () => {
    window.open("https://jezeelam.github.io/Challenge-Alura-02---Juego-de-Ahorcado/", "_blank");
});
nombreForm.addEventListener("input", leerTexto);
emailForm.addEventListener("input", leerTexto);
asuntoForm.addEventListener("input", leerTexto);
mensajeForm.addEventListener("input", leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const {nombre, email, asunto, mensaje} = datos; 

    if(nombre === "" || email === "" || asunto === "" || mensaje === "") {
        mostrarAlerta("Todos los campos son obligatorios", true);
        return;
    }
    mostrarAlerta("Enviado correctamente");
});

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('existe')
    const errorExiste = document.querySelector('.existe');
 
    if(!errorExiste){
        if(error === true){
            alerta.classList.add('error');
    
        }else{
            alerta.classList.add('correcto');
        }
        
        form.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }
  
}