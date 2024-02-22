// Arrays
const values = [3, 11, 7, 2, 9, 10];

let sum = 0;
values.forEach( i => {
  sum += i;
});
console.log(sum);

let max = -Infinity;
for (let i = 0; i < values.length; i++) {
  if (values[i] > max) {
    max = values[i];
  }
}
console.log(max);

let min = Infinity;
for (let i = 0; i < values.length; i++) {
  if (values[i] < min) {
    min = values[i];
  }
}
console.log(min);