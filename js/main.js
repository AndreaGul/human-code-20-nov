'use strict';

// stampa(): scrivere una funzione che, dato un array in input, restituisca una stringa contenente tutti gli elementi dell'array, separati da una virgola
// defisco una funzione stampa, array tot elementi e la stampiamo

let risultato = stampa();

function stampa() {
  const elementi = [1, 2, 3, 4, 5];

  console.log(`${elementi}`);
}

// unisci(): scrivere una funzione che, dati due array A e B in input, restituisca un nuovo array C con tutti gli elementi di A e B
// creaiamo due array A e B e la somma tra i due la mettiamo in C
const A = [1, 2, 3, 4];
const B = [1, 2, 3, 4];

function unisci(A, B) {
  let C = [];

  //tramite un ciclo inseriamo gli elementi di A nell'array C
  for (let i = 0; i < A.length; i++) {
    C.push(A[i]);
  }

  //tramite un ciclo inseriamo gli elementi di B nell'array C
  for (let j = 0; j < B.length; j++) {
    C.push(B[j]);
  }

  // ritorna array C
  return C;
}
let C = unisci(A, B);
console.log(C);

// cercaIndice(): scrivere una funzione che, dato un array A in input e un elemento E, restituisca l'indice della posizione in cui si trova tale elemento all'interno di A. Se l'elemento E non è presente in A, la funzione deve restituire il valore -1.

// dato un array A tramite un prompt dato un valore, se questo valore e' contenuto in a restituisce i e non e' contenuto restituisce -1
const A3 = [1, 2, 3, 4];
let elementoUtente = 3;

function cercaIndice(A3, elementoUtente) {
  for (let i = 0; i < A3.length; i++) {
    if (A3[i] === elementoUtente) {
      //ritorna l'indice dell'elemento nell'array
      return i;
    }
  }
  return -1;
}
const elementoPosizione = cercaIndice(A3, elementoUtente);
console.log(elementoPosizione);
