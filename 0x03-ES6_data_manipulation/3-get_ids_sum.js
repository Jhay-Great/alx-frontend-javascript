function getStudentIdSum(array) {
  return array.reduce((total, person) => total + person.id, 0);
}

export default getStudentIdSum;
