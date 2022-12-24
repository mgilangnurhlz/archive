//? array
const angka = [-3, 1, 8, 9, 1, -5, 3, 2, -7, 9];

//* filter
const newAngkaFilter = angka.filter((a) => a >= 3);
console.log(newAngkaFilter);

//* map
const newAngkaMap = angka.map((a) => a * 4);
console.log(newAngkaMap);

//* reduce
const newAngkaReduce = angka.reduce((acc, cur) => acc + cur);
console.log(newAngkaReduce);

//? coba
const hasil = angka
  .filter((a) => a > 1)
  .map((a) => a * 8)
  .reduce((acc, cur) => acc + cur);

console.log(hasil);
