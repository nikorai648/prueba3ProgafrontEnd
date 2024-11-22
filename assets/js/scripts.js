import { agregarLibro } from "./Promesas.js";

window.addEventListener("load", () => {
    console.log("Página cargada");
    document.getElementById("btnAgregar").addEventListener("click",()=>{
        console.log("Se le dio  al boton Registrar");
        //Recupero los elementos del formulario
        let eNombre = document.getElementById("nombre");
        let eAutor = document.getElementById("autor");
        let eEditorial = document.getElementById("editorial");
        let eAnio = document.getElementById("anio");
        let ePais = document.getElementById("pais");
        let eMayorEdad = document.getElementById("mayorEdad");
        let eSexoMasculino = document.getElementById("sexoMasculino");
        let eSexoFemenino = document.getElementById("sexoFemenino");
