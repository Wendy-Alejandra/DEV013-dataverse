
export const renderItems = (data) => {

  // Aquí comienza tu código y puedes retornar lo que tu necesites

  const ul = document.createElement('ul');
  data.forEach(card => {
    const li = document.createElement('li');
    const image = document.createElement('img');
    const dlName = document.createElement('dl');
    const ddPort = document.createElement('dd');
    const ddPrice = document.createElement('dd');
    const ddDescription = document.createElement('dd');

    
    image.setAttribute('itemprop', 'image');
    image.setAttribute('src', `${card.imageUrl}`);
    li.setAttribute('itemscope', '');
    li.setAttribute('itemtype', 'name');
    li.setAttribute('class', 'cards');
    dlName.setAttribute('itemprop', 'name');
    ddPort.setAttribute('itemprop', 'departureBoatTerminal');
    ddPrice.setAttribute('itemprop', 'totalPrice');
    ddDescription.setAttribute('itemprop', 'description');

    dlName.innerHTML = `${card.name}`;
    ddPort.innerHTML = `Port: ${card.facts.departurePort}`;
    ddPrice.innerHTML = `$${card.facts.cruisePrice}`;
    ddDescription.innerHTML = `AVG PER PERSON`;
 
    li.append(image, dlName, ddPort, ddPrice, ddDescription);
    ul.append(li); 

  });  
  return ul;
};


