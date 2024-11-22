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
        let eValoracion = document.getElementById("valoracion");
        let ePais = document.getElementById("pais");
        let eSexoMasculino = document.getElementById("sexoMasculino");
        let eSexoFemenino = document.getElementById("sexoFemenino");
        let eGenero = document.getElementById("genero");
        //Recuperar el contenido de los elementos del formulario
        let vNombre = eNombre.value;
        let vAutor = eAutor.value;
        let vEditorial = eEditorial.value;
        let vAnio = eAnio.value;
        let vValoracion =eValoracion.value;
        let vPais = ePais.value;
        let vGenero = eGenero.value;
        //Radios y los checkbox no se recuperan ningun valor, se recupera si esta chequeado
        let vSexoMasculino = eSexoMasculino.checked;
        let vSexoFemenino = eSexoFemenino.checked;
        console.log(vNombre);
        console.log(vAutor);
        console.log(vDirector);
        console.log(vEditorial);
        console.log(vAnio);
        console.log(vValoracion);
        console.log(vPais);
        console.log(vSexoMasculino);
        console.log(vSexoFemenino);
        console.log(vGenero);
        let libro = {
            'nombre':vNombre,
            'nombre':vDirector,
            'nombre':vEditorial,
            'nombre':vAnio,
            'nombre':vValoracion,
            'nombre':vPais,
            'nombre':vSexoMasculino,
            'nombre':vSexoFemenino,
            'nombre':vGenero,
        }
        agregarLibro(libro);
        console.log(libro);
    })
})
        


