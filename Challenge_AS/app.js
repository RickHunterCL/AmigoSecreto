// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para guardar los nombres
let amigos = [];

// Función para añadir un nuevo amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Agregar nombre al array
    amigos.push(nombre);

    // Mostrar en la lista
    mostrarAmigos();

    // Limpiar campo de texto
    input.value = "";
    input.focus();
}

// Función para mostrar los amigos en la lista <ul>
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar la lista antes de volver a pintarla

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botón para eliminar un nombre
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.style.marginLeft = "10px";
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarAmigos();
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos 2 amigos para hacer el sorteo.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const elegido = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${elegido}</strong></li>`;
}
