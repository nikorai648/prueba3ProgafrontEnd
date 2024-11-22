import { actualizarLibro, obtenerLibro } from "./Firebase.js";  // Asegúrate de que estas funciones estén en el archivo Firebase.js

window.addEventListener("load", () => {
    alert("Llegué");
    
    // Recuperar los parámetros de la URL
    let valores = window.location.search;
    console.log(valores);
    
    // Crear la instancia de URLSearchParams
    const urlParams = new URLSearchParams(valores);
    // Obtener el ID del libro
    let id = urlParams.get('id');
    console.log(id);
    
    // Ir a la base de datos a recuperar el libro asociado al ID
    obtenerLibro(id).then((libro) => {
        console.log(libro);
        
        // Cargar los datos en el formulario
        let nombre = document.getElementById("nombre");
        let autor = document.getElementById("autor");
        let anio = document.getElementById("anio");
        let valoracion = document.getElementById("valoracion");
        let pais = document.getElementById("pais");
        let sexoMasculino = document.getElementById("sexoMasculino");
        let sexoFemenino = document.getElementById("sexoFemenino");
        let genero = document.getElementById("genero");
        
        // Llenar los campos con los valores actuales del libro
        nombre.value = libro.nombre;
        autor.value = libro.autor;
        anio.value = libro.anio;
        valoracion.value = libro.valoracion;
        pais.value = libro.pais;
        if (libro.sexo === 'sexoMasculino') {
            sexoMasculino.checked = true;
        } else if (libro.sexo === 'sexoFemenino') {
            sexoFemenino.checked = true;
        }
        genero.value = libro.genero;
    }).catch((error) => {
        console.log("Error al obtener el libro:", error);
    });
    
    // Asignar acción al botón de actualizar
    let btnActualizar = document.getElementById("btnActualizar");
    btnActualizar.addEventListener("click", () => {
        // Recuperar los elementos del formulario
        let eNombre = document.getElementById("nombre");
        let eAutor = document.getElementById("autor");
        let eAnio = document.getElementById("anio");
        let eValoracion = document.getElementById("valoracion");
        let ePais = document.getElementById("pais");
        let eSexoMasculino = document.getElementById("sexoMasculino");
        let eSexoFemenino = document.getElementById("sexoFemenino");
        let eGenero = document.getElementById("genero");
        
        // Recuperar el contenido de los elementos del formulario
        let vNombre = eNombre.value;
        let vAutor = eAutor.value;
        let vAnio = eAnio.value;
        let vValoracion = eValoracion.value;
        let vPais = ePais.value;
        let vSexo = eSexoMasculino.checked ? 'sexoMasculino' : eSexoFemenino.checked ? 'sexoFemenino' : '';
        let vGenero = eGenero.value;
        
        console.log(vNombre, vAutor, vAnio, vValoracion, vPais, vSexo, vGenero);
        
        // Crear el objeto con los datos actualizados
        let libro = {
            'nombre': vNombre,
            'autor': vAutor,
            'anio': vAnio,
            'valoracion': vValoracion,
            'pais': vPais,
            'sexo': vSexo,
            'genero': vGenero
        };
        
        // Actualizar el libro en la base de datos
        actualizarLibro(id, libro).then(() => {
            alert("Se actualizó con éxito");
        }).catch((error) => {
            console.log("Error al actualizar el libro:", error);
        }).finally(() => {
            // Detener el tiempo unos segundos y luego redirigir
            setTimeout(() => {
                window.location.href = "/libros.html";  // Redirigir a la página de libros después de 5 segundos
            }, 5000);
        });
    });
});
