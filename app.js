// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres ingresados
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios en blanco antes y después

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista
    listaDeAmigos.push(nombre);
    
    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista visible en la página
    actualizarLista();
}

// Función para actualizar la lista de amigos en la página
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    listaDeAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSeleccionado = listaDeAmigos[indiceAleatorio];

    // Mostrar el nombre sorteado en el div de resultados
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p> El amigo secreto es: ${amigoSeleccionado} </p>`;
}
