import { filterData} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe('Coleccion de test de filterData', () => {

  it('Deberia de filtrar el precio de los cruceros filterData', () => {
    expect(filterData(fakeData, 'cruisePrice', '1000-1500')).toStrictEqual([{"description": "Symphony of the Seas, parte de la flota de Royal Caribbean Group, es el crucero más grande del mundo. Con un ambiente lujoso y emocionante, ofrece una experiencia única de primer nivel. Explora destinos exóticos, disfruta de deliciosa gastronomía y participa en actividades emocionantes. Con una eslora impresionante, este barco ha sido construido con tecnología de vanguardia. Disfruta de tus vacaciones con comodidades de primera clase y un itinerario que te llevará a lugares inolvidables como Miami, Cococay, Cozumel, Roatán, Puerto Costa Maya.", "facts": {"cruiseDate": "2024-05-01", "cruisePrice": 1500, "departurePort": "Miami", "durationInDays": 7, "shipClass": "Clase Oasis", "shipSize": 362, "visitingPorts": "Miami, Cococay, Cozumel, Roatán, Puerto Costa Maya"}, "id": "1", "imageUrl": "https://github.com/Wendy-Alejandra/DEV013-dataverse/blob/main/src/data/images/symphonyOfTheSeasCaribe.jpeg?raw=true", "name": "Symphony of the Seas", "shortDescription": "Descubre la grandeza en Symphony of the Seas, el crucero más grande del mundo. ¡Aventuras emocionantes te esperan!"}]);
  });
});

