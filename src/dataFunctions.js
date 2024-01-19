// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  if (value === 'Price $1000-$1500') {
    return data.filter(viaje => viaje.facts[filterBy] >= 1000 && viaje.facts[filterBy] <= 1500);
  } else if (value === 'Price $1500-$2000') {
    return data.filter(viaje => viaje.facts[filterBy] >= 1501 && viaje.facts[filterBy] <= 2000);
  } else if (value === 'Price $2001-$2500') {
    return data.filter(viaje => viaje.facts[filterBy] >= 2001 && viaje.facts[filterBy] <= 2500);
  } else if (value === 'Price $2501-$3000') {
    return data.filter(viaje => viaje.facts[filterBy] >= 2501 && viaje.facts[filterBy] <= 3000);
  }
};
  
/*  if (value >= 1000 && value <= 1500) {
    return data.facts.cruisePrice.filter(price => price[filterBy] === value); 
  } else {
    return `No hay disponibilidad de cruceros con esos precios`;
  }*/
/*cruisePrice >= 1000 && cruisePrice <= 1500
  cruisePrice >= 1501 && cruisePrice <= 2000
  cruisePrice >= 2001 && cruisePrice <= 2500
  cruisePrice >= 2501 && cruisePrice <= 3000*/



export const sortData = (data, sortBy, sortOrder) => {
  return [];
};

export const computeStats = (data) => {
  return '';
};
