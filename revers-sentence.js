// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = "I am a hard working person";
const splite = statement.split(" ");
let reversStatement = "";
for (const s of splite) {
  //   console.log(s);
  reversStatement = s+ " " + reversStatement;
}
console.log(reversStatement);
