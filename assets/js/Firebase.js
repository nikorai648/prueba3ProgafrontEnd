// Importa la configuración de Firebase desde el archivo llamado "Credenciales.js".
// Este archivo contiene las claves y datos necesarios para conectar tu aplicación con Firebase.
import { firebaseConfig } from "./Credenciales.js";

// Importa la función initializeApp desde la biblioteca Firebase. 
// Esta función se utiliza para inicializar la aplicación con la configuración de Firebase.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

// Importa la función getFirestore desde la biblioteca Firebase.
// Esta función se usa para inicializar el servicio Firestore, que es la base de datos NoSQL de Firebase.
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Inicializa la aplicación Firebase utilizando la configuración importada (firebaseConfig).
// Esto conecta tu aplicación con el proyecto de Firebase configurado en Credenciales.js.
const app = initializeApp(firebaseConfig);

// Exporta la instancia de Firestore inicializada para que pueda ser utilizada en otros archivos.
// La variable `db` representa la base de datos Firestore de tu proyecto.
export const db = getFirestore(app);
