import { Contacto } from "./claseContacto.js"; 

const formularioContacto = document.querySelector('form');
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const telefono = document.querySelector("#telefono");
const agenda = [];
const crearContacto=(e)=>{
e.preventDefault();
const nuevoContacto = new Contacto (nombre.value, apellido.value, email.value, telefono.value);
agenda.push(nuevoContacto);
console.log(agenda);
}

formularioContacto.addEventListener('submit', crearContacto);