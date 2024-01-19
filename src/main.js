import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';


import data from './data/dataset.js';
// Llamando a root de html
const contenedor = document.querySelector("#root");
// renderItems(data);
contenedor.appendChild(renderItems(data));


const selectFilter = document.querySelector('select[data-testid="select-filter"]');
const optionValue = document.querySelector('option[value]')
selectFilter.addEventListener('change', function() {
  const filteredData = filterData(data, 'cruisePrice', 'Price $1000-$1500');
  console.log(filterData(data, 'cruisePrice', 'Price $1000-$1500'));
  contenedor.innerHTML = '';
  contenedor.appendChild(renderItems(filteredData));
})

console.log(filterData, renderItems(data), data);