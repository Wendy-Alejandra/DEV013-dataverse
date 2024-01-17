// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterByPrice = (data) => {
  const cruisePrice = `${data.facts.cruisePrice}`;
  if (cruisePrice >= 1000 && cruisePrice <= 1500) {
    return cruisePrice.filter();
    // console.log(cruisePrice);
  } else if (cruisePrice >= 1501 && cruisePrice <= 2000) {
    const price1501_2000 = data.filter(price => price.facts.cruisePrice)
    return price1501_2000;
  } else if (cruisePrice >= 2001 && cruisePrice <= 2500) {
    const price2001_2500 = data.filter(price => price.facts.cruisePrice)
    return price2001_2500;
  } else if (cruisePrice >= 2501 && cruisePrice <= 3000) {
    const price2501_3000 = data.filter(price => price.facts.cruisePrice)
    return price2501_3000;
  }

};

export const sortByPrice = () => {
  return [];
};

export const sortByShipName = () => {
  return '';
};

export const sortPrice = () => {
  return '';
};