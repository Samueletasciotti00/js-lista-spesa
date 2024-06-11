// Definiamo la lista della spesa
const listaSpesa = [];


// Otteniamo il riferimento all'elemento ul
const listaElement = document.getElementById('lista-spesa');

// Inizializziamo un indice
let i = 0;

// Creiamo ua funzione di aggiunta alla lista con animazione



//Rilevare il click dell'utente per immettere nell'array l'oggetto
document.getElementById('plus').addEventListener('click',
    function(){
        //Rilevare la presenza di testo inserita nella textbox
        let inputLista = document.getElementById('add').value;

        listaSpesa.push(inputLista);
        console.log(listaSpesa);

        document.querySelector('input').value = '';
    }
)

//Rilevare il click dell utente per stampare la lista;
document.getElementById('stampa').addEventListener('click',
    function(){

        // Ciclo
        while (i < listaSpesa.length) {
            // Creazione elemento della lista
            const prodotto = document.createElement('li');

            //Contenuto del prdotto dall'Array
            prodotto.textContent = listaSpesa[i];

            //Append dell prodotto alla lista
            listaElement.appendChild(prodotto);

            // Forza il reflow per l'animazione
            window.getComputedStyle(prodotto).opacity;

            // Aggiunge la classe per l'animazione
            prodotto.classList.add('visible');

            //Incremento del contatore
            i++;
        }   
    }
)

// while (i < listaSpesa.length) {
//     // Creazione elemento della lista
//     const prodotto = document.createElement('li');

//     //Contenuto del prdotto dall'Array
//     prodotto.textContent = listaSpesa[i];

//     //Append dell prodotto alla lista
//     listaElement.appendChild(prodotto);

//     //Incremento del contatore
//     i++;
    
// }

console.log(i);