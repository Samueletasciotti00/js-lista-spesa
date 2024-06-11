// Definiamo la lista della spesa
const listaSpesa = ['pane', 'latte', 'uova', 'burro', 'salame'];


// Otteniamo il riferimento all'elemento ul
const listaElement = document.getElementById('lista-spesa');

// Inizializziamo un indice
let i = 0;

// Usiamo un ciclo while per  la lista e aggiungiamo ogni elemento alla pagina
while (i < listaSpesa.length) {
    // Creazione elemento della lista
    const prodotto = document.createElement('li');

    //Contenuto del prdotto dall'Array
    prodotto.textContent = listaSpesa[i];

    //Append dell prodotto alla lista
    listaElement.appendChild(prodotto);

    //Incremento del contatore
    i++;
    
}

console.log(i);