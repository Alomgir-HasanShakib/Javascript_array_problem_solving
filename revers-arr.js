// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ["red", "blue", "green", "yellow", "orange"];
const reversColors = [];
// let spliteArr = reversColors.splice("");

// console.log(spliteArr);

// for (const color of colors) {
//   console.log(color);
//   spliteArr = color + " " + spliteArr;
// }
// console.log(spliteArr);
// // const result = spliteArr.join("");
// // console.log(result);

for (let i = 0; i < colors.length; i++) {
  reversColors.unshift(colors[i]);
}
console.log(reversColors);
