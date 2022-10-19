// ==Array []
// Length, push , pop, shift, unshift, toString, join,[], splice, slice, indexOf
// Short, reverse

const fruits = [
  "banana",
  "sachindara",
  "apple",
  "orange",
  "Tomato",
  "pineapple",
];
const sach = ["sa", "sas", "sasddsa"];
const vegi = ["potato", "carrot"];

// console.log(fruits.length);

// const removedItem = fruits.pop();
// fruits.push("watermelon","sachindra");
// let add = fruits.push("sachindra");
// const a = fruits.shift();

// fruits.unshift("watermelon", "fruits");
// const subFruits = fruits.splice(2, 4);
// const val = fruits.splice(1, 4, "sam");
// const val = fruits.indexOf("pineapple");
// vegi.push("rosana");
// fruits.reverse(1,3);
// const newBucket = [...fruits, ...vegi];
// console.log(newBucket);
// fruits.sort((a, b) => b - a);
// console.log(fruits);

// Array Loops
// for, while, do/while
// forEach, map,  filter, find, some, every, reduce
//for in, for of

// console.log(newBucket);
// for (let i = 0; i < newBucket.length; i++) {
//   console.log(newBucket[i]);
// }

// let i = 0;
// while (i < newBucket.length) {
//   console.log(newBucket[i]);
//   i++;
// }
// do {
//   console.log(newBucket[i]);
//   i++;
// } while (i < newBucket.length);

// newBucket.forEach((item, i) => {
//   console.log(item, i);
// });
// const newArg = fruits.map((item, i) => {
//   console.log(item, i);
//    return "SKU-" + item;
// });
// const newArg = newBucket.map((item, i) => {
//   console.log(item, i);
//   return "SKU-" + item;
// });

// const newArg = newBucket.filter((item, i) => {
//   console.log(item, i);
//   return !item.includes("p");
// });

// find, some, every,




// const newArg = newBucket.find((item, i) => {
//   return item.includes("p");
// });

// const newArg = newBucket.some((item, i) => {
//   return item.includes("p");
// });

// const newArg = newBucket.every((item, i) => {
//   return item.includes("a");
// });

// const bank = [3, 34, 5, 4, 5, 7, 5, 8, 9];

// const totalMoney = bank.reduce((subTtl, value) => {
//   console.log(subTtl);
//   return subTtl + value;
// }, 0);
// console.log(totalMoney);
