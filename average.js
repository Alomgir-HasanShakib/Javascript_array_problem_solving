/**
 * Problem--
 * Given array of numbers, write a function called "getAverage" that calculates and returns the average of all the numbers in the array .
 * Example Usage--
 *  console.log(getAverage(1, 2, 3, 4, 5)); //output is : 3
 *  console.log(getAverage(10, 20, 30)); // output is : 20
 */

// sum all the numbers given in the array
// division all the numbers with arrays elements lenght
function getAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(getAverage([1, 2, 3, 4]));
