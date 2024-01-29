// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  if (value === '1000-1500') {
    return data.filter(viaje => viaje.facts[filterBy] >= 1000 && viaje.facts[filterBy] <= 1500);
  } else if (value === '1501-2000') {
    return data.filter(viaje => viaje.facts[filterBy] >= 1501 && viaje.facts[filterBy] <= 2000);
  } else if (value === '2001-2500') {
    return data.filter(viaje => viaje.facts[filterBy] >= 2001 && viaje.facts[filterBy] <= 2500);
  } else if (value === '2501-3000') {
    return data.filter(viaje => viaje.facts[filterBy] >= 2501 && viaje.facts[filterBy] <= 3000);
  }
};
  
export const sortData = (data, sortBy, sortOrder) => {
  const orderData = data.toSorted((a,b) => {
    if(sortOrder === 'asc'){    
      if(a[sortBy] === b[sortBy]){
        return 0;
      }
      if(a[sortBy]< b[sortBy]){
        return -1;
      }
      return 1;
    }
    else {
      if(a[sortBy] === b[sortBy]){
        return 0;
      }
      if (a[sortBy] > b[sortBy]){
        return -1;
      }
      return 1;
    } 
  });
  return orderData;
};

export const sortDataByPrice = (data, sortBy, sortOrder) => {
  const orderDataByPrice = data.toSorted((a,b) => {
    if(sortOrder === 'low'){
      if(a.facts[sortBy] === b.facts[sortBy]){
        return 0;
      }
      if(a.facts[sortBy]< b.facts[sortBy]){
        return -1;
      }
      return 1;
    }
    else {
      if(a.facts[sortBy] === b.facts[sortBy]){
        return 0;
      }
      if (a.facts[sortBy] > b.facts[sortBy]){
        return -1;
      }
      return 1;
    }
  })
  return orderDataByPrice;
};

/*el método reduce accede directamente al array data y lo recorre*/
export const computeStats = (data) => {
  const sumPrice = data.reduce((accumulator, currentValue) => accumulator + currentValue.facts.cruisePrice, 0);
  const numberOfItems = data.length;

  const avgPrice = Math.round(sumPrice / numberOfItems)  ;
  return `The average price per person per cruise is ${avgPrice}`;
};

