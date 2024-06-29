console.log("exercise 2");

/*Exercise #2 (sugerencia map() )
Write a function that:
    • Takes in an array of numbers.
    • Doubles the value of each number in the array.
    • Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

 // Definir la función doubleNumbers que toma un array de números como argumento
function doubleNumbers(numbers) {
    // Utilizar el método map() para iterar sobre cada elemento del array
// y retornar un nuevo array con cada número duplicado
    let doubledArray = numbers.map(num => num * 2);

    // Imprimir el nuevo array actualizado
    console.log(doubledArray);
}

 // Ejemplo: dado el array [1, 2, 4, 5]
doubleNumbers([1, 2, 4, 5]);
