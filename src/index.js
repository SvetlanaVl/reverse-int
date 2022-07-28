module.exports = function reverse (n) {
  const mathN = Math.abs(n);
  const arr = Array.from(mathN.toString());
  const arrRev = arr.reverse();
  const str = arrRev.join("");
  return Number(str);
}
