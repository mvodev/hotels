// Task 6
// 1.5 hours
const outputToConsole = (n: number):void => {

  const addWhitespace = (numberOfSpaces: number) => {
    let result = '';
    for(let s=0;s<numberOfSpaces;s++){
      result+=' ';
    }
    return result;
  }

  if (n <= 0 || !Number.isInteger(n)) return;
  const multiplicationMatrix: number[][] = [];
  const digitsOfMaxNumberInMatrix = (n*n).toString().length;
  const digitOfMiltiplier = n.toString().length;
  for(let i=1; i <= n; i++) {
    multiplicationMatrix.push([])
    const row = i-1;
    for (let j=1; j<=n; j++) {
      multiplicationMatrix[row].push((row+1)*j);
    }
  }
  let row = addWhitespace(digitOfMiltiplier);
  for (let i = 1; i <= n; i++) {
    const digitsOfValue = i.toString().length;
    row += addWhitespace(digitsOfMaxNumberInMatrix - digitsOfValue) + ' ' + i;
  }
  console.log(row);
  row = '';
  for (let j=0;j<n;j++) {
    for (let i = 0; i <= n; i++) {
      if (i === 0) {
        row += addWhitespace(digitOfMiltiplier - (j+1).toString().length) + (j + 1);
      } else {
        const valueToShow = multiplicationMatrix[j][i-1];
        const digitOfValueToShow = valueToShow.toString().length;
        const whitespaceswToAdd = addWhitespace(digitsOfMaxNumberInMatrix-digitOfValueToShow) + ' ';
        row += whitespaceswToAdd+valueToShow;
      }
    }
    console.log(row);
    row='';
  }
}
outputToConsole(5);