// 1-masala

// function getObjectKeys(obj) {
//     return Object.keys(obj);
//   }

//   const myObject = {
//     name: "Ali",
//     age: 25,
//     city: "Toshkent"
//   };

//   const keys = getObjectKeys(myObject);
//   console.log(keys);

// 2-masala

// function getObjectValues(obj) {
//     return Object.values(obj);
//   }

//   const myObject = {
//     name: "Ali",
//     age: 25,
//     city: "Toshkent"
//   };

//   const values = getObjectValues(myObject);
//   console.log(values);

// 3-masala

// function getObjectEntries(obj) {
//   return Object.entries(obj);
// }

// // Misol uchun foydalanish:
// const myObject = {
//   name: "Ali",
//   age: 25,
//   city: "Toshkent",
// };

// const entries = getObjectEntries(myObject);
// console.log(entries);

//4-masala

// function freezeObject(obj) {
//   return Object.freeze(obj);
// }

// const myObject = {
//   name: "Ali",
//   age: 25,
//   city: "Toshkent",
// };

// const frozenObject = freezeObject(myObject);

// frozenObject.age = 30;
// frozenObject.country = "O'zbekiston";
// delete frozenObject.city;

// console.log(frozenObject);

// 5-masala

// function getMiddleThreeElements(arr) {
//     const len = arr.length;

//     if (len < 3) {
//       return arr;
//     }

//     const mid = Math.floor(len / 2);

//     return arr.slice(mid - 1, mid + 2);
//   }

//   const myArray = [1, 2, 3, 4, 5, 6, 7];
//   const middleThree = getMiddleThreeElements(myArray);
//   console.log(middleThree);

// 6-masala

// function findLastIndex(arr, searchElement) {
//   return arr.lastIndexOf(searchElement);
// }

// const myArray = [1, 2, 3, 4, 2, 5, 2];
// const searchElement = 2;
// const lastIndex = findLastIndex(myArray, searchElement);

// console.log(lastIndex);

//7-masala

// function filterShortStrings(arr) {
//     return arr.filter(str => str.length < 4);
//   }

//   const myArray = ["apple", "cat", "dog", "tree", "a", "go"];
//   const shortStrings = filterShortStrings(myArray);

//   console.log(shortStrings);

// 8-masala

// function findThreeDigitMultipleOfFive(arr) {
//     return arr.find(num => num >= 100 && num < 1000 && num % 5 === 0);
//   }

//   const myArray = [12, 45, 789, 150, 3000, 125, 215];
//   const result = findThreeDigitMultipleOfFive(myArray);

//   console.log(result);

// 9-masala

// function transformArray(arr) {
//   let transformedArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       transformedArray.push(arr[i] ** 2);
//     } else {
//       transformedArray.push(arr[i] ** 3);
//     }
//   }

//   return transformedArray;
// }

// const myArray = [1, 2, 3, 4, 5];
// const transformed = transformArray(myArray);

// console.log(transformed);


//10-masala

