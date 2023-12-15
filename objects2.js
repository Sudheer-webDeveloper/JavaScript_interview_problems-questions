// Sure! Objects are one of the fundamental components in JavaScript, allowing us to store and organize related data and functionalities. An object is essentially a collection of key-value pairs, where the keys are known as properties and the values can be any type of data, including functions, which are referred to as methods when attached to an object.

// Here are a few interview questions related to JavaScript objects:

// 1. How can you create an object in JavaScript?
//    Answer: You can create an object using either the object literal syntax or the Object constructor.

// 2. How do you access properties of an object?
//    Answer: You can access the properties of an object using the dot notation (object.property) or the bracket notation (object["property"]).

// 3. How can you add or modify properties of an object?
//    Answer: You can add or modify properties of an object by simply assigning values to them using the dot or the bracket notation.

// 4. How do you delete a property from an object?
//    Answer: You can delete a property from an object using the `delete` operator followed by the object name and property name, like `delete object.property`.

// 5. How do you iterate over the properties of an object?
//    Answer: There are multiple ways to iterate over the properties of an object, such as using a for...in loop or using Object.keys() or Object.values().

// 6. What is the difference between object-oriented programming and object-based programming?
//    Answer: Object-oriented programming refers to a programming paradigm where objects have both properties and behaviors (methods), while object-based programming lacks the concept of behaviors or methods.

// 7. How can you check if an object has a particular property?
//    Answer: You can use the `hasOwnProperty()` method to check if an object has a specific property. It returns `true` if the property exists and `false` otherwise.

// 8. What is the role of the `this` keyword in objects?
//    Answer: The `this` keyword represents the object that the method belongs to, allowing you to access properties and methods of the object within its own scope.

/*

Certainly! Here are 20 JavaScript interview questions on objects along with solutions and explanations:

**1. What is an object in JavaScript?**
   - **Solution:** An object in JavaScript is a collection of key-value pairs where each key is a string (or symbol) and each value can be any data type. It is a fundamental data structure used to store and manipulate data.

**2. How do you create an empty object in JavaScript?**
   - **Solution:** You can create an empty object using object literal notation: `let obj = {};` or using the `new Object()` constructor: `let obj = new Object();`.

**3. How can you add a new property to an existing object?**
   - **Solution:** You can add a new property to an object by simply assigning a value to a new key: `obj.newProperty = 'value';`.

**4. How do you remove a property from an object?**
   - **Solution:** You can remove a property from an object using the `delete` keyword: `delete obj.propertyName;`.

**5. What are the ways to access properties of an object?**
   - **Solution:** You can access object properties using dot notation (`obj.property`) or bracket notation (`obj['property']`), where `'property'` is the name of the property.

**6. How can you check if an object has a specific property?**
   - **Solution:** You can use the `in` operator to check if an object has a specific property: `'propertyName' in obj`.

**7. What is the `hasOwnProperty` method used for?**
   - **Solution:** The `hasOwnProperty` method is used to check if an object has a property and not inherited from its prototype chain.

**8. What is the difference between `==` and `===` in JavaScript?**
   - **Solution:** `==` checks for equality with type coercion, while `===` checks for equality without type coercion. For object comparison, `===` checks if they reference the same object in memory.

**9. What is object destructuring in JavaScript?**
   - **Solution:** Object destructuring is a feature that allows you to extract properties from an object and assign them to variables in a concise way.

**10. What is the `Object.keys()` method used for?**
    - **Solution:** The `Object.keys()` method returns an array of a given object's own enumerable property names.

**11. How can you copy an object in JavaScript?**
    - **Solution:** You can copy an object using the `Object.assign()` method or the spread operator: `const copy = { ...original };`.

**12. What is the purpose of the `Object.freeze()` method?**
    - **Solution:** The `Object.freeze()` method is used to make an object immutable, preventing any changes to its properties.

**13. What is the difference between objects and arrays in JavaScript?**
    - **Solution:** Objects use keys to access values, while arrays use numeric indices. Objects are typically used for unordered data, while arrays are used for ordered collections.


    Ordered data refers to a collection of elements where the sequence matters. Unordered data refers to a collection of elements where the sequence doesn't hold significance.

In JavaScript, arrays maintain the order of elements, while objects do not. Here are examples illustrating the difference:

### Ordered Data (Arrays):
```javascript
const orderedArray = ['apple', 'banana', 'orange'];

console.log(orderedArray[0]); // Output: 'apple'
console.log(orderedArray[1]); // Output: 'banana'
console.log(orderedArray[2]); // Output: 'orange'
```

### Unordered Data (Objects):
```javascript
const unorderedObject = {
    fruit1: 'apple',
    fruit2: 'banana',
    fruit3: 'orange'
};

console.log(unorderedObject.fruit1); // Output: 'apple'
console.log(unorderedObject.fruit2); // Output: 'banana'
console.log(unorderedObject.fruit3); // Output: 'orange'
```

#### More Differences Between Objects and Arrays in JavaScript:

1. **Accessing Elements:**
   - Arrays: Accessed by numeric indices (`array[index]`).
   - Objects: Accessed by keys (`object.key` or `object['key']`).

2. **Order:**
   - Arrays: Maintain order; elements are accessed by their position.
   - Objects: No inherent order; key-value pairs don't have a specific sequence.

3. **Length:**
   - Arrays: Have a `length` property that represents the number of elements.
   - Objects: Don't have a direct length property associated with the number of keys; you need to manually count the keys.

4. **Manipulation:**
   - Arrays: Provide various methods (`push`, `pop`, `splice`, etc.) for manipulation and modification of elements.
   - Objects: Methods like `Object.keys`, `Object.values`, and `Object.entries` allow working with keys and values, but not directly for manipulation like arrays.

5. **Use Cases:**
   - Arrays: Used for lists, collections, or when order matters (e.g., storing multiple values of the same type).
   - Objects: Used for storing key-value pairs, creating dictionaries, or when fast access to values using keys is required.

Both arrays and objects have their distinct use cases, and understanding their differences helps in choosing the appropriate data structure based on the requirements of your program.

**14. What is JSON, and how is it related to JavaScript objects?**
    - **Solution:** JSON (JavaScript Object Notation) is a text-based data interchange format that is based on JavaScript objects. It's used for data storage and communication between a server and a web application.

**15. How can you iterate over the properties of an object?**
    - **Solution:** You can use a `for...in` loop or methods like `Object.keys()`, `Object.values()`, and `Object.entries()` to iterate over the properties of an object.

**16. What is an object prototype in JavaScript?**
    - **Solution:** The object prototype is a built-in object from which all other objects inherit properties and methods. It forms a chain of inheritance for objects.

**17. What is the purpose of the `Object.create()` method?**
    - **Solution:** The `Object.create()` method is used to create a new object with a specified prototype object.

**18. How can you add methods to an object in JavaScript?**
    - **Solution:** You can add methods to an object by assigning functions to object properties. For example: `obj.methodName = function() { /* method code 

 **19. What is the difference between `Object.defineProperty()` and simple property assignment?**
    - **Solution:** `Object.defineProperty()` allows you to define properties with specific attributes like read-only, enumerable, and configurable. Simple property assignment does not provide this level of control.

**20. How can you merge two or more objects into a single object?**
    - **Solution:** You can merge objects using the `Object.assign()` method or the spread operator. For example: `const merged = { ...obj1, ...obj2 };`.

These questions and solutions should help you gain a solid understanding of objects in JavaScript and their related concepts.


*/

//Write a function to check if an object is empty.

// Solution:
/*

function isEmptyObject(obj){
    return Object.entries(obj).length === 0; // here we can use any inbuilt methidd given by js like object.keys(), object.values() , object.entries()
}
console.log(isEmptyObject({}))
console.log(isEmptyObject({name:'sudheer'}))
 
*/

// Problem 2: Write a function to get the sum of all values in an object.

// Solution:
/*

function getSumOfValues(obj) {
     let sum = 0;
     for(let i in obj){
        if(typeof obj[i] === 'number'){
            sum+= obj[i]
        }
    }
    return sum
}
console.log(getSumOfValues({a:2,b:3,c:5,d:7}))

 */

// Problem 3: Write a function to clone an object.

// Solution:
/*
function cloneObject (obj){
    let clone = {}
    for(let i in obj){  // in object i is property name , where in array i is index or indices keep in mind
       clone[i] = obj[i]
    }
    return clone
}


let original = {name:'sudheer',age:21}
let clone = cloneObject(original)
console.log(clone)

//modifing of clone object doesn't affect the orginal object 

clone.age = 22
console.log(original) //see it doesn't modify it
console.log(clone) // it only modify here itself

*/

// Problem 4: Write a function to merge two objects together.

// Solution:
// In this case, the three dots "..." are known as the spread operator.
// The spread operator is used to create a new object or array by spreading the elements from another object or array. It is typically used when you want to copy the properties or elements from one object or array into a new one.
// In the example you provided, the spread operator is used to merge the properties of `obj1` and `obj2` into a new object called `merged`. It creates a shallow copy of `obj1` and `obj2`, combining their properties into a single object.
// Here's a step-by-step breakdown of what happens:
// 1. The properties of `obj1` are spread into `merged`. This means all the properties from `obj1` will be included in the resulting object.
// 2. Then, the properties of `obj2` are spread into `merged`. This will add all the properties from `obj2` that are not already present in `obj1`. If there are any properties with the same name in both objects, the last one encountered will overwrite the previous one.
// 3. Finally, `merged` will contain all the properties and values from both `obj1` and `obj2`.
// It's important to note that the spread operator only creates a shallow copy, meaning that if the properties of `obj1` or `obj2` are objects or arrays themselves, they will be copied by reference rather than creating new copies.

/*

function mergeObjects (obj1,obj2){
    let merged = {...obj1,...obj2};
    return merged
}

let obj1 = {a:2,c:3};
let obj2 = {c:8,d:4}
console.log(mergeObjects(obj1,obj2)) // {a:2, c:8, b:4}

*/

// Problem: Write a function to check if two objects have the same properties and values.



// Solution:
/*
let obj1 = { a: "3", b: "4" };
let obj2 = { a: "3", b: "4"};

let obj3 = {a:'3',b:"4"};
let obj4 = {a:'5',b:'6'};

function cheking(obj1, obj2) {
  let obj1keys = Object.keys(obj1);
  let obj2keys = Object.keys(obj2);
  if (obj1keys.length !== obj2keys.length) {
    return "from first false";
  }
  for (let i in obj1keys) {
    if (obj1keys[i] !== obj2keys[i]) {
      return "form if false"; // if propertys are not equal then it will print 
    } else if (obj1[obj1keys[i]] !== obj2[obj1keys[i]]) {
      return "from else false" // if propertys are same but there respective values are not equal then this prints
    }
  }

  return true; // if all the above conditions are true then true printed to the console
}

console.log(cheking(obj1, obj2));  // true 
console.log(cheking(obj3,obj4))  // from else false

*/



/*
// problem:
// Create an object representing a car with properties like "brand", "model", and "year"
//: Check if the car object has a property "model".
let car ={
    brand:'Toyato',
    model:'Camry',
    year:2023,
    displayingInfo :function(){
        console.log(`This car is a ${this.brand} ${this.model} `)
    }
}

console.log("model" in car) // return true if there other wise false 

//Loop through all the properties of the car object and log their names and values.

for(let i in car){
    console.log(`The name is ${i} and the value of the name is ${car[i]}`)
}

// output
// The name is brand and the value of the name is Toyato
// The name is model and the value of the name is 2020-3t494y
// The name is year and the value of the name is 3030

// Create a method inside the car object that logs "This car is a Toyota Camry" when called.
car.displayingInfo()

//Create another car object based on the first one and modify its properties.
let car2 = Object.create(car) 
car2.color = 'red'
car2.modal ="Rampage"
console.log(car2)

// Delete the "color" property from the car object.

delete car.color;
//Check if the car object has any properties.
 console.log(Object.keys(car).length >0); // return true if if the properties there otherwise like this we have to check

//Merge two objects (car1 and car2) into a single object.
let merge ={...car,...car2}
console.log("hello", merge)

let mergedcar = Object.assign({},car,car2);
console.log(mergedcar) //This uses the Object.assign() method to merge the properties of car1 and car2 into a new object called mergedCar.


//Convert the car object to a JSON string.
let carJSON = JSON.stringify(car);
console.log(carJSON)// returns like this {"brand":"Toyato","model":"Camry","year":2023}


//Convert a JSON string representation of the car object back to an object.
let carObject = JSON.parse(carJSON)
console.log(carObject)

// Compare two car objects (car and car2) for equality.
function CompareCars (car,car2){
    console.log(JSON.stringify(car2))
    return JSON.stringify(car) === JSON.stringify(car2)  // if both propertys and values are equal then only it return's true other wise false
}
console.log(CompareCars(car,car2)) 



//This defines a function compareCars that checks if two car objects are equal by comparing their JSON string representations. It logs the result (true or false) to the console.

// Determine if a given object is an instance of the car object.
console.log(car instanceof Object)
//This checks if the car object is an instance of the Object class or its subclasses. It logs the result (true or false) to the console.


*/

/*
// problem
// Create an empty object named "person"
let person = {};

//: Add properties "name" and "age" to the person object with values "John" and 25.
person.name = "john";
person.age = 25;

console.log(person);

// Write a function to display the name and age of the person.

function displayInfo (){
    return console.log(`The person name is ${this.name} with age ${this.age}`);
}


person.displayInfo = displayInfo

person.displayInfo()


// Explanation: This defines a function displayInfo that logs the name and age of the person object by accessing its properties.

//Check if the person object has a property called "address"
console.log("address" in person); // returns true or false

//Create an object named "book" with properties "title" and "author".
let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",

  bookDisplayInfo: function () {
    console.log(`title : ${this.title} , author :${this.author}`);
  },
};

//Delete the "author" property from the book object.
delete book.author; //This deletes the "author" property from the book object.

// Loop through all the properties of the book object and log their names and values.
for (let i in book) {
  console.log(`${i} : ${book[i]}`); //only title will print to console
}
//This loop iterates through each property of the book object and logs their names and values to the console.

//Create a method inside the book object that displays the book details.
// method creted
book.bookDisplayInfo(); //title will print other one author will give undefined  because we delted that property

// Determine the number of properties present in the book object.

console.log(Object.keys(book).length); // one is title and other one is method bookDisplayInfo so lenght is 2 , if the author is not deleted than the length is 3

//Create a function that returns an array of values of the person object.
function getObjectValues(obj) {
  return Object.values(obj);
}
console.log(getObjectValues(book));
//This creates a function getObjectValues that uses the Object.values() method to return an array of values of any given object. It logs the values of the person object to the console.

//Create a shallow copy of the person object.
let copyPerson = Object.assign({}, person);
console.log(copyPerson);
//This uses the Object.assign() method to create a new object copyPerson by copying the properties of the person object.

// Check if the person object is empty.
console.log(Object.keys(book).length === 0); // returns true if the condition is true other wise false






//Create a nested object representing a phone with properties "brand" and "specs".

let phone = {
  brand: "",
  specs: {
    ram: "6gb",
    display: "amoled",
    camers: "120pixels",
  },
};

// Access the "display" property within the phone object.

console.log(phone.specs.display);

//Create an array containing multiple book objects

let books = [
  { title: "hello", autjor: "to smash", year: "3000" },
  { title: "hello", autjor: "to smash", year: "3000" },
  { title: "hello", autjor: "to smash", year: "3000" },
];

console.log(books)

*/

/*

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
//   Explanation:
//   - The spread syntax (...) allows us to create a new object by merging the properties of multiple objects.
//   - By using this syntax with the two input objects, we can create a new object that contains all the properties from both objects.
  
  
  */

/*

// Write a function to find the longest key in an object.
//  Solution:

const person ={
    name:'sudheer',
    telephone:'8326296328',
    email:'sudh@gmail.com'
}

const findLongest = (obj) =>{
      console.log(Object.keys(obj)) // [ 'name', 'telephone', 'email' ]
      return Object.keys(obj).reduce((a,b)=>a.length >b.length ? a :b)
}

//Keep in mind object.keys() , object.values(), object.entries() returns the array

console.log(findLongest(person)) // returns 

*/

/*
// Problem: Write a function to get the average value of all numeric properties in an object. 
// Solution:

const person ={
    id:1,
    name:'sudheer',
    rollno:12,
    telephone:'8326296328',
    benchNo:10,
    email:'sudh@gmail.com'
}

const findingAvgOfAllProperties = (obj) =>{
    let numericalProperties = Object.values(obj).filter((value)=> typeof value === 'number')
     console.log(numericalProperties)

   const sum = numericalProperties.reduce((a,b)=>a+b,0);
   return sum / numericalProperties.length
}

console.log(findingAvgOfAllProperties(person))

*/

//Explanation:
// - We use the Object.values() method to get an array of all property values.
// - The filter() method is then used to keep only the numeric values.
// - The reduce() method is used to calculate the sum of all numeric values.
// - Finally, we divide the sum by the length of the numericProperties array to get the average value.

/*
//Problem: Write a function to remove a property from an object.

const person ={
    name:'sudheer',
    telephone:'8326296328',
    email:'sudh@gmail.com'
}

function removeProperty (obj ,key){
   console.log(obj[key])
    const {[key]: _, ...rest} = obj
    return rest;
}

console.log(removeProperty(person,'name')) // this removes the name property from the person object

//Explanation:
// - This solution uses destructuring assignment and the rest operator (...).
// - By using { [key]: _, ...rest }, we create a new object that excludes the specified key and its corresponding value.


*/

/*
//problem Write a function to check if an object has a specific property

const person ={
    name:'sudheer',
    telephone:'8326296328',
    email:'sudh@gmail.com'
}

function checkinghasProperty(obj, key){
    return key in obj;
}

console.log(checkinghasProperty(person,'name'))
//Explanation:
// - The in operator checks if a property exists in an object.
// - By using key in obj, we can determine if the given object contains the specified property.

*/



/*

// Problem: Write a function to filter out properties from an object based on a condition. 
//Solution:

const person = {
  id: 1,
  name: "sudheer",
  rollno: 12,
  telephone: "8326296328",
  benchNo: 10,
  email: "sudh@gmail.com",
};

function condition(a) {
  if( typeof a === "number"){
    return a
  }

}

function filterproperties(obj, condition) {
  const filterObjects = {};
  for (let key in obj) {
    if (condition(obj[key])) {
      console.log(filterObjects[key]);
      filterObjects[key] = obj[key];
    }
  }
  return filterObjects;
}
 
console.log(filterproperties(person, condition));  
// { id: 1, rollno: 12, benchNo: 10 }

// Explanation:
// - The function takes an object and a condition function as input.
// - It creates a new empty object (filteredObj) to store the filtered properties.
// - A for...in loop is used to iterate over the keys of the input object.
// - The condition function is applied to each value, and if it returns true, the key-value pair is added to the filteredObj.
// dont forgot obj[key] = value and filterObjects[key]  === filterObjects[id] ,filterObjects[rollno] like that

*/




/*
// Problem: Write a function to convert an object into an array of key-value pairs. Solution:

const person = {
  id: 1,
  name: "sudheer",
  rollno: 12,
  telephone: "8326296328",
  benchNo: 10,
  email: "sudh@gmail.com",
};

function objectToArray(obj) {
  return Object.entries(obj);
}

console.log(objectToArray(person));

// Explanation:
// - The Object.entries() method returns an array of a given object's own enumerable property key-value pairs.
// - By using this method, we can directly convert an object into an array of key-value pairs.
//  [
//     [ 'id', 1 ],
//     [ 'name', 'sudheer' ],
//     [ 'rollno', 12 ],
//     [ 'telephone', '8326296328' ],
//     [ 'benchNo', 10 ],
//     [ 'email', 'sudh@gmail.com' ]
//   ]


*/



/*`
  // do the above problem without using Object.entries() method


  const person = {
    id: 1,
    name: "sudheer",
    rollno: 12,
    telephone: "8326296328",
    benchNo: 10,
    email: "sudh@gmail.com",
  };
  
  function converting(obj1){
    let keys = Object.keys(obj1)
    console.log(keys)
    return keys.map((item)=>{
      return [...[item,obj1[item]]]
    })
  
  }
  
  console.log(converting(person))  // It will give same output



  */





/*

// How to check if all keys in an object have truthy values?

const obj = { name: 'John', age: 30, city: '' };
const obj1 = { name: 'John', age: 30, city: 'KERALA' };
const checkingIsTruthy = (obj)=>{
 return Object.values(obj).every(Boolean)
}

console.log(checkingIsTruthy(obj))// RETURN FALSE BEACUSE CITY IS EMPTY IN OBJ
console.log(checkingIsTruthy(obj1))// RETURN'S TRUE ALL PROPERTIES OR KEYS HAVE VALUES WHICH ARE TRUTHY

*/

/*
// How to find the maximum value in an object of numbers?

const obj = { a: 10, b: 5, c: 20 };
function findingMax (obj){
  console.log(Object.values(obj))  // [ 10, 5, 20 ]
  const Max = Math.max(...Object.values(obj))
  return Max
}
console.log(findingMax(obj))

Explanation :Object.values(obj) returns an array of all the values of the properties in the obj object. In this case, it will return [10, 5, 20].

The spread syntax (...) is then used to spread the array elements as individual arguments for the Math.max() method. This allows us to pass the array elements directly as arguments to the method.

Math.max() takes in multiple arguments and returns the largest one. In this case, it will return 20, which is the maximum value in the array [10, 5, 20].

Finally, we log the value of max to the console, which will output 20.

*/

/*

// How to find the key associated with the maximum value in an object of numbers?

const obj = { a: 10, b: 5, c: 20 };

const findingMaxValueKey = (obj) => {
  console.log(Object.keys(obj)); // it returns an array [ 'a', 'b', 'c' ] like this in this it was finding whose obj[key] means value ,,, value === value ,then automaticlly the we are sending that  find item to the maxKey
  const maxKey = Object.keys(obj).find((key) =>obj[key] === Math.max(...Object.values(obj)))
  return maxKey;
};

console.log(findingMaxValueKey(obj)); // return C becuse it has a value of 20 where and b  have 10, 5 values


*/

//How to deep-clone an object?
/*

In JavaScript, when you want to create a copy of an object, you can perform a shallow or deep clone. A shallow clone creates a new object with the same top-level properties as the original object. However, if the original object contains nested objects or arrays, a shallow clone will only create references to those nested objects, not new copies. On the other hand, a deep clone creates a completely new object with all nested objects and their properties also copied into new memory locations.



/To deep-clone an object in JavaScript, you can make use of the `JSON.parse()` and `JSON.stringify()` methods. Here's a step-by-step explanation of how to achieve this:

1. Convert the object to a JSON string using `JSON.stringify()`:
```javascript
const originalObject = { ... }; // Your original object
const jsonString = JSON.stringify(originalObject);
```

2. Parse the JSON string back into a new object using `JSON.parse()`:
```javascript
const clonedObject = JSON.parse(jsonString);
```

Now, `clonedObject` is a deep copy of `originalObject`. Any changes made to `clonedObject` will not affect `originalObject`, and vice versa.

It's important to note that this method only works if the object contains JSON-supported data types such as string, number, boolean, array, object, and null. It won't work if the object contains functions, symbols, or undefined values.

If your object includes functions, symbols, or undefined values, you can use a library like lodash or use a custom deep-clone implementation using recursion. Here's an example of a custom deep-clone function:

```javascript
function deepClone(object) {
if (typeof object !== 'object' || object === null) {
 return object; // If not an object, return as is
}

let clone = Array.isArray(object) ? [] : {};

for (let key in object) {
 if (object.hasOwnProperty(key)) {
   clone[key] = deepClone(object[key]); // Recursively clone nested objects
 }
}

return clone;
}

const originalObject = { ... }; // Your original object
const clonedObject = deepClone(originalObject);
```

Make sure to replace `{ ... }` with your original object. The `deepClone()` function recursively clones nested objects, giving you a complete deep copy of the original object, including functions, symbols, and undefined values.

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = { a: { b: 2 } };
const cloned = deepClone(original);

object === null means empty object
*/

// function deepClone(obj) {
//   return JSON.parse(JSON.stringify(obj));
// }
// const original = { a: { b: 2 } ,d:function(){} };
// console.log(deepClone(original))
// see in this deepClone function is not working on function there in the original object that why we can use external libraries like lodash or custom deep-clone implementation using recursion. Here's an example of a custom deep-clone function:

/*

const obj = { a: { b: 2 }, d:function(){} };

function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

console.log(deepClone(obj));  //this function will clone the fucntions als0 now



Deep cloning objects is often necessary when you need to create an independent copy of an object that does not share any references with the original object. This is in contrast to shallow cloning, where the copied object still references the same underlying data as the original object.

There are several scenarios where deep cloning is useful:

1. Immutable Data: If you want to create immutable data structures, deep cloning ensures that any modifications made to the clone will not affect the original object.

2. Object Manipulation: Deep cloning is often used when you need to modify an object without affecting the original or when you want to preserve the state of an object at a particular point in time.

3. Object Serialization: When serializing an object (converting it to a different format for storage or transmission purposes), a deep clone ensures that all nested objects are also serialized, preserving the complete state of the original object.

4. Avoiding Reference Errors: If an object contains references to other objects, a deep clone ensures that these references are also duplicated, preventing potential reference errors or unintended side effects.

To perform a deep clone, you can either manually traverse the object's properties and create copies, or use built-in methods or libraries that provide deep cloning functionality. Keep in mind that deep cloning can be more computationally expensive compared to shallow cloning, so it should be used judiciously when needed.

*/

/*


// How to freeze an object to prevent modification?


const obj ={name:'john'}
obj.age = 22 //here the age property before applying the freezing()
console.log(obj)

function freezing (object){
  Object.freeze(object)
}

console.log(freezing(obj))
obj.newProp = 'new' //here i am trying to add a new property to the obj object but it will not add
console.log(obj)

// In this example, the myObject is frozen using Object.freeze(). As a result, attempting to modify its properties, such as name, will have no effect.

// It's important to note that Object.freeze() only freezes the top-level properties of the object. If your object contains nested objects, you need to recursively call Object.freeze() on each nested object to freeze them as well.

// Keep in mind that Object.freeze() only provides shallow immutability, meaning that it does not prevent changes to the properties of nested objects if they are not frozen separately. If you need deep immutability, you can implement custom methods or use third-party libraries that provide such functionality.


*/

/*

Shallow copy and deep copy are two different approaches to copying objects or data structures, and they differ in terms of how they handle nested objects or references within the original object.

Shallow Copy:
A shallow copy creates a new object and copies the values of the original object's properties to the new object. However, if the original object contains references to other objects, the references are copied, not the actual objects themselves.

In other words, with a shallow copy, if the original object has nested objects, both the original object and the copied object will have references pointing to the same nested objects. So, if any changes are made to the nested objects, it will be reflected in both the original and copied objects.

Deep Copy:
A deep copy, on the other hand, creates a completely independent copy of an object, including all of its nested objects. Instead of just copying references, a deep copy clones the entire object tree, creating separate objects with separate memory references.

With a deep copy, any changes made to the copied object or its nested objects will not affect the original object. Each object in the copy is distinct, and modifications are isolated.

To summarize:

- Shallow copy creates a new object and copies the values, along with references to the nested objects. Changes in nested objects are reflected in both the original and copied objects.
- Deep copy creates a new object and recursively copies all the nested objects as well. Changes in nested objects are isolated and do not affect the original object.

It's important to note that the specific implementation of these copy methods may vary depending on the programming language or libraries used. Some languages provide built-in functions or methods for shallow or deep copying, while others may require custom implementations.


*/






/*

const obj = { a: { b: 2 }, d:function(){} };
const jsonString = JSON.stringify(obj)
const clone = JSON.parse(jsonString)
console.log(clone) 


 // output { a: { b: 2 } } it leaves the function , it will not anable to stringify the functions and not able to parse , but we want to store(deep clone) the function then what we have to do see below




function deepClone(obj) {
    if (typeof obj !== "object" || obj === null) {
      console.log("obj",obj)
      return obj;  // here it will check and return the values 
    }
  
    let clone = Array.isArray(obj) ? [] : {};
    console.log("clone",clone)
  
    for (let key in obj) {
        console.log(key)
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
  
    return clone;
  }
  
  console.log(deepClone(obj)); 

  console.log(obj)

*/




/*

// How to get the prototype of an object?

const obj = {name :'john'}
function gettingProtoType(obj){
   return Object.getPrototypeOf(obj)
}

console.log(gettingProtoType(obj))


*/

/*

// How to check if an object has a specific prototype?

const obj = {name :'john'}

function gettingPrototype(obj){
  const prototype = Object.getPrototypeOf(obj)
   console.log(prototype)  // for obj object there is no protoptypes so false
  console.log(Object.prototype)  // there in no proptype's in constructor function ,so null
  const isObjectPrototype = prototype === Object.prototype

  return isObjectPrototype
}

console.log(gettingPrototype(obj))

*/










/*

In JavaScript, every constructor function has a property called "prototype". The prototype is an object that serves as a blueprint for creating other objects. It contains properties and methods that can be shared among all instances created from that constructor function.

To create a prototype in JavaScript, you need to use a constructor function. Here's an example:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};
```

In this example, we have a constructor function called "Person". We define the `name` and `age` properties inside the constructor function using the `this` keyword. Then, we add a method called `greet` to the prototype using the `prototype` property. All instances created from the `Person` constructor function will have access to this `greet` method.

The uses of prototypes in JavaScript are:

1. Sharing and reusing methods: By adding methods to the prototype, you can avoid duplicating the same code in each object instance. This helps in conserving memory and makes the code more efficient.
2. Inheritance: Prototypes support inheritance in JavaScript. You can create a chain of prototypes where an object inherits or uses properties and methods from its prototype and the prototype's prototype, and so on.
3. Dynamic nature: Prototypes allow you to add or modify properties and methods even after creating instances. Any changes made to the prototype will be reflected in all existing and future instances.
4. Memory efficiency: Since properties and methods are shared through the prototype chain, instances do not need to have their own copies. This results in lower memory consumption.

We create prototypes to make JavaScript code more efficient, reusable, and flexible. It helps in organizing and structuring code by separating instance-specific properties and methods from shared ones. By defining common behavior in prototypes, we can avoid duplicating code and improve code maintainability.



*/

/*
// How to create an object with a custom prototype?

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

Person.prototype.arr = ["sudheer", "shyam"];

let person1 = new Person("sudheer", 34);
console.log(person1); //Person { name: 'sudheer', age: 34 }
person1.greet();

console.log(person1.arr[1]);

console.log(Object.getPrototypeOf(person1))// returns how many proptypes there to the person1 object

//console.log(Person.prototype) // It will give how many proptotypes there for Person constructor 
// output { greet: [Function (anonymous)], arr: [ 'sudheer', 'shyam' ] }

//n this example, we create a new instance of the Person object called person1 with the name "Alice" and age 25. Then we call the greet method on person1, which outputs "Hello, my name is Alice" to the console.

// The greet method is defined in the prototype of the Person constructor function. When the greet method is called on person1, the JavaScript engine first checks for the greet method in the person1 instance. Since it doesn't find it, it looks up the prototype chain and finds the greet method defined in the prototype of the Person function. Finally, it executes the greet method with this referring to the person1 instance, and the output is logged to the console.

// Similarly go's to array also

const customPrototype = {
  greet() {
    return "Hello";
  },
};
console.log(customPrototype)
const obj = Object.create(customPrototype);  // here we are creating an instance to customprototype with name obj
console.log(obj)
console.log(obj.greet()); // 'Hello'


*/

/*
//How to convert an array of objects into a single object using a common property as keys?

const data = [
  { id: 'a', value: 'Apple' },
  { id: 'b', value: 'Banana' }
];

const commonPropertyIsIdHere= (arr) =>{
  return arr.reduce((acc,item)=>{
    console.log(item)
    acc[item.id] = item.value;
    return acc
  },{})
}

console.log(commonPropertyIsIdHere(data)) //{ a: 'Apple', b: 'Banana' }


*/



/*
// How to remove all properties with falsy values from an object?

const obje = { name: 'John', age: 0, city: null };

for (const key in obje) {
  if (!obje[key]) delete obje[key]; // or if(!Boolean(obj[key])){}
}
console.log(obje); // { name: 'John' }
const obj = { name: 'John', age: 0, city: null };


function deleting(obj) {
  let newObj = {};
  for (let key in obj) {
    if (!obj[key]){ 
      newObj[key] = obj[key] // newObj.newproperty = valueof obj[key] (obj.propertyname)
      delete obj[key]
    };
  }
  return newObj  // newObj  returns the object with deleted proptertys // { age: 0, city: null }
}

console.log(deleting(obj));
console.log(obj)
// if false of obj[key] means obj[name] = john ---> true so truthy , obj[age] = 0 --->false falsy then delte the obj[age] same obj[city] = null ---> false ---> falsy then delete obj[city]

*/




/*

//  How to check if an object is empty?

function isEmpty(obj) {
  for (const key in obj) { 
    if (obj.hasOwnProperty(key)) return false;  
  }
  return true;
}

console.log(params.hasOwnProperty("name"))
console.log("name" in params)

const obj = {name:'sudheer'}; //not empty
const obj1 = {} //empty
console.log(isEmpty(obj)) //return false
console.log(isEmpty(obj1))  //returns true


*/

/*


// 26. How to convert an object to a query string?
const params = { name: 'John', age: 30 };
const queryString = (obj)=>{
    return Object.keys(obj).map(key =>`${key}=${obj[key]}`).join('&')
}
//[ 'name=John', 'age=30' ]

console.log("?",queryString(params)) //? name=John&age=30
*/

/*

//.By preventExtensions () method we can modify the propertys there in the obj, we cannot add new propertys to the object, we can delete the proeprtys there in the object
const obj = { name: 'John' };
Object.preventExtensions(obj);
obj.age = 30; 

*/

/*
How to check if an object is sealed using Object.seal()?

const obj = { name: 'John' };
Object.seal(obj);
obj.age = 30; 

// By seeal method we cannot add the new propertys to the object , we cannot delete the propertys , but we can modify the property's there in object
*/





/*

 How to convert an object's values to an array of numbers?
const obj = { a: 10, b: 5, c: 20 };
const valuesAsNumbers = Object.values(obj).map(Number);
console.log(valuesAsNumbers)

*/



/*

// Write a function that flattens a nested object.


const nestedObj = {
  name: 'John',
  age: 25,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  }
  
};

const nestedObj1 = {
  name: 'John',
  age: 25,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  },

};


// console.log(Array.isArray(nestedObj.address))  //false

function flattenObject(obj){
  let result = {};

  for(let key in obj){

    if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
      // console.log(obj[key])  // address property === { street: '123 Main St', city: 'New York', country: 'USA' }
      let nestedObj = flattenObject(obj[key]);
      console.log('nested Obj' , nestedObj)

      for(let nestedkey in nestedObj){
        console.log("key -->",key + '.' + nestedkey , "=>", nestedObj[nestedkey])
        result[key + "." + nestedkey] = nestedObj[nestedkey]
      }

    }
    else {
      result[key] = obj[key]
    }

  }

  return result 
}

console.log(flattenObject(nestedObj))


*/

/*


// This is similar problem to above one but example object is different clearly observe the output and code then you will understand this problem easily


const nestedObj2 = {
  name: 'John',
  age: 25,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  },
  job:{
    parttime : 'null',
    fulltime : "null",
    butPrep : 'full',
    newTry:{name:"sudheer",class:"web-development"},
    god: 'There For Us'
  },
  list:[1,2,3]
};

function FlatteningObject (obj) {
  let result = {};

  for(let key in obj){
    if(typeof obj[key] === 'object' &&  !Array.isArray(obj[key])){
      console.log(obj[key])
      let nestedObj = FlatteningObject(obj[key])
      for(let nestedkey in nestedObj){
        console.log("key -->",key + '.' + nestedkey , "=>", nestedObj[nestedkey])
        result[key + "." + nestedkey] = nestedObj[nestedkey];
      }
    }
    else{
      result[key] = obj[key]
    }
  }
  return result 
}

console.log(FlatteningObject(nestedObj2))




*/

// const votes = [
//   { candidate: 'A' },
//   { candidate: 'B' },
//   { candidate: 'A' },
//   { candidate: 'C' },
//   { candidate: 'B' },
//   { candidate: 'B' }
// ];

/*

// Write a function that finds the most frequent value in an array of objects. Explanation: We can use the reduce() method to iterate over the array and count the


const votes = [
  { candidate: 'A' },
  { candidate: 'B' },
  { candidate: 'B' },
];



function findMostFrequentValue(arr, property) {
  const frequency = arr.reduce((counter, obj) => {
    const value = obj[property];
    console.log(obj[property])
    counter[value] = (counter[value] || 0) + 1;
    console.log(counter[value] , (counter[value] || 0))
    return counter;
  }, {});


  console.log(frequency)
  const maxFrequency =Math.max(...Object.values(frequency))
  console.log(maxFrequency)

  return Object.keys(frequency).filter(key =>  frequency[key] === maxFrequency)





}

console.log(findMostFrequentValue(votes,"candidate"))

*/

/*
// same as above question understand and clearly observe the output

const votes = [
  { candidate: "A" },
  { candidate: "B" },
  { candidate: "A" },
  { candidate: "C" },
  { candidate: "B" },
  { candidate: "B" },
];

function findingFrequencyValue(arr, property) {
  const frequency = arr.reduce((counter, object) => {
    console.log("value =>", object[property]);
    const value = object[property];
    counter[value] = (counter[value] || 0) + 1;

    console.log("counter =",counter);
    return counter;
  }, {});

  console.log("frequency =",frequency) // Inside the frequency varaibale there is the counter object now so frequency === {}

  const findingMaxFrequencyValue = Math.max(...Object.values(frequency));

  return Object.keys(frequency).filter((key)=> frequency[key] === findingMaxFrequencyValue)
}


console.log(findingFrequencyValue(votes,"candidate"))



*/


/*

const votes = [
    { candidate: "A" },
    { candidate: "B" },
    { candidate: "A" },
    { candidate: "C" },
    { candidate: "B" },
    { candidate: "B" },
    { candidate: "A" },
  ];

  

  function mostFrequent(arr,prop){
    const someArr = arr.reduce((obj,item)=>{
        obj[item[prop]] = (obj[item[prop]] || 0) + 1
        return obj
    },{})

    const maxValue =Math.max(...Object.values(someArr))

    let string =""

     Object.keys(someArr).filter((item)=>{
        return someArr[item] === maxValue ? string+= item : ""
    })
    console.log(string)
    return `The Most Repeated Values in the array of Objects is ${string.split("").join(",")} with ${maxValue}`

    


  }


console.log(mostFrequent(votes,"candidate"))


*/





/*
// Write a function that converts an array to an object, using the values as keys.

//here we confuse while reading this problem he tells that use the values ad keys  means inside the array there is a elements or values ,use them as a key or property to the object and built the object , that is what he is telling to us 



const fruits = ['apple' , 'banana' , 'orange','grape']

function convertingArrayToObjectByUsingItValues(arr){
 return arr.reduce((object,value,index)=>{
    object[value] = index +1 
    return object    // { apple: 1, banana: 2, orange: 3, grape: 4 }
  },{})
}

console.log(convertingArrayToObjectByUsingItValues(fruits))

//Explanation: We can use the reduce() method to iterate over the array and build the object using the values as keys.



*/




/*
//Problem 11: Write a function that groups objects in an array by a specific property.  //understand th question properly answer in the question only


const books = [
  { title: "Book 1", genre: "Fiction" },
  { title: "Book 2", genre: "Fiction" },
  { title: "Book 3", genre: "Non-Fiction" },
];


function groupByProperty (arr,property){
 return arr.reduce((groups,object)=>{
    console.log(obj[property])
    const key = object[property]

    if(!groups[key]){
      groups[key] = []
    }
    
    groups[key].push(object)

    return groups
    
  },{})
}

console.log(groupByProperty(books, "genre"));



/*  output 
{
  Fiction: [
    { title: 'Book 1', genre: 'Fiction' },
    { title: 'Book 2', genre: 'Fiction' }
  ],
  'Non-Fiction': [ { title: 'Book 3', genre: 'Non-Fiction' } ]
}

*/





/*

//Problem 10: Write a function that extracts the values of a specific property from an array of objects. 


const arr =[{name:"sudheer",age:21},{name:"kinder",age:24},{name:"joy",age:25}]

function getPropertyValuesByName (arr,property){
 return arr.map((object)=>{
    console.log(object[property])
   return object[property]  //[ 'sudheer', 'kinder', 'joy' ]
  })

}

console.log(getPropertyValuesByName(arr,"name"))
console.log(getPropertyValuesByName(arr,"age"))


*/



/*

const arr =[{name:"sudheer",age:21},{name:"kinder",age:24},{name:"joy",age:25},{r:"diary",age:45}]


function getValueByProp(arr,prop){
    let newArr = []
  
    arr.map((obj)=>{
         console.log(obj)
         return prop in obj && newArr.push(obj[prop]) 
    })

    return newArr

}

console.log(getValueByProp(arr,"name"))


*/

/*
//Write a function that checks if a given property exists in an object.


const car = {make:'Toyato', color:"red"}

function hasProperty(obj,property){
  return property in obj
}

console.log(hasProperty(car,"make")) //returns true
console.log(hasProperty(car,"brand")) // returns false





*/

/*


//  Write a function that removes a property from an object.  
const person = { name: 'John', age: 30, profession: 'Engineer' };

console.log("person",person)


// we can do like this alos but it mutationg, modifing the exsisting object without changing the exsisting object we have to do , seee the below process to do like that

function removingProperty(obj,property){
   delete obj[property]
    return obj
}


function removingProperty(obj,property){
 const {[property]:_,...newObj} = obj
 console.log("property --->",{[property]:_})
 return newObj
 
}


console.log(removingProperty(person,"age"))
  //Explanation: We can use the spread operator (...) to create a new object without the specified property.


*/




/*


// Write a function that converts an object to an array

const data = { name: "John", age: 30, profession: "Engineer" };

// first way console.log(Object.entries(data)) // output 
// [ [ 'name', 'John' ], [ 'age', 30 ], [ 'profession', 'Engineer' ] ]


// second way and main way

function objectToArray(obj) {
  console.log(Object.entries(obj));
  return Object.entries(obj).map((item) => ({ key: item[0], value: item[1] }));
}

// Output: [ { key: 'name', value: 'John' },
//           { key: 'age', value: 30 },
//           { key: 'profession', value: 'Engineer' } ]

//we can also do like this by de-structuring the array
//return Object.entries(obj).map(([key, value]) => ({ key, value }));

console.log(objectToArray(data));

// Explanation: We can use the Object.entries() method to get an array of key-value pairs and then map over each pair to convert it to the desired format.



*/



/*

// Write a function that finds the average value in an object

const sales = { product1: 100, product2: 200, product3: 150 }

function findAverageValue(obj){
  const values = Object.values(obj);
  const sum = values.reduce((sum,curr)=>sum+= curr,0)

  return sum / values.length
}

console.log(findAverageValue(sales)) // output 150


*/

/*

//Write a function that finds the maximum value in an object. 

const scores = { math: 90, science: 85, history: 95 };

function maximumValue (obj) {

  const values = Object.values(obj)
  return Math.max(...values)
}

console.log(maximumValue(scores))  // output 95


*/




/*
//: Write a function that merges two objects.


const object1 = { name: 'John' };
const object2 = { age: 30 };


function merging(obj1,obj2){
    let obj = {...obj1,...obj2}
    let newObj = Object.assign({},obj1,obj2)
    return {obj,newObj}
}


console.log(merging({ name: 'John' },{ age: 30 }))


// output  
//{ obj: { name: 'John', age: 30 }, newObj: { name: 'John', age: 30 } }



*/


/*

//  guess the output
const  obj = {x:1,y:2}
 
let {x:a,y:b} = obj

console.log(a)  // output 1 for a 

a= 3
console.log(a)  // output 3  for a //if we use const inplace of let thenit gives error ,because we cannot reassign the new value to the exsisting item

console.log(obj.x , obj.y) // if we update also the a : variable doesn't change because it's already asigned


*/


/*
const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { a: 2, e: 12, f: 6, d: 10 };

const output = { d: 10, e: 12 };

function finding(obj1, obj2) {
  let object = {};

  for (let i in obj1) {


    if (obj1[i] === obj2[i]) {
        console.log("i love u" , i)
        console.log("something",obj1[i] , "hello", obj2[i])
      object[i] = obj1[i];
    }
  }
  return object;
}

console.log(finding(input1, input2));

*/


/*


Certainly! Destructuring in JavaScript allows you to extract specific pieces of data from objects or arrays easily.

In your code:

```javascript
const user = {
    name: "abc",
    address: {
        street: "123"
    }
}
```



This creates an object called `user` with two properties: `name` and `address`. The `address` property itself is an object with a `street` property.

Now, the destructuring statement:

```javascript
const { name, address: { street } } = user;
```

This line is doing two types of destructuring simultaneously: 

1. **Extracting `name`**: 
   - `{ name }` means extracting the `name` property from the `user` object. It assigns the value of `user.name` to a variable named `name`.

2. **Nested destructuring for `street` within `address`**:
   - `{ address: { street } }` means extracting the `street` property from the `address` property inside the `user` object.
   - `address: { street }` is an object pattern that matches the structure of `user.address`. It takes the value of `user.address.street` and assigns it to a variable named `street`.

After this destructuring operation, you'll have two variables available: `name` holding the value of `user.name` ("abc") and `street` holding the value of `user.address.street` ("123").

This syntax is a concise way to extract values from objects and nested objects in JavaScript.


*/



/*


const user = {
    name: "abc",
    address: {
        street: "123",
        obj:{
            town:"viag",
        }
    }
}


const {name , address:{street}, address:{obj:{town}}} = user

console.log(name,street,town)


*/





/*

const user = {
    name: "abc",
    address: {
        street: "123",
        obj:{
            town:"viag",
            newobj:{
                kinder:"joy",
            }
        }
    },
    state:{
        "states":"andharapradesh",
        newState:["hyd","benglore","tamilnadu"]
    }

}


const {name , address:{street}, address:{obj:{town}},state:{states},state:{newState},address:{obj:{newobj:{kinder}}} } = user

console.log(name,street,town,states,newState[0],kinder)


*/



// accses the chocolate property there in the user object by destructuring



/*

const user = {
  name: "abc",


  address: {
    street: "123",
    obj: {
      town: "viag",
      newobj: {
        kinder: "joy",
        newStar: {
          chocolate: "diarymilk",
        },
      },
    },
  },


  state: {
    states: "andharapradesh",
    newState: ["hyd", "benglore", "tamilnadu"],
  },
};



const {address:{obj:{newobj:{newStar:{chocolate}}}}} = user

console.log(chocolate)

*/