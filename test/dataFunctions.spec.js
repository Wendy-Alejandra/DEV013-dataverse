import { filterData, sortData, sortDataByPrice, computeStats} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

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

describe('sortData by name collection tests', () => {
  const Order = [fakeData[1],fakeData[2],fakeData[0]];
  describe('sortData function should order by name: ascendent and descendent', () => {
    it('Should sort by name: ascendent', () => {
      
      const result = sortData(fakeData,"name","asc");
      expect(result).toEqual(Order);
    });
    it('Should sort by name: descendent', () => {
      const result = sortData(fakeData,"name","desc");
      expect(result).toEqual(Order.reverse());
    });
  });
});

describe('sortDataByPrice collection tests', () => {
  const resultOrder = [fakeData[0],fakeData[2],fakeData[1]];
  const resultOrder2 = [fakeData[1],fakeData[2],fakeData[0]];
  describe('sortDataByPrice function should order by price: ascendent and descendent', () => {
    it('Should sort by price: ascendent', () => {
      const result = sortDataByPrice(fakeData,"cruisePrice","low");
      expect(result).toEqual(resultOrder);
    });
    it('Should sort by name: descendent', () => {
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
