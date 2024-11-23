// Importamos las funciones necesarias desde Promesas.js
import { agregarLibro, obtenerLibros, actualizarlibros, eliminarLibro } from "./Promesas.js";

// Esperamos a que la página cargue completamente
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada");

    // *** Funcionalidades de los botones de Accesibilidad ***
    // Botón para aumentar el tamaño del texto
    document.getElementById("aumentarTexto").addEventListener("click", () => {
        console.log("Aumentar texto activado");
        document.body.style.fontSize = "larger"; // Cambia el tamaño del texto
    });

    // Botón para reducir el tamaño del texto
    document.getElementById("reducirTexto").addEventListener("click", () => {
        console.log("Reducir texto activado");
        document.body.style.fontSize = "smaller"; // Cambia el tamaño del texto
    });

    // Botón para cambiar a modo alto contraste
    document.getElementById("altoContraste").addEventListener("click", () => {
        console.log("Modo alto contraste activado");
        const body = document.body;
        if (!body.classList.contains("alto-contraste")) {
            body.classList.add("alto-contraste"); // Añade la clase para alto contraste
            body.style.backgroundColor = "#000"; // Fondo negro
            body.style.color = "#fff"; // Texto blanco
        } else {
            body.classList.remove("alto-contraste"); // Elimina la clase de alto contraste
            body.style.backgroundColor = ""; // Restaura el fondo original
            body.style.color = ""; // Restaura el texto original
        }
    });

    // *** Función para agregar un libro ***
    document.getElementById("btnAgregar").addEventListener("click", () => {
        console.log("Se le dio al botón Registrar");

        // Recupero los elementos del formulario
        let eNombre = document.getElementById("nombre");
        let eAutor = document.getElementById("autor");
        let eEditorial = document.getElementById("editorial");
        let eAnio = document.getElementById("anio");
        let eValoracion = document.getElementById("valoracion");
        let ePais = document.getElementById("pais");
        let eSexoMasculino = document.getElementById("sexoMasculino");
        let eSexoFemenino = document.getElementById("sexoFemenino");
        let eGenero = document.getElementById("genero");

        // Recuperar el contenido de los elementos del formulario
        let vNombre = eNombre.value;
        let vAutor = eAutor.value;
        let vEditorial = eEditorial.value;
        let vAnio = eAnio.value;
        let vValoracion = eValoracion.value;
        let vPais = ePais.value;
        let vGenero = eGenero.value;
        
        // Radios y los checkbox no se recuperan ningún valor, se recupera si está chequeado
        let vSexoMasculino = eSexoMasculino.checked;
        let vSexoFemenino = eSexoFemenino.checked;

        console.log(vNombre);
        console.log(vAutor);
        console.log(vEditorial);
        console.log(vAnio);
        console.log(vValoracion);
        console.log(vPais);
        console.log(vSexoMasculino);
        console.log(vSexoFemenino);
        console.log(vGenero);

        // Validación básica de los datos
        if (!vNombre || !vAutor || !vEditorial || isNaN(vAnio) || isNaN(vValoracion) || !vPais || !vGenero || (!vSexoMasculino && !vSexoFemenino)) {
            alert("Por favor, completa todos los campos correctamente.");
            return;
        }

        // Crear el objeto libro
        let libro = {
            'nombre': vNombre,
            'autor': vAutor,
            'editorial': vEditorial,
            'anio': parseInt(vAnio), // Convertir a número
            'valoracion': parseFloat(vValoracion), // Convertir a número
            'pais': vPais,
            'sexoMasculino': vSexoMasculino,
            'sexoFemenino': vSexoFemenino,
            'genero': vGenero,
        }

        // Enviar el objeto libro a la función agregarLibro
        agregarLibro(libro).then(() => {
            console.log("Libro registrado:", libro);
            alert("Libro agregado exitosamente.");
        }).catch((error) => {
            console.error("Error al agregar libro:", error);
        });
    });

    // *** Obtener y mostrar los libros en una tabla ***
    obtenerLibros().then((libros) => {
        const eTBody = document.getElementById("cuerpoTabla");
        let filas = "";
        libros.forEach((libro) => {
            filas += "<tr>";
            filas += `<td>${libro.nombre}</td>`;
            filas += `<td>${libro.autor}</td>`;
            filas += `<td>${libro.editorial}</td>`;
            filas += `<td>${libro.anio}</td>`;
            filas += `<td>${libro.valoracion}</td>`;
            filas += `<td>${libro.pais}</td>`;
            filas += `<td>${libro.genero}</td>`;
            filas += `<td><button id="mod${libro.id}">Modificar</button></td>`;
            filas += `<td><button id="eli${libro.id}">Eliminar</button></td>`;
            filas += "</tr>";
        });
        eTBody.innerHTML = filas;

        libros.forEach((libro) => {
            // Botón para actualizar
            const botonActualizar = document.getElementById(`mod${libro.id}`);
            botonActualizar.addEventListener("click", () => {
                alert(`Redirigiendo para modificar el libro con ID: ${libro.id}`);
                window.location.href = `/actualizar.html?id=${libro.id}`;
            });

            // Botón para eliminar
            const botonEliminar = document.getElementById(`eli${libro.id}`);
            botonEliminar.addEventListener("click", () => {
                if (confirm(`¿Deseas eliminar el libro "${libro.nombre}"?`)) {
                    eliminarLibro(libro.id).then(() => {
                        alert("Libro eliminado exitosamente.");
                        location.reload();
                    }).catch((error) => {
                        console.error("Error al eliminar el libro:", error);
                    });
                }
            });
        });
    }).catch((error) => {
        console.error("Error al obtener los libros:", error);
    });
});

