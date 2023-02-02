import { joinStrings } from "./task1";
describe('check join strings', () => {
  const cities = ['Москва', 'Санкт-Петербург', 'Воронеж'];
  it('test1', () => {
    const result = joinStrings(cities)
    expect(result).toStrictEqual('Москва, Санкт-Петербург, Воронеж.');
  });
});