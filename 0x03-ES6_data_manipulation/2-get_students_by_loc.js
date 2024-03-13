function getStudentsByLocation(array, city) {
  return array.filter((person) => person.location === city);
}

export default getStudentsByLocation;
