import { filterData, sortData, sortDataByPrice, computeStats} from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

/* root container rendering*/
const contenedor = document.querySelector("#root");
contenedor.appendChild(renderItems(data));

/* calling attributes through constant declaration */
const selectFilter = document.querySelector('select[data-testid="select-filter"]');
const selectSort = document.querySelector('select[data-testid="select-sort"]');
const selectSortByPrice = document.querySelector('select[data-testid="select-sort-price"]');
const buttonStats = document.querySelector('button[data-testid="statistics"]');
const button = document.querySelector('button[data-testid="button-clear"]');
const textStats = document.getElementById('text');
const navMenu = document.querySelector('nav[id="menu"]');
const openMenu = document.querySelector('button[class="open-menu"]');
const closeMenu = document.querySelector('button[class="close-menu"]');


/* adding event listeners to show on screen*/
/* filtering and ordering by ship name and cruise price*/

selectFilter.addEventListener("change", function (e) {
  const filteredData = filterData(data, "cruisePrice", e.target.value);
  contenedor.innerHTML = "";
  contenedor.appendChild(renderItems(filteredData));
  selectSort.addEventListener("change", function (e) {
    const orderFilterName = sortData(filteredData, "name", e.target.value);
    contenedor.innerHTML = "";
    contenedor.appendChild(renderItems(orderFilterName));
  });
  selectSortByPrice.addEventListener("change", function (e) {
    const orderPriceFilter = sortDataByPrice(filteredData, "cruisePrice", e.target.value);
    contenedor.innerHTML = "";
    contenedor.appendChild(renderItems(orderPriceFilter));
  });
  textStats.textContent= "";
});

/* ordering by ship name only*/
selectSort.addEventListener("change", function (e) {
  const orderData = sortData(data, "name", e.target.value);
  contenedor.innerHTML = "";
  contenedor.appendChild(renderItems(orderData));
});

/* ordering by cruise price only*/
selectSortByPrice.addEventListener("change", function (e) {
  const orderDataByPrice = sortDataByPrice(data, "cruisePrice", e.target.value);
  contenedor.innerHTML = "";
  contenedor.appendChild(renderItems(orderDataByPrice));
});

/* resetting all*/
button.addEventListener("click", function () {
  selectSortByPrice.selectedIndex = 0;
  selectSort.selectedIndex = 0;
  selectFilter.selectedIndex = 0;
  textStats.textContent = "";
  contenedor.innerHTML = "";
  contenedor.appendChild(renderItems(data));
  selectSortByPrice.addEventListener("change", function (e) {
    const orderDataByPrice = sortDataByPrice(data, "cruisePrice", e.target.value);
    contenedor.innerHTML = "";
    contenedor.appendChild(renderItems(orderDataByPrice));
  });
  selectSort.addEventListener("change", function (e) {
    const orderData = sortData(data, "name", e.target.value);
    contenedor.innerHTML = "";
    contenedor.appendChild(renderItems(orderData));
  });
});

/* updating statistics (average price) all cards and filtered cards*/
buttonStats.addEventListener('click', function(){
  if (selectFilter.value === 'Price') {
    textStats.textContent= computeStats(data);
  } else {
    const filteredData = filterData(data, "cruisePrice", selectFilter.value);
    textStats.textContent= computeStats(filteredData);
  }
});

/* opening-closing hamburguer menu for screen devices 600px and less */
openMenu.addEventListener('click', () => {
  navMenu.classList.add("visible");
})
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove("visible");
})