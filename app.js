let amigos = [];

function agregarAmigo() {
    let inputNombre = document.getElementById('amigo');
    let nombre = inputNombre.value.trim();

    if (nombre === '' || !isNaN(nombre)) {
        alert('Por favor ingresa un nombre válido');
        return;
    }

    amigos.push(nombre);
    console.log(amigos);

    actualizarLista(); 
    inputNombre.value = ''; 
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigos[i];
        lista.appendChild(nuevoElemento);
    }
}

function sortearAmigo() {
    if (amigos.length === 0 ) {
        alert('No hay amigos para sortear');
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('listaAmigos').textContent = ''; 
    document.getElementById('resultado').textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
    
    document.getElementById('sortear').disabled = true;
    document.getElementById('reiniciar').style.display = 'block';
}

function reiniciarSorteo() {
    amigos = [];
    document.getElementById('listaAmigos').textContent = '';
    document.getElementById('resultado').textContent = '';

    document.getElementById('sortear').disabled = false;

    document.getElementById('reiniciar').style.display = 'none';
}
