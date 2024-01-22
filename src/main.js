
import { renderItems } from './view.js';


import data from './data/dataset.js';
import { sortData } from './dataFunctions.js';
// Llamando a root de html
const contenedor = document.querySelector("#root");
// renderItems(data);
contenedor.appendChild(renderItems(data));


const selectSort= document.querySelector('select[data-testid="select-sort"]');

selectSort.addEventListener('change',function(e){
    contenedor.innerHTML = '';
    contenedor.appendChild(renderItems(sortData(data, 'name', 'asc')));
    console.log(data);

});