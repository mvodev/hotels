
//Task3
// 10 minutes
const compCases = ['компьютер','компьютера','компьютеров']
export const getSpellCase = (quantity: number): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  const posInSpellCasesArray = quantity % 100 > 4 && quantity % 100 < 20
    ? 2
    : cases[quantity % 10 < 5 ? quantity % 10 : 5];
  return compCases[posInSpellCasesArray];
}

