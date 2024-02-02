// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

const numbers = ["Tom", "Tim", "Tin", "Tik"];
// let singleStr = [];
// const test = numbers.toString();
let str = "";

for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
  //   singleStr.join("numbers[i");

  str += "" + numbers[i] + "";
}

console.log(`"${str}"`);
