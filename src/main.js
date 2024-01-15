import { example } from './dataFunctions.js';
import { renderItems } from './view.js';


import data from './data/dataset.js';
const contenedor = document.querySelector("ul");
// renderItems(data);
contenedor.innerHTML= renderItems(data);


console.log(example, renderItems(data), data);