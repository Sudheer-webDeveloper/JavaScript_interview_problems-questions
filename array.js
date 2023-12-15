// This file is totally based on array methods

/*
//Find the maximum element in an array.
//  Solution:

function findingMax (arr){
    return Math.max(...arr) // we have to use spread operator to spread all the elements there in the arr array
}

console.log(findingMax([2,3,4,5]))

*/

/*

//Problem: Remove duplicate elements from an array. Solution:

let arr = [1,2,3,4,5,3,1,2,4]
function duplicates(arr){
    return Array.from(new Set(arr)) // converting  Set(5) { 1, 2, 3, 4, 5 } the set to the array we are using Array.from method here // [ 1, 2, 3, 4, 5 ]
}
console.log(duplicates(arr))


*/

/*
// Second method to remove duplicates from the array
const againRemovingDuplicates = (arr) =>{
     const newDuplicates = arr.filter((item,index,self)=>{
        console.log(self.indexOf(item),item,index)  // see the console for best understanding
        return self.indexOf(item) === index;
     })

     return newDuplicates
}

console.log(againRemovingDuplicates(arr))


*/

/*
//Problem: Reverse an array using the reverse() method. 

let arr = [1,2,3,4,5,3,1,2,4]

function reversing (arr){
   return arr.reverse(arr)  // reverse() reverse the given array
}
console.log(reversing(arr))


*/

/*
//Problem: Reverse an array without using the reverse() method.

// here reversing the array without using the revrerse method

let arr = [1, 2, 3, 4, 5, 3, 1, 2, 4];
// The reduce HOF return the single value from the entire array suppose if we are doing addition it will take from left to till end right, defaulty it goes from left to right , we can also change the direction by right to left like this by keeping reduceRight ,,--> with the same logic we are reversing the array from right side and pushing it to the acc


function reversingArray(arr) {
  return arr.reduceRight((acc, item) => {
    acc.push(item);
    return acc;
  }, []);
}

console.log(reversingArray(arr))


*/



/*
// Read the comment below to understand why we we are doing this code like this
// we have to do like this only to reverse the string like this there is no other way

// output ---> sihT si tpircsavaJ edoC
let str = "This is Javascript Code";  

function reversing(str) {
  let array = str.split(" ");

  let wordReverse = array.map((item) =>item.split("").reverse().join(""));

  return wordReverse.join(" ");
}

console.log(reversing(str));



*/

// Ah, got it! The difference lies in how the reversal is done within the `map` function.

// Let's examine your code:

// ```javascript
// function reverseWords(sentence) {
//     const reverseWords = sentence.split(' ').map((item) => item.reverse()).join(" ");
// }

// const sentence = "Reverse each word in this sentence";
// const reversedSentence = reverseWords(sentence);
// console.log(reversedSentence);
// ```

// The issue here is with the usage of `item.reverse()`. The `reverse()` method is intended for arrays, but within the `map` function, `item` represents a string (a word in this case), not an array. Strings in JavaScript don't have a `reverse()` method.

// To fix this and achieve the desired output, you can update the code to split each word into an array of characters, reverse it, and then join it back. Here's the corrected version:

// ```javascript
// function reverseWords(sentence) {
//     const reversedWords = sentence.split(' ').map((word) => word.split('').reverse().join('')).join(' ');
//     return reversedWords;
// }

// const sentence = "Reverse each word in this sentence";
// const reversedSentence = reverseWords(sentence);
// console.log(reversedSentence);
// ```

// This revised version correctly splits each word into an array of characters, reverses the order of characters in each array, and joins the characters back to form reversed words, resulting in the desired output.


/*
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const str = "Hello, World!";
const reversedString = reverseString(str);
console.log(reversedString); // Outputs: "!dlroW ,olleH"


*/




/*
//Problem: Find the average of all elements in an array.

let arr = [2,2];


function caluculatingAverage(arr){
    if(arr.length === 0){
        return console.log('average is 0')
    }
   let sum = arr.reduce((acc,item)=>{
       return  acc+= item
    },0)
    console.log(sum)
    return sum /arr.length
}

console.log(caluculatingAverage(arr))


*/

/*
// Problem: Check if an array is sorted in ascending order.
// Solution:

let arr = [5, 4, 3, 2, 1];
let arr1 = [1, 2, 3, 4, 5];


function isSortedAscending(arr) {
  return arr.every((element, index) => {
// console.log(1 >= undefined)  --> false so that's why when index === 0 we make it as true
    if (index === 0) return true;   //
    console.log(element ,index, arr[index-1])
    return element >= arr[index - 1];
  });
}

console.log(isSortedAscending(arr));
console.log(isSortedAscending(arr1));


*/

/*
//// Problem: Check if an array is sorted in descending order.
// Solution:

let arr = [5, 4, 3, 2, 1];
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 4, 3,3, 2, 1];


function isSortedDescending(arr) {
  return arr.every((element, index) => {
    if (index === 0) {
      return true;  // truthy and falsy values are used here
    } else {
      return element <= arr[index - 1];
    }
  });
}

// function isSortedDescending(arr) {
//   return arr.every((element, index) => {
//     if (index === 0) return true;
//     return element <= arr[index - 1];
//   });
// }

console.log(isSortedDescending(arr)); // returns true
console.log(isSortedDescending(arr1)); // returns false
console.log(isSortedDescending(arr2)); // return true


*/

/*
//Problem: Rotate an array by a given number of position. 
// Solution:
let arr = [1, 2, 3, 4, 5];

console.log(2%5) // 2 is lowest than 5 so the modules is 2
console.log(10%5)// 10/5 reminder is 0 so the modules or  remainder is also 0
console.log(9%5)// 9/5 remainder is 4 so the modules is 4

function rotateArray(arr,positions){
    const offset = positions % arr.length // modules means remainder 

    console.log("what if if we won't spread the array like below this will happen to avoid this we are doing like below one ", [arr.slice(offset),arr.slice(0,offset)])


    return [...arr.slice(offset),...arr.slice(0,offset)]

    // ...arr.slice(offset) means from offset position to the end of the array, arr.slice(0,offset)  means from 0 to till offset 2
}

console.log(rotateArray(arr,2))
console.log(rotateArray(arr,3))


*/

/*

// Problem: Find the second smallest element in an array

let arr = [5, 4, 3,2,1];
function sortedArray (arr){
     if(arr.length <2){
        return null
     }
     const sortedArr = arr.slice().sort((a,b)=>a-b)  // a-b means ascending  // b-a means descending 
     return sortedArr[1]
}

console.log(sortedArray(arr))



*/

/*
//Problem: Check if two arrays are equal (contain same elements in any order).

let arr1 = [1, 2, 3, 4, 5];

let arr2 = [5, 4, 3, 2, 1];
let arr3 = [5, 4, 4, 2, 1];

function areArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const sortedArr1 = arr1.slice().sort();
  console.log(sortedArr1); // The arr1 will sort from [ 1, 2, 3, 4, 5 ] to this [ 1, 2, 3, 4, 5 ]
  const sortedArr2 = arr2.slice().sort();
  console.log(sortedArr2); // The arr2 will sort from [5,4,3,2,1] to [ 1, 2, 3, 4, 5 ]

  return sortedArr1.every((element, index) => {
    // console.log(element);
    return element === sortedArr2[index];
  });
}

console.log(areArrayEqual(arr1, arr2));
console.log(areArrayEqual(arr1, arr3));



*/

/*
//Problem: Find the intersection of two arrays (common elements). 
let arr1 = [1, 2, 3,3, 4, 5];
let arr2 = [5, 4, 3, 2, 2,8,9];

function findingIntersection (arr1,arr2){
    return arr1.filter((element)=> arr2.includes(element))
    // With respect to arr1 we are checking here //here we are pushing the elements in the new Array where the element of the arr1 which was there in arr2  or pushing the element into the new array where that specific item which includes in arr2  
}

console.log(findingIntersection(arr1,arr2))  // returns output [ 2, 3,3, 4, 5 ]


*/

/*
//Problem: Find the difference between two arrays (elements in arr1 but not in arr2). Solution:

// here we are finding the elements which are not there in arr2 from arr1, arr1=[1,2,3,3,4,5,6]  arr2=[2,3,4,5,11,12]  // our output must be [1,6]

let arr1=[1,2,3,3,4,5,6] 
let arr2=[2,3,4,5,11,12]

function FindingDifference(arr1,arr2){
    return arr1.filter((element)=> !arr2.includes(element))
}

console.log(FindingDifference(arr1,arr2))


*/

/*

//Problem: Find the element that appears the most times in an array. Solution:

let arr1 = [1,1,1,2,2,3,3,3,3,4];
let arr2 = [1,1,1,2,2,2,3,3,3,4];
function findingMostFrequentElement(arr) {
  let elementCount = {};

  for (let element of arr) {
    if (element in elementCount) {
      elementCount[element]++;
    } else {
      elementCount[element] = 1;
    }
  }
  console.log(elementCount);  // { '1': 3, '2': 2, '3': 4, '4': 1 } for arr1  // { '1': 3, '2': 3, '3': 3, '4': 1 } for arr2

  // ['1', '2', '3','4', '5', '7','8'] Object.keys(elementCount)
  let mostFrequentElement = Object.keys(elementCount).reduce((a, b) => {
    console.log("a =",a, "b=",b,"el 1",elementCount[a], "el 2",elementCount[b])
    return elementCount[a] > elementCount[b] ? a : b;
  });

  return console.log('The Most Frequent item of the array is', mostFrequentElement);
}

console.log(findingMostFrequentElement(arr1));
console.log(findingMostFrequentElement(arr2));

*/

/*

// Read this question very carefully and understand the answer
//Problem: Find the smallest positive missing number in an unsorted array. Solution:

let arr = [1, 2, 3, 3, 5, 5, -1, -2];
let arr1 = [1, 5, 5, -1, -2]; 
let arr2 = [1,2,3,4,6,7]; // here we have to find the number 5 in this unsorted array

function findSmallestMissingNumber(arr) {
  let numSet = new Set();   //new Set() returns the new set Set(0) {} initally
  for (let num of arr) { 
    // You will get a doubt while we solving this problems the doubt is why do we created a set here, the answer is in the question he is asking us to find that specific +ve Number which is missing from the unsorted array , that's why we are we are pushing the element from the array to the numSet which are greater than 0 ,,suppose if he akk to find the smallest -ve number from the unsorted array then we push the element from the array to the numSet which are less than 0 

    if (num > 0) {
      numSet.add(num);    
    }
}
console.log(numSet) // { 1, 2, 3, 5 } 


  let smallestPositiveMissing = 1;
   while(numSet.has(smallestPositiveMissing)){
    console.log("Smallest Positive Number",smallestPositiveMissing)
    smallestPositiveMissing++
   }

  return console.log('the Smallest missing Positive Number in the unsorted array is', smallestPositiveMissing)
}

console.log(findSmallestMissingNumber(arr))  //The smallest positive missing number is 4 since it is the first positive number missing from the array
console.log(findSmallestMissingNumber(arr1))  //The smallest positive missing number is 2 since it is the first positive number missing from the array
console.log(findSmallestMissingNumber(arr2)) //The smallest positive missing number is 5 since it is the first positive number missing from the array




*/

/*

//Problem: Find the smallest Negative missing number in an unsorted array


let arr = [-5,-4,-3,-1,-1,0,1,2,3,5];

function findingNum(arr){
    let numSet = new Set() 
     
    for(let item of arr){
        if(item < 0){
            numSet.add(item)
        }
    }
    console.log(numSet)  // Set(4) {-5,-4,-3,-1}
    
    let smallestNegativeNum = -1;  // We all know the smallest -ve Number is -1 so we have to check from -1
    
    while(numSet.has(smallestNegativeNum)){
        smallestNegativeNum--
    }
    
    return console.log('the smallest missing number from the -1 place to the Array is ',smallestNegativeNum ) 
}

console.log(findingNum(arr))


*/



/*

// Problem: Find the smallest positive missing number in an unsorted array from the specific place we want

let arr1 = [-5,-3,-1,-1,0,1,2,3,5];

function findingNum(arr){
    let numSet = new Set() 
     
    for(let item of arr){
        if(item < 0){
            numSet.add(item)
        }
    }
    console.log(numSet)  // Set(4) {-5,-3,-1} 
    
    let smallestNegativeNum = -3; // we all know that the smallest -ve number is -1 but if we want to find the specific number missing from the certain place from the array then we give like this

    // If we check from -1 then the smallest missing -ve number from the unsorted array is -2 , but i want from -3 ,from tha the missing number is -4
    
    while(numSet.has(smallestNegativeNum)){
        smallestNegativeNum--
    }
    
    return console.log("The smallest -ve Number missing from the place -3  in an unsorted array is ",smallestNegativeNum ) 
}

console.log(findingNum(arr1)) // the smallest -ve numeber form unsorted array from the place -3 is -4 // we can check it from where ever we want 

*/

/*
Problem: find  both smallest missing -ve number , smallest positive missing numbers from our custom place in  the array

let arr1 = [-5,-2,-1,-1,0,1,2,3,5];

function finding(arr,fromPositive,fromNegative){
    let set = new Set(arr)

    console.log(set)
  
    let smallestNegative = fromNegative 
     while(set.has(smallestNegative)){
        smallestNegative--
     }
     console.log(smallestNegative)

     let smallestPositive = fromPositive
     while(set.has(smallestPositive)){
        smallestPositive++
     }
     console.log(smallestPositive)
   

     return `The missing numbers from positive ${fromPositive}, and negative ${fromNegative} is ${fromPositive} ${smallestNegative} `
    
}

console.log(finding(arr1,3,-2))


*/

/*



// Problem : This is Our custom problem from the among modifications 
let arr1 = [-5, -3, -1, -1, 0, 1, 2, 3, 5];

function findingNum(arr, fromNegative, fromPositive) {
  let numSet = new Set(arr);

  console.log(numSet); //{ -5, -3, -1, 0, 1, 2, 3, 5 }

  if (fromNegative) {
    let smallestNegativeNum = fromNegative;
    while (numSet.has(smallestNegativeNum)) {
      smallestNegativeNum--;
    }
    console.log("The Missing Number from -ve is : ", smallestNegativeNum);
  }

  if (fromPositive) {
    let smallestPositiveNum = fromPositive;
    while (numSet.has(smallestPositiveNum)) {
      smallestPositiveNum++;
    }
    console.log("The Missing Number from +ve : ", smallestPositiveNum);
  }

   return `you have choosed ${fromNegative} , ${fromPositive}`
}

console.log(findingNum(arr1, -1, 1));
console.log(findingNum(arr1, -3, 1));
console.log(findingNum(arr1, 0 ,0));


*/

/*


//Write a function to flatten a nested array into a single level array.

// const nestedArray = [1, [2, [3, 4], 5], 6];
const nestedArray2 = [1,2,[1,[1,2,3]] , [1,2,5] , [2,3]]


// first method // console.log(nestedArray.flat(3)) // [ 1, 2, 3, 4, 5, 6 ]  //The flat() method in JavaScript returns a new array with all sub-array elements concatenated into it recursively





// second method to flatten of the array

function flattenArray(nestedArray) {
  const flattedArray = [];

  function flatten(arr) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        console.log("element", element);
        flatten(element);
        // console.log("element is", element, flatten(element));\\
      } else {
        flattedArray.push(element); // initially it will push the items 1,2 
      }
    });
  }

  flatten(nestedArray);

  return flattedArray;
}

console.log(flattenArray(nestedArray2));



*/

/*

//Find the missing number: Given an array containing numbers from 1 to n, find the missing number in the sequence.
let arr= [1,2,4]


// if we are finding the missing number from 1 to n this is the process

function findindMissingNumber (arr){
    const n= arr.length +1   // we are finding missing number ,now the actual lenght is 3 for the array arr, but we are finding the missing number so actually there is a item in the arr array , so then length is 4
    const totalSum = (n *( n+1)) /2
    console.log(totalSum)
    const actualSum = arr.reduce((sum,curr)=>sum + curr,0)
    console.log(actualSum)
    return totalSum - actualSum
}


console.log(findindMissingNumber(arr))




*/

/*


// if we are finding the missing number from 0 to n this is the process

let arr= [0,1,2,3,5]
function findindMissingNumber (arr){
    const n= arr.length  
    const totalSum = (n *( n+1)) /2
    console.log(totalSum)
    const actualSum = arr.reduce((sum,curr)=>sum + curr,0)
    console.log(actualSum)
    return totalSum - actualSum
}


console.log(findindMissingNumber(arr))


//The reason we add +1 to the length when finding the missing number from 1 to n is because the sequence starts from 1, not 0. The missing number could be any number from 1 to n (inclusive), so the length of the array is n - 1. By adding 1 to the length, we account for the missing number.

// However, when finding the missing number from 0 to n, we do not need to add +1 to the length. This is because the sequence starts from 0, and the missing number could be any number from 0 to n (inclusive). Therefore, the length of the array is already n.

// In summary, the addition of +1 to the length depends on the starting number of the sequence being considered.


*/

/*
// first see how these steps work to understand the next problem
// let arr = [1,2,3,4,5]
// console.log(arr.splice(-2)) // it will give the last 2 items
// console.log(arr)
// arr is an array with values [1, 2, 3, 4, 5].

splice() is a built-in JavaScript method that allows us to modify an array by removing or adding elements.
In this case, splice() is called on arr with the argument -k.
The -k argument indicates the number of elements to remove from the array, starting from the end.
For example, if k is 2, it means we want to remove the last two elements from the array.

*/

/*
//Rotate array elements: Given an array, rotate the elements to the right by k steps.

// Logic for this probelem is suppose k is 2 roataing the first 2 items to last and keeping the remaining as it is  , if 3 then rotating first 3 items to last  keeping the remaining as it is
let arr = [1, 2, 4, 5];
// console.log(arr.splice(-2)) 
// console.log(arr)

// In your code, arr is an array containing the values [1, 2, 4, 5]. The splice() method is called on the arr array with the starting index of -2.

// Negative indices in JavaScript array methods count from the end of the array. So, in this case, -2 indicates the second-to-last element of the array.

// When arr.splice(-2) is called, it removes all elements starting from the second-to-last element (4) until the end of the array. Therefore, the output would be [4, 5], as these are the elements that were removed from the original arr array.


function rotateArray(arr, k) {
  k = k % arr.length;
  arr.unshift(...arr.splice(-k)); // if we dont spread this will be ,-k last two items , -3 from the last 3 items , -4 form the last 4 items  the output [ [ 4, 5 ], 1, 2 ]
  // console.log(arr.slice(-k))  //
  return arr;
}

console.log(rotateArray(arr, 2));


*/

//Explanation: We first calculate the effective rotation steps by taking the modulo of k with the array length to avoid unnecessary rotations. Then, we use splice() to remove the last k elements from the array and unshift() to add them to the beginning.

/*


The `splice()` method in JavaScript is used to modify an array by adding or removing elements. It takes in multiple parameters, allowing you to specify the index at which to start making changes, the number of elements to remove, and any new elements to add.

Here's how the `splice()` method works:

Syntax:
```
array.splice(start, deleteCount, item1, item2, ...)
```

Parameters:
- `start`: The index at which to start making changes in the array.
- `deleteCount`: The number of elements (starting from the `start` index) to remove. If set to 0, no elements will be removed.
- `item1, item2, ...`: Optional. The elements to add to the array, starting from the `start` index.

Return value:
- An array containing the elements that were removed.

Now let's see some code examples to understand better:

Example 1 - Removing elements:
```javascript
let fruits = ['apple', 'banana', 'cherry', 'date'];

// Removing elements from index 1 to 2
let removedElements = fruits.splice(1, 2);

console.log(fruits);      // Output: ['apple', 'date']
console.log(removedElements);  // Output: ['banana', 'cherry']
```

In the above example, the elements "banana" and "cherry" are removed from the array starting at index 1. The modified array is then logged, displaying `['apple', 'date']`, and the removed elements are logged as `['banana', 'cherry']`.

Example 2 - Adding elements:
```javascript
let animals = ['cat', 'dog', 'elephant'];

// Adding elements at index 1
animals.splice(1, 0, 'bear', 'giraffe');

console.log(animals);   // Output: ['cat', 'bear', 'giraffe', 'dog', 'elephant']
```

In this example, the elements 'bear' and 'giraffe' are inserted at index 1, without removing any elements. The modified array is then logged, showing `['cat', 'bear', 'giraffe', 'dog', 'elephant']`.

Now let's understand the difference between `splice()` and `slice()`:

- `splice()` modifies the original array by adding or removing elements, while `slice()` doesn't modify the original array and instead returns a new array containing a copy of a portion of the original array.

- `splice()` takes in parameters to specify the index, the number of elements to remove, and the new elements to add, whereas `slice()` only takes in parameters to specify the start and end indices for the portion of the array to be included in the new array.

Here's an example to illustrate the difference:

```javascript
let numbers = [1, 2, 3, 4, 5];

// Using splice() to remove elements
let removed = numbers.splice(2, 2);
console.log(numbers);   // Output: [1, 2, 5]
console.log(removed);   // Output: [3, 4]

// Using slice() to create a new array
let sliced = numbers.slice(1, 3);
console.log(numbers);   // Output: [1, 2, 5]
console.log(sliced);    // Output: [2, 5]
```

In the above example, `splice()` removes elements from the `numbers` array, modifying it to `[1, 2, 5]` and returning the removed elements `[3, 4]`. On the other hand, `slice()` creates a new array containing elements `[2, 5]` from the `numbers` array without modifying the original array.

*/

// find the first missing odd number in the array

/*



// Kepp in mind the gap between any two odd numbers is 2 by that logic we can find here

const input = [5, 7, 9, 11, 15, 17];

const findingFunc = (arr) => {
  let actualOdd = 0;
  for (let i = 0; i <= arr.length; i++) {
    let curr = arr[i]; // arr[0] //
    let next = curr + 2; // or arr[i] + 2

    if (arr[i + 1] === next) {
      console.log(arr[i + 1]);
      continue;
    } else {
      // console.log("next", next);
      actualOdd = next;
      break;
    }
  }
  return `actual odd ${actualOdd}`;
};

console.log(findingFunc(input));



*/


/* 
const input = [5, 7, 9, 11, 15, 17];  // AP common difference 2 // here we have to find the missing number from the specified pattern.

const findingFunct = (arr) => {
  let actualOdd = 0;

  for (let i = 0; i <= arr.length; i++) {
    let curr = arr[i];
    let next = curr + 2;
    if (arr[i + 1] !== next) {
      return (actualOdd = next);
    }
  }
  return `actual odd ${actualOdd}`;
};

console.log(findingFunct(input));



*/


/*

// finding the most repeated character in the string 


const str = "This is Javascript Code and you to find max char";

function findingMax(str) {
  let obj = {};

  for (let i in str) {
    if (str[i] in obj) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  delete obj[" "];
  console.log(obj)

  const max = Math.max(...Object.values(obj));
  const mostRepeatedItem = Object.keys(obj).find((item) => {
    return obj[item] === max;
  });

  return`the Most Repeated Item in the string is ${mostRepeatedItem} with ${max}`;
}

console.log(findingMax(str));


*/

/*

const input = [2, 7, 11, 4, -2];
const output1 = [20, 15, 11, 18, 24];

const output = input.map((item,index)=>{
    console.log("for one index",index)

    const sumExceptCurrent = input.reduce((acc,curr,i)=>{
        console.log("reduce",i)
        if(i !== index){
            return acc+curr
        }
        else{
            return acc
        }

    },0)

    return sumExceptCurrent

})

console.log(output)


//This code uses map() to iterate over each element of the input array and calculates the desired value for each element by multiplying it with the sum of all other elements. The reduce() method sums up all the elements except the current one by checking the index in the array.

*/









/*

const input = [2, 7, 11, 4, -2];
const output1 = [20, 15, 11, 18, 24];

const output = input.map((num,index)=>{
    // console.log("num",num,"index",index)
    const sumExceptCurrent = input.reduce((acc,val,i)=>(i !== index ? acc + val : acc),0)

   // for one item of num index it will compare with   5 i(indexs) input

   // 0 ===0 , 0!== 1,  0!== 2, 0!==3 , 0!== 4
   // if 0 === 0 then return acc means 0, other wise acc+val = 0 + 7 , 7+ 11 , 18 + 4 , 22 -2  finallu the sumExceptCurrnet return 20  , for one single num , similarly it will run for every num

    // console.log("sumExceptCurrent",sumExceptCurrent)

    return sumExceptCurrent

})

console.log("our desired output is ",output)

*/



/*
let arr = [1,2,3,4,5]


// rotate the array to the right by k steps or rotate the array by n times 


function rotating (arr,k){
    for(let i=0; i<k ; i++){
        let lastItem = arr.pop()
        console.log(i,lastItem)
        arr.unshift(lastItem)
    }

    return arr
}

console.log(rotating(arr,3))

*/



/*
// sort the array based on the prop of the object

let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 30 }
  ];

  
 function sorting (arr,prop) {
  return arr.sort((a,b)=>{
    return a[prop] - b[prop]
   })
 }

 console.log(sorting(people,"age"))


*/




/*

let arr = ["arr","bbb","ccc","aaa","bbb"]

let output = { arr: 1, bbb: 2, ccc: 1, aaa: 1 }

function creting (arr){
    return arr.reduce((acc,item,index,arr)=>{
        if(arr[index] in acc ){
            acc[arr[index]] = acc[arr[index]] + 1
        }
        else{
            acc[arr[index]] = 1
        }

        return acc
    },{})
}


console.log(creting(arr))

*/




/*
Find the max char there in the string


function maxCharacter(str){

    let obj = {}
    let maxChar = '';
    let maxAmount = 0;

    for(let char of str){
       obj[char] = obj[char]+ 1 || 1
    }
   console.log(obj)

    for(let char in obj){
       if(obj[char] > maxAmount){
        // console.log(obj[char])
        maxAmount = obj[char]
        maxChar = char
    }
}


return `the max character is ${maxChar}`



}


console.log(maxCharacter("hello world"))

*/




/*
// flatten the nested array
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];

function flattedArray(arr){
    return arr.reduce((acc,item)=>Array.isArray(item)? acc.concat(flattedArray(item)): acc.concat(item),[])
}
  

console.log(flattedArray(nestedArray))


*/




/*





/*

    \W: This special character class in regular expressions matches any character that is not a word character.
    Word characters include letters (a-z, A-Z), digits (0-9), and the underscore character (_).
    Therefore, \W matches any character that is not in the set of word characters (i.e., anything other than letters, digits, or underscores).

So, in the context of the replace() method using replace(/[\W_]/g, ''):

    [\W_] matches any character that is either a non-word character (\W) or an underscore character (_).
    The intention here is to remove both non-word characters and underscores from the string by replacing them with an empty string.



    In the string "hello_{ World _ jamika", the non-word characters are the ones that do not belong to the set of word characters, which typically includes letters, digits, and underscores.

Identifying the non-word characters in this string:

    { and } are non-word characters.
    Spaces between words are also considered non-word characters.
    Underscore _ is treated as a word character and is not considered a non-word character.

So, the non-word characters in the given string are {, }, and the spaces between words.
*/


/*

function isPalindrome(str){
  const cleanStr = str.toLowerCase().replace(/[W_+-/]/g,"") 

   // here it will avoid all '_' + , - , / , what ever we include in the [] it will avoid , if we place like this inside [W_+-/w] then will avid letter w also , if we use like this replace(/[\W_]/g,"") // we no need to include every non word charater it's automatically elimates the non word charcter

  console.log(cleanStr)
  const reversed = cleanStr.split('').reverse().join('');
  console.log(reversed)
  return cleanStr === reversed
}

console.log(isPalindrome("Hello___+-world/"))




function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
    console.log(cleanStr)
    const reversed = cleanStr.split('').reverse().join('');
    console.log(reversed)
    return cleanStr === reversed;
  }
  
  // Example usage:
  console.log(isPalindrome('A man_, a plan, a canal, +Panama'))



*/



/*
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, typically starting with 0 and 1. So, the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.



const sequence = [0,1]

function fibnoc(num,arr){
    for(let i = 2;i<num ; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr
}

console.log(fibnoc(8,sequence))


*/







/*

// Write a function that counts the number of vowels in a given string.

function countVowels(str){
    const vowels = str.match(/[aeiou]/gi)
    console.log(vowels) // [ 'e', 'o', 'o' ]
   return vowels? vowels.length : 0
}

console.log(countVowels("hello world"))


/*
Absolutely! The match() method in JavaScript is used to extract parts of a string that match a specified pattern (defined using a regular expression) and returns an array containing the matched results.

Let's break down the pattern used in your example:

javascript

const vowels = str.match(/[aeiou]/gi);

    /[aeiou]/gi is a regular expression pattern enclosed between / and /.
    [aeiou] is a character set that matches any single character inside the brackets, in this case, any vowel character - a, e, i, o, or u.
    The g flag (stands for global) is used to find all matches in the string, not just the first one.
    The i flag (stands for case-insensitive) makes the matching case-insensitive, so it matches both uppercase and lowercase vowels.

Here's what this line does:

    str.match(/[aeiou]/gi) searches the string str for any character that is a vowel (a, e, i, o, u) regardless of case (due to the i flag) and returns an array containing all the matches found.
    If no matches are found, it returns null.
*/

/*

function isAnagram(str1,str2){
    const cleanStr1 = str1.toLowerCase().replace(/[\W_]/g,'')
    const cleanStr2 = str2.toLowerCase().replace(/[\W_]/g,'')
    const sortedStr1 = cleanStr1.split('').reverse().join('')
    const sortedStr2 = cleanStr2.split('').reverse().join('')

    return sortedStr1 === sortedStr2
}


console.log(isAnagram('madam','_]madam'))


*/




/*

function findIntersection (arr1,arr2){
    const set = arr1.filter((item)=> arr2.includes(item))

    return set
}

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])) // [ 3, 4 ]




function findingIntersection(arr1,arr2){
    const set1 = new Set(arr1)
    console.log("set1",set1)
    const intersectionItems = arr2.filter((item)=> set1.has(item))

   console.log(set1.has(2))  // if item there it returns true // if not then false

   return intersectionItems
}

console.log(findingIntersection([1, 2, 3, 4], [3, 4, 5, 6]))


*/