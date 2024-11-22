import { db } from "./Firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Función para agregar un libro
export let agregarLibro = async (libro) => {
    try {
        const docRef = await addDoc(collection(db, "libros"), libro);
        console.log("Libro agregado con ID: ", docRef.id);
    } catch (error) {
        console.error("Error al agregar el libro: ", error);
    }
}

// Función para obtener todos los libros
export let obtenerLibros = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "libros"));
        let libros = [];
        querySnapshot.forEach((doc) => {
            let libro = {
                'id': doc.id,
                'nombre': doc.data().nombre,
                'autor': doc.data().autor,
                'editorial': doc.data().editorial,
                'anio': doc.data().anio,
                'valoracion': doc.data().valoracion,
                'pais': doc.data().pais,
                'sexoMasculino': doc.data().sexoMasculino,
                'sexoFemenino': doc.data().sexoFemenino,
                'genero': doc.data().genero
            };
            libros.push(libro);
            console.log(doc.id, " => ", doc.data());
        });
        return libros;
    } catch (error) {
        console.error("Error al obtener los libros: ", error);
        return [];
    }
}

// Función para eliminar un libro por su ID
export let eliminarLibro = async (idLibro) => {
    try {
        await deleteDoc(doc(db, "libros", idLibro));
        console.log("Libro eliminado con ID: ", idLibro);
    } catch (error) {
        console.error("Error al eliminar el libro: ", error);
    }
}

// Función para obtener un libro por su ID
export let obtenerLibro = async (idLibro) => {
    try {
        const docRef = doc(db, "libros", idLibro);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let libro = {
                'id': docSnap.id,
                'nombre': docSnap.data().nombre,
                'autor': docSnap.data().autor,
                'editorial': docSnap.data().editorial,
                'anio': docSnap.data().anio,
                'valoracion': docSnap.data().valoracion,
                'pais': docSnap.data().pais,
                'sexoMasculino': docSnap.data().sexoMasculino,
                'sexoFemenino': docSnap.data().sexoFemenino,
                'genero': docSnap.data().genero
            };
            return libro;
        } else {
            console.log("No se encontró el libro con ID: ", idLibro);
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el libro: ", error);
        return null;
    }
}

// Función para actualizar un libro
export let actualizarLibro = async (id, libro) => {
    try {
        const docRef = doc(db, "libros", id);
        await updateDoc(docRef, { ...libro });
        console.log("Libro actualizado con ID: ", id);
    } catch (error) {
        console.error("Error al actualizar el libro: ", error);
    }
}
