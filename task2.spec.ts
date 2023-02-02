import { roundTo5 } from "./task2";

describe('check rouns function correct', () => {
  it('27 => 25', () => {
    const result = roundTo5(27)
    expect(result).toStrictEqual(25);
  });

  it('27.8 => 30', () => {
    const result = roundTo5(27.8)
    expect(result).toStrictEqual(30);
  });

  it('41.7 => 40', () => {
    const result = roundTo5(41.7)
    expect(result).toStrictEqual(40);
  });

  it('20 => 20', () => {
    const result = roundTo5(20)
    expect(result).toStrictEqual(20);
  });
  it('0 => 0', () => {
    const result = roundTo5(0)
    expect(result).toStrictEqual(0);
  });
  it('-25 => -25', () => {
    const result = roundTo5(-25)
    expect(result).toStrictEqual(-25);
  });
  it('-28 => -30', () => {
    const result = roundTo5(-28)
    expect(result).toStrictEqual(-30);
  });
  it('-31 => -30', () => {
    const result = roundTo5(-31)
    expect(result).toStrictEqual(-30);
  });
  it('28.005 => 30', () => {
    const result = roundTo5(28.005);
    expect(result).toStrictEqual(30);
  });
  it('-28.09455 => -30', () => {
    const result = roundTo5(-28.09455);
    expect(result).toStrictEqual(-30);
  });
});