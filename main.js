/* Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */
let shopping = [
    'Banane',
    'Pasta',
    'Tonno',
    'Ragu',
    'Pane'
]

let i = 0

while (i < shopping.length) {
    const shoppingList = shopping[i];
    console.log(shoppingList);

    const listElm = document.querySelector('.list_item');
    listElm.innerHTML += (shopping);
    break;

    i++
 }