
export const renderItems = (data) => {
  //console.log(data);

  const cruiserContainer = document.createElement('ul');
  data.forEach(crucero => {
    
    const liName= document.createElement('li');
    const dlList= document.createElement('dl');
    const ddPort= document.createElement('dd');
    const ddPrice= document.createElement('dd');
    const ddComent= document.createElement('dd');

    liName.innerHTML = `${crucero.name}`;
    dlList.innerHTML = ``;
    ddPort.innerHTML = `${crucero.facts.departurePort}`;
    ddPrice.innerHTML = `${crucero.facts.cruisePrice}`;
    ddComent.innerHTML = `AVG PER PERSON`;

    liName.append(dlList, ddPort, ddPrice, ddComent)
    cruiserContainer.appendChild(liName);
    

  });

  
  return cruiserContainer;
};


