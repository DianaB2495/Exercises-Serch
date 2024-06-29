console.log("exercise 1");

/*Exercise #1 ( sugerencia join() )
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}
printOutString();
Complete the function to print out the string: This is a sentence.
*/


let arr = ["This", "is", "a", "sentence."];
function printOutString() {
      // Utilizar el método join() para unir los elementos del array en una cadena
    let sentence = arr.join(' ');

      // Imprimir la cadena
    console.log(sentence);
}

  // Llamar a la función para que imprima la frase completa
printOutString();
