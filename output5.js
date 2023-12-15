/*
//Problem 1: What will be the output of the following code?


console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);

//output "122" "32" "02" "NaN2" NaN


//explanation :

// Explanation:

// In the first line, we have a string concatenation, so 1 is concatenated with "2" and "2", resulting in "122".

// In the second line, +"2" converts the string to a number, so the expression becomes 1 + 2 + "2", which results in "32".

// In the third line, -"1" converts the string to a number, so the expression becomes 1 - 1 + "2", which results in "02".

// In the fourth line, we have invalid mathematical operations with strings, so the result is "NaN2".

// In the fifth line, we again have an invalid operation, so the result is NaN.


*/





/*
// Problem 2: What will be the output of the following code?

var a = 10;
var b = (a === 10) ? 100 : 200;
console.log(b);

// output 100


//Explanation:

// In this code, the conditional (ternary) operator is used. If a is equal to 10 (which it is), then b is assigned the value 100. Therefore, the output is 100.


*/




/*

// Problem 3: What will be the output of the following code?

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}


// Output: 5  5  5  5  5

// Explanation:

// In this code, a common mistake is made due to the asynchronous behavior of setTimeout. The setTimeout callback function is executed after a 1-second delay, but the loop has already completed by the time the callbacks are executed. As a result, i will be 5 when each of the console.log statements is executed.

// To get the expected output (0, 1, 2, 3, 4), you can use a closure or block-scoped variable to capture the value of i at each iteration. Here's the modified code:



for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Using let in the loop header creates a new i variable for each iteration, preserving the correct values for each setTimeout callback.

// These are just a few examples of JavaScript interview questions related to output. Understanding the nuances of JavaScript is important to tackle such questions effectively.



*/


/*

// Problem 4:

console.log([] + [])  // when we plus to array it returns the empty string so here output will be  ""

console.log(typeof ([1] + [1]))

console.log(["sudheer"] + [" mama"]);  // here again adding two array's returns string so now "sudheer" + " mama"  = return sudheer mama



// Output: ""

// Explanation:
// The + operator between two empty arrays attempts to convert them to strings and then concatenates them, resulting in an empty string.


*/


/*


// guess the output

console.log([] + {});

Output: "[object Object]"

Explanation:
When an empty array is concatenated with an empty object, JavaScript converts them to strings and concatenates them, resulting in "[object Object]".



*/


/*
// Problem 6:

console.log("Hello" - "World");


Output: NaN

// Explanation:
// Subtracting two strings that don't represent valid numbers results in NaN (Not-a-Number).



*/

/*

// Problem- 8
var x = 1;
var output = (function() {
  delete x;
  return x;
})();
console.log(output);

//Delete operator doesn't work with the variable so ,it dosen't change the value of the x ,so the output will be 1


*/




/*
// Problem 8:

console.log(1 + -"1" + "2");

// Output: "02"

// Explanation:
// The code performs operations as follows: 1 + -1 results in 0, and then it is concatenated with "2".


*/


/*
// Problem 9:

console.log("A" - "B" + 2);

// Output: "NaN2"

// Explanation:
// This code subtracts two non-numeric strings, resulting in NaN, which is then concatenated with 2.


*/


/*
// Problem 11:

console.log(null == undefined);


// Output: true

// Explanation:
// In JavaScript, null and undefined are considered equal when using the loose equality operator (==).
The expression `null == undefined` returns true because null and undefined are considered equal in JavaScript when using the double equals (==) operator. 

// In JavaScript, the double equals operator performs type coercion, which means that it attempts to convert the operands to the same type before making the comparison. When comparing null and undefined with the double equals operator, they are both considered to be "falsy" values and thus equal to each other.

// However, it's generally recommended to use the triple equals (===) operator for equality comparisons in JavaScript. The triple equals operator does not perform type coercion and requires both the value and the type to be the same for equality to hold. Using the triple equals operator, `null === undefined` would evaluate to false, as they are not of the same type.

// So, while `null == undefined` returns true, it's a good practice to use the triple equals operator to ensure strict equality comparisons.


*/


/*

Problem 12:

console.log(null === undefined);

// Output: false

// Explanation:
// Using the strict equality operator (===), null and undefined are not equal.


*/


/*

// Problem 13:

var a = [1, 2, 3];
var b = [1, 2, 3];
console.log(a == b);  // Here we are not comparing the references we are comapring the two arrays objects arrays in js are compared by the references , not by their value . So ,a and b are different objects, even though their contents are same 

console.log(a[0] == b[0]) // here we are comparing references so it will be equal

// Output: false

// Explanation:
// Arrays in JavaScript are compared by reference, not by their contents. So, a and b are different objects, even though their contents are the same.


*/



/*

var x = 5;
(function() {
  console.log(x);  //output 5
  console.log(x);  //output 5
})();


// compare with above function
var x = 5;
(function() {
  console.log(x); //output undefined
  var x= 10 
  console.log(x); // output 10 
})();


// Explanation:
// JavaScript has function scope, so the local x within the function is hoisted and initially set to undefined. When console.log(x) is called before var x = 10, it prints undefined.



*/


/*

// Problem 16:

console.log(1 +  "1" - "1");

// Output: 10

// Explanation:
// JavaScript first performs a string concatenation: "1" + "1" becomes "11". Then it subtracts "1", which gets converted to a number, resulting in 10.


*/


/*
// Problem 17:

console.log(1 - "1" + 1);

// Output: 1

// Explanation:
// JavaScript first performs a subtraction: 1 - 1, resulting in 0. Then it adds 1 to 0, resulting in 1


*/


/*
// Problem 18:

 console.log(+"1" + "1" - 1);
 console.log(-"1" + "1" - 1);
 console.log(-"1" + "1" + 1) //output  -111 clearly observe with above console.log statements
 console.log( typeof (-"1" + "1"));
 console.log( typeof (+ 1) );
console.log(typeof (-"1" + "1" + 1));

// Output: 10

// Explanation:
// The +"1" converts the string to a number, resulting in 1. Then it performs a string concatenation with "1", which becomes "11". Finally, it subtracts "1", which gets converted to a number, resulting in 10.

*/



/*

// Problem 19:

var x = 0;
function foo() {
  x = x + 1;
  return x;
}
console.log(foo());
console.log(foo());

// Output: 1 2

// Explanation:
// The foo function increments the global variable x each time it is called, and then it returns the updated value of x.


*/

/*
let x = 1
console.log(x++ + ++x);


// Explanation:
// The expression is evaluated as follows:

//     x++ increments x after the current value is used, so it contributes 1 to the sum.
//     ++x increments x before the current value is used, so it contributes 2 to the sum.

// Hence, 1 + 2 + 1 = 4.

*/