console.log("exercise 3");

/*Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

     // Definir una función llamada calculateSumAndProduct que toma un array de números como argumento
function calculateSumAndProduct(numbers) {
    // Utilizar el método reduce() para calcular la suma de los números
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Utilizar el método reduce() para calcular el producto de los números
          const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

    // Imprimir el resultado de la suma y el producto
     console.log(`Given an array [${numbers}], The sum is ${sum}. The product is ${product}.`);
}

     // Ejemplo: dado el array [1, 2, 3, 4]
calculateSumAndProduct([1, 2, 3, 4]);
