export default class CityFactory {
  constructor(formatter) {
    this.formatter = formatter;
  }

  createCityReporter(cities) {
    return this.formatter.format(cities);
  }
}