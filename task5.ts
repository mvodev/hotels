// Task 5
// 50 minutes
export const doubleIntersection = (arr1: number[], arr2: number[]):number[] => {
  const valuesMap1 = new Map();
  const valuesMap2 = new Map();
  arr1.forEach(elem=>{
    if (valuesMap1.has(elem)) {
      const prevValue = valuesMap1.get(elem);
      valuesMap1.set(elem, prevValue+1)
    } else valuesMap1.set(elem,1);
  });
  arr2.forEach(elem=>{
    if (valuesMap2.has(elem)) {
      const prevValue = valuesMap2.get(elem);
      valuesMap2.set(elem, prevValue+1)
    } else valuesMap2.set(elem,1);
  });
  const result: number[] = [];
  for (const [key, value] of valuesMap1) {
    if (valuesMap2.has(key) && value>=2 && valuesMap2.get(key) >=2 ){
      result.push(key);
    }
  };
  return result.sort((a,b)=>a-b);
}