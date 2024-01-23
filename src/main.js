import { filterData, sortData, sortDataByPrice } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

// Llamando a root de html
const contenedor = document.querySelector("#root");
// renderItems(data);
contenedor.appendChild(renderItems(data));

const selectFilter = document.querySelector('select[data-testid="select-filter"]');

selectFilter.addEventListener("change", function (e) {
  const filteredData = filterData(data, "cruisePrice", e.target.value);
  contenedor.innerHTML = "";
  contenedor.appendChild(renderItems(filteredData));
  selectSort.addEventListener("change", function (e) {
    const orderFilterName = sortData(filteredData, "name", e.target.value);
    contenedor.innerHTML = "";
    contenedor.appendChild(renderItems(orderFilterName));
    selectSortByPrice.addEventListener("change", function (e) {
      const orderPriceFilter = sortDataByPrice(filteredData, "cruisePrice", e.target.value);
      contenedor.innerHTML = "";
      contenedor.appendChild(renderItems(orderPriceFilter));
    });
  });
});

const selectSort = document.querySelector('select[data-testid="select-sort"]');
selectSort.addEventListener("change", function (e) {
  const orderData = sortData(data, "name", e.target.value);
  contenedor.innerHTML = "";
  contenedor.appendChild(renderItems(orderData));
});

const selectSortByPrice = document.querySelector('select[data-testid="select-sort-price"]');
selectSortByPrice.addEventListener("change", function (e) {
  const orderDataByPrice = sortDataByPrice(data, "cruisePrice", e.target.value);
  contenedor.innerHTML = "";
  contenedor.appendChild(renderItems(orderDataByPrice));
});

const button = document.querySelector('button[data-testid="button-clear"]');
button.addEventListener("click", function () {
  contenedor.innerHTML = "";
  contenedor.appendChild(renderItems(data));
});
