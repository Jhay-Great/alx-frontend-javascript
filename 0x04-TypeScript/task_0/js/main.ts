interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
};

const student1: Student = {
  firstName: 'John',
  lastName: 'Moyes',
  age: 18,
  location: 'Accra',
};

const student2: Student = {
  firstName: 'Elsie',
  lastName: 'Mahama',
  age: 20,
  location: 'Accra',
};

const studentsList: Student[] = [student1, student2];

const renderTable = function(): void {
  const table = document.createElement('table');
  const tableHeader = document.createElement('thead');
  const tableBody = document.createElement('tbody');
  const headRow = document.createElement('tr');
  const firstNameHeader = document.createElement('th');
  const locationHeader = document.createElement('th');

  firstNameHeader.textContent = 'First name';
  locationHeader.textContent = 'Location';

  headRow.appendChild(firstNameHeader);
  headRow.appendChild(locationHeader);
  tableHeader.appendChild(headRow);

  studentsList.forEach(student => {
    const bodyRow = document.createElement('tr');
    const firstNameData = document.createElement('td');
    const locationData = document.createElement('td');

    firstNameData.textContent = student.firstName; 
    locationData.textContent = student.location;

    bodyRow.appendChild(firstNameData);
    bodyRow.appendChild(locationData);
    tableBody.appendChild(bodyRow);

  });

  table.appendChild(tableHeader); 
  table.appendChild(tableBody); 
}

