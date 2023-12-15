/*
// Problem : How the call method works and what is function barrowing and why should we use it 
// 1) introduction
// A first object name with these properties and printFullname() method
let name = {
    firstname:"sudheer",
    lastname:"Talapudi",
    printFullname: function (){
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

name.printFullname()  //sudheer talapudi


// Suppose if we have another object , then there alos they given a same task to print the printFullname  , then again we write the function again , which is not good writing like that every time , to avoid that we can share function this concept is known as function barrowing , here comes the call methods 

// 2)

let name1 = {
    firstname:"Elon",
    lastname:"Musk",
}
// Now we are applyin name Object method on name1 object by uisng call method 

name.printFullname.call(name1)  // Elon Musk

//Note : the call method takes 2 arguments one is the reference or context  on which object reference i have to call the function .and the second is parameters if the function have , here in this problem we do not have any parameters passing to the function ,so just pass the reference


*/

/*
// Problem : Update the syntax of the first problem how generally we use the barrowing function 
let name = {
    firstname:"sudheer",
    lastname:"Talapudi",
}

let printFullname = function (){
    console.log(`${this.firstname} ${this.lastname}`)
}


let name1 = {
    firstname:"Elon",
    lastname:"Musk",
}
printFullname.call(name) // this refers to object name here //sudheer Talapudi
printFullname.call(name1)// this refers to object name1 here   //Elon Musk



*/

/*

// Problem 3 : what if we have a parmeters inside the barrowing function , then how to handle  them 
let name = {
    firstname:"sudheer",
    lastname:"Talapudi",
}

let printFullname = function (state,country){
    console.log(`${this.firstname} ${this.lastname} from ${state} in ${country}`)
}


let name1 = {
    firstname:"Elon",
    lastname:"Musk",
}
printFullname.call(name,"Andhra", "India") // Here first argument to call method is reference and the second argument is parameters passing to the function  // we can pass n number of arguments based on how many did function is taking , here the printFullName mehtod is taking state, country as a paremeters 
printFullname.call(name1,"Chennai","Inida") // Elon Musk from Chennail in Inida



*/

/*

// Problem 4 what's the diffence between call and apply method 


// Explanation and difference 
// The call and apply methods in JavaScript are used to invoke functions. They both allow you to specify the context (the value of this) on which the function will be executed, and also pass arguments to the function.
// The main difference between call and apply lies in how the additional arguments are passed to the function.

// call method:
// With the call method, you pass the arguments to the function one by one as separate arguments.
// The first argument of call is the context (the value of this), followed by the function arguments.
// For example, func.call(context, arg1, arg2, ...).
// apply method:

// With the apply method, you pass the arguments to the function as an array or an array-like object.
// The first argument of apply is the context (the value of this), and the second argument is an array or an array-like object containing the function arguments.
// For example, func.apply(context, [arg1, arg2, ...]).



 let name = {
    firstname:"sudheer",
    lastname:"Talapudi",
}

let printFullname = function (state,country){
    console.log(`${this.firstname} ${this.lastname} from ${state} in ${country}`)
}


let name1 = {
    firstname:"Elon",
    lastname:"Musk",
}

//call expects separate arguments, while apply expects an array of arguments.
//In general, call is commonly used when the number of arguments is known in advance, while apply is useful when the number of arguments may vary or is not known in advance.

printFullname.call(name,"Andhra", "India") //sudheer Talapudi from Andhra in India
printFullname.apply(name1,["Chenai" , "Singapore"])  //Elon Musk from Chenai in Singapore


*/

/*
//Probelem What is bind method
// The `bind` method in JavaScript creates a new function that, when called, has a specified context (`this` value) and can also have pre-defined arguments. It allows you to set the context of a function permanently and return a new function with the specified context and arguments.

// Here's an example that demonstrates the usage of `bind`:


const person = {
  name: 'John',
  greet: function(message) {
    console.log(message + ' ' + this.name);
  }
};


const greetWithPersonName = person.greet.bind(person, 'Hello');
greetWithPersonName(); // Output: Hello John

/*
In the example above, we have an object `person` with a `greet` method. We use `bind` to create a new function `greetWithPersonName`, which binds the `greet` method to the `person` object as its context (`this`). We also pass the argument `'Hello'` to the `bind` method, which becomes a pre-defined argument for the new function.

When we call `greetWithPersonName()`, it essentially invokes the original `greet` method with the specified context (`person`) and the pre-defined argument (`'Hello'`).

Advantages of using `bind`:
1. Setting the context: It allows you to explicitly set the context on which a function will be called. This is particularly useful when working with event handlers or when you need to ensure that `this` refers to a specific object.
2. Currying: `bind` can be used to create a new function with pre-defined arguments. This is useful when you have a function that expects several arguments, but you want to partially apply some of them. You can create a new function with the pre-defined arguments using `bind`, which makes the code more modular and reusable.
3. Event callbacks: When passing a function as a callback to an event listener, using `bind` ensures that the callback will always be executed with the desired context, even when the event triggers the callback in a different context.

Overall, using `bind` provides control over the context of a function and allows you to create new functions with partially applied arguments, resulting in more flexible and reusable code.

*/

/*

// Problem : Apply the bind method on name , name1 objects 

let name = {
    firstname:"sudheer",
    lastname:"Talapudi",
}

let printFullname = function (state,country){
    console.log(`${this.firstname} ${this.lastname} from ${state} in ${country}`)
}


let name1 = {
    firstname:"Elon",
    lastname:"Musk",
}


let newFunction = printFullname.bind(name,"Andhra" ,"India")
// console.log(newFunction)   //[Function: bound printFullname]

newFunction() // output sudheer Talapudi from Andhra in India

let anotherNewFunction = printFullname.bind(name1,"chennai","India")  // Again We are repeating our self by applying bind on every methood instead of this line i created a function below , based on the object it apply bind method to it ,and later we invoke it where ever we want

anotherNewFunction()

const  newFunction1 = (object)  =>{
    let newFunction =  printFullname.bind(object,"Kerala" ,"India")
    return newFunction()
}
newFunction1(name)  //sudheer Talapudi from Kerala in India
newFunction1(name1)  //Elon Musk from Kerala in India


*/

/*
// Problem : What's the differene between call,apply and bind methods 

/*
The bind method in JavaScript is different from the call and apply methods in a few key ways:

Invocation: When using call or apply, the function is immediately invoked. On the other hand, when using bind, it returns a new function with the specified context and arguments, but does not immediately invoke the function.

Execution time: With call and apply, the function is executed right away with the provided context and arguments. However, with bind, the returned function can be stored and executed later at a different time.

Function manipulation: call and apply directly execute the function with the given arguments, while bind allows you to pre-define arguments for the returned function. This is known as function currying, where you create a new function with some of the arguments pre-set.

New function: bind creates and returns a new function with the specified context and bound arguments. On the other hand, call and apply directly invoke the function with the provided context and arguments. 



//Example to highlight the differences:

function greet(message){
   console.log(`${message} ${this.name} `)
}

const person = {name:"sudheer"}

const callFunction = greet.call(person,"HI")
const applyFunction = greet.apply(person,["Hello"])
const BindCreateNewFunc = greet.bind(person,["Hey"])


// See here the call and apply method's were already invoked and there value is stored in there respective variables callFunction , applyFunction where as coming to the bind method it creates the new function , which can be invoked later for reusabality where ever we want 

console.log(callFunction)   //Output: HI sudheer 
console.log(applyFunction)  //Output: Hello sudheer 
BindCreateNewFunc()  // //Output: Hey sudheer 


*/

/*

In JavaScript, the `call`, `apply`, and `bind` methods are used to manipulate the way a function is invoked and to control the value of the `this` keyword within the function. Here's a breakdown of each method:

1. `call`: The `call` method allows you to invoke a function and explicitly specify the value of `this`, along with passing individual arguments. The syntax is as follows: `functionName.call(thisValue, arg1, arg2, ...)`.
Example:
```
function greet(message) {
  console.log(message + ", " + this.name);
}

const person = {
  name: "John"
};

greet.call(person, "Hello"); // Output: Hello, John
```

2. `apply`: The `apply` method is similar to `call`, but it accepts arguments as an array-like object. The syntax for `apply` is: `functionName.apply(thisValue, [arg1, arg2, ...])`.
Example:
```
function sum(a, b) {
  console.log(a + b);
}

sum.apply(null, [5, 10]); // Output: 15
```

3. `bind`: The `bind` method creates a new function with the provided `this` value, and it allows you to set the initial arguments (known as partial application). The syntax for `bind` is: `functionName.bind(thisValue, arg1, arg2, ...)`.
Example:
```
const person = {
  name: "John"
};

function greet(message) {
  console.log(message + ", " + this.name);
}

const sayHello = greet.bind(person, "Hello");
sayHello(); // Output: Hello, John
```

Now, let's go through some interview questions related to these methods:

Q1. What is the difference between `call` and `apply` methods?
A1. The main difference between `call` and `apply` is in how arguments are passed. `call` accepts arguments individually, while `apply` accepts them as an array-like object.

Q2. How does the `bind` method work?
A2. The `bind` method returns a new function with the provided `this` value and any initial arguments. It allows you to partially apply arguments to a function.

Q3. What happens if we pass `null` or `undefined` as the `this` value in `call` or `apply` methods?
A3. In strict mode, passing `null` or `undefined` as `this` value in `call` or `apply` will not set the global object as `this`. Instead, the `this` value inside the function will be `null` or `undefined`.

Q4. Can we change the `this` value after binding it using `bind` method?
A4. No, once the `this` value is bound using `bind`, it cannot be changed.

I hope this helps you understand the `call`, `apply`, and `bind` methods in JavaScript. Let me know if you have any further questions!

*/

/*

// Write a function called "sum" that returns the sum of two numbers using the call method.

  const object ={
    a:1,
    b:3,
  }
  const sum = function(){
    return console.log(`Doing Addition ${this.a + this.b}`)
  }
  
  sum.call(object)


//   or 

  function sum(num1, num2) {
    return num1 + num2;
  }
  
  // Example usage:
  var result = sum.call(null, 5, 3);
  console.log(result); // Output: 8
  

//   Explanation :

// The sum function takes in two numbers, num1 and num2, and simply returns their sum using the + operator.

// The call method is used to invoke the sum function and pass the arguments null, 5, 3. The first argument of call is the value that will be used as this inside the function. In this case, we don't need to specify any specific object as the this value, so we pass null. After that, we pass the arguments 5 and 3 to calculate their sum.

// Finally, we store the result of the sum function call in the result variable and log it to the console, which should output 8.


*/

/*

//Problem 2: Write a function called "multiply" that returns the product of three numbers using the apply method.

function multiply (A,B,C){
    return console.log("product of three numbers", A*B*C)
}

 multiply.apply(null,[1,2,3])  // the difference between call and apply is call methods takes the parameters of the function in the individually by comma seperated where as the apply mehtods takes in the form array list .

//  or 

const object = {
    a:1,
    b:2,
    c:3,
}
const multiplying = function(){
    return console.log(`Multypling Three Numbers ${this.a * this.b * this.c}`)
}

multiplying.apply(object) //Multypling Three Numbers 6



*/

/*
//Problem 3: Write a function called "getFullName" that returns the full name of a person using the bind method.


function getFullName () {
    console.log(`${this.firstName} ${this.lastName}`)
}

const person = {
    firstName:"Sudheer",
    lastName:"Talapudi"
}

const cretesNewFunction = getFullName.bind(person)
console.log(cretesNewFunction) // [Function: bound getFullName]

cretesNewFunction() // Sudheer Talapudi


// Here, we define a function called "getFullName" that uses the bind method to bind it to a person object. The bind method creates a new function with the same body as the original function, but with a specific context (in this case, the person object). By invoking the bound function, we can access the properties of the person object and return the full name.

*/

/*
//Problem 4: Write a function called "calculateAge" that calculates the age of a person based on the current year using the call method.

function calculateAge (currentYear){
    return console.log(`Calculating age ${currentYear - this.bornYear}`)
}
const person = {
    bornYear:2002
}

calculateAge.call(person,2023) //Calculating age 21

*/

/*
//Problem 5: Write a function called "getProductPrice" that returns the price of a product after applying a discount using the bind method.

function getProductPrice(discount) {
  return console.log(
    `Price of the Product after Discount is ${
      this.price - (this.price / discount)
    }`
  );
}  // given Discount 10% 

const product = {
    price :100,
}

const createsNewFunction = getProductPrice.bind(product,10)
console.log(createsNewFunction) // [Function: bound getProductPrice]
createsNewFunction()  //Price of the Product after Discount is 90


//Explanation  : Here, we define a function called "getProductPrice" that uses the bind method to bind it to a product object. The function takes a discount as an argument and calculates the discounted price by multiplying the product's price by (price/ discount). We bind the product object as the context of the bind method and provide the discount as a pre-filled argument. By invoking the bound function, we can calculate the discounted price.
*/

//Problem 6: Write a function called "getMaxValue" that returns the maximum value from an array using the apply method.

/*

function getMaxValue (values){
    return Math.max.apply(null,values)
}

const numbers = [2,3,4,5]
const MaxValue = getMaxValue(numbers);
console.log(MaxValue)  // output 5

// Explanation: In this solution, we define a function called "getMaxValue" that uses the apply method to invoke the Math.max function. The apply method allows us to pass an array of values as separate arguments to the Math.max function, finding the maximum value from the array.

*/

/* //guess the output macha

function getMaxValue(values){
    return Math.max.apply(null,values)
}

const numbers = [1,2,3,4,5]
console.log(getMaxValue([-Infinity ,+Infinity]))

*/




/*

//Problem 7: Write a function called "getMinValue" that returns the minimum value from an array using the apply method.

function getMinValue(values) {
  return console.log(
    `Minimum Value in the Array is ${Math.min.apply(null, values)}`
  );
}

const numbers = [2, 3, 4, 5];
const minValue = getMinValue(numbers);
console.log(minValue); //Minimum Value in the Array is 2

//Explanation: Similar to the previous problem, in this solution we define a function called "getMinValue" that uses the apply method to invoke the Math.min function. The apply method allows us to pass an array of values as separate arguments to the Math.min function, finding the minimum value from the array.


*/




/*
//Problem 8: Write a function called "capitalizeName" that capitalizes the first letter of a name using the call method.

function capitalizeName (name) {
    return console.log(`converting Fisrt letter of the name to CapitalLetter is ${name[0].toUpperCase() + name.slice(1)}`)
}

capitalizeName.call(null,"sudheer") //converting Fisrt letter of the name to CapitalLetter is Sudheer

capitalizeName.call(null,"aparna") //converting Fisrt letter of the name to CapitalLetter is Aparna


// or 

function capitalizeName1() {
    return this.charAt(0).toUpperCase() + this.slice(1);  // where as here this refers to the name string 
  }
  
  const name1 = "john";
  const capitalized = capitalizeName1.call(name1);
  console.log(capitalized);  // Output: John  


  //Explanation: In this solution, we define a function called "capitalizeName" that uses the call method to invoke it on a string. The function capitalizes the first letter of the string by using the charAt method to get the first character, converting it to uppercase, and then concatenating it with the rest of the string obtained using the slice method.


  */


  /*

  //Problem 9: Write a function called "getFullNameWithPrefix" that returns the full name of a person with a prefix using the apply method.


  function getFullNameWithPrefix(prefix){
     return console.log(`Getting Full name of the person with prefix ${prefix} ${this.firstName} ${this.lastName}`)
  }


  const person = {
    firstName:"Sudheer",
    lastName:"Talapudi"
  }

  getFullNameWithPrefix.apply(person,["Mr."]) //Getting Full name of the person with prefix Mr.  Sudheer Talapudi

  //Explanation: Here, we define a function called "getFullNameWithPrefix" that uses the apply method to invoke it with a person object as the context. The function takes a prefix as an argument and returns the full name of the person with the prefix. We pass the person object as the context of the apply method and provide the prefix as an array argument.

  */




  /*
  //Problem 10: Write a function called "calculateTotalBill" that calculates the total bill amount including tax and tip using the bind method. use formulas 

  function calculateTotalBill(taxRate, tipPercentage){
    const total = this.amount + this.amount * (taxRate/100);
    const tipAmount = total * (tipPercentage/100)
    const totalBill = total + tipAmount;
    return totalBill;
  }

  const bill = {
    amount : 100,
  }

  const calculateBill = calculateTotalBill.bind(bill,8,15)

 console.log("The Total Bill is ",calculateBill())  // output The Total Bill is  124.2


 */

/*

Problem 11: Write a function called "applyDiscounts" that applies multiple discounts to a product price using the apply method.

 function applyDiscounts(discounts) {
  let price = this.price;
  for (let discount of discounts) {
    price -= discount
  }
  return price;
}

const product = {
  price: 100,
};



const discounts = [10,5,15];
const discountedPrice = applyDiscounts.apply(product, [discounts]);
console.log(discountedPrice);  //Output 70

*/

// Here, we define a function called "applyDiscounts" that uses the apply method to invoke it with a product object as the context. The function takes an array of discounts as an argument and applies each discount to the product's price by multiplying it with (1 - discount / 100). We pass the product object as the context of the apply method and provide the discounts as an array argument.



/*


// Problem 12: Write a function called "getFullNameWithSalutation" that returns the full name of a person with a salutation using the bind method.

function getFullNameWithSalutation(salutation){
  return console.log(`Printing Name with Salutation ${salutation} ${this.firstname} ${this.lastname}`)

}

const person = {
  firstname:"Sudheer",
  lastname:"Talapudi"
}

const bindCreatesNewFunc = getFullNameWithSalutation.bind(person,"Mr.")
console.log(bindCreatesNewFunc)
bindCreatesNewFunc()  //Printing Name with Salutation Mr. sudheer Talapudi


//Explanation: In this solution, we define a function called "getFullNameWithSalutation" that uses the bind method to bind it to a person object. The function takes a salutation as an argument and returns the full name of the person with the salutation. We bind the person object as the context of the bind method and create a new function that expects the salutation as an argument. By invoking the bound function with the salutation provided, we can get the full name with the salutation.

*/


/*
// Problem 13: Write a function called "getAverage" that returns the average of numbers using the apply method.

function getAverage(){
  const sum = this.reduce((acc,value)=> acc+= value,0)
  return sum /this.length
}

const numbers = [2,2] // here we taking the array as a context not the object 
const average = getAverage.apply(numbers)
console.log("The average is ",average) //The average is  2


//Explanation: In this solution, we define a function called "getAverage" that uses the apply method to invoke it with an array of numbers as the context. The function calculates the sum of numbers using the reduce method, and then divides the sum by the length of the array to get the average. We pass the numbers array as the context of the apply method.

*/


/*

// Problem 14: Write a function called "joinStrings" that concatenates multiple strings using the call method.

function joinStrings(seperator){
  return this.join(seperator);
}

const strings = ["Hello", "Mama" ,"!"]
const joiningString = joinStrings.call(strings," ")
console.log(joiningString) //output Hello Mama !


//Explanation: Here, we define a function called "joinStrings" that uses the call method to invoke the join method on an array of strings. The function takes a separator as an argument and concatenates the strings using the join method with the separator. We pass the strings array as the context of the call method and provide the separator as an argument.

*/



