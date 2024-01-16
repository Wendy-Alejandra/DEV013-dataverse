import { example } from './dataFunctions.js';
import { renderItems } from './view.js';


import data from './data/dataset.js';
const container = document.querySelector("#root");
container.appendChild(renderItems(data));

console.log(example, renderItems(data), data);