/*function updateStudentGradeByCity(array, city, newGrade) {
  array.filter((city) => {
    console.log(city);
    return city.map((student) => {
      if (student.id === newGrade.id) {
        return student.grade = newGrade.grade;
      }
    })
  })
} */

function updateStudent(array, city, grades) {
  const filtered = array.filter((student) => student.city === city);
  const graded = filtered.map((student) => {
    console.log(grades, grades.id);
    if (student.id === grades.id) { 
      return {...student, grade: grades.grade};
    }
  });
  console.log(filtered, graded);
  /*const students = array.map((student) => student);
  const filteredStudents = students.filter((student) => student.city === city);
    return (filteredStudents);
    */
}

const grade = [
  {id: 1, grade: 88}, {id: 2, grade: 85}, {id: 3, grade: 90},
];
const students = [
  {id: 1, name: 'James', city: 'Accra'},
  {id: 2, name: 'Joan', city: 'Accra'},
  {id: 3, name: 'Joseph', city: 'Kumasi'},
];

console.log(updateStudent(students, 'Accra', grade));
//console.log(updateStudentGradeByCity(students, 'Accra', grade));

/**
 * want to update the grade of all the student in a specific city
 *  - get the students in a specific city
 *  - update their grade of each student in that city
 *
 * student array
 * filter the student array by city to get only the students in that city
 * to get each student and update their grade
 * loop through all the students and match them together by their ids
 * map the students by their ids
 */
