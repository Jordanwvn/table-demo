'use strict';

var table = document.getElementById('table_content');
var data = [];

var cars = [{
    make: 'honda',
    model: 'accord',
    year: 2011,
    mileage: 87000
  },
  {
    make: 'toyota',
    model: 'corolla',
    year: 1999,
    mileage: 213000
  },
  {
    make: 'ford',
    model: 'escort',
    year: 1993,
    mileage: 9800
  }];

  for (var i = 0; i < cars.length; i++) {
    data.push(
      '<td>' + cars[i].make + '</td>' +
      '<td>' + cars[i].model + '</td>' +
      '<td>' + cars[i].year + '</td>' +
      '<td>' + cars[i].mileage + '</td>'
    )
  }

var newRow;

for (var j = 0; j < data.length; j++) {
  newRow = document.createElement('tr');
  newRow.innerHTML = data[j];
  table.appendChild(newRow);
}
