// -------------------------> For Each Method

// const products = [
//     {
//         product:'laptop',
//         count:2,
//         price:500,
//     },
//     {
//         product:'desktop',
//         count:3,
//         price:600,
//     },
//     {
//         product:'mobile',
//         count:5,
//         price:700,
//     }
// ]

// const newItems = products.forEach((product,index,)=>{
//     // return console.log(product.count * product.price)
//     return console.log(({total:product.count* product.price, type:product.product}))
// })

// let array = [1,2,3,4,42,1,3,2,4,8,5,6]
// count= {}

// array.forEach((item)=>{
//     if(count[item]){
//         count[item] = count[item] +1
//     }
//     else{
//         count[item] = 1
//     }
// })
// console.log(count)

// -------------------------> Map Method

// const products = [
//   {
//     product: "laptop",
//     count: 2,
//     price: 500,
//   },
//   {
//     product: "desktop",
//     count: 3,
//     price: 600,
//   },
//   {
//     product: "mobile",
//     count: 5,
//     price: 700,
//   },
// ];

// const newItems = products.map((item) => {
//   return ({total:item.price * item.count, type:`${item.product}`})
// });
// console.log(newItems);

// //node practice.js

// const numbers = ['1' , '2', '3']

// const number = numbers.map((item) => Number(item))
// console.log(numbers)
// console.log(number)

// -------------------------> Filter Method

// const products = [
//   {
//     product: "laptop",
//     count: 2,
//     price: 500,
//   },
//   {
//     product: "desktop",
//     count: 3,
//     price: 600,
//   },
//   {
//     product: "mobile",
//     count: 5,
//     price: 700,
//   },
// ];

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const even = numbers.filter(isEven);
// function isEven(item) {
//   return item % 2 === 0;
// }
// console.log(even);

// const newProducts = products.filter(isFilter)

// function isFilter(item){
//       return item.count > 3
// }
// console.log(newProducts)
// console.log(newProducts.map((item)=> item.product))

// // Methods to remove Duplicates
// let array = [1,2,3,4,42,1,3,2,4,8,5,6]
// console.log(Array.from(new Set(array)))

// const newDuplicates = array.filter((item,index,self)=>{
//     return self.indexOf(item) === index ;
// })
// console.log(newDuplicates)

//---------------------_Day -4 --------------------------//

// checking the number is prime Number or not
//a whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11)

// console.log(Math.sqrt(4))

/* ---> 1 // const checkingprime = (num) => {
  if (num < 1) {
    return false;
  }
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
};

if (checkingprime(13)) {
  console.log("it is a prime number");
} else {
  console.log("it is not a prime number");
} */

/* ---> 2 //let a = [2, 3, 4, 6, 7, 8, 9, 10, 11];

function isprime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++){
    if(num%i === 0){
      return false
    }
  }
  return true
}

let PrimeNumbers = a.filter(isprime);
// let PrimeNumbers = a.filter((item)=>isprime(item));

console.log(PrimeNumbers); */

// 3 -->Write a function to remove falsy values from an array. Solution

/*
function checkingFalsy(arr){
  return arr.filter((item)=> Boolean(item))
}

console.log(checkingFalsy([0, false, true, '', 'hello', undefined, null, 123])) */

//Anagram-------------------->

// let a = 'listen'
// let b = 'silent'
// console.log(a.split('').sort().join(''))
// console.log(b.split('').sort().join(''))

//Write a function to check if a given string is an anagram of another string. Solution
/*function hello  (a,b){
   const first =a.split('').sort().join('')
   const second = b.split('').sort().join('')
   
   return first === second
   
}
console.log(hello('listen','silent'))
console.log(hello('cello','world')) */

//Write a function to find the largest product of any two numbers within an array. Solution:

/*

function largestProduct (arr){
  arr.sort((a,b) => b-a);
   return arr[0] * arr[1]
}

console.log(largestProduct([4,5,3,3,4,5,1]))  //output -25
console.log(largestProduct([10,4,2,3,1,3]))// output - 40

*/







/*

//Write a function to find the smallest product of any two numbers within an array. Solution:

function largestProduct (arr){
  arr.sort((a,b) => a-b);
   return arr[0] * arr[1]
}
console.log(largestProduct([4,5,3,3,4,5,1])) // output 3

*/






//Write a function to find the missing number in an array of consecutive numbers. Solution

/*function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, current) => {
    return sum += current}, 0);

  return expectedSum - actualSum;
}

console.log(findMissingNumber([1,2,4])); // MISSING NUMBER - 3 */




//Write a function to capitalize the first letter of each word in a sentence. Solution

/*
function makingCapitallize(str){
  // return sentence.split(' ').map((word)=>word[0].toUpperCase() + word.slice(1)).join(' ')
  return str.split(' ').map((word)=> word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

console.log(makingCapitallize('hello world'))









*/

//Problem: Write a function to remove duplicates from an object array(object array read properly it means it is array of objects) based on a specific property. Solution

/*
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Charlie" },
  { id: 3, name: "Alice" }
]

function removeDuplicates (arr,prop){
  const uniqueArr = [];
  const propset = new Set(); //{}

  for(let obj of arr){
    if(!propset.has(obj[prop])){ // we are checking in propset whether 1 is there or not , 2 is there or not ....
      console.log(obj[prop])
      uniqueArr.push(obj)
      propset.add(obj[prop])
    }
  }
  return uniqueArr
}

console.log(removeDuplicates(students,"id"));







/* we can also do the above problem by using for each also 

const array = [
  {id:1, name:"sudheeer1"},
  {id:2, name:"sudheeer2"},
  {id:1, name:"sudheeer1"},
  {id:3, name:"sudheeer3"},
]

function removingDuplicatesFromObjectOfArray(arr,property){
  let newArr = [];
  let set = new Set()

   arr.forEach((object)=>{
        if(!set.has(object[property])){
          console.log(object[property])
          newArr.push(object)
          set.add(object[property])
          return
        }
        console.log("Already haved it",object[property])
   })
   
   console.log(set) // Set(3) { 1, 2, 3 }
   return newArr;
}

console.log(removingDuplicatesFromObjectOfArray(array,"id"))
console.log(removingDuplicatesFromObjectOfArray(array,"name"))


*/










/*

/*Certainly! This JavaScript solution aims to remove duplicates from an array of objects based on a specific property value.

Here is a step-by-step explanation of the solution:

1. Initialize two variables: `uniqueArr` as an empty array and `propset` as a new Set object. The `propset` will be used to keep track of the unique property values encountered.

2. Loop through each object `obj` in the `arr` array using a `for...of` loop.

3. Inside the loop, check if `propset` does not contain the property value of the current object (`obj[prop]`) using the `has` method of `Set`. This check ensures that only unique objects are added to `uniqueArr`.

4. If the property value is not found in `propset`, it means that it is a new value, so we add the object `obj` to the `uniqueArr` using the `push` method.

5. We also add the property value `obj[prop]` to the `propset` using the `add` method, ensuring that future objects with the same property value will be skipped.

6. Once the loop is finished, we return the `uniqueArr` array, which now contains only the unique objects based on the provided property.

For example, if we had an array `students` with objects representing students and we want to remove duplicates based on their "id" property, we can call the `removeDuplicates` function passing `students` and "id" as arguments: `removeDuplicates(students, "id")`.

The function will return the `uniqueArr` array containing only the students with unique "id" values, effectively removing any duplicates. */










//Problem: Write a JavaScript function to find the largest number in an array of numbers.

/*
let b = [1, 2, 3, 4, 5, 6];

function findingLargestNumber(arr) {
  let largestNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}
console.log("The Largest Number",findingLargestNumber(b));







*/
// By using for In loop also we can do it
/*
let c = [1, 2, 3, 4, 5, 6, 7, 10, 24,1000];

function finding(arr) {
  let largest = arr[0];

  for (let i in arr) {  
  console.log("At Index",i,"item is",arr[i] ) // when it comes to array i is index here ,not the item 
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(finding(c));

 */




// Write a JavaScript function that takes an array of numbers as input and returns a new array with only the even numbers from the original array

/*

function filtering(arr){
 return arr.filter((item)=> item %2 === 0)
}

console.log(filtering([1,2,3,4,5,6,4,10,12,14]))





*/







// Write a JavaScript function that takes a string as input and returns the same string with all duplicates removed


/*
// first method 
let str = "hello"  // reurn helo
function remove(str){
  let newStr = str.split('')
  console.log(newStr)
  let set = new Set(newStr)
  console.log(set) //Set(4) { 'h', 'e', 'l', 'o' }
  let array = Array.from(set)

   return array.join('')
}

console.log(remove(str))

*/


/*
function removeDuplicateFromString(str){
  let charArray = str.split('')
  console.log(charArray) // It returns the array of string items
  let uniqueArr = [...new Set(charArray) ]
  //----> it is in string form we are conveting it into array by using Array.from() method or by using like this

   let uniqueStr = uniqueArr.join('')

  return uniqueStr
}

console.log(removeDuplicateFromString('hello')) 

*/









//Problem: Write a JavaScript function that takes a string as input and returns the count of each character in the string as an object.

/*


let str = "helloWorld";

function CountElementInString(str) {
  let charCount = {};

  for (let i in str) {
    let char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

console.log(CountElementInString(str));

// we can also do it by for loop

function alternative(str) {
  let char = {};

  for (let i = 0; i < str.length; i++) {
    let charExist = str[i];
    console.log(charExist);
    if (char[charExist]) {
      char[charExist]++;
    } else {
      char[charExist] = 1;
    }
  }

  return char;
}

console.log(alternative(str)); */



//Check for Palindrome: Question: Write a function that takes in a string and returns true if it is a palindrome, false otherwise. Solution
/*
function Palindrome (str) {
  const ReversedStr = str.split('').reverse().join('')
  return ReversedStr === str
}

console.log(Palindrome('nun')) // returns true
console.log(Palindrome('sunny'))

*/
//FizzBuzz: Question: Write a function that prints numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz." For numbers which are multiples of both three and five, print "FizzBuzz." Solution:
/*

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(15)
*/

// Find Duplicate Elements: Question: Write a function that takes in an array of numbers and returns an array containing a duplicate elements. Solution

/*
function findDuplicates(numbers) {
  const Duplicates = [];
  const counts = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;

    if (counts[num] > 1) {
      Duplicates.push(num);
    }
  }
  console.log(counts)
  return Duplicates;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 3]));

*/

//Count the number of vowels in a string: Question: Write a function that takes in a string and returns the count of vowels (a, e, i, o, u) in that string
/*
function countingVowels(str){
  let vowels = ['a','e','i','o','u']
  let count = 0;
  for (let char of str.toLowerCase()){
    if(vowels.includes(char)){
      count++
    }
  }
  return count;
}

console.log(countingVowels('Helloo World'))

*/



//Calculate Factorial: Question: Write a function that calculates the factorial of a given number.

/*

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorial(5));

*/

// Question: Write a function that takes in an array of numbers and returns the average of all the elements.

/*

function calculateTotal(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc, current) => {
   return  acc += current;
  }, 0);

  return sum / arr.length;
}

console.log(calculateTotal([]));

function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc, curr) => acc + curr);
  return sum / arr.length;
}
console.log(calculateAverage([1, 2, 3, 4, 5])); // Output: 3

*/



/*


const input = [1, 2, -2, 11, 7, 1];
const input1 = [1, 4, 7, 2, 4, 7];

function highest(arr) {
  let object = {};
  arr.forEach((item, index) => {
    return (object[index] = item);
  });

  const newArr = [...new Set(Object.values(object))].sort((a, b) => {
    return b - a;
  });

  return `THE SECOND HIGHEST INTERGER IS ${newArr[1]}`;
}
console.log(new Set(input)) 
console.log(highest(input));
console.log(highest(input1));

// we no need to create the object also i forgotten the trick use this trick it will direcly create the object , then no need to create the object and pushing the property's to it  console.log(new Set(input))


*/



/*
// How to the above probelm without using sort method

const input = [1, 2, -2, 11, 7, 1];
const input1 = [1, 4, 7, 2, 4, 7];

function highest(arr) {
arr.sort((a,b)=>{
   return b-a
 })
 console.log(arr)
  
 for (i = 0 ; i <arr.length ; i++){
    if(arr[i] > arr[i+1]){
        return arr[i+1]
    }
 }

}

console.log(highest(input));
console.log(highest(input1));




*/