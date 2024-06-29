console.log("exercise 4");

/*
/Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/


// Definir arrays para los cursos de dos estudiantes
const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];

// Array para almacenar los cursos en común
const commonCourses = [];

// Iteración sobre los cursos del primer estudiante
for (let course1 of student1Courses) {
    console.log(course1); // Imprime cada curso del primer estudiante
       // Iteración sobre los cursos del segundo estudiante
    for (let course2 of student2Courses) {
        // Compara si el curso del primer estudiante está presente en los cursos del segundo estudiante
        if (course1 === course2) {
            commonCourses.push(course1); // Agrega el curso en común al array commonCourses
     }
 }
}

  // Imprimir los cursos en común encontrados
console.log("Cursos en común: " + commonCourses.join(", "));

  // ========== Resolviendo con filter y includes ==========

   // Utilizar el método filter en student1Courses para encontrar los cursos en común con student2Courses
const commonCourse2 = student1Courses.filter(course1 => student2Courses.includes(course1));

  // Imprimir los cursos en común encontrados utilizando filter e includes
console.log(commonCourse2);
