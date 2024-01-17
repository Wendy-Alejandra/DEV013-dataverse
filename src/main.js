import { filterByPrice } from './dataFunctions.js';
import { renderItems } from './view.js';


import data from './data/dataset.js';
// Llamando a root de html
const contenedor = document.querySelector("#root");
// renderItems(data);
contenedor.appendChild(renderItems(data));


console.log(filterByPrice, renderItems(data), data);