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
  })
  return orderData;
};


