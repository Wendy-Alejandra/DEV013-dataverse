
export const renderItems = (data) => {
  // console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  const cruceros = document.querySelector('ul');
  data.forEach(data => {
    // console.log(data);
    const li = document.createElement('li');
    // const cruisePrice = document.createElement('p');
    li.innerHTML = `${data.name} ${data.facts.departurePort}`;
    cruceros.appendChild(li);
    // cruisePrice.innerHTML = `${data.facts.cruisePrice}`;
  });
  
  return data;
};


