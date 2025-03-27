
// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    let nom = prompt("Ingrese su Nombre y Apellido");
    let des = prompt("Ingrese una descripción breve");
    // 1. Seleccionar el contenedor donde se insertará el contenido
    const sobreMi = document.querySelector(".sobre-mi");

    // 2. Crear el elemento H1 (Nombre)
    const nombre = document.createElement("h1"); // <h1></h1>
    nombre.textContent = nom; // <h1>Álvaro Huamán</h1>

    // 3. Crear el elemento P (Descripción breve)
    const descripcion = document.createElement("p"); // <p></p>
    descripcion.textContent = des; // <p>"Lo que no te mata te hace más fuerte"</p>

    // 4. Insertar los elementos en el contenedor
    sobreMi.appendChild(nombre);
    sobreMi.appendChild(descripcion);
});
