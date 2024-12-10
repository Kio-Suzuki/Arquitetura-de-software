import HtmlStrategy from './src/comportamental/htmlStrategy.js';
import TxtStrategy from './src/comportamental/txtStrategy.js';
import CityFactory from './src/criacional/cityFactory.js';
import CityAdapter from './src/estrutural/cityAdapter.js';

const adapter = new CityAdapter();
adapter.obterCidades('./data/cidades-2.json'); 
const cities = adapter.getCidades();

const txtFormatter = new TxtStrategy();
const htmlFormatter = new HtmlStrategy();
const cityFactory = new CityFactory(txtFormatter);

const report = cityFactory.createCityReporter(cities);
console.log(report);
