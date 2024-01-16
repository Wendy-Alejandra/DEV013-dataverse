import { example } from './dataFunctions.js';
import { renderItems } from './view.js';


import data from './data/dataset.js';

const contenedor = document.querySelector("#root");
// renderItems(data);
contenedor.appendChild(renderItems(data));


console.log(example, renderItems(data), data);