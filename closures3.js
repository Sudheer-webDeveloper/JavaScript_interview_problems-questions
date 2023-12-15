/*
Closures in JavaScript are a powerful and somewhat advanced concept. They allow you to access variables from an outer function scope even after that function has finished executing. In simpler terms, a closure is a function bundled together with its lexical environment (i.e., the variables it has access to).

To understand closures, let's break it down step by step:

1. Lexical Scoping: JavaScript uses a concept called "lexical scoping" which means that the scope of a variable is determined by its position within the code. This means that variables defined outside of a function are accessible inside that function, but not vice versa.

2. Inner Functions: In JavaScript, you can define functions inside other functions. These inner functions have access to the variables of their outer functions, due to lexical scoping.

3. Returning Inner Functions: The key to understanding closures is that you can return an inner function from an outer function. When you return an inner function, it retains a reference to its outer function's variables, even after the outer function has finished executing. This is called a closure.

4. Accessing Outer Variables: By using closures, you can access and manipulate variables from the outer function scope within the inner function. This allows you to have private variables that are not accessible from outside the function.

Here's an example to help illustrate closures:

```javascript
function outer() {
  var outerVar = "I'm from the outer function";

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

var closureFunc = outer();
closureFunc(); // Output: "I'm from the outer function"
```

In the example above, the `outer` function defines the `inner` function, which logs the value of `outerVar`. When we call `outer`, it returns the `inner` function, which we store in the variable `closureFunc`. When we invoke `closureFunc`, it still has access to `outerVar`, even though `outer` has finished executing. This is the power of closures.

Closures have various practical uses, such as creating private variables and functions, currying (creating functions with pre-set arguments), and creating callback functions. They can be a bit tricky to grasp at first, but once you understand the concept, closures can be a powerful tool in your JavaScript programming toolbox.
*/

/*

Sure! Here are 30 interview questions on closures in JavaScript along with solutions:

1. What is a closure in JavaScript?
A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.

2. How do you create a closure in JavaScript?
A closure is created when an inner function accesses variables from its outer function, even after the outer function has finished executing.

3. What is the benefit of using closures?
Closures provide a way to encapsulate data and behavior, creating private variables and functions.

4. Explain the concept of lexical scope in closures.
Lexical scope means that variables are resolved in the scope they are defined, not where the function is called.

5. How can you access variables from an outer function in a closure?
By creating an inner function inside the outer function that references the outer function's variables.

6. What is the scope chain in closures?
The scope chain is the chain of variables and functions that a closure has access to, starting from its own scope, then the outer function's scope, and so on until the global scope.

7. What happens to a variable after the outer function is executed?
If a closure still references the variable, it will remain in memory and can still be accessed.

8. How do closures help with encapsulation?
Closures allow you to create private variables and functions, which are only accessible within the closure itself.

9. Write an example of a closure in JavaScript.
```
function outerFunction() {
  var outerVariable = 'Hello';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closure = outerFunction();
closure(); // Output: Hello
```

10. How can closures be used to create private variables?
By defining variables within the scope of an outer function, they are not accessible outside that function, creating privacy.

11. How can closures be used to create private functions?
By defining functions within the scope of an outer function, they are not accessible outside that function, creating privacy.

12. Explain the memory management considerations when using closures.
Closures can lead to memory leaks if not handled properly, as the references to variables can prevent them from being garbage collected.

13. What are the common use cases for closures?
Closures are often used to create modules, for data hiding and encapsulation, and for event handling.

14. How can closures be used for event handling?
By attaching event listeners to HTML elements that reference closures, you can handle events and access variables in the closure scope.

15. What is the value of 'this' in a closure?
The value of 'this' in a closure depends on how the closure is called, just like any other function.

16. How can closures be used to implement a counter?


```
function counter() {
  var count = 0;

  return function() {
    count++;
    console.log(count);
  }
}

var increment = counter();
increment(); // Output: 1
increment(); // Output: 2
```

17. How can you modify a variable in a closure?
By returning a function that modifies the variable, you can update its value.
```
function modifier() {
  var value = 10;

  return function(newValue) {
    if (typeof newValue !== 'undefined') {
      value = newValue;
    }

    console.log(value);
  }
}

var modify = modifier();
modify(); // Output: 10
modify(20);
modify(); // Output: 20
```

18. How can closures be used to share data between functions without using global variables?
By defining and accessing variables within a closure, the data can be shared between multiple functions without polluting the global scope.

19. Explain the concept of function factories using closures.
Function factories use closures to generate functions with different configurations, allowing for reusable code.

20. What is the difference between a closure and a variable?
A closure is a combination of a function and the lexical environment in which it was declared, while a variable is a named reference to a value.

21. How can closures be used for memoization?
By storing the results of expensive function calls in a closure, subsequent calls can be avoided if the input hasn't changed.

22. Explain the concept of module pattern using closures.
Module pattern is a design pattern that uses closures to encapsulate private variables and expose a public API for interacting with the module.

23. How can you use closures to perform asynchronous operations in JavaScript?
Closures can be used to capture the state of asynchronous operations and handle the results when they become available.

24. What are the potential downsides of using closures?
Closures can lead to memory leaks if not managed properly, and they can also make code more complex and harder to debug.

25. What is the difference between a closure and recursion?
A closure is a combination of a function and the lexical environment in which it was declared, while recursion is a technique for solving problems by breaking them down into smaller subproblems.

26. How can closures be used to implement private properties in JavaScript objects?
By defining private variables within a closure and returning an object with methods that can access them, you can achieve data encapsulation.

27. How can closures be used to make asynchronous code more readable?
By capturing the state of asynchronous operations within closures, the code can be written in a more linear and readable manner.

28. Explain the concept of currying using closures.
Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. Closures can be used to implement currying.

29. How can closures be used for function composition?
By returning a function from another function, closures can be used to compose functions together, creating more complex behavior.

30. How can closures be used to implement a cache for expensive function calls?
By storing the results of expensive function calls within a closure, subsequent calls with the same input can be retrieved from the cache instead of recomputing them.

I hope these questions and solutions help you in your preparation for interviews on closures in JavaScript!



*/

// Problem: Write a function that takes in a number and returns a function. The returned function should take in another number and return the sum of the two numbers passed in.

// Solution:

/*

function takingNum(num1){
    return function(num2){
        return num1 + num2
    }
}

const sumFunction = takingNum(30); // here the function execution is done and the num1 value is declared as 30 ,,,this 30 will be now stored as a reference to the num1 ,,how beautiful it is 
console.log(sumFunction(2)) //32
console.log(sumFunction(3)) //33



//In this solution, we have a function called createSumFunction that takes in a parameter num1. Inside this function, we return another function that takes in a parameter num2. The inner function has access to the num1 parameter through a closure, which means it can remember the value of num1 even after createSumFunction has finished executing.

// When we call createSumFunction(30), it returns the inner function that adds num1 (which is 30 in this case) to the number passed into it (num2). By assigning the returned function to the variable sumFunction, we can call sumFunction with different numbers as arguments to get the desired sum.

// In the example usage, sumFunction(5) returns the sum of 30 and 5, which is 35. Similarly, sumFunction(10) returns the sum of 30 and 10, which is 40.


*/

/*
//Problem 1: Write a function that adds a given number to itself and returns the result
function addNumberItSelf(num){
    return function(){
        return num + num
    }
}

console.log(addNumberItSelf()) //return a function[anonymous]
const addfunction = addNumberItSelf(2) // it was storing a num value as 2 ,,it was memorizig the value of num as 2 even after its executed
console.log(addfunction()) // returns output 2 , a stored and memory stored


// /Explanation: In this solution, the createAdditionFunction takes a parameter num. It returns an inner function that performs the addition of num with itself. The inner function closes over the num parameter, allowing it to access and use the value even after createAdditionFunction has finished executing

*/

/*
//Problem 2: Write a function that takes in a string and returns a function. The returned function should concatenate the given string with another string passed as an argument.

function takingString(str1){
    return function (str2){
       return str1 + str2
    }

}

console.log(takingString()) //[Function (anonymous)]

const stringFunction = takingString('Love')
console.log(stringFunction(' Yourself'))


//Explanation: The createConcatenationFunction function takes a parameter str1 and returns an inner function. The inner function takes another string str2 as an argument and concatenates it with str1. The inner function has access to str1 through closure, allowing it to use the value even after createConcatenationFunction has finished executing.


*/

/*

//Problem 3: Write a function that takes in a number and returns a function. The returned function should multiply a given number by the number passed as an argument.

// Solution:

function takingNumber(num1){
    return function(num2){
        return num1 * num2
    }
}

console.log(takingNumber())  //[Function (anonymous)]
//console.log(takingNumber(2)(2))  //[Function (anonymous)]
const numberFunction = takingNumber(2)
console.log(numberFunction(2))

// Explanation: The createMultiplicationFunction function takes a parameter num1 and returns an inner function. The inner function takes another number num2 as an argument and multiplies it with num1. The inner function has access to num1 through closure, allowing it to use the value even after createMultiplicationFunction has finished executing.

*/

/*
// Problem 4: Write a function that calculates the average of a given array of numbers.  // we can do this sum by reduce and array.length method also but we have to do it in the form of closure

function calulatingAverageUsingClosure(arr) {
  let sum = 0;
  let count = 0;

  function takingNum(num) {
    sum += num;
    count = count + 1; // or count++
  }

  for (let i in arr) {
    takingNum(arr[i]); // for array arr[i] = arr[1], arr[2], arr[3] for objects arr[i] = arr.property or arr[property] keep in mind
  }

  return function final() {
    return sum / count;
  };
}

console.log(calulatingAverageUsingClosure());  // [function:final]

const averageFunction = calulatingAverageUsingClosure([1, 2, 3]);

console.log(averageFunction()); // returns 2


//The calculateAverage function takes an array of numbers as a parameter. It defines an inner function addNumber that adds a number to the sum and increments the count variables. The calculateAverage function then loops through the numbers in the array and calls addNumber to calculate the sum and count. Finally, it returns an inner function that calculates the average by dividing the sum by the count. The inner function has access to the sum and count variables through closure, allowing it to use their values even after calculateAverage has finished executing.



*/

/*

//Problem 5: Write a function that generates unique IDs starting from 1.

function creatingId (id) {
  return function newId(){
    id++
    return id
  }
}

console.log(creatingId()) //[Function: newId]
const idFunction = creatingId(0)
console.log(idFunction())


//The createIDGenerator function defines a variable id and initializes it to 0. It then returns an inner function that increments the id by 1 and returns it. The inner function has access to the id variable through closure, allowing it to use and modify its value even after createIDGenerator has finished executing. Each time the inner function is called, it generates and returns a unique ID by incrementing the id value.

*/

/*
//problem:6 Write a function that counts the number of times a given word appears in a sentence.

function creatingWordCounter(word) {
  return function (sentence) {
    const regex = new RegExp(`\\b${word}\\b`, "gi"); //  /\bapple\b/gi

    const matches = sentence.match(regex);
    console.log(matches); //[ 'apple', 'apple' ]
    return matches ? matches.length : 0;
  };
}

const countWord = creatingWordCounter("apple");
console.log(countWord("I have an apple apple and an orange."));



// The line `const regex = new RegExp(`\\b${word}\\b`, "gi");` is creating a regular expression object (RegExp) in JavaScript.
// A regular expression is a pattern used to match character combinations in strings. The RegExp constructor is used to create a regular expression object with the specified pattern and flags.
// In this case, the pattern is dynamically created using the `word` parameter passed to the `creatingWordCounter` function. The pattern is constructed as `\\b${word}\\b`, where `\\b` represents a word boundary, and `${word}` is the word passed to the `creatingWordCounter` function. The word boundary ensures that the matched word is not part of a larger word.
// For example, if the `word` parameter is "apple", the resulting pattern will be `/\bapple\b/gi`.
// The "gi" flags you see after the pattern are also passed to the RegExp constructor. "g" stands for global, which means the regular expression will search for all occurrences in the string rather than stopping at the first match. "i" stands for case-insensitive, so it will match both uppercase and lowercase versions of the word.
// So, the line `const regex = new RegExp(`\\b${word}\\b`, "gi");` creates a regular expression object that matches the given `word` as a standalone word (with word boundaries) in a case-insensitive manner, and allows searching globally within a string.
// This regular expression object is then used to perform the actual matching with the `sentence` input in the following line `const matches = sentence.match(regex);`.//

*/
/*

// Write a function that creates a calculator object with add, subtract, multiply, and divide methods.

function createCaluculator() {
  let result = 0;

  return calculator ={
    add: function (num) {
      return  result += num;
    },
    substract: function (num) {
      return  result -= num;
    },
    multiply: function (num) {
      return  result *= num;
    },
    divide: function (num) {
      if (num !== 0) {
        return  result /= num;
      } else {
        console.log("number is equal to zero");
      }
    },
    getResult: function () {
      return result;
    },
  };
}


console.log(createCaluculator()) // return an object see below 
const calculate = createCaluculator()
console.log(calculate.add(5)) //5
console.log(calculate.substract(2)) // 5-2 = 3
console.log(calculate.divide(2)) // 3/ 2 = 1.5
console.log(calculate.multiply(2)) // 1.5 * 2 = 3
console.log(calculate.divide(3)) // 3 / 3 = 1
console.log(calculate.getResult()) // 1
// {
//     add: [Function: add],
//     substract: [Function: substract],
//     multiply: [Function: multiply],
//     divide: [Function: divide],
//     getResult: [Function: getResult]
//   }

// const calculator = createCaluculator()
// console.log(calculator.add(5)) //5
// console.log(calculator.substract(2)) // 5-2 = 3
// console.log(calculator.divide(2))  // 3 /2 = 1.5
// console.log(calculator.multiply(2)) // 1.5 * 2 = 3
// console.log(calculator.divide(3)) // 3 / 3 = 1


*/

//Problem: Explain the concept of private variables using closures. Solution: By using closures, we can create private variables in JavaScript. These variables are only accessible within the scope of the outer function, allowing us to encapsulate and protect data.

//Problem: Explain the difference between a closure and a regular function. Solution: A closure is a special type of function that retains access to variables from its outer scope, even after the outer function has finished executing. Regular functions do not have this capability.

//What is the purpose of the let keyword in closures? Solution: The let keyword is used to declare variables within the closure's scope. It ensures that the variable is only accessible within the closure and not from the outer scope.

/*

//Problem: Write a closure that counts the number of times a function is called. Solution:

function counter() {
  let count = 0;

  return function counterIncrement() {
    count++;
    console.log(count);
    return console.log(`function called This many times ${count}`);
  };
}

const increment = counter();
console.log(increment); //[Function: counterIncrement]
console.log(increment()); //first time --> count = 0 + 1 => count = 1
console.log(increment()); // second time --> count = 1 +1  => count = 2


*/

//Problem: Explain the potential memory leaks that can occur with closures. Solution: Closures can cause memory leaks if they hold references to large objects or keep unnecessary variables in memory. It's important to be mindful of the variables and objects retained by closures to prevent memory issues.

/*
//Problem: Write a closure that calculates the average of multiple grades. 

function averageGrades(){
  let grades = [];
  return function Average(...grade){
    grades.push(...grade);
    console.log(grades) //[ 5, 10 ] 
    const sum = grades.reduce((acc,grade)=>{
      return acc + grade
    },0)

    return sum / grades.length
  }
}

const findingAverage = averageGrades()
console.log(findingAverage)
console.log(findingAverage(5,10))


*/

//Explain the concept of a closure chain in JavaScript. Solution: A closure chain refers to a series of nested closures, where each closure has access to variables from its outer scope. This allows for deep nesting of functions with shared state.

//Problem: Explain the use of closures in event handling. Solution: Closures are commonly used in event handling to create functions that retain access to variables from their outer scope, allowing them to interact with the event and its associated data.

//Problem: Discuss the advantages and disadvantages of using closures. Solution: Advantages of closures include encapsulation, data privacy, and creating unique contexts. Disadvantages can include memory leaks if not used carefully and performance overhead due to retained variables.

/*

//Problem: Write a closure that simulates a private counter. 

const counter1 = () => {
  let count = 0;

  return {
    increment: () => {
      count++;
      return console.log(`Counter: ${count}`);
    },
    decrement: () => {
      count--;
      return console.log(`Counter: ${count}`);
    },
  };
};

const counterig = counter1();
console.log(counterig) //{ increment: [Function: increment], decrement: [Function: decrement] }
console.log(counterig.increment(), counterig.decrement());


*/

/*
//Problem: Write a closure that simulates a private counter. 

// Both are same but here without here I am using IIFE 
const counter = (() => {
  let count = 0

  return {
    increment:function(){
      count++;
      console.log(`Counter : ${count}`)
    },
    decrement:function(){
      count--;
      console.log(`Couunter :${count}`)
    }
  }
})()  // IIFE


console.log(counter) // { increment: [Function: increment], decrement: [Function: decrement] }
counter.increment()



*/

//Problem: Explain how closures can help with partial application and currying. Solution: Closures enable partial application and currying by allowing functions to be partially applied with some arguments and return a new function that can be invoked with the remaining arguments.

//Problem: Write a closure that memoizes the result of a function.
//  Solution:
