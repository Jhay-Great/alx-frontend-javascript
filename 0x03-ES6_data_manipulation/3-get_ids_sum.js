import getListStudents from './0-get_list_students';

function getStudentIdSum(array) {
  return array.reduce((total, person) => total + person.id, 0);
}

console.log(getStudentIdSum(getListStudents()));
