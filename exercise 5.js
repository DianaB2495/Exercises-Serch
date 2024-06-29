console.log("exercise 5");
/*
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
    1. Write a command that prints out all of the people in the list.
    2. Write the command to remove "Dani" from the array.
    3. Write the command to remove "Juan" from the array.
    4. Write the command to move "Luis" to the front of the array.
    5. Write the command to add your name to the end of the array.
    6. Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
    7. Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/

  // Paso 1: Imprimir todos los nombres en la lista
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log("Lista de personas:");
for (let person of people) {
    console.log(person);
}

     // Paso 2: Eliminar "Dani" del array
let indexDani = people.indexOf("Dani");
if (indexDani !== -1) {
    people.splice(indexDani, 1);
}

         // Paso 3: Eliminar "Juan" del array
let indexJuan = people.indexOf("Juan");
if (indexJuan !== -1) {
    people.splice(indexJuan, 1);
}

           // Paso 4: Mover "Luis" al principio del array
let indexLuis = people.indexOf("Luis");
if (indexLuis !== -1) {
    let removedPerson = people.splice(indexLuis, 1); // Remover a Luis
    people.unshift(removedPerson[0]); // Agregar a Luis al inicio
}

         // Paso 5: Agregar tu nombre al final del array
let myName = "TuNombre"; // Reemplaza con tu nombre real
people.push(myName);

         // Paso 6: Iterar a través del array y salir después de imprimir "Maria" usando break
console.log("Iteración con break:");
for (let person of people) {
    console.log(person);
    if (person === "Maria") {
        break;
    }
}

      // Paso 7: Encontrar el índice donde se encuentra "Maria"
let indexMaria = people.indexOf("Maria");
console.log("Índice de 'Maria' en el array:", indexMaria);

  // Imprimir el array final
console.log("Array final después de realizar las operaciones:");
console.log(people);

