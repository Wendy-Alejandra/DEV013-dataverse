
export const renderItems = (data) => {

  // Aquí comienza tu código y puedes retornar lo que tu necesites

  const contenedorCruceros = document.createElement('ul');
  data.forEach(crucero => {
    const image = document.createElement('img');
    const liName = document.createElement('li');
    const ddPort = document.createElement('dd');
    const ddPrice = document.createElement('dd');
    const ddDescription = document.createElement('dd');

    
    image.setAttribute('itemprop', 'image');
    image.setAttribute('src', `${crucero.imageUrl}`);
    liName.setAttribute('itemscope', '');
    liName.setAttribute('itemtype', 'name');
    ddPort.setAttribute('itemprop', 'departureBoatTerminal');
    ddPrice.setAttribute('itemprop', 'totalPrice');
    ddDescription.setAttribute('itemprop', 'description');
    liName.innerHTML = `${crucero.name}`;
    ddPort.innerHTML = `${crucero.facts.departurePort}`;
    ddPrice.innerHTML = `${crucero.facts.cruisePrice}`;
    ddDescription.innerHTML = `AVG PER PERSON`;
    // ul.setAttribute('itemscope=')
    liName.append(ddPort, ddPrice, ddDescription);
    contenedorCruceros.append(image, liName); /*esto va en main.js*/

  });  
  return contenedorCruceros;
};


