// 40 minutes
export const roundTo5 = (n:number) => {
  const remains = n % 5;
  if (remains === 0) return n;
  if (Math.abs(remains) <= 2.5) {
    return Math.round(n - remains);
  }
  return n >= 0 ? Math.round(n - remains + 5) : Math.round(n - 5 - remains); 
}