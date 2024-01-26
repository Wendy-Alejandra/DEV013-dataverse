import { filterData, sortData, sortDataByPrice, computeStats} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe('filterData collection tests', () => {
  const filter1 = [fakeData[0]];
  it('Should filter by price range from 1000-1500', () => {
    const result = filterData(fakeData, 'cruisePrice', '1000-1500');
    expect(result).toStrictEqual(filter1);
  });
  const filter2 = [fakeData[1], fakeData[2]];
  it('Should filter by price range from 1500-2000', () => {
    expect(filterData(fakeData, 'cruisePrice', '1501-2000')).toStrictEqual(filter2);
  });
  const filter3 = [];
  it('Should filter by price range from 2000-2500', () => {
    const result = filterData(fakeData, 'cruisePrice', '2001-2500');
    expect(result).toStrictEqual(filter3);
  });
  const filter4 = [];
  it('Should filter by price range from 2500-3000', () => {
    const result = filterData(fakeData, 'cruisePrice', '2501-3000')
    expect(result).toStrictEqual(filter4);
  });
});

describe('Test de la función sortData', () => {
  const Order = [fakeData[1],fakeData[2],fakeData[0]];
  describe('La función sortData debe ordenar de manera ascendente y descendente por nombre', () => {
    it('Ordena de manera asscendente por nombre', () => {
      
      const result = sortData(fakeData,"name","asc");
      expect(result).toEqual(Order);
    });
    it('Ordena de manera descendente por nombre', () => {
      const result = sortData(fakeData,"name","desc");
      expect(result).toEqual(Order.reverse());
    });
  });
});

describe('Test de la función sortDataByPrice ', () => {
  const resultOrder = [fakeData[0],fakeData[2],fakeData[1]];
  const resultOrder2 = [fakeData[1],fakeData[2],fakeData[0]];
  describe('La función sortData debe ordenar de manera ascendente y descendente por precio', () => {
    it('Ordena de manera asscendente por precio', () => {
      
      const result = sortDataByPrice(fakeData,"cruisePrice","low");
      expect(result).toEqual(resultOrder);
    });
    it('Ordena de manera descendente por precio', () => {
      const result = sortDataByPrice(fakeData,"cruisePrice","high");
      expect(result).toEqual(resultOrder2);
    });
  });
});

describe('ComputeStats function test', () => {
  it('Should return the average price per cruise per person', () => {
    const result = computeStats(fakeData);
    expect(result).toBe('The average price per person per cruise is 1633');
  })
})
