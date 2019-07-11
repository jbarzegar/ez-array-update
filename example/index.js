const updateArray = require("../dist/ez-array-update");

const sampleArray = [1, 2, 3, 4];
const numberFilter = element => element === 2;
const updatedArrayOfNumbers = updateArray(sampleArray, numberFilter, 1000);
console.log(updatedArrayOfNumbers); // [1, 1000, 3, 4]

const arrOfObjects = [
  { name: "James", age: 21 },
  { name: "Rob", age: 25 },
  { name: "Tegan", age: 22 },
  { name: "Alex", age: 21 },
  { name: "Kacee", age: 25 }
];

const nameFilter = element => element.name.toLowerCase() === "james";
const updateData = { age: 300 };
const newFriends = updateArray(arrOfObjects, nameFilter, updateData);

console.log(
  newFriends
); /* returns...
[
  { name: 'James', age: 300 },
  { name: 'Rob', age: 25 },
  { name: 'Tegan', age: 22 },
  { name: 'Alex', age: 21 },
  { name: 'Kacee', age: 25 }
]
*/
